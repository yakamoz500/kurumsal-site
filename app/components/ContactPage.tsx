"use client";

import { useState } from "react";
import { Navbar, SiteFooter, QuoteForm, CornerTicks, blueprintGrid, type Lang } from "./SitePage";

const C = {
  TR: {
    eyebrow: "Bize ulaşın",
    title: "İletişim",
    lead: "Teknik resminizi veya numunenizi paylaşın; kalıp tipi, adet ve tolerans ihtiyacınıza göre size dönelim.",
    addressLabel: "Adres",
    address: ["Muratpaşa Mah. Uluyol İşkent Sanayi Sitesi", "D Blok No:64, Bayrampaşa / İstanbul"],
    phoneLabel: "Telefon",
    emailLabel: "E-posta",
    hoursLabel: "Çalışma saatleri",
    hours: ["Pazartesi – Cuma", "08:00 – 19:00"],
    directions: "Yol tarifi al",
    mapTitle: "Üretim tesisi",
    mapNote: "Harita Google Maps üzerinden yüklenir ve Google çerez yerleştirir. Yüklemek için tıklayın.",
    mapLoad: "Haritayı yükle",
    formTitle: "Teklif isteyin",
    formLead: "Kalıp tipi, adet ve tolerans ihtiyacınızı yazın; size dönelim.",
    whatsapp: "WhatsApp'tan yazın",
    callNow: "Hemen arayın",
  },
  EN: {
    eyebrow: "Get in touch",
    title: "Contact",
    lead: "Share your technical drawing or sample; we will get back to you based on your mold type, volume and tolerance requirements.",
    addressLabel: "Address",
    address: ["Muratpasa Mah. Uluyol Iskent Sanayi Sitesi", "D Blok No:64, Bayrampasa / Istanbul, Türkiye"],
    phoneLabel: "Phone",
    emailLabel: "E-mail",
    hoursLabel: "Working hours",
    hours: ["Monday – Friday", "08:00 – 19:00 (GMT+3)"],
    directions: "Get directions",
    mapTitle: "Production facility",
    mapNote: "The map loads from Google Maps, which sets cookies. Click to load it.",
    mapLoad: "Load map",
    formTitle: "Request a quote",
    formLead: "Tell us the tool type, volume and tolerance you need and we will come back to you.",
    whatsapp: "Message on WhatsApp",
    callNow: "Call now",
  },
} as const;

const PHONE_DISPLAY = { TR: "0545 646 23 56", EN: "+90 545 646 23 56" } as const;
const PHONE_HREF = "tel:+905456462356";
const EMAIL = "info@ozhanmetal.com";
const MAPS_URL =
  "https://www.google.com/maps/place/%C3%96zhan+Metal+Kal%C4%B1p+Sanayi+Ltd/@41.050258,28.9071769,17z";
// Google Maps'in kendi "Yerleştir" çıktısı: koordinat değil, işletme kaydını
// gösterir — iğnede "Özhan Metal Kalıp Sanayi Ltd" yazar.
// URL'deki `!1sXX` dil kodu; harita arayüzü sayfanın diliyle aynı olsun diye
// TR'de `tr`, EN'de `en` veriyoruz (`!2str` = bölge Türkiye, ikisinde de aynı).
const mapsEmbed = (lang: Lang) =>
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.857100272588!2d28.907182276420414!3d41.05025397134454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab081d1abf565%3A0x12ef9edb4764cd34!2s%C3%96zhan%20Metal%20Kal%C4%B1p%20Sanayi%20Ltd!5e0!3m2!1s" +
  (lang === "EN" ? "en" : "tr") +
  "!2str!4v1792521336913!5m2!1s" +
  (lang === "EN" ? "en" : "tr") +
  "!2str";

