import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Node runtime gerekli — nodemailer edge'de çalışmaz.
export const runtime = "nodejs";

const TO_ADDRESS = "info@ozhanmetal.com";

// ─── Basit IP rate limit ─────────────────────────────────────────────────────
// Serverless'ta her instance kendi belleğini tutar, yani bu kesin bir sınır
// değil; amacı tek bir bottan gelen seri isteği ucuza kesmek. Gerçek koruma
// honeypot + Google'ın spam filtresi.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Map'in sınırsız büyümesini engelle
  if (hits.size > 500) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }

  return recent.length > MAX_PER_WINDOW;
}

// ─── Doğrulama ───────────────────────────────────────────────────────────────
type Payload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
  lang?: unknown;
};

const str = (v: unknown, max: number): string =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

// Satır sonu enjeksiyonuna karşı — başlıklara giren alanlarda CR/LF olmasın.
const clean = (v: string): string => v.replace(/[\r\n]+/g, " ");

const looksLikeEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export async function POST(request: NextRequest) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: gerçek kullanıcı bu alanı göremez, bot doldurur.
  // Bota başarı dönüyoruz ki tekrar denemesin.
  if (str(body.website, 100) !== "") {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const name = clean(str(body.name, 120));
  const company = clean(str(body.company, 160));
  const email = clean(str(body.email, 160));
  const phone = clean(str(body.phone, 60));
  const service = clean(str(body.service, 80));
  const message = str(body.message, 4000);
  const lang = body.lang === "EN" ? "EN" : "TR";

  if (!name || !email || !phone || !service || !looksLikeEmail(email)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    // Yapılandırma eksik. İstemciye ayrıntı sızdırma, ama hatayı YUT-MA:
    // form bunu görüp kullanıcıyı WhatsApp'a düşürecek.
    console.error("[teklif] SMTP_USER/SMTP_PASS tanımlı değil");
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // 587 STARTTLS ile yükseltir
    auth: { user, pass },
  });

  const L =
    lang === "EN"
      ? { subject: "New quote request", name: "Name", company: "Company", email: "Email", phone: "Phone", service: "Service", message: "Message", none: "—" }
      : { subject: "Yeni teklif talebi", name: "Ad Soyad", company: "Firma", email: "E-posta", phone: "Telefon", service: "Hizmet", message: "Mesaj", none: "—" };

  const rows: [string, string][] = [
    [L.name, name],
    [L.company, company || L.none],
    [L.email, email],
    [L.phone, phone],
    [L.service, service],
    [L.message, message || L.none],
  ];

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  try {
    await transporter.sendMail({
      from: `"Özhan Metal Web" <${user}>`,
      to: TO_ADDRESS,
      // Gelen maile doğrudan "Yanıtla" deyince müşteriye gitsin.
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `${L.subject} — ${name}${company ? ` (${company})` : ""}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<table cellpadding="6" style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="color:#78716c;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="color:#1c1917"><b>${esc(v).replace(/\n/g, "<br>")}</b></td></tr>`
  )
  .join("\n")}
</table>`,
    });
  } catch (err) {
    console.error("[teklif] sendMail başarısız:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
