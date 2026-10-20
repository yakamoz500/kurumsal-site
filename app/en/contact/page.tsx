import type { Metadata } from "next";
import ContactPage from "../../components/ContactPage";
import { FAQ } from "../../components/faqData";

export const metadata: Metadata = {
  title: "Contact | Ozhan Metal — Istanbul, Türkiye",
  description:
    "Contact details for Ozhan Metal's die shop in Istanbul, Türkiye: address, phone, e-mail and working hours. Send a drawing and we will come back to you.",
  alternates: {
    canonical: "https://ozhanmetal.com/en/contact",
    languages: {
      tr: "https://ozhanmetal.com/iletisim",
      en: "https://ozhanmetal.com/en/contact",
      "x-default": "https://ozhanmetal.com/iletisim",
    },
  },
  openGraph: {
    title: "Contact | Ozhan Metal",
    description: "Address, phone and working hours — Istanbul, Türkiye.",
    url: "https://ozhanmetal.com/en/contact",
    siteName: "Ozhan Metal",
    locale: "en_US",
    type: "website",
  },
};


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.EN.map((f) => ({
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
      <ContactPage lang="EN" />
    </>
  );
}
