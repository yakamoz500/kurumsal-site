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
        { title: "Progresif Kalıpları", desc: "Birden fazla işlemi (kesme, delme, bükme vb.) aynı kalıp içerisinde adım adım gerçekleştiren kalıplardır. Seri üretim için idealdir, zamandan ve maliyetten tasarruf sağlar." },
        { title: "Kesme Kalıpları", desc: "Sacın istenilen şekil ve ölçülerde kesilmesini sağlar. Ürün geometrisine göre özel olarak tasarlanır." },
        { title: "Enjeksiyon Kalıpları", desc: "Yüksek adetli üreteceğiniz metal ve plastik parçalar için yüksek hassasiyetli enjeksiyon kalıplarımız sayesinde çok hızlı bir şekilde üretim yapabilirsiniz." },
        { title: "CNC İşleme", desc: "3 ve 4 eksen CNC tezgahlarımızla karmaşık parçaları yüksek toleransla üretiyoruz." },
        { title: "Pres Baskı", desc: "Üretimi tamamlanan kalıplar ile müşterilerimizin talepleri doğrultusunda kendi bünyemizde istenilen adetlerde baskı hizmetini sağlıyoruz." },
        { title: "Montaj & İmalat", desc: "Parçadan ürüne; tasarım, imalat ve montaj süreçlerini uçtan uca yönetiyoruz." },
      ],
      photoLabel: "Fotoğraf eklenecek",
    },
    services: {
      subtitle: "Hizmet Verdiğimiz Alanlar",
      title: "SEKTÖRLERİMİZ",
      items: [
        { title: "Makina Yedek Parça", desc: "Endüstriyel makinaların yedek parça ihtiyaçlarını yüksek hassasiyetli kalıplarımız ve CNC işleme kapasitemizle karşılıyoruz." },
        { title: "Otomotiv Sanayi", desc: "Otomotiv sektörünün sıkı tolerans ve seri üretim gereksinimlerine uygun progresif kalıp ve pres çözümleri sunuyoruz." },
        { title: "Hırdavat", desc: "Civata, somun, klips ve benzeri hırdavat ürünlerin kalıpla üretimine yönelik çözümler geliştiriyoruz." },
        { title: "İnşaat", desc: "İnşaat sektörüne yönelik metal profil, bağlantı elemanı ve özel parça üretimi gerçekleştiriyoruz." },
        { title: "Elektrik-Elektronik Parça", desc: "Elektrik panelleri, bağlantı elemanları ve elektronik muhafazalar için hassas sac metal kalıpları üretiyoruz." },
        { title: "Savunma Sanayi", desc: "Yüksek dayanım ve hassasiyet gerektiren savunma sanayi bileşenlerinin üretiminde güvenilir çözüm ortağınızız." },
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
      subtitle: "Size Özel Çözümler",
      title: "TEKLİF AL",
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
      services: ["CNC İşleme", "Pres Baskı", "Progresif Kalıp", "Kesme Kalıbı", "Enjeksiyon Kalıbı", "Montaj & İmalat", "Diğer"],
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
        { title: "Progressive Dies", desc: "Dies that perform multiple operations (cutting, punching, bending, etc.) step by step within the same mold. Ideal for mass production, saving time and cost." },
        { title: "Cutting Dies", desc: "Enables sheet metal to be cut in desired shapes and dimensions. Custom designed according to product geometry." },
        { title: "Injection Molds", desc: "With our high-precision injection molds for metal and plastic parts that need to be produced in high quantities, you can manufacture very quickly." },
        { title: "CNC Machining", desc: "We produce complex parts with tight tolerances using our 3 and 4-axis CNC machines." },
        { title: "Press Service", desc: "With completed molds, we provide pressing services in desired quantities within our own facility according to customer requests." },
        { title: "Assembly & Manufacturing", desc: "From parts to product; we manage design, manufacturing and assembly processes end-to-end." },
      ],
      photoLabel: "Photo coming soon",
    },
    services: {
      subtitle: "Industries We Serve",
      title: "OUR SECTORS",
      items: [
        { title: "Machine Spare Parts", desc: "We meet the spare parts needs of industrial machines with our high-precision molds and CNC machining capacity." },
        { title: "Automotive Industry", desc: "We provide progressive die and press solutions suited to the strict tolerance and mass production requirements of the automotive sector." },
        { title: "Hardware", desc: "We develop solutions for the mold-based production of hardware products such as bolts, nuts, clips and similar items." },
        { title: "Construction", desc: "We produce metal profiles, fasteners and custom parts for the construction sector." },
        { title: "Electrical-Electronic Parts", desc: "We produce precision sheet metal molds for electrical panels, connectors and electronic enclosures." },
        { title: "Defense Industry", desc: "We are your reliable solution partner in the production of defense industry components requiring high strength and precision." },
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
      subtitle: "Custom Solutions",
      title: "GET A QUOTE",
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
      services: ["CNC Machining", "Press Service", "Progressive Die", "Cutting Die", "Injection Mold", "Assembly & Manufacturing", "Other"],
      navLabel: "Get Quote",
    },
  },
} as const;

