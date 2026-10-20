import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Notice | Ozhan Metal",
  description:
    "How information you send through ozhanmetal.com is handled under Turkish data protection law (KVKK, Law No. 6698).",
  alternates: {
    canonical: "https://ozhanmetal.com/en/privacy",
    languages: {
      tr: "https://ozhanmetal.com/kvkk",
      en: "https://ozhanmetal.com/en/privacy",
      "x-default": "https://ozhanmetal.com/kvkk",
    },
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LegalPage lang="EN" />;
}
