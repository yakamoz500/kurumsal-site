import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ozhan Metal | Sheet Metal Stamping & Tooling — Turkey",
  description:
    "Sheet metal stamping and tooling from Istanbul, Turkey. We build the die and run the press under one roof — contract manufacturing of stamped parts at tight tolerances since 1991.",
  openGraph: {
    title: "Ozhan Metal | Sheet Metal Stamping & Tooling — Turkey",
    description:
      "Sheet metal stamping and tooling from Istanbul, Turkey. We build the die and run the press under one roof — contract manufacturing of stamped parts at tight tolerances since 1991.",
    url: "https://ozhanmetal.com/en",
    siteName: "Ozhan Metal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozhan Metal | Sheet Metal Stamping & Tooling — Turkey",
    description:
      "Sheet metal stamping and tooling from Istanbul, Turkey. We build the die and run the press under one roof — contract manufacturing of stamped parts at tight tolerances since 1991.",
  },
  alternates: {
    canonical: "https://ozhanmetal.com/en",
    languages: {
      "tr": "https://ozhanmetal.com",
      "en": "https://ozhanmetal.com/en",
      "x-default": "https://ozhanmetal.com",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  // Kök <html> lang="tr" — İngilizce metinde `text-transform: uppercase`
  // Türkçe harf haritasını uygulayıp "SİNCE"/"PRECİSION" üretiyor. Bu sınır dili İngilizceye çeviriyor.
  return <div lang="en">{children}</div>;
}