// ─── Image paths ──────────────────────────────────────────────────────────────
const productImages = [
  "/products/prograsif_kalip.jpeg",     // Progresif Kalıpları
  "/products/Kesme_kaliplari.png",      // Kesme Kalıpları
  "/products/enjeksiyon_kaliplari.jpeg",// Enjeksiyon Kalıpları
  "/products/cnc_isleme.jpg",           // CNC İşleme
  "/products/Pres_Baski.png",           // Pres Baskı
  "/products/montajimalat.png",         // Montaj & İmalat
];

// Her ürün kartı için fotoğraf pozisyonu (object-position)
const productPositions = [
  "center", // Progresif Kalıpları
  "center", // Kesme Kalıpları
  "center", // Enjeksiyon Kalıpları
  "center", // CNC İşleme
  "center", // Pres Baskı
  "center", // Montaj & İmalat
];

const sectorImages = [
  "/sectors/makina-yedek-parca.jpg",
  "/sectors/otomotiv-sanayi.jpg",
  "/sectors/hirdavat.jpg",
  "/sectors/insaat.jpg",
  "/sectors/elektrik-elektronik.jpg",
  "/sectors/savunma-sanayi.jpg",
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
function IconPress() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
    </svg>
  );
}
function IconCNC() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  );
}
function IconWrench() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
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
  <IconPress key={1} />,
  <IconCNC key={2} />,
  <IconDrill key={3} />,
  <IconWrench key={4} />,
  <IconQuality key={5} />,
];

const sectorIcons = [
  <Settings2  key={0} className="w-8 h-8" strokeWidth={1.5} />, // Makina Yedek Parça
  <Car        key={1} className="w-8 h-8" strokeWidth={1.5} />, // Otomotiv Sanayi
  <Nut        key={2} className="w-8 h-8" strokeWidth={1.5} />, // Hırdavat
  <Building2  key={3} className="w-8 h-8" strokeWidth={1.5} />, // İnşaat
  <Cpu        key={4} className="w-8 h-8" strokeWidth={1.5} />, // Elektrik-Elektronik
  <ShieldCheck key={5} className="w-8 h-8" strokeWidth={1.5} />, // Savunma Sanayi
];

