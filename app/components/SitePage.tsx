"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Car, ShieldCheck, Cpu, Building2, Settings2, Nut } from "lucide-react";

// ─── Types & Translations ────────────────────────────────────────────────────
export type Lang = "TR" | "EN";

const T = {
  TR: {
    nav: {
      home: "Ana Sayfa",
      products: "Ürünlerimiz",
      services: "Sektörler",
      about: "Hakkımızda",
      contact: "İletişim",
      quote: "Teklif Al",
      follow: "Takip Et",
    },
    hero: {
      eyebrow: "1991'den bu yana · İstanbul",
      h1a: "Düşük toleransta",
      h1b: "metal kesme ve enjeksiyon kalıpları",
      sub: "Progresif kalıp, kesme kalıbı ve enjeksiyon kalıbı üretiyoruz. Tasarımdan tel erozyona, pres baskıdan montaja kadar tüm süreci kendi bünyemizde yönetiyoruz.",
      btn1: "Teklif Al",
      btn2: "Ürünlerimizi İnceleyin",
      imgCaption: "Üretim tesisi — Başakşehir, İstanbul",
      specs: [
        { k: "Tecrübe", v: "34 yıl" },
        { k: "Kesim", v: "Tel erozyon" },
        { k: "Süreç", v: "Uçtan uca" },
      ],
    },
    products: {
      index: "01",
      subtitle: "Kalıp Çeşitlerimiz",
      title: "Ürünlerimiz",
      lead: "Parça geometrinize ve üretim adedinize göre kalıbı sıfırdan tasarlıyor, imal ediyor ve devreye alıyoruz.",
      items: [
        { title: "Progresif Kalıpları", desc: "Birden fazla işlemi (kesme, delme, bükme vb.) aynı kalıp içerisinde adım adım gerçekleştiren kalıplardır. Seri üretim için idealdir, zamandan ve maliyetten tasarruf sağlar." },
        { title: "Kesme Kalıpları", desc: "Sacın istenilen şekil ve ölçülerde kesilmesini sağlar. Ürün geometrisine göre özel olarak tasarlanır." },
        { title: "Enjeksiyon Kalıpları", desc: "Yüksek adetli üreteceğiniz metal ve plastik parçalar için yüksek hassasiyetli enjeksiyon kalıplarımız sayesinde çok hızlı bir şekilde üretim yapabilirsiniz." },
        { title: "CNC Tel Erozyon", desc: "Kalıp elemanlarını ince telle kıvılcım aşındırma yöntemiyle kesiyoruz. Sertleştirilmiş malzemede bile dar tolerans ve temiz yüzey elde edilir; talaşlı imalatın zorlandığı karmaşık profiller ve keskin iç köşeler bu yöntemle çıkar." },
        { title: "Pres Baskı", desc: "Üretimi tamamlanan kalıplar ile müşterilerimizin talepleri doğrultusunda kendi bünyemizde istenilen adetlerde baskı hizmetini sağlıyoruz." },
        { title: "Montaj & İmalat", desc: "Parçadan ürüne; tasarım, imalat ve montaj süreçlerini uçtan uca yönetiyoruz." },
      ],
      photoLabel: "Fotoğraf eklenecek",
      cta: "Bu ürün için teklif al",
    },
    services: {
      index: "02",
      subtitle: "Hizmet Verdiğimiz Alanlar",
      title: "Sektörlerimiz",
      lead: "Farklı sektörlerin tolerans, adet ve dayanım gereksinimlerine göre çözüm geliştiriyoruz.",
      items: [
        { title: "Makina Yedek Parça", desc: "Endüstriyel makinaların yedek parça ihtiyaçlarını yüksek hassasiyetli kalıplarımız ve tel erozyon kapasitemizle karşılıyoruz." },
        { title: "Otomotiv Sanayi", desc: "Otomotiv sektörünün sıkı tolerans ve seri üretim gereksinimlerine uygun progresif kalıp ve pres çözümleri sunuyoruz." },
        { title: "Hırdavat", desc: "Civata, somun, klips ve benzeri hırdavat ürünlerin kalıpla üretimine yönelik çözümler geliştiriyoruz." },
        { title: "İnşaat", desc: "İnşaat sektörüne yönelik metal profil, bağlantı elemanı ve özel parça üretimi gerçekleştiriyoruz." },
        { title: "Elektrik-Elektronik Parça", desc: "Elektrik panelleri, bağlantı elemanları ve elektronik muhafazalar için hassas sac metal kalıpları üretiyoruz." },
        { title: "Savunma Sanayi", desc: "Yüksek dayanım ve hassasiyet gerektiren savunma sanayi bileşenlerinin üretiminde güvenilir çözüm ortağınızız." },
      ],
    },
    about: {
      index: "03",
      subtitle: "Biz Kimiz",
      title: "Hakkımızda",
      p1: "1991 yılından bu yana metal işleme sektöründe edindiğimiz tecrübe ve güvenle, metal kesme ve enjeksiyon kalıp üretiminde teknolojiyi, mühendisliği ve kaliteyi bir araya getiren öncü bir marka olmak.",
      p2: "Hedefimiz; yüksek hassasiyetli üretim, otomasyon destekli süreçler ve yenilikçi kalıp tasarımlarıyla hem yerel hem global pazarda rekabet gücünü artırmak, sektöre yön veren bir çözüm ortağı haline gelmektir.",
      p3: "Sürekli gelişim, sürdürülebilir üretim ve müşteri memnuniyeti ilkelerimiz doğrultusunda, endüstride kalite standartlarını sürekli yükseltmeyi vizyon ediniyoruz.",
      statsTitle: "Rakamlarla Özhan Metal",
      experience: "Yıl Tecrübe",
      projects: "Tamamlanan Proje",
      clients: "Mutlu Müşteri",
      staff: "Uzman Personel",
    },
    footer: {
      followUs: "Bizi Takip Edin!",
      reachUs: "Bize Ulaşın",
      phoneLabel: "Bizi Arayın",
      emailLabel: "E-posta Gönderin",
      addressLabel: "Adresimiz",
      corporate: "Kurumsal",
      workingHours: "Çalışma Saatlerimiz",
      weekdays: "Pzt – Cum: 08:00 – 19:00",
      saturday: "",
      servicesTitle: "Hizmetlerimiz",
      rights: "Tüm hakları saklıdır.",
      navItems: [
        { label: "Hakkımızda", href: "#hakkimizda" },
        { label: "Ürünlerimiz", href: "#urunlerimiz" },
        { label: "Sektörler", href: "#hizmetler" },
      ],
      serviceItems: ["Makina Yedek Parça", "Otomotiv Sanayi", "Hırdavat", "İnşaat", "Elektrik-Elektronik Parça", "Savunma Sanayi"],
    },
    quote: {
      index: "04",
      subtitle: "Size Özel Çözümler",
      title: "Teklif Al",
      lead: "Teknik resminizi veya numunenizi paylaşın; kalıp tipi, adet ve tolerans ihtiyacınıza göre size dönelim.",
      directTitle: "Doğrudan hat",
      directDesc: "Formu doldurmak istemiyorsanız bizi doğrudan arayabilir ya da WhatsApp'tan yazabilirsiniz.",
      whatsapp: "WhatsApp'tan yazın",
      name: "Ad Soyad",
      company: "Firma Adı (opsiyonel)",
      email: "E-posta Adresi",
      phone: "Telefon Numarası",
      service: "Hizmet Seçin",
      serviceDefault: "-- Hizmet seçin --",
      message: "Mesajınız (opsiyonel)",
      submit: "WhatsApp'tan Gönder",
      sending: "Yönlendiriliyor...",
      success: "WhatsApp açıldı! Mesajı gönderdikten sonra en kısa sürede sizinle iletişime geçeceğiz.",
      error: "Bir hata oluştu. Lütfen tekrar deneyin.",
      services: ["CNC Tel Erozyon", "Pres Baskı", "Progresif Kalıp", "Kesme Kalıbı", "Enjeksiyon Kalıbı", "Montaj & İmalat", "Diğer"],
      navLabel: "Teklif Al",
    },
  },
  EN: {
    nav: {
      home: "Home",
      products: "Products",
      services: "Sectors",
      about: "About Us",
      contact: "Contact",
      quote: "Get Quote",
      follow: "Follow Us",
    },
    hero: {
      eyebrow: "Since 1991 · Istanbul",
      h1a: "Tight tolerance",
      h1b: "metal cutting and injection molds",
      sub: "We produce progressive dies, cutting dies and injection molds. From design to wire EDM, from press production to assembly, we manage the entire process in-house.",
      btn1: "Get a Quote",
      btn2: "Explore Our Products",
      imgCaption: "Production facility — Başakşehir, Istanbul",
      specs: [
        { k: "Experience", v: "34 years" },
        { k: "Cutting", v: "Wire EDM" },
        { k: "Process", v: "End to end" },
      ],
    },
    products: {
      index: "01",
      subtitle: "Mold Types",
      title: "Our Products",
      lead: "We design, manufacture and commission the mold from scratch, based on your part geometry and production volume.",
      items: [
        { title: "Progressive Dies", desc: "Dies that perform multiple operations (cutting, punching, bending, etc.) step by step within the same mold. Ideal for mass production, saving time and cost." },
        { title: "Cutting Dies", desc: "Enables sheet metal to be cut in desired shapes and dimensions. Custom designed according to product geometry." },
        { title: "Injection Molds", desc: "With our high-precision injection molds for metal and plastic parts that need to be produced in high quantities, you can manufacture very quickly." },
        { title: "CNC Wire EDM", desc: "We cut mold components using wire electrical discharge machining. Even in hardened material it achieves tight tolerances and a clean surface; complex profiles and sharp internal corners that conventional machining struggles with are produced this way." },
        { title: "Press Service", desc: "With completed molds, we provide pressing services in desired quantities within our own facility according to customer requests." },
        { title: "Assembly & Manufacturing", desc: "From parts to product; we manage design, manufacturing and assembly processes end-to-end." },
      ],
      photoLabel: "Photo coming soon",
      cta: "Request a quote for this",
    },
    services: {
      index: "02",
      subtitle: "Industries We Serve",
      title: "Our Sectors",
      lead: "We develop solutions according to the tolerance, volume and strength requirements of different industries.",
      items: [
        { title: "Machine Spare Parts", desc: "We meet the spare parts needs of industrial machines with our high-precision molds and wire EDM capacity." },
        { title: "Automotive Industry", desc: "We provide progressive die and press solutions suited to the strict tolerance and mass production requirements of the automotive sector." },
        { title: "Hardware", desc: "We develop solutions for the mold-based production of hardware products such as bolts, nuts, clips and similar items." },
        { title: "Construction", desc: "We produce metal profiles, fasteners and custom parts for the construction sector." },
        { title: "Electrical-Electronic Parts", desc: "We produce precision sheet metal molds for electrical panels, connectors and electronic enclosures." },
        { title: "Defense Industry", desc: "We are your reliable solution partner in the production of defense industry components requiring high strength and precision." },
      ],
    },
    about: {
      index: "03",
      subtitle: "Who We Are",
      title: "About Us",
      p1: "With the experience and trust we have gained in the metal processing industry since 1991, we aim to be a pioneering brand that brings together technology, engineering and quality in metal cutting and injection mold production.",
      p2: "Our goal is to increase competitiveness in both local and global markets through high-precision production, automation-supported processes and innovative mold designs, and to become a solution partner that shapes the industry.",
      p3: "In line with our principles of continuous improvement, sustainable production and customer satisfaction, we envision continuously raising quality standards in the industry.",
      statsTitle: "Özhan Metal in Numbers",
      experience: "Years of Experience",
      projects: "Completed Projects",
      clients: "Happy Clients",
      staff: "Expert Staff",
    },
    footer: {
      followUs: "Follow Us!",
      reachUs: "Contact Us",
      phoneLabel: "Call Us",
      emailLabel: "Send Email",
      addressLabel: "Our Address",
      corporate: "Corporate",
      workingHours: "Working Hours",
      weekdays: "Mon – Fri: 08:00 – 19:00",
      saturday: "",
      servicesTitle: "Our Services",
      rights: "All rights reserved.",
      navItems: [
        { label: "About Us", href: "#hakkimizda" },
        { label: "Products", href: "#urunlerimiz" },
        { label: "Sectors", href: "#hizmetler" },
      ],
      serviceItems: ["Machine Spare Parts", "Automotive Industry", "Hardware", "Construction", "Electrical-Electronic Parts", "Defense Industry"],
    },
    quote: {
      index: "04",
      subtitle: "Custom Solutions",
      title: "Get a Quote",
      lead: "Share your technical drawing or sample; we will get back to you based on your mold type, volume and tolerance requirements.",
      directTitle: "Direct line",
      directDesc: "If you would rather not fill out the form, you can call us directly or message us on WhatsApp.",
      whatsapp: "Message us on WhatsApp",
      name: "Full Name",
      company: "Company Name (optional)",
      email: "Email Address",
      phone: "Phone Number",
      service: "Select Service",
      serviceDefault: "-- Select a service --",
      message: "Your Message (optional)",
      submit: "Send via WhatsApp",
      sending: "Redirecting...",
      success: "WhatsApp opened! We will contact you shortly after you send the message.",
      error: "An error occurred. Please try again.",
      services: ["CNC Wire EDM", "Press Service", "Progressive Die", "Cutting Die", "Injection Mold", "Assembly & Manufacturing", "Other"],
      navLabel: "Get Quote",
    },
  },
} as const;

