import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Özhan Metal | Metal Kesme Kalıpları",
  description:
    "1991 yılından bu yana metal kesme ve enjeksiyon kalıp üretiminde yüksek hassasiyet ve düşük toleransla üretim yapan güvenilir çözüm ortağınız.",
  openGraph: {
    title: "Özhan Metal | Metal Kesme Kalıpları",
    description:
      "1991 yılından bu yana metal kesme ve enjeksiyon kalıp üretiminde yüksek hassasiyet ve düşük toleransla üretim yapan güvenilir çözüm ortağınız.",
    url: "https://ozhanmetal.com",
    siteName: "Özhan Metal",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Özhan Metal | Metal Kesme Kalıpları",
    description:
      "1991 yılından bu yana metal kesme ve enjeksiyon kalıp üretiminde yüksek hassasiyet ve düşük toleransla üretim yapan güvenilir çözüm ortağınız.",
  },
  metadataBase: new URL("https://ozhanmetal.com"),
  alternates: {
    canonical: "https://ozhanmetal.com",
    languages: {
      "tr": "https://ozhanmetal.com",
      "en": "https://ozhanmetal.com/en",
      "x-default": "https://ozhanmetal.com",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ManufacturingBusiness",
      "@id": "https://ozhanmetal.com/#business",
      "name": "Özhan Metal Kalıp Sanayi Ltd.",
      "alternateName": "Özhan Metal",
      "url": "https://ozhanmetal.com",
      "logo": "https://ozhanmetal.com/icon.svg",
      "image": "https://ozhanmetal.com/header_1.jpeg",
      "description": "1991 yılından bu yana metal kesme ve enjeksiyon kalıp üretiminde yüksek hassasiyet ve düşük toleransla üretim yapan güvenilir çözüm ortağı.",
      "foundingDate": "1991",
      "telephone": "+90-545-646-23-56",
      "email": "info@ozhanmetal.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Muratpaşa Mahallesi, Uluyol İşkent Sanayi Sitesi, D Blok No:64",
        "addressLocality": "Başakşehir",
        "addressRegion": "İstanbul",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.050258,
        "longitude": 28.9097572
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "19:00"
      },
      "sameAs": [
        "https://www.facebook.com/ozhanmetal",
        "https://www.linkedin.com/company/ozhan-metal"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Ürün ve Hizmetler",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Progresif Kalıp İmalatı" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kesme Kalıbı İmalatı" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enjeksiyon Kalıbı İmalatı" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CNC Tel Erozyon" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pres Baskı" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Montaj & İmalat" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://ozhanmetal.com/#website",
      "url": "https://ozhanmetal.com",
      "name": "Özhan Metal",
      "inLanguage": ["tr-TR", "en-US"],
      "publisher": { "@id": "https://ozhanmetal.com/#business" }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
