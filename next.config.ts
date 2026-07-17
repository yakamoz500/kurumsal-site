import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self'",
      "frame-src https://www.google.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Önceki sitenin URL'leri Google'da hâlâ indeksli ve 404 veriyordu
  // (ör. "Kapı Kilitleri – ÖZHAN METAL" sonucuna tıklayan 404 görüyordu).
  // 301 ile karşılığına taşıyoruz: hem ziyaretçi doğru yere düşer, hem o
  // sayfaların biriktirdiği arama değeri yeni sayfaya aktarılır.
  async redirects() {
    return [
      // Ürün sayfaları ve tüm alt kırılımları (kapi-kilitleri, menteseler, ...)
      { source: "/urunler", destination: "/#urunlerimiz", permanent: true },
      { source: "/urunler/:slug*", destination: "/#urunlerimiz", permanent: true },
      { source: "/hizmetlerimiz", destination: "/#yeteneklerimiz", permanent: true },
      { source: "/hizmetlerimiz/:slug*", destination: "/#yeteneklerimiz", permanent: true },
      { source: "/hakkimizda", destination: "/#hakkimizda", permanent: true },
      { source: "/iletisim", destination: "/#iletisim", permanent: true },
      // İngilizce karşılıkları
      { source: "/en/products", destination: "/en#urunlerimiz", permanent: true },
      { source: "/en/products/:slug*", destination: "/en#urunlerimiz", permanent: true },
      { source: "/en/services", destination: "/en#yeteneklerimiz", permanent: true },
      { source: "/en/services/:slug*", destination: "/en#yeteneklerimiz", permanent: true },
      { source: "/en/about", destination: "/en#hakkimizda", permanent: true },
      { source: "/en/contact", destination: "/en#iletisim", permanent: true },
    ];
  },
};

export default nextConfig;
