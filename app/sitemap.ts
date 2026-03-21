import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ozhanmetal.com";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/en`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/#urunlerimiz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/#hizmetler`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/#hakkimizda`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/#iletisim`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];
}
