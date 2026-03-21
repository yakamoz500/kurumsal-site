import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ozhan Metal | Metal Cutting Dies",
  description:
    "Your trusted solution partner in metal cutting and injection mold production with high precision and low tolerance since 1991.",
  openGraph: {
    title: "Ozhan Metal | Metal Cutting Dies",
    description:
      "Your trusted solution partner in metal cutting and injection mold production with high precision and low tolerance since 1991.",
    url: "https://ozhanmetal.com/en",
    siteName: "Ozhan Metal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozhan Metal | Metal Cutting Dies",
    description:
      "Your trusted solution partner in metal cutting and injection mold production with high precision and low tolerance since 1991.",
  },
  alternates: {
    languages: {
      tr: "https://ozhanmetal.com",
      en: "https://ozhanmetal.com/en",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
