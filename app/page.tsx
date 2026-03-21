"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

// ─── Language Context ───────────────────────────────────────────────────────
type Lang = "TR" | "EN";
const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "TR",
  setLang: () => {},
});
function useLanguage() {
  return useContext(LanguageContext);
}

// ─── Translations ───────────────────────────────────────────────────────────
const T = {
  TR: {
    nav: {
      home: "Ana Sayfa",
      products: "Ürünlerimiz",
      services: "Hizmetler",
      about: "Hakkımızda",
      contact: "İletişim",
    },
    hero: {
      badge: "Metal Kesme Kalıpları",
      desc: "Düşük Tolerans Yüksek Hassasiyet",
      btn1: "Hizmetlerimiz",
      btn2: "İletişime Geç",
      scroll: "Kaydır",
    },
    products: {
      subtitle: "Kalıp Çeşitlerimiz",
      title: "ÜRÜNLERİMİZ",
      items: [
        { title: "Sıvama Kalıpları", desc: "Sac malzemenin kalıp içinde akıtılarak derinlemesine şekillendirilmesini sağlar. Genellikle içi boş ve derin parçaların üretiminde tercih edilir." },
        { title: "Progresif Kalıpları", desc: "Birden fazla işlemi (kesme, delme, bükme vb.) aynı kalıp içerisinde adım adım gerçekleştiren kalıplardır. Seri üretim için idealdir, zamandan ve maliyetten tasarruf sağlar." },
        { title: "Kesme Kalıpları", desc: "Sacın istenilen şekil ve ölçülerde kesilmesini sağlar. Ürün geometrisine göre özel olarak tasarlanır." },
        { title: "Delme Kalıpları", desc: "Sac yüzeyine delik açmak amacıyla kullanılır. Hassasiyetin kritik olduğu parçalarda yüksek doğrulukla çalışır." },
        { title: "Bükme Kalıpları", desc: "Metal levhaların belirli bir şekle bükülmesi veya kıvrılması için tasarlanmıştır. Özel kalıp setleri istenilen bükme açıları ve kıvrım yarıçapları vererek levhaların istenilen formda bükülmesini sağlar." },
        { title: "Enjeksiyon Kalıpları", desc: "Yüksek adetli üreteceğiniz metal ve plastik parçalar için yüksek hassasiyetli enjeksiyon kalıplarımız sayesinde çok hızlı bir şekilde üretim yapabilirsiniz." },
      ],
      photoLabel: "Fotoğraf eklenecek",
    },
    services: {
      subtitle: "Ne Yapıyoruz",
      title: "HİZMETLERİMİZ",
      items: [
        { title: "Kalıp Üretimi", desc: "Progresif metal ve plastik enjeksiyon kalıpları firmamızda üretilip denenmektedir." },
        { title: "Pres Baskı Hizmeti", desc: "Üretimi tamamlanan kalıplar ile müşterilerimizin talepleri doğrultusunda kendi bünyemizde istenilen adetlerde baskı hizmetini sağlıyoruz." },
        { title: "CNC İşleme", desc: "3 ve 4 eksen CNC tezgahlarımızla karmaşık parçaları toleranslı biçimde üretiyoruz." },
        { title: "Delme & Punta", desc: "Seri ve tekli üretimde hassas delme, punta ve işaretleme hizmetleri sunuyoruz." },
        { title: "Montaj & İmalat", desc: "Parçadan ürüne; tasarım, imalat ve montaj süreçlerini uçtan uca yönetiyoruz." },
        { title: "Kalite Kontrol", desc: "Her üretim aşamasında ölçüm ve kalite kontrol yaparak sıfır hata hedefliyoruz." },
      ],
    },
    about: {
      subtitle: "Biz Kimiz",
      title: "HAKKIMIZDA",
      p1: "1991 yılından bu yana metal işleme sektöründe edindiğimiz tecrübe ve güvenle, metal kesme ve enjeksiyon kalıp üretiminde teknolojiyi, mühendisliği ve kaliteyi bir araya getiren öncü bir marka olmak.",
      p2: "Hedefimiz; yüksek hassasiyetli üretim, otomasyon destekli süreçler ve yenilikçi kalıp tasarımlarıyla hem yerel hem global pazarda rekabet gücünü artırmak, sektöre yön veren bir çözüm ortağı haline gelmektir.",
      p3: "Sürekli gelişim, sürdürülebilir üretim ve müşteri memnuniyeti ilkelerimiz doğrultusunda, endüstride kalite standartlarını sürekli yükseltmeyi vizyon ediniyoruz.",
      experience: "Yıl Tecrübe",
      projects: "Tamamlanan Proje",
      clients: "Mutlu Müşteri",
      staff: "Uzman Personel",
    },
    footer: {
      desc: "1991 yılından bu yana metal işleme sektöründe edindiğimiz tecrübe ve güvenle, metal kesme ve enjeksiyon kalıp üretiminde teknolojiyi, mühendisliği ve kaliteyi bir araya getiren öncü bir marka olmak.",
      corporate: "Kurumsal",
      servicesTitle: "Hizmetlerimiz",
      contactTitle: "İletişim",
      rights: "Tüm hakları saklıdır.",
      navItems: [
        { label: "Ana Sayfa", href: "#" },
        { label: "Ürünlerimiz", href: "#urunlerimiz" },
        { label: "Hizmetlerimiz", href: "#hizmetler" },
        { label: "Hakkımızda", href: "#hakkimizda" },
        { label: "İletişim", href: "#iletisim" },
      ],
      serviceItems: ["Kalıp Üretimi", "Pres Baskı Hizmeti", "CNC İşleme", "Delme & Punta", "Montaj & İmalat", "Kalite Kontrol"],
    },
  },
  EN: {
    nav: {
      home: "Home",
      products: "Products",
      services: "Services",
      about: "About Us",
      contact: "Contact",
    },
    hero: {
      badge: "Metal Cutting Dies",
      desc: "Low Tolerance High Precision",
      btn1: "Our Services",
      btn2: "Contact Us",
      scroll: "Scroll",
    },
    products: {
      subtitle: "Mold Types",
      title: "OUR PRODUCTS",
      items: [
        { title: "Drawing Dies", desc: "Enables sheet metal to be deeply formed by flowing it inside the mold. Generally preferred for the production of hollow and deep parts." },
        { title: "Progressive Dies", desc: "Dies that perform multiple operations (cutting, punching, bending, etc.) step by step within the same mold. Ideal for mass production, saving time and cost." },
        { title: "Cutting Dies", desc: "Enables sheet metal to be cut in desired shapes and dimensions. Custom designed according to product geometry." },
        { title: "Punching Dies", desc: "Used to punch holes in the sheet metal surface. Works with high accuracy in parts where precision is critical." },
        { title: "Bending Dies", desc: "Designed for bending or folding metal sheets into a specific shape. Special mold sets provide desired bending angles and curve radii to form sheets as required." },
        { title: "Injection Molds", desc: "With our high-precision injection molds for metal and plastic parts that need to be produced in high quantities, you can manufacture very quickly." },
      ],
      photoLabel: "Photo coming soon",
    },
    services: {
      subtitle: "What We Do",
      title: "OUR SERVICES",
      items: [
        { title: "Mold Production", desc: "Progressive metal and plastic injection molds are produced and tested in our own facility." },
        { title: "Press Service", desc: "With completed molds, we provide pressing services in desired quantities within our own facility according to customer requests." },
        { title: "CNC Machining", desc: "We produce complex parts with tight tolerances using our 3 and 4-axis CNC machines." },
        { title: "Drilling & Centering", desc: "We offer precise drilling, centering and marking services for both serial and single-piece production." },
        { title: "Assembly & Manufacturing", desc: "From parts to product; we manage design, manufacturing and assembly processes end-to-end." },
        { title: "Quality Control", desc: "We target zero defects by performing measurement and quality control at every stage of production." },
      ],
    },
    about: {
      subtitle: "Who We Are",
      title: "ABOUT US",
      p1: "With the experience and trust we have gained in the metal processing industry since 1991, we aim to be a pioneering brand that brings together technology, engineering and quality in metal cutting and injection mold production.",
      p2: "Our goal is to increase competitiveness in both local and global markets through high-precision production, automation-supported processes and innovative mold designs, and to become a solution partner that shapes the industry.",
      p3: "In line with our principles of continuous improvement, sustainable production and customer satisfaction, we envision continuously raising quality standards in the industry.",
      experience: "Years of Experience",
      projects: "Completed Projects",
      clients: "Happy Clients",
      staff: "Expert Staff",
    },
    footer: {
      desc: "With the experience and trust we have gained in the metal processing industry since 1991, we aim to be a pioneering brand that brings together technology, engineering and quality in metal cutting and injection mold production.",
      corporate: "Corporate",
      servicesTitle: "Our Services",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      navItems: [
        { label: "Home", href: "#" },
        { label: "Products", href: "#urunlerimiz" },
        { label: "Services", href: "#hizmetler" },
        { label: "About Us", href: "#hakkimizda" },
        { label: "Contact", href: "#iletisim" },
      ],
      serviceItems: ["Mold Production", "Press Service", "CNC Machining", "Drilling & Centering", "Assembly & Manufacturing", "Quality Control"],
    },
  },
} as const;

