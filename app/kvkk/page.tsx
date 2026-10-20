import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Aydınlatma Metni | Özhan Metal",
  description:
    "6698 sayılı KVKK kapsamında ozhanmetal.com üzerinden ilettiğiniz kişisel verilerin nasıl işlendiğine dair aydınlatma metni.",
  alternates: {
    canonical: "https://ozhanmetal.com/kvkk",
    languages: {
      tr: "https://ozhanmetal.com/kvkk",
      en: "https://ozhanmetal.com/en/privacy",
      "x-default": "https://ozhanmetal.com/kvkk",
    },
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LegalPage lang="TR" />;
}