// ─── Image paths ──────────────────────────────────────────────────────────────
const productImages = [
  "/products/prograsif_kalip.jpeg",     // Progresif Kalıpları
  "/products/Kesme_kaliplari.png",      // Kesme Kalıpları
  "/products/enjeksiyon_kaliplari.jpeg",// Enjeksiyon Kalıpları
  // TODO: bu görsel CNC frezeyi gösteriyor, tel erozyonu değil — tezgahın
  // gerçek fotoğrafı geldiğinde değiştirilecek.
  "/products/cnc_isleme.jpg",           // CNC Tel Erozyon
  "/products/Pres_Baski.png",           // Pres Baskı
  "/products/montajimalat.png",         // Montaj & İmalat
];

// Her ürün kartı için fotoğraf pozisyonu (object-position)
const productPositions = [
  "center", // Progresif Kalıpları
  "center", // Kesme Kalıpları
  "center", // Enjeksiyon Kalıpları
  "center", // CNC Tel Erozyon
  "center", // Pres Baskı
  "center", // Montaj & İmalat
];

const WHATSAPP_NUMBER = "905456462356";

// ─── Icons ────────────────────────────────────────────────────────────────────
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

const sectorIcons = [
  <Settings2  key={0} className="w-6 h-6" strokeWidth={1.5} />, // Makina Yedek Parça
  <Car        key={1} className="w-6 h-6" strokeWidth={1.5} />, // Otomotiv Sanayi
  <Nut        key={2} className="w-6 h-6" strokeWidth={1.5} />, // Hırdavat
  <Building2  key={3} className="w-6 h-6" strokeWidth={1.5} />, // İnşaat
  <Cpu        key={4} className="w-6 h-6" strokeWidth={1.5} />, // Elektrik-Elektronik
  <ShieldCheck key={5} className="w-6 h-6" strokeWidth={1.5} />, // Savunma Sanayi
];

