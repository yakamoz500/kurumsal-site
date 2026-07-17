import { MetadataRoute } from "next";

const baseUrl = "https://ozhanmetal.com";

// İçeriğin son gerçekten değiştiği tarih — elle güncellenir.
// `new Date()` değil: her build'de değişip Google'a "sayfa güncellendi" diye
// yanlış sinyal veriyordu. Sürekli yalan söyleyen lastmod, zamanla dikkate
// alınmaz hale gelir.
const lastContentUpdate = new Date("2026-07-17");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: lastContentUpdate, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/en`, lastModified: lastContentUpdate, changeFrequency: "monthly", priority: 0.9 },
  ];
}
