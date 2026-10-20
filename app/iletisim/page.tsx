import type { Metadata } from "next";
import ContactPage from "../components/ContactPage";
import { FAQ } from "../components/faqData";

export const metadata: Metadata = {
  title: "İletişim | Özhan Metal — Bayrampaşa, İstanbul",
  description:
    "Özhan Metal kalıp atölyesi iletişim bilgileri: adres, telefon, e-posta ve çalışma saatleri. Bayrampaşa / İstanbul. Teknik resminizi gönderin, size dönelim.",
  alternates: {
    canonical: "https://ozhanmetal.com/iletisim",
    languages: {
      tr: "https://ozhanmetal.com/iletisim",
      en: "https://ozhanmetal.com/en/contact",
      "x-default": "https://ozhanmetal.com/iletisim",
    },
  },
  openGraph: {
    title: "İletişim | Özhan Metal",
    description: "Adres, telefon ve çalışma saatleri — Bayrampaşa / İstanbul.",
    url: "https://ozhanmetal.com/iletisim",
    siteName: "Özhan Metal",
    locale: "tr_TR",
    type: "website",
  },
};


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.TR.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      {/* Şema, sayfadaki görünen soru-cevapların aynısı — ayrışmasın diye
          ikisi de faqData'dan okuyor. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactPage lang="TR" />
    </>
  );
}