// ─── Product image paths ──────────────────────────────────────────────────────
const productImages = [
  "/products/sivama-kalibi.jpg",
  "/products/prograsif-kalibi.jpg",
  "/products/kesme-kalibi.jpg",
  "/products/delme-kalibi.jpg",
  "/products/bukme-kalibi.jpg",
  "/products/enjeksiyon-kalibi.jpg",
];

// ─── Icons ────────────────────────────────────────────────────────────────────
function IconGear() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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

const serviceIcons = [
  <IconGear key={0} />,
  <IconAssembly key={1} />,
  <IconGear key={2} />,
  <IconDrill key={3} />,
  <IconAssembly key={4} />,
  <IconQuality key={5} />,
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = T[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.home, href: "#" },
    { label: t.products, href: "#urunlerimiz" },
    { label: t.services, href: "#hizmetler" },
    { label: t.about, href: "#hakkimizda" },
    { label: t.contact, href: "#iletisim" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-zinc-200 py-3 shadow-sm"
          : "bg-white/90 backdrop-blur-sm border-b border-zinc-100 py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1">
          <span className="text-zinc-900 font-black text-lg tracking-widest">ÖZHAN</span>
          <span className="text-orange-500 font-black text-lg tracking-widest">METAL</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors group ${
                active === link.href ? "text-orange-500" : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-4 right-4 h-px bg-orange-500 transition-transform origin-left duration-300 ${
                  active === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}

          {/* Sosyal medya + dil değiştirici */}
          <div className="flex items-center gap-1 ml-4 pl-4 border-l border-zinc-300">
            <a href="https://www.facebook.com/ozhanmetal" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-zinc-500 hover:text-orange-500 transition-colors p-1.5">
              <IconFacebook />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-zinc-500 hover:text-orange-500 transition-colors p-1.5">
              <IconLinkedIn />
            </a>
            <a href="https://wa.me/905456462356" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-zinc-500 hover:text-orange-500 transition-colors p-1.5">
              <IconWhatsApp />
            </a>

            {/* Dil Toggle */}
            <div className="ml-2 flex items-center border border-zinc-300 rounded overflow-hidden text-xs font-bold">
              <button
                onClick={() => setLang("TR")}
                className={`px-2.5 py-1.5 transition-colors ${lang === "TR" ? "bg-orange-500 text-white" : "text-zinc-500 hover:text-zinc-900"}`}
              >
                TR
              </button>
              <button
                onClick={() => setLang("EN")}
                className={`px-2.5 py-1.5 transition-colors ${lang === "EN" ? "bg-orange-500 text-white" : "text-zinc-500 hover:text-zinc-900"}`}
              >
                EN
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-zinc-200" : "max-h-0"
        } bg-white`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => { setActive(link.href); setMenuOpen(false); }}
            className={`block px-6 py-4 text-xs font-semibold uppercase tracking-widest border-b border-zinc-100 transition-colors ${
              active === link.href ? "text-orange-500 bg-orange-50" : "text-zinc-600 hover:text-orange-500 hover:bg-zinc-50"
            }`}
          >
            {link.label}
          </a>
        ))}
        {/* Mobile dil toggle */}
        <div className="flex px-6 py-4 gap-2">
          <button
            onClick={() => setLang("TR")}
            className={`px-4 py-1.5 text-xs font-bold border transition-colors ${lang === "TR" ? "bg-orange-500 border-orange-500 text-white" : "border-zinc-300 text-zinc-500"}`}
          >
            TR
          </button>
          <button
            onClick={() => setLang("EN")}
            className={`px-4 py-1.5 text-xs font-bold border transition-colors ${lang === "EN" ? "bg-orange-500 border-orange-500 text-white" : "border-zinc-300 text-zinc-500"}`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

// ─── Counter Hook ─────────────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(start); }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startCounting]);
  return count;
}

function CounterItem({ label, target, suffix = "+" }: { label: string; target: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCounter(target, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold text-orange-500">{count}{suffix}</div>
      <div className="mt-2 text-sm text-zinc-500 uppercase tracking-widest">{label}</div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState<Lang>("TR");
  const t = T[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="bg-white text-zinc-900 font-sans">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-32 pb-24 bg-white">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-block border border-orange-400/60 text-orange-500 text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-6">
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6 text-zinc-900">
              OZHAN<span className="text-orange-500"> METAL</span>
            </h1>
            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#hizmetler"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-3 transition-colors uppercase tracking-wider text-sm"
              >
                {t.hero.btn1}
              </a>
              <a
                href="#iletisim"
                className="border border-orange-400 hover:bg-orange-50 text-orange-500 font-bold px-8 py-3 transition-colors uppercase tracking-wider text-sm"
              >
                {t.hero.btn2}
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-orange-500" />
            <span className="text-[10px] tracking-widest uppercase text-zinc-400">{t.hero.scroll}</span>
          </div>
        </section>

        {/* ── ÜRÜNLERİMİZ ── */}
        <section id="urunlerimiz" className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 text-center">
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase font-semibold">
                {t.products.subtitle}
              </span>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-900">{t.products.title}</h2>
              <div className="mt-4 w-12 h-1 bg-orange-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.products.items.map((p, i) => (
                <div
                  key={i}
                  className="group bg-white border border-zinc-200 hover:border-orange-400 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="relative w-full h-52 bg-zinc-100 overflow-hidden">
                    {productImages[i] ? (
                      <img
                        src={productImages[i]}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-zinc-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-zinc-400 text-xs">{t.products.photoLabel}</span>
                      </div>
                    )}
                    <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-orange-500 transition-all duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold mb-2 text-zinc-900 group-hover:text-orange-500 transition-colors">{p.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HİZMETLER ── */}
        <section id="hizmetler" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 text-center">
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase font-semibold">
                {t.services.subtitle}
              </span>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-900">{t.services.title}</h2>
              <div className="mt-4 w-12 h-1 bg-orange-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200">
              {t.services.items.map((s, i) => (
                <div key={i} className="bg-white p-8 group hover:bg-orange-50 transition-colors duration-300">
                  <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {serviceIcons[i]}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-zinc-900 group-hover:text-orange-500 transition-colors">{s.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HAKKIMIZDA + SAYAÇLAR ── */}
        <section id="hakkimizda" className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500 text-xs tracking-[0.3em] uppercase font-semibold">{t.about.subtitle}</span>
              <h2 className="mt-3 text-4xl font-black tracking-tight mb-6 text-zinc-900">{t.about.title}</h2>
              <div className="w-12 h-1 bg-orange-500 mb-8" />
              <p className="text-zinc-600 leading-relaxed mb-4">{t.about.p1}</p>
              <p className="text-zinc-600 leading-relaxed mb-4">{t.about.p2}</p>
              <p className="text-zinc-600 leading-relaxed">{t.about.p3}</p>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <CounterItem target={34} label={t.about.experience} />
              <CounterItem target={500} label={t.about.projects} />
              <CounterItem target={120} label={t.about.clients} />
              <CounterItem target={8} label={t.about.staff} />
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer id="iletisim" className="bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Col 1 — Logo + Açıklama */}
            <div className="md:col-span-1">
              <a href="#" className="flex items-center gap-1 mb-5">
                <span className="text-white font-black text-lg tracking-widest">ÖZHAN</span>
                <span className="text-orange-500 font-black text-lg tracking-widest">METAL</span>
              </a>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.footer.desc}</p>
            </div>

            {/* Col 2 — Kurumsal */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">{t.footer.corporate}</h4>
              <div className="w-8 h-0.5 bg-orange-500 mb-5" />
              <ul className="space-y-3">
                {t.footer.navItems.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Hizmetlerimiz */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">{t.footer.servicesTitle}</h4>
              <div className="w-8 h-0.5 bg-orange-500 mb-5" />
              <ul className="space-y-3">
                {t.footer.serviceItems.map((s) => (
                  <li key={s}>
                    <a href="#hizmetler" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — İletişim */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">{t.footer.contactTitle}</h4>
              <div className="w-8 h-0.5 bg-orange-500 mb-5" />
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-0.5 shrink-0"><IconPhone /></span>
                  <a href="tel:+905456462356" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">
                    0545 646 23 56
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-0.5 shrink-0"><IconMail /></span>
                  <a href="mailto:info@ozhanmetal.com" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">
                    info@ozhanmetal.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-0.5 shrink-0"><IconLocation /></span>
                  <a
                    href="https://www.google.com/maps/place/%C3%96zhan+Metal+Kal%C4%B1p+Sanayi+Ltd/@41.050258,28.9071769,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab081d1abf565:0x12ef9edb4764cd34!8m2!3d41.050254!4d28.9097572!16s%2Fg%2F11c7v_r6pr?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    Muratpaşa Mahallesi, Uluyol İşkent Sanayi Sitesi, D Blok No:64, İstanbul, Turkey
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Alt çizgi */}
          <div className="border-t border-zinc-800">
            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-zinc-500 text-xs">
                © {new Date().getFullYear()} <span className="text-orange-500">Ozhan Metal</span>. {t.footer.rights}
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/ozhanmetal" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-zinc-500 hover:text-orange-500 transition-colors"><IconFacebook /></a>
                <a href="#" aria-label="LinkedIn" className="text-zinc-500 hover:text-orange-500 transition-colors"><IconLinkedIn /></a>
                <a href="https://wa.me/905456462356" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-zinc-500 hover:text-orange-500 transition-colors"><IconWhatsApp /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}
