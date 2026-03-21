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
    languages: {
      tr: "https://ozhanmetal.com",
      en: "https://ozhanmetal.com/en",
    },
  },
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
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
