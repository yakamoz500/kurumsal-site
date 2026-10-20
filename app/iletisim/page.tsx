import type { Metadata } from "next";
import ContactPage from "../components/ContactPage";

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

export default function Page() {
  return <ContactPage lang="TR" />;
}