// ─── Shared bits ──────────────────────────────────────────────────────────────

// Teknik çizim hissi veren ince blueprint gridi
const blueprintGrid: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, rgba(28,25,23,0.05) 1px, transparent 1px)," +
    "linear-gradient(to bottom, rgba(28,25,23,0.05) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

// Çerçevenin dört köşesindeki gönye işaretleri
function CornerTicks({ className = "border-stone-300" }: { className?: string }) {
  return (
    <>
      <span aria-hidden className={`absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 ${className}`} />
      <span aria-hidden className={`absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 ${className}`} />
      <span aria-hidden className={`absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 ${className}`} />
      <span aria-hidden className={`absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 ${className}`} />
    </>
  );
}

// Her bölümün başlığı: mono sıra no + başlık + açıklama
function SectionHead({
  index,
  subtitle,
  title,
  lead,
  dark = false,
}: {
  index: string;
  subtitle: string;
  title: string;
  lead: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className={`font-mono text-xs font-medium ${dark ? "text-amber-400" : "text-amber-700"}`}>{index}</span>
        <span aria-hidden className={`h-px w-6 ${dark ? "bg-stone-700" : "bg-stone-300"}`} />
        <span className={`font-mono text-[11px] uppercase tracking-[0.2em] ${dark ? "text-stone-400" : "text-stone-500"}`}>
          {subtitle}
        </span>
      </div>
      <h2 className={`mt-4 text-3xl md:text-4xl font-semibold tracking-tight ${dark ? "text-white" : "text-stone-900"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-relaxed ${dark ? "text-stone-400" : "text-stone-600"}`}>{lead}</p>
    </div>
  );
}

