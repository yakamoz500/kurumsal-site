"use client";

import { Navbar, SiteFooter, blueprintGrid, type Lang } from "./SitePage";

/** KVKK aydınlatma metni / privacy notice.
 *  Taslaktır — yayına almadan önce hukukçuya okutulmalı. Metin burada
 *  tutuluyor; sitede başka yerde kopyası yok. */
const L = {
  TR: {
    eyebrow: "Kişisel verilerin korunması",
    title: "Aydınlatma Metni",
    updated: "Son güncelleme: 20 Ekim 2026",
    intro:
      "Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, ozhanmetal.com üzerinden ilettiğiniz bilgilerin nasıl işlendiğini açıklar.",
    sections: [
      {
        h: "Veri sorumlusu",
        p: ["Özhan Metal Kalıp Sanayi Ltd. Şti. — Muratpaşa Mah. Uluyol İşkent Sanayi Sitesi, D Blok No:64, Bayrampaşa / İstanbul. E-posta: info@ozhanmetal.com, telefon: 0545 646 23 56."],
      },
      {
        h: "Hangi veriler işleniyor",
        p: ["Teklif formunu doldurduğunuzda ad soyad, e-posta adresi ve telefon numaranız; isteğe bağlı olarak firma adınız ve mesajınız işlenir. Form dışında siteyi gezerken kimliğinizi belirleyen bir veri toplanmaz."],
      },
      {
        h: "İşleme amacı ve hukuki sebep",
        p: ["Veriler yalnızca teklif talebinizi değerlendirmek ve size geri dönüş yapmak için işlenir. Hukuki sebep, formu gönderirken verdiğiniz açık rızadır (KVKK m.5/1)."],
      },
      {
        h: "Aktarım",
        p: ["Form gönderimi, e-posta altyapımız üzerinden info@ozhanmetal.com adresine iletilir. Verileriniz pazarlama amacıyla üçüncü kişilere satılmaz, kiralanmaz veya devredilmez.", "İletişim sayfasındaki harita, siz \"Haritayı yükle\" düğmesine basmadan yüklenmez. Bastığınızda Google Maps devreye girer ve Google kendi çerezlerini yerleştirebilir."],
      },
      {
        h: "Saklama süresi",
        p: ["Talebiniz sonuçlandıktan sonra verileriniz, ticari ilişki kurulmadıysa makul bir süre içinde silinir. Ticari ilişki kurulursa ilgili mevzuatın öngördüğü saklama süreleri uygulanır."],
      },
      {
        h: "Haklarınız",
        p: ["KVKK m.11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini, silinmesini veya yok edilmesini isteme ve işlemeye itiraz etme haklarına sahipsiniz. Taleplerinizi info@ozhanmetal.com adresine iletebilirsiniz."],
      },
    ],
    backLabel: "İletişim sayfasına dön",
  },
  EN: {
    eyebrow: "Data protection",
    title: "Privacy Notice",
    updated: "Last updated: 20 October 2026",
    intro:
      "This notice explains how information you send through ozhanmetal.com is handled, under Turkish data protection law (KVKK, Law No. 6698).",
    sections: [
      {
        h: "Data controller",
        p: ["Özhan Metal Kalıp Sanayi Ltd. Şti. — Muratpasa Mah. Uluyol Iskent Sanayi Sitesi, D Blok No:64, Bayrampasa / Istanbul, Türkiye. E-mail: info@ozhanmetal.com, phone: +90 545 646 23 56."],
      },
      {
        h: "What we process",
        p: ["When you submit the quote form we process your name, e-mail address and phone number, plus your company name and message if you provide them. Browsing the site does not collect data that identifies you."],
      },
      {
        h: "Purpose and legal basis",
        p: ["The data is used only to assess your request and reply to you. The legal basis is the explicit consent you give when submitting the form."],
      },
      {
        h: "Transfers",
        p: ["Form submissions are delivered by e-mail to info@ozhanmetal.com. Your data is not sold, rented or transferred to third parties for marketing.", "The map on the contact page does not load until you press \"Load map\". Once you do, Google Maps loads and Google may set its own cookies."],
      },
      {
        h: "Retention",
        p: ["If no commercial relationship follows, your data is deleted within a reasonable period after your request is closed. If one does, statutory retention periods apply."],
      },
      {
        h: "Your rights",
        p: ["You may ask whether your data is processed, request correction or deletion, and object to processing. Write to info@ozhanmetal.com."],
      },
    ],
    backLabel: "Back to contact",
  },
} as const;

export default function LegalPage({ lang }: { lang: Lang }) {
  const t = L[lang];
  const contactPath = lang === "EN" ? "/en/contact" : "/iletisim";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar lang={lang} standalone />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-stone-50 pt-28 pb-12 md:pt-32 md:pb-14 px-6">
          <div aria-hidden className="absolute inset-0" style={blueprintGrid} />
          <div className="relative max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-amber-500" />
              <span className="font-medium text-[11px] uppercase tracking-[0.2em] text-amber-700">{t.eyebrow}</span>
            </div>
            <h1 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">{t.title}</h1>
            <p className="mt-3 font-medium text-[11px] uppercase tracking-[0.18em] text-stone-400">{t.updated}</p>
          </div>
        </section>

        <section className="py-12 md:py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-base leading-relaxed text-stone-600">{t.intro}</p>

            <div className="mt-10 space-y-9">
              {t.sections.map((s, i) => (
                <div key={s.h} className="border-t border-stone-900 pt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-medium text-[11px] text-amber-600">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="text-lg font-semibold tracking-tight text-stone-900">{s.h}</h2>
                  </div>
                  <div className="mt-3 space-y-3">
                    {s.p.map((para) => (
                      <p key={para} className="text-[15px] leading-relaxed text-stone-600">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={contactPath}
              className="mt-12 inline-flex items-center gap-2 text-[13px] font-medium text-amber-700 hover:text-amber-800 transition-colors"
            >
              &larr; {t.backLabel}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
