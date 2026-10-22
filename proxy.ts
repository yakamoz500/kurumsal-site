import { NextRequest, NextResponse } from "next/server";

/** Türkçe sayfa → İngilizce karşılığı. Yalnızca gerçekten iki dilli olan
 *  sayfalar burada; eşleşmeyen yol yönlendirilmez. */
const EN_KARSILIK: Record<string, string> = {
  "/": "/en",
  "/iletisim": "/en/contact",
  "/kvkk": "/en/privacy",
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hedef = EN_KARSILIK[pathname];
  if (!hedef) return NextResponse.next();

  // Kullanıcı manuel dil seçtiyse dokunma
  const langCookie = request.cookies.get("lang")?.value;
  if (langCookie) return NextResponse.next();

  // Accept-Language header'ına bak
  const acceptLang = request.headers.get("accept-language") ?? "";
  const preferred = acceptLang.split(",")[0].trim().toLowerCase();

  // TR değilse İngilizce karşılığına yönlendir. Eskiden yalnızca kök sayfa
  // yönlendiriliyordu; Facebook'tan paylaşılan bir alt sayfa linki Arapça
  // konuşan ziyaretçiyi Türkçe sayfaya düşürüyordu.
  const isTurkish = preferred.startsWith("tr");
  if (!isTurkish) {
    return NextResponse.redirect(new URL(hedef, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/iletisim", "/kvkk"],
};