// ─── Product Image (next/image + hata yönetimi) ───────────────────────────────
function ProductImage({ src, alt, label, position = "center" }: { src: string; alt: string; label: string; position?: string }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-stone-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-stone-500 text-xs font-mono">{label}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      style={{ objectPosition: position }}
      sizes="(max-width: 768px) 100vw, 60vw"
      onError={() => setError(true)}
    />
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
const SECTION_IDS = ["urunlerimiz", "hizmetler", "hakkimizda", "iletisim"];

function Navbar({ lang }: { lang: Lang }) {
  const router = useRouter();
  const t = T[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const socialRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.home, href: "#" },
    { label: t.products, href: "#urunlerimiz" },
    { label: t.services, href: "#hizmetler" },
    { label: t.about, href: "#hakkimizda" },
    { label: t.contact, href: "#iletisim" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — aktif bölümü kaydırmaya göre işaretle
  useEffect(() => {
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        }
        if (window.scrollY < 80) {
          setActive("#");
          return;
        }
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) { best = id; bestRatio = ratio; }
        }
        if (best) setActive("#" + best);
      },
      { threshold: [0.15, 0.4, 0.7], rootMargin: "-80px 0px 0px 0px" }
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (socialRef.current && !socialRef.current.contains(e.target as Node)) {
        setSocialOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const switchLang = (target: Lang) => {
    if (target === lang) return;
    // Manuel seçimi cookie'ye kaydet — middleware bir daha yönlendirmesin
    document.cookie = "lang=" + target + "; path=/; max-age=31536000";
    router.push(target === "EN" ? "/en" : "/");
  };

  const langBtn = (target: Lang) =>
    `px-3 py-1 text-xs font-mono font-medium transition-colors ${
      lang === target ? "bg-stone-900 text-white" : "text-stone-500 hover:text-stone-900"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-stone-200 py-3"
          : "bg-white border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-8">
        {/* Logo — sol */}
        <a href={lang === "EN" ? "/en" : "/"} className="flex items-center gap-1.5 shrink-0">
          <Image src="/logo2.png" alt="Özhan Metal Logo" width={36} height={36} className="object-contain" />
          <span className="text-stone-900 font-bold text-base tracking-[0.15em]">ÖZHAN</span>
          <span className="text-amber-600 font-bold text-base tracking-[0.15em]">METAL</span>
        </a>

        {/* Desktop Nav — orta */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`relative px-3 py-2 text-[13px] font-medium transition-colors group ${
                active === link.href ? "text-stone-900" : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-amber-500 transition-transform origin-left duration-300 ${
                  active === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Sağ — Sosyal ikon + Teklif Al + TR/EN */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Sosyal medya — küçük ikon butonu */}
          <div className="relative" ref={socialRef}>
            <button
              onClick={() => setSocialOpen(!socialOpen)}
              aria-label="Sosyal medya"
              aria-expanded={socialOpen}
              className={`w-8 h-8 flex items-center justify-center transition-colors ${
                socialOpen ? "text-stone-900 bg-stone-100" : "text-stone-400 hover:text-stone-900 hover:bg-stone-100"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>

            {socialOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-stone-200 shadow-lg z-50 min-w-[150px]">
                <a href="https://www.facebook.com/ozhanmetal" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors text-xs font-medium">
                  <IconFacebook /> Facebook
                </a>
                <a href="https://www.linkedin.com/company/ozhan-metal" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors text-xs font-medium border-t border-stone-200">
                  <IconLinkedIn /> LinkedIn
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors text-xs font-medium border-t border-stone-200">
                  <IconWhatsApp /> WhatsApp
                </a>
              </div>
            )}
          </div>

          <div aria-hidden className="w-px h-4 bg-stone-200" />

          <a
            href="#teklif"
            className="bg-stone-900 hover:bg-amber-600 text-white font-medium px-4 py-2 text-[13px] transition-colors"
          >
            {t.quote}
          </a>

          <div className="flex items-center border border-stone-200 divide-x divide-stone-200">
            <button onClick={() => switchLang("TR")} className={langBtn("TR")}>TR</button>
            <button onClick={() => switchLang("EN")} className={langBtn("EN")}>EN</button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-stone-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-stone-900 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-stone-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          menuOpen ? "max-h-96 border-t border-stone-200" : "max-h-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => { setActive(link.href); setMenuOpen(false); }}
            className={`block px-6 py-3.5 text-sm font-medium border-b border-stone-100 transition-colors ${
              active === link.href ? "text-amber-700 bg-stone-50" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            {link.label}
          </a>
        ))}
        <div className="flex items-center justify-between gap-3 px-6 py-4">
          <a
            href="#teklif"
            onClick={() => setMenuOpen(false)}
            className="bg-stone-900 text-white font-medium px-4 py-2 text-[13px]"
          >
            {t.quote}
          </a>
          <div className="flex items-center border border-stone-200 divide-x divide-stone-200">
            <button onClick={() => switchLang("TR")} className={langBtn("TR")}>TR</button>
            <button onClick={() => switchLang("EN")} className={langBtn("EN")}>EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}

// ─── Counter ──────────────────────────────────────────────────────────────────
// Zaman tabanlı sayaç: setInterval tarayıcı tarafından kısıldığında süre kayıyordu,
// rAF + gerçek zaman damgası kare hızından bağımsız olarak `duration` içinde bitirir.
function useCounter(target: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    // Hareket hassasiyeti açıksa süreyi sıfırla — sayaç ilk tikte hedefe atlar.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ms = reduced ? 0 : duration;

    const startTs = performance.now();
    const timer = setInterval(() => {
      // İlerlemeyi tik sayısından değil geçen gerçek süreden hesapla:
      // tarayıcı aralığı kıssa bile animasyon `duration` içinde biter.
      const p = ms === 0 ? 1 : Math.min((performance.now() - startTs) / ms, 1);
      // easeOutQuad — sonda yavaşlayarak dursun
      setCount(Math.round(target * (1 - (1 - p) * (1 - p))));
      if (p >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, startCounting]);

  return count;
}

// Teknik föy satırı: solda etiket, sağda sayaç
function StatRow({ label, target }: { label: string; target: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCounter(target, 1600, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-baseline justify-between gap-6 border-b border-stone-200 py-5">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">{label}</span>
      <span className="font-mono text-3xl md:text-4xl font-medium tabular-nums text-stone-900">
        {count.toLocaleString("tr-TR")}
        <span className="text-amber-600">+</span>
      </span>
    </div>
  );
}

// ─── Product Showcase ─────────────────────────────────────────────────────────
function ProductShowcase({ lang }: { lang: Lang }) {
  const t = T[lang].products;
  const [selected, setSelected] = useState(0);

  return (
    <div className="grid md:grid-cols-12 border border-stone-200">
      {/* Sol — numaralı liste */}
      <div className="md:col-span-4 flex flex-col border-b md:border-b-0 md:border-r border-stone-200" role="tablist" aria-orientation="vertical">
        {t.items.map((p, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={selected === i}
            onClick={() => setSelected(i)}
            className={`w-full md:flex-1 flex items-center gap-4 px-5 py-4 text-left border-b border-stone-100 last:border-b-0 transition-colors ${
              selected === i ? "bg-stone-900" : "bg-white hover:bg-stone-50"
            }`}
          >
            <span className={`font-mono text-xs shrink-0 ${selected === i ? "text-amber-400" : "text-stone-400"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={`text-sm font-medium ${selected === i ? "text-white" : "text-stone-700"}`}>
              {p.title}
            </span>
          </button>
        ))}
      </div>

      {/* Sağ — seçili ürün */}
      <div className="md:col-span-8 flex flex-col bg-white">
        <div className="relative w-full h-64 md:h-80 bg-stone-100 overflow-hidden shrink-0">
          <ProductImage
            src={productImages[selected]}
            alt={t.items[selected].title}
            label={t.photoLabel}
            position={productPositions[selected]}
          />
          <span className="absolute bottom-0 left-0 font-mono text-[10px] tracking-[0.18em] uppercase bg-white/90 text-stone-600 px-2.5 py-1">
            {String(selected + 1).padStart(2, "0")} / {String(t.items.length).padStart(2, "0")}
          </span>
        </div>
        <div className="p-6 md:p-8 flex flex-col gap-3 flex-1">
          <h3 className="text-stone-900 text-xl font-semibold tracking-tight">{t.items[selected].title}</h3>
          <p className="text-stone-600 leading-relaxed text-sm">{t.items[selected].desc}</p>
          <a
            href="#teklif"
            className="mt-auto pt-4 inline-flex items-center gap-2 text-[13px] font-medium text-amber-700 hover:text-amber-800 transition-colors w-fit"
          >
            {t.cta}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Quote Form ───────────────────────────────────────────────────────────────
function QuoteForm({ lang }: { lang: Lang }) {
  const t = T[lang].quote;
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validationMsg = lang === "TR" ? "Lütfen bu alanı doldurun." : "Please fill out this field.";
  const validationProps = {
    onInvalid: (e: React.InvalidEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      (e.target as HTMLInputElement).setCustomValidity(validationMsg);
    },
    onInput: (e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      (e.target as HTMLInputElement).setCustomValidity("");
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      lang === "TR"
        ? "Merhaba, teklif almak istiyorum."
        : "Hello, I would like to get a quote.",
      "",
      `${t.name}: ${form.name}`,
      form.company ? `${t.company.replace(" (opsiyonel)", "").replace(" (optional)", "")}: ${form.company}` : null,
      `${t.email}: ${form.email}`,
      `${t.phone}: ${form.phone}`,
      `${t.service}: ${form.service}`,
      form.message ? `${t.message.replace(" (opsiyonel)", "").replace(" (optional)", "")}: ${form.message}` : null,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    setStatus("success");
    setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  };

  const labelClass = "font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400";
  const inputClass =
    "w-full bg-stone-900 border border-stone-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-white placeholder-stone-600 px-3.5 py-2.5 outline-none transition-colors text-sm";

  if (status === "success") {
    return (
      <div className="relative border border-amber-500/40 bg-amber-500/5 text-amber-300 px-6 py-12 text-center h-full flex flex-col items-center justify-center gap-4">
        <CornerTicks className="border-amber-500" />
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm leading-relaxed max-w-xs">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full gap-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>{t.name} <span className="text-amber-500">*</span></label>
          <input name="name" required value={form.name} onChange={handleChange} placeholder={t.name} className={inputClass} {...validationProps} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>{t.company}</label>
          <input name="company" value={form.company} onChange={handleChange} placeholder={t.company} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>{t.email} <span className="text-amber-500">*</span></label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder={t.email} className={inputClass} {...validationProps} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>{t.phone} <span className="text-amber-500">*</span></label>
          <input name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder={t.phone} className={inputClass} {...validationProps} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>{t.service} <span className="text-amber-500">*</span></label>
        <select name="service" required value={form.service} onChange={handleChange} className={`${inputClass} cursor-pointer`} {...validationProps}>
          <option value="" disabled>{t.serviceDefault}</option>
          {t.services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1.5 flex-1">
        <label className={labelClass}>{t.message}</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t.message}
          className={`${inputClass} resize-none flex-1 min-h-24`}
        />
      </div>

      {status === "error" && (
        <div className="border border-red-500/50 bg-red-500/10 text-red-400 px-4 py-2.5 text-xs">
          {t.error}
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-black font-semibold px-6 py-2.5 text-sm transition-colors"
        >
          <IconWhatsApp />
          {t.submit}
        </button>
      </div>
    </form>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function SitePage({ defaultLang }: { defaultLang: Lang }) {
  const t = T[defaultLang];

  return (
    <div className="bg-white text-stone-900 font-sans">
      <Navbar lang={defaultLang} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-stone-50 pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div aria-hidden className="absolute inset-0" style={blueprintGrid} />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Sol — mesaj */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-amber-500" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-700">{t.hero.eyebrow}</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-stone-900">
              <span className="text-amber-700">{t.hero.h1a}</span>{" "}
              {t.hero.h1b}
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-600 max-w-xl">{t.hero.sub}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#teklif" className="bg-stone-900 hover:bg-amber-600 text-white font-medium px-7 py-3 text-sm text-center transition-colors">
                {t.hero.btn1}
              </a>
              <a href="#urunlerimiz" className="border border-stone-300 hover:border-stone-900 text-stone-800 font-medium px-7 py-3 text-sm text-center transition-colors">
                {t.hero.btn2}
              </a>
            </div>

            {/* Teknik künye şeridi */}
            <dl className="mt-10 pt-6 border-t border-stone-200 grid grid-cols-3 gap-4 max-w-lg">
              {t.hero.specs.map((s) => (
                <div key={s.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400">{s.k}</dt>
                  <dd className="mt-1 font-mono text-sm font-medium text-stone-900">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Sağ — çerçeveli görsel */}
          <div className="lg:col-span-5">
            <div className="relative border border-stone-300 p-1.5 bg-white">
              <CornerTicks className="border-amber-500" />
              <div className="relative w-full aspect-4/5 overflow-hidden bg-stone-100">
                <Image
                  src="/header_1.jpeg"
                  alt="Özhan Metal üretim tesisi"
                  fill
                  priority
                  className="object-cover object-left"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-500 px-1 pt-2 pb-0.5">
                {t.hero.imgCaption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÜRÜNLERİMİZ ── */}
      <section id="urunlerimiz" className="scroll-mt-24 py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            index={t.products.index}
            subtitle={t.products.subtitle}
            title={t.products.title}
            lead={t.products.lead}
          />
          <div className="mt-12">
            <ProductShowcase lang={defaultLang} />
          </div>
        </div>
      </section>

      {/* ── SEKTÖRLER ── */}
      <section id="hizmetler" className="scroll-mt-24 py-20 md:py-28 px-6 bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            index={t.services.index}
            subtitle={t.services.subtitle}
            title={t.services.title}
            lead={t.services.lead}
          />
          {/* Kutusuz, hairline ayrımlı liste — Ürünler bölümünden kasıtlı olarak daha sakin */}
          <div className="mt-12 grid md:grid-cols-2 md:gap-x-12 border-t border-stone-200">
            {t.services.items.map((s, i) => (
              <div key={i} className="group flex items-start gap-5 py-7 border-b border-stone-200">
                <div className="shrink-0 mt-0.5 text-stone-400 group-hover:text-amber-600 transition-colors">
                  {sectorIcons[i]}
                </div>
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono text-[10px] text-stone-400">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-semibold text-stone-900">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HAKKIMIZDA ── */}
      <section id="hakkimizda" className="scroll-mt-24 py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sol — anlatı */}
          <div className="lg:col-span-7">
            <SectionHead
              index={t.about.index}
              subtitle={t.about.subtitle}
              title={t.about.title}
              lead={t.about.p1}
            />
            <div className="mt-6 space-y-4 max-w-2xl">
              <p className="text-stone-600 leading-relaxed">{t.about.p2}</p>
              <p className="text-stone-600 leading-relaxed">{t.about.p3}</p>
            </div>
          </div>

          {/* Sağ — teknik föy */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 pb-4 border-b border-stone-900">
                {t.about.statsTitle}
              </p>
              <StatRow label={t.about.experience} target={34} />
              <StatRow label={t.about.projects} target={3000} />
              <StatRow label={t.about.clients} target={120} />
              <StatRow label={t.about.staff} target={8} />
            </div>
          </div>
        </div>
      </section>

      {/* ── TEKLİF AL — koyu kapanış bandı, footer'a geçiş ── */}
      <section id="teklif" className="scroll-mt-24 relative overflow-hidden bg-stone-950 py-20 md:py-28 px-6">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)," +
              "linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sol — davet + doğrudan hat */}
          <div className="lg:col-span-5">
            <SectionHead
              index={t.quote.index}
              subtitle={t.quote.subtitle}
              title={t.quote.title}
              lead={t.quote.lead}
              dark
            />
            <div className="mt-10 pt-8 border-t border-stone-800">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">{t.quote.directTitle}</p>
              <a href="tel:+905456462356" className="mt-3 block font-mono text-2xl md:text-3xl text-white hover:text-amber-400 transition-colors">
                0545 646 23 56
              </a>
              <p className="mt-3 text-sm text-stone-500 leading-relaxed max-w-sm">{t.quote.directDesc}</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 border border-stone-700 hover:border-amber-500 hover:text-amber-400 text-stone-300 px-4 py-2 text-[13px] font-medium transition-colors"
              >
                <IconWhatsApp />
                {t.quote.whatsapp}
              </a>
            </div>
          </div>

          {/* Sağ — form */}
          <div className="lg:col-span-7">
            <div className="relative border border-stone-800 p-6 md:p-8 bg-stone-900/40">
              <CornerTicks className="border-stone-700" />
              <QuoteForm lang={defaultLang} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="iletisim" className="scroll-mt-24 bg-stone-950 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Kolon 1 — Logo + Sosyal Medya */}
          <div className="flex flex-col gap-6">
            <a href={defaultLang === "EN" ? "/en" : "/"} className="flex items-center gap-1">
              <Image
                src="/logo2.png"
                alt="Özhan Metal Logo"
                width={42}
                height={42}
                className="object-contain invert"
              />
              <span className="text-white font-black text-xl tracking-widest">ÖZHAN</span>
              <span className="text-amber-400 font-black text-xl tracking-widest">METAL</span>
            </a>
            <div>
              <p className="text-stone-400 text-sm font-semibold mb-4">{t.footer.followUs}</p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/ozhanmetal" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition-colors">
                  <IconFacebook />
                </a>
                <a href="https://www.linkedin.com/company/ozhan-metal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition-colors">
                  <IconLinkedIn />
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition-colors">
                  <IconWhatsApp />
                </a>
              </div>
            </div>
          </div>

          {/* Kolon 2 — Bize Ulaşın */}
          <div>
            <h4 className="text-amber-400 font-bold text-base mb-6">{t.footer.reachUs}</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center shrink-0 text-amber-400">
                  <IconPhone />
                </div>
                <div>
                  <p className="text-stone-500 text-xs mb-0.5">{t.footer.phoneLabel}</p>
                  <a href="tel:+905456462356" className="text-white text-sm font-medium hover:text-amber-400 transition-colors">
                    0545 646 23 56
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center shrink-0 text-amber-400">
                  <IconMail />
                </div>
                <div>
                  <p className="text-stone-500 text-xs mb-0.5">{t.footer.emailLabel}</p>
                  <a href="mailto:info@ozhanmetal.com" className="text-white text-sm font-medium hover:text-amber-400 transition-colors">
                    info@ozhanmetal.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center shrink-0 text-amber-400">
                  <IconLocation />
                </div>
                <div>
                  <p className="text-stone-500 text-xs mb-0.5">{t.footer.addressLabel}</p>
                  <a
                    href="https://www.google.com/maps/place/%C3%96zhan+Metal+Kal%C4%B1p+Sanayi+Ltd/@41.050258,28.9071769,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab081d1abf565:0x12ef9edb4764cd34!8m2!3d41.050254!4d28.9097572!16s%2Fg%2F11c7v_r6pr?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank" rel="noopener noreferrer"
                    className="text-white text-sm font-medium hover:text-amber-400 transition-colors leading-snug"
                  >
                    Muratpaşa Mah. Uluyol İşkent Sanayi Sitesi, D Blok No:64, İstanbul
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolon 3 — Kurumsal + Çalışma Saatleri */}
          <div>
            <h4 className="text-amber-400 font-bold text-base mb-6">{t.footer.corporate}</h4>
            <ul className="space-y-3 mb-8">
              {t.footer.navItems.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-stone-400 hover:text-white text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
            <h4 className="text-amber-400 font-bold text-base mb-4">{t.footer.workingHours}</h4>
            <p className="text-stone-400 text-sm">{t.footer.weekdays}</p>
          </div>

          {/* Kolon 4 — Hizmetlerimiz */}
          <div>
            <h4 className="text-amber-400 font-bold text-base mb-6">{t.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {t.footer.serviceItems.map((s) => (
                <li key={s}>
                  <a href="#hizmetler" className="text-stone-400 hover:text-white text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Alt bar */}
        <div className="border-t border-stone-800">
          <div className="max-w-6xl mx-auto px-6 py-5 text-center">
            <p className="text-stone-500 text-xs" suppressHydrationWarning>
              © {new Date().getFullYear()} <span className="text-amber-400">Özhan Metal</span>. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
