"use client";

import { useEffect, useRef, useState } from "react";

// --- Icons ---
function IconGear() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function IconCut() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    </svg>
  );
}
function IconWeld() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function IconDrill() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v11m0 0l-3 3m3-3l3 3M3 8h6m6 0h6M15 3h6v5h-6z" />
    </svg>
  );
}
function IconAssembly() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  );
}
function IconQuality() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

// Social icons
function IconFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function IconLocation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

// --- Counter Hook ---
function useCounter(target: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startCounting]);
  return count;
}

// --- Counter Item ---
function CounterItem({ label, target, suffix = "+" }: { label: string; target: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCounter(target, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold text-orange-500">
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm text-gray-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}

// --- Data ---
const services = [
  { icon: <IconCut />, title: "Lazer Kesim", desc: "Yüksek hassasiyetli CNC lazer kesim makinelerimizle her kalınlıkta metal plakayı hatasız keseriz." },
  { icon: <IconWeld />, title: "Kaynak & Birleştirme", desc: "MIG, TIG ve elektrik kaynak yöntemleriyle sağlam ve dayanıklı birleştirme işlemleri yapıyoruz." },
  { icon: <IconGear />, title: "CNC İşleme", desc: "3 ve 4 eksen CNC tezgahlarımızla karmaşık parçaları toleranslı biçimde üretiyoruz." },
  { icon: <IconDrill />, title: "Delme & Punta", desc: "Seri ve tekli üretimde hassas delme, punta ve işaretleme hizmetleri sunuyoruz." },
  { icon: <IconAssembly />, title: "Montaj & İmalat", desc: "Parçadan ürüne; tasarım, imalat ve montaj süreçlerini uçtan uca yönetiyoruz." },
  { icon: <IconQuality />, title: "Kalite Kontrol", desc: "Her üretim aşamasında ölçüm ve kalite kontrol yaparak sıfır hata hedefliyoruz." },
];

// --- Main Page ---
export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mesajınız alındı. En kısa sürede dönüş yapacağız.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-zinc-950 text-white font-sans">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-block border border-orange-500/40 text-orange-400 text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-6">
            Metal İşleme &amp; Makina İmalatı
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
            OZHAN
            <span className="text-orange-500"> METAL</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Endüstriyel metal işleme ve makina imalatında güvenilir çözüm ortağınız.
            Yüksek hassasiyet, kısa teslimat, kalıcı kalite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#hizmetler"
              className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-3 rounded-none transition-colors uppercase tracking-wider text-sm"
            >
              Hizmetlerimiz
            </a>
            <a
              href="#iletisim"
              className="border border-orange-500/50 hover:border-orange-400 text-orange-400 hover:text-orange-300 font-bold px-8 py-3 rounded-none transition-colors uppercase tracking-wider text-sm"
            >
              İletişime Geç
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-orange-500" />
          <span className="text-[10px] tracking-widest uppercase text-gray-500">Kaydır</span>
        </div>
      </section>

      {/* ── HİZMETLER ── */}
      <section id="hizmetler" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-orange-500 text-xs tracking-[0.3em] uppercase font-semibold">Ne Yapıyoruz</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight">HİZMETLERİMİZ</h2>
            <div className="mt-4 w-12 h-1 bg-orange-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-700">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-8 group hover:bg-zinc-800 transition-colors duration-300"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-orange-400 transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HAKKIMIZDA + SAYAÇLAR ── */}
      <section id="hakkimizda" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-orange-500 text-xs tracking-[0.3em] uppercase font-semibold">Biz Kimiz</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight mb-6">HAKKIMIZDA</h2>
            <div className="w-12 h-1 bg-orange-500 mb-8" />
            <p className="text-gray-400 leading-relaxed mb-4">
              Ozhan Metal, metal işleme ve makina imalatı alanında yılların verdiği deneyimle
              endüstriyel projelere güvenilir çözümler sunmaktadır.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Modern CNC tezgahları ve nitelikli ekibimizle; küçük seri üretimden büyük ölçekli
              endüstriyel projelere kadar her işi titizlikle teslim ediyoruz.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Müşteri memnuniyetini ve kaliteyi ön planda tutarak sektörde güvenilir bir marka
              olmaya devam ediyoruz.
            </p>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-2 gap-12">
            <CounterItem target={15} label="Yıl Tecrübe" />
            <CounterItem target={500} label="Tamamlanan Proje" />
            <CounterItem target={120} label="Mutlu Müşteri" />
            <CounterItem target={8} label="Uzman Personel" />
          </div>
        </div>
      </section>

      {/* ── İLETİŞİM ── */}
      <section id="iletisim" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-orange-500 text-xs tracking-[0.3em] uppercase font-semibold">Bize Ulaşın</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight">İLETİŞİM</h2>
            <div className="mt-4 w-12 h-1 bg-orange-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-6 text-orange-400 uppercase tracking-wider">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-orange-500 mt-0.5"><IconPhone /></span>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Telefon</div>
                      <a href="tel:+905001234567" className="text-gray-300 hover:text-orange-400 transition-colors">+90 500 123 45 67</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-orange-500 mt-0.5"><IconMail /></span>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">E-posta</div>
                      <a href="mailto:info@ozhanmetal.com" className="text-gray-300 hover:text-orange-400 transition-colors">info@ozhanmetal.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-orange-500 mt-0.5"><IconLocation /></span>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Adres</div>
                      <span className="text-gray-300">Organize Sanayi Bölgesi, İstanbul</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-sm font-bold mb-4 text-orange-400 uppercase tracking-wider">Sosyal Medya</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex items-center justify-center w-10 h-10 border border-zinc-700 hover:border-orange-500 hover:text-orange-500 text-gray-400 transition-colors"
                  >
                    <IconFacebook />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center w-10 h-10 border border-zinc-700 hover:border-orange-500 hover:text-orange-500 text-gray-400 transition-colors"
                  >
                    <IconLinkedIn />
                  </a>
                  <a
                    href="#"
                    aria-label="WhatsApp"
                    className="flex items-center justify-center w-10 h-10 border border-zinc-700 hover:border-orange-500 hover:text-orange-500 text-gray-400 transition-colors"
                  >
                    <IconWhatsApp />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Ad Soyad</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-700 focus:border-orange-500 outline-none px-4 py-3 text-white placeholder-zinc-600 transition-colors"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">E-posta</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-700 focus:border-orange-500 outline-none px-4 py-3 text-white placeholder-zinc-600 transition-colors"
                  placeholder="ornek@mail.com"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Mesajınız</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-700 focus:border-orange-500 outline-none px-4 py-3 text-white placeholder-zinc-600 transition-colors resize-none"
                  placeholder="Projeniz hakkında bilgi verin..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 uppercase tracking-wider text-sm transition-colors"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black py-8 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="text-orange-500 font-semibold">Ozhan Metal</span>. Tüm hakları saklıdır.
          </div>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-orange-500 transition-colors"><IconFacebook /></a>
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-orange-500 transition-colors"><IconLinkedIn /></a>
            <a href="#" aria-label="WhatsApp" className="text-gray-600 hover:text-orange-500 transition-colors"><IconWhatsApp /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