export default function ContactPage({ lang }: { lang: Lang }) {
  const t = C[lang];
  // Harita tıklanana kadar yüklenmez: Google'ın çerezi izinsiz düşmesin.
  const [mapOn, setMapOn] = useState(false);

  const rows = [
    { label: t.addressLabel, body: t.address, href: MAPS_URL, external: true },
    { label: t.phoneLabel, body: [PHONE_DISPLAY[lang]], href: PHONE_HREF },
    { label: t.emailLabel, body: [EMAIL], href: `mailto:${EMAIL}` },
    { label: t.hoursLabel, body: t.hours },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar lang={lang} standalone />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-stone-50 pt-28 pb-14 md:pt-32 md:pb-16 px-6">
          <div aria-hidden className="absolute inset-0" style={blueprintGrid} />
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-amber-500" />
              <span className="font-medium text-[11px] uppercase tracking-[0.2em] text-amber-700">{t.eyebrow}</span>
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-stone-900">{t.title}</h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-stone-600">{t.lead}</p>
          </div>
        </section>

        {/* İki kart yan yana: solda künye, sağda form. Altında harita. */}
        <section className="py-14 md:py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
            {/* Sol kart — künye */}
            <div className="lg:col-span-5">
              <div className="relative h-full border border-stone-200 bg-stone-50 p-7 md:p-8">
                <CornerTicks className="border-amber-500" />
                <h2 className="text-2xl font-semibold tracking-tight text-stone-900">{t.title}</h2>

                <dl className="mt-7 divide-y divide-stone-200 border-t border-stone-900">
                  {rows.map((r) => (
                    <div key={r.label} className="py-4">
                      <dt className="font-medium text-[10px] uppercase tracking-[0.18em] text-stone-400">{r.label}</dt>
                      <dd className="mt-1.5 text-stone-900">
                        {r.href ? (
                          <a
                            href={r.href}
                            {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="hover:text-amber-700 transition-colors"
                          >
                            {r.body.map((line) => (
                              <span key={line} className="block text-[15px] leading-relaxed">{line}</span>
                            ))}
                          </a>
                        ) : (
                          r.body.map((line) => (
                            <span key={line} className="block text-[15px] leading-relaxed">{line}</span>
                          ))
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-col gap-2.5">
                  <a
                    href={PHONE_HREF}
                    className="bg-stone-900 hover:bg-amber-600 text-white font-medium px-6 py-3 text-sm text-center transition-colors"
                  >
                    {t.callNow}
                  </a>
                  <a
                    href="https://wa.me/905456462356"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-stone-300 hover:border-stone-900 text-stone-800 font-medium px-6 py-3 text-sm text-center transition-colors"
                  >
                    {t.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            {/* Sağ kart — teklif formu (açık tema) */}
            <div className="lg:col-span-7">
              <div className="relative h-full border border-stone-200 bg-white p-7 md:p-8 flex flex-col">
                <h2 className="text-2xl font-semibold tracking-tight text-stone-900">{t.formTitle}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-500">{t.formLead}</p>
                <div className="mt-6 flex-1">
                  <QuoteForm lang={lang} theme="light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Harita — tam genişlik, tıklayınca yüklenir */}
        <section className="pb-14 md:pb-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="relative border border-stone-300 p-1.5 bg-white">
              <CornerTicks className="border-amber-500" />
              <div className="relative w-full aspect-16/9 md:aspect-21/9 bg-stone-100 overflow-hidden">
                {mapOn ? (
                  <iframe
                    src={mapsEmbed(lang)}
                    title={t.mapTitle}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setMapOn(true)}
                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 px-8 text-center hover:bg-stone-50 transition-colors"
                  >
                    <span aria-hidden className="absolute inset-0" style={blueprintGrid} />
                    <span className="relative font-medium text-[10px] uppercase tracking-[0.18em] text-stone-400">
                      {t.mapTitle}
                    </span>
                    <span className="relative text-sm font-medium text-stone-900 border border-stone-900 px-5 py-2">
                      {t.mapLoad}
                    </span>
                    <span className="relative text-xs leading-relaxed text-stone-500 max-w-sm">{t.mapNote}</span>
                  </button>
                )}
              </div>
              <div className="flex justify-end px-1 pt-2 pb-0.5">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-medium text-amber-700 hover:text-amber-800 transition-colors"
                >
                  {t.directions} &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