// ─── Product Image (next/image + hata yönetimi) ───────────────────────────────
function ProductImage({ src, alt, label, position = "center" }: { src: string; alt: string; label: string; position?: string }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-zinc-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-zinc-400 text-xs">{label}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      style={{ objectPosition: position }}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      onError={() => setError(true)}
    />
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ lang }: { lang: Lang }) {
  const router = useRouter();
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

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (socialRef.current && !socialRef.current.contains(e.target as Node)) {
        setSocialOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const [socialOpen, setSocialOpen] = useState(false);
  const socialRef = useRef<HTMLDivElement>(null);

  const switchLang = (target: Lang) => {
    if (target === lang) return;
    // Manuel seçimi cookie'ye kaydet — middleware bir daha yönlendirmesin
    document.cookie = "lang=" + target + "; path=/; max-age=31536000";
    router.push(target === "EN" ? "/en" : "/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/98 backdrop-blur-sm border-b border-zinc-800 py-3 shadow-lg"
          : "bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-8">
        {/* Logo — sol */}
        <a href={lang === "EN" ? "/en" : "/"} className="flex items-center gap-1 shrink-0">
          <Image
            src="/logo2.png"
            alt="Özhan Metal Logo"
            width={42}
            height={42}
            className="object-contain invert"
          />
          <span className="text-white font-black text-lg tracking-widest">ÖZHAN</span>
          <span className="text-lime-400 font-black text-lg tracking-widest">METAL</span>
        </a>

        {/* Desktop Nav — orta */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors group ${
                active === link.href ? "text-lime-400" : "text-zinc-300 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-4 right-4 h-px bg-lime-400 transition-transform origin-left duration-300 ${
                  active === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Sağ — Sosyal ikon + Teklif Al + Sliding TR/EN */}
        <div className="hidden md:flex items-center gap-3 shrink-0">

          {/* Sosyal medya — küçük ikon butonu */}
          <div className="relative" ref={socialRef}>
            <button
              onClick={() => setSocialOpen(!socialOpen)}
              aria-label="Sosyal medya"
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                socialOpen ? "text-lime-400 bg-zinc-800" : "text-zinc-500 hover:text-lime-400 hover:bg-zinc-800"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>

            {/* Dropdown */}
            {socialOpen && (
              <div className="absolute right-0 top-full mt-2 bg-zinc-900 border border-zinc-800 shadow-xl z-50 min-w-[150px] rounded-lg overflow-hidden">
                <a href="https://www.facebook.com/ozhanmetal" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-lime-400 hover:bg-zinc-800 transition-colors text-xs font-medium">
                  <IconFacebook /> Facebook
                </a>
                <a href="https://www.linkedin.com/company/ozhan-metal" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-lime-400 hover:bg-zinc-800 transition-colors text-xs font-medium border-t border-zinc-800">
                  <IconLinkedIn /> LinkedIn
                </a>
                <a href="https://wa.me/905456462356" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-lime-400 hover:bg-zinc-800 transition-colors text-xs font-medium border-t border-zinc-800">
                  <IconWhatsApp /> WhatsApp
                </a>
              </div>
            )}
          </div>

          {/* Ayraç */}
          <div className="w-px h-4 bg-zinc-700" />

          {/* Teklif Al — pill */}
          <a
            href="#teklif"
            className="bg-lime-400 hover:bg-lime-300 text-black font-bold px-5 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors"
          >
            {t.quote}
          </a>

          {/* TR/EN — sliding pill toggle */}
          <div className="flex items-center bg-zinc-800 rounded-full p-0.5 border border-zinc-700">
            <button
              onClick={() => switchLang("TR")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                lang === "TR" ? "bg-lime-400 text-black shadow-sm" : "text-zinc-400 hover:text-white"
              }`}
            >
              TR
            </button>
            <button
              onClick={() => switchLang("EN")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                lang === "EN" ? "bg-lime-400 text-black shadow-sm" : "text-zinc-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-zinc-800" : "max-h-0"
        } bg-zinc-950`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => { setActive(link.href); setMenuOpen(false); }}
            className={`block px-6 py-4 text-xs font-semibold uppercase tracking-widest border-b border-zinc-800 transition-colors ${
              active === link.href ? "text-lime-400 bg-zinc-800" : "text-zinc-300 hover:text-lime-400 hover:bg-zinc-800"
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#teklif"
          onClick={() => setMenuOpen(false)}
          className="block mx-4 my-3 px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full bg-lime-400 text-black text-center"
        >
          {t.quote}
        </a>
        <div className="flex px-6 py-4 gap-2">
          <div className="flex items-center bg-zinc-800 rounded-full p-0.5 border border-zinc-700">
            <button
              onClick={() => switchLang("TR")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${lang === "TR" ? "bg-lime-400 text-black" : "text-zinc-400"}`}
            >
              TR
            </button>
            <button
              onClick={() => switchLang("EN")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${lang === "EN" ? "bg-lime-400 text-black" : "text-zinc-400"}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// ─── Counter ──────────────────────────────────────────────────────────────────
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
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold text-lime-400">{count}{suffix}</div>
      <div className="mt-2 text-sm text-zinc-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}

// ─── Product Tabs ─────────────────────────────────────────────────────────────
function ProductTabs({ lang }: { lang: Lang }) {
  const t = T[lang].products;
  const [selected, setSelected] = useState(0);

  return (
    <div className="border border-zinc-700 overflow-hidden grid md:grid-cols-5">
      {/* Sol — Tab listesi */}
      <div className="md:col-span-2 divide-y divide-zinc-700 border-b md:border-b-0 md:border-r border-zinc-700">
        {t.items.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-all duration-200 ${
              selected === i
                ? "bg-zinc-800 border-l-2 border-lime-400"
                : "border-l-2 border-transparent hover:bg-zinc-800/40 hover:border-zinc-600"
            }`}
          >
            <span className={`font-black text-sm w-6 shrink-0 transition-colors ${selected === i ? "text-lime-400" : "text-zinc-600"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={`font-semibold text-sm transition-colors ${selected === i ? "text-lime-400" : "text-zinc-400 group-hover:text-white"}`}>
              {p.title}
            </span>
          </button>
        ))}
      </div>

      {/* Sağ — İçerik */}
      <div className="md:col-span-3 bg-zinc-800 flex flex-col">
        <div className="relative w-full h-64 bg-zinc-700 overflow-hidden shrink-0">
          <ProductImage
            src={productImages[selected]}
            alt={t.items[selected].title}
            label={t.photoLabel}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/80 to-transparent" />
        </div>
        <div className="p-8 flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-3">
            <span className="text-lime-400 font-black text-sm">{String(selected + 1).padStart(2, "0")}</span>
            <div className="h-px flex-1 bg-zinc-700" />
          </div>
          <h3 className="text-white text-2xl font-bold">{t.items[selected].title}</h3>
          <p className="text-zinc-400 leading-relaxed text-sm">{t.items[selected].desc}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Quote Form (sadece form içeriği, section wrapper yok) ────────────────────
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

    const url = `https://wa.me/905456462356?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    setStatus("success");
    setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  };

  const inputClass =
    "w-full bg-zinc-950 border border-zinc-700 focus:border-lime-400 text-white placeholder-zinc-500 px-4 py-2.5 outline-none transition-colors text-sm";

  if (status === "success") {
    return (
      <div className="border border-lime-400 bg-lime-400/10 text-lime-400 px-6 py-10 text-center h-full flex flex-col items-center justify-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-base font-semibold">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full gap-3">

      {/* 2 kolonlu alanlar */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-zinc-500 text-[10px] uppercase tracking-widest">{t.name} <span className="text-lime-400">*</span></label>
          <input name="name" required value={form.name} onChange={handleChange} placeholder={t.name} className={inputClass} {...validationProps} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-zinc-500 text-[10px] uppercase tracking-widest">{t.company}</label>
          <input name="company" value={form.company} onChange={handleChange} placeholder={t.company} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-zinc-500 text-[10px] uppercase tracking-widest">{t.email} <span className="text-lime-400">*</span></label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder={t.email} className={inputClass} {...validationProps} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-zinc-500 text-[10px] uppercase tracking-widest">{t.phone} <span className="text-lime-400">*</span></label>
          <input name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder={t.phone} className={inputClass} {...validationProps} />
        </div>
      </div>

      {/* Hizmet seçimi */}
      <div className="flex flex-col gap-1">
        <label className="text-zinc-500 text-[10px] uppercase tracking-widest">{t.service} <span className="text-lime-400">*</span></label>
        <select name="service" required value={form.service} onChange={handleChange} className={`${inputClass} cursor-pointer`} {...validationProps}>
          <option value="" disabled>{t.serviceDefault}</option>
          {t.services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Mesaj — flex-1 ile kalan alanı doldurur */}
      <div className="flex flex-col gap-1 flex-1">
        <label className="text-zinc-500 text-[10px] uppercase tracking-widest">{t.message}</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t.message}
          className={`${inputClass} resize-none flex-1`}
        />
      </div>

      {/* Hata */}
      {status === "error" && (
        <div className="border border-red-500/50 bg-red-500/10 text-red-400 px-4 py-2.5 text-xs">
          {t.error}
        </div>
      )}

      {/* Submit — kolonun en altına yapışır */}
      <div className="pt-2 flex justify-end">
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-2.5 rounded-full uppercase tracking-wider text-sm transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
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
    <div className="bg-zinc-950 text-white font-sans">
      <Navbar lang={defaultLang} />

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24 pb-16 min-h-screen">
        <Image src="/header_1.jpeg" alt="Ozhan Metal" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />
        <div className="relative z-10 max-w-5xl w-full">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-lime-400/50" />
            <span className="text-lime-400 text-xs font-bold tracking-[0.4em] uppercase">{t.hero.badge}</span>
            <div className="h-px w-12 bg-lime-400/50" />
          </div>
          <h1 className="font-black tracking-tight leading-none mb-6">
            <span className="block text-7xl md:text-[9rem] text-white">ÖZHAN</span>
            <span className="block text-7xl md:text-[9rem] text-lime-400">METAL</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-10 bg-zinc-600" />
            <p className="text-zinc-300 text-sm md:text-base tracking-[0.25em] uppercase font-light">{t.hero.desc}</p>
            <div className="h-px w-10 bg-zinc-600" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#hizmetler" className="bg-lime-400 hover:bg-lime-300 text-black font-bold px-10 py-3.5 rounded-full transition-colors uppercase tracking-wider text-sm">{t.hero.btn1}</a>
            <a href="#teklif" className="border border-white/30 hover:border-lime-400 hover:text-lime-400 text-white font-bold px-10 py-3.5 rounded-full transition-all uppercase tracking-wider text-sm">{t.hero.btn2}</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-lime-400" />
          <span className="text-[10px] tracking-widest uppercase text-zinc-400">{t.hero.scroll}</span>
        </div>
      </section>

      {/* ── ÜRÜNLERİMİZ ── */}
      <section id="urunlerimiz" className="pt-12 pb-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-lime-400 text-xs tracking-[0.3em] uppercase font-bold">
              {t.products.subtitle}
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white">{t.products.title}</h2>
            <div className="mt-4 w-12 h-1 bg-lime-400 mx-auto" />
          </div>
          {/* ── Orijinal Grid Tasarımı ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.products.items.map((p, i) => (
              <div
                key={i}
                className="group bg-zinc-800 border border-zinc-700 hover:border-lime-400 overflow-hidden transition-all duration-300"
              >
                <div className="relative w-full h-52 bg-zinc-700 overflow-hidden">
                  <ProductImage
                    src={productImages[i]}
                    alt={p.title}
                    label={t.products.photoLabel}
                    position={productPositions[i]}
                  />
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-lime-400 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold mb-2 text-white group-hover:text-lime-400 transition-colors">{p.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HİZMETLER ── */}
      <section id="hizmetler" className="pt-12 pb-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-lime-400 text-xs tracking-[0.3em] uppercase font-bold">
              {t.services.subtitle}
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white">{t.services.title}</h2>
            <div className="mt-4 w-12 h-1 bg-lime-400 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.services.items.map((s, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 p-8 border border-zinc-800 hover:border-lime-400 transition-all duration-300"
              >
                {/* İkon kutusu */}
                <div className="shrink-0 w-14 h-14 flex items-center justify-center border border-zinc-700 group-hover:border-lime-400 text-lime-400 transition-colors duration-300">
                  {sectorIcons[i]}
                </div>
                {/* Başlık + açıklama */}
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-lime-400 transition-colors duration-300 mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-base leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HAKKIMIZDA + TEKLİF AL ── */}
      <section id="hakkimizda" className="pt-12 pb-24 px-6 bg-zinc-900">
        {/* Teklif Al anchor noktası */}
        <div id="teklif" className="invisible absolute -mt-20" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-stretch">

          {/* Sol: Hakkımızda */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-lime-400 text-xs tracking-[0.3em] uppercase font-bold">{t.about.subtitle}</span>
              <h2 className="mt-3 text-4xl font-black tracking-tight mb-6 text-white">{t.about.title}</h2>
              <div className="w-12 h-1 bg-lime-400 mb-8" />
              <p className="text-zinc-400 leading-relaxed mb-4">{t.about.p1}</p>
              <p className="text-zinc-400 leading-relaxed mb-4">{t.about.p2}</p>
              <p className="text-zinc-400 leading-relaxed">{t.about.p3}</p>
            </div>
            {/* Sayaçlar */}
            <div className="grid grid-cols-2 gap-8 mt-10 pt-10 border-t border-zinc-800">
              <CounterItem target={34} label={t.about.experience} />
              <CounterItem target={3000} label={t.about.projects} />
              <CounterItem target={120} label={t.about.clients} />
              <CounterItem target={8} label={t.about.staff} />
            </div>
          </div>

          {/* Sağ: Teklif Al */}
          <div className="border border-zinc-800 p-8 bg-zinc-900/50 flex flex-col h-full">
            <span className="text-lime-400 text-xs tracking-[0.3em] uppercase font-bold">{t.quote.subtitle}</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight mb-6 text-white">{t.quote.title}</h2>
            <div className="w-12 h-1 bg-lime-400 mb-8" />
            <div className="flex-1 flex flex-col justify-between">
              <QuoteForm lang={defaultLang} />
            </div>
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="iletisim" className="bg-zinc-950 border-t border-zinc-800">
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
              <span className="text-lime-400 font-black text-xl tracking-widest">METAL</span>
            </a>
            <div>
              <p className="text-zinc-400 text-sm font-semibold mb-4">{t.footer.followUs}</p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/ozhanmetal" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400 transition-colors">
                  <IconFacebook />
                </a>
                <a href="https://www.linkedin.com/company/ozhan-metal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400 transition-colors">
                  <IconLinkedIn />
                </a>
                <a href="https://wa.me/905456462356" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400 transition-colors">
                  <IconWhatsApp />
                </a>
              </div>
            </div>
          </div>

          {/* Kolon 2 — Bize Ulaşın */}
          <div>
            <h4 className="text-lime-400 font-bold text-base mb-6">{t.footer.reachUs}</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 text-lime-400">
                  <IconPhone />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">{t.footer.phoneLabel}</p>
                  <a href="tel:+905456462356" className="text-white text-sm font-medium hover:text-lime-400 transition-colors">
                    0545 646 23 56
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 text-lime-400">
                  <IconMail />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">{t.footer.emailLabel}</p>
                  <a href="mailto:info@ozhanmetal.com" className="text-white text-sm font-medium hover:text-lime-400 transition-colors">
                    info@ozhanmetal.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 text-lime-400">
                  <IconLocation />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">{t.footer.addressLabel}</p>
                  <a
                    href="https://www.google.com/maps/place/%C3%96zhan+Metal+Kal%C4%B1p+Sanayi+Ltd/@41.050258,28.9071769,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab081d1abf565:0x12ef9edb4764cd34!8m2!3d41.050254!4d28.9097572!16s%2Fg%2F11c7v_r6pr?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank" rel="noopener noreferrer"
                    className="text-white text-sm font-medium hover:text-lime-400 transition-colors leading-snug"
                  >
                    Muratpaşa Mah. Uluyol İşkent Sanayi Sitesi, D Blok No:64, İstanbul
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolon 3 — Kurumsal + Çalışma Saatleri */}
          <div>
            <h4 className="text-lime-400 font-bold text-base mb-6">{t.footer.corporate}</h4>
            <ul className="space-y-3 mb-8">
              {t.footer.navItems.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-zinc-400 hover:text-white text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
            <h4 className="text-lime-400 font-bold text-base mb-4">{t.footer.workingHours}</h4>
            <p className="text-zinc-400 text-sm">{t.footer.weekdays}</p>
          </div>

          {/* Kolon 4 — Hizmetlerimiz */}
          <div>
            <h4 className="text-lime-400 font-bold text-base mb-6">{t.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {t.footer.serviceItems.map((s) => (
                <li key={s}>
                  <a href="#hizmetler" className="text-zinc-400 hover:text-white text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Alt bar */}
        <div className="border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-5 text-center">
            <p className="text-zinc-500 text-xs" suppressHydrationWarning>
              © {new Date().getFullYear()} <span className="text-lime-400">Özhan Metal</span>. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
