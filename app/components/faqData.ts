import type { Lang } from "./SitePage";

/** SSS içeriği. Hem iletişim sayfası hem FAQPage şema işaretlemesi buradan
 *  okuyor — ikisi ayrı yerde yazılırsa er geç birbirinden ayrışır.
 *
 *  KURAL: yalnızca doğrulanmış bilgiler. Dosya formatı, yurt dışı gönderim
 *  ve gizlilik sözleşmesi cevapları 2026-10-20'de kullanıcıdan alındı.
 *  Minimum sipariş adedi ve termin bilerek YOK: kullanıcı "bu konuya gelene
 *  kadar birkaç aşama var" dedi. Tolerans da yok (B2 verisi bekliyor). */
export const FAQ: Record<Lang, { q: string; a: string }[]> = {
  TR: [
    {
      q: "Sadece kalıp mı yapıyorsunuz, parça da teslim ediyor musunuz?",
      a: "İkisini de yapıyoruz. Kalıbınızı sıfırdan tasarlayıp imal ediyoruz; isterseniz seri baskıyı kendi eksantrik preslerimizde alıp size parça olarak teslim ediyoruz. Böylece kalıbı dışarıdan alan bir presçiyle çalışmak yerine tek muhatapla ilerliyorsunuz.",
    },
    {
      q: "Sertleştirilmiş malzeme işleyebiliyor musunuz?",
      a: "Evet. Delik delme EDM, CNC tel erozyon ve dalma erozyon tezgahlarımız var. Matkabın ve frezenin işleyemediği sertleştirilmiş çelikte profil kesiyor, cep ve delik açıyoruz — yani ısıl işlem sonrasında da işleme yapılabiliyor.",
    },
    {
      q: "Hangi işlemler sizin atölyenizde yapılıyor?",
      a: "On üç kabiliyet, altı proses ailesi: talaşlı imalat (freze, torna), erozyon, taşlama, kesme, şekillendirme (eksantrik pres 15–60 ton, rolform) ve birleştirme (perçin, gaz altı kaynak). Parça ham çubuktan montajlı hale gelene kadar aynı atölyede ilerliyor.",
    },
    {
      q: "Montajlı ürün teslim ediyor musunuz?",
      a: "Evet. Perçin ve gaz altı kaynakla birleştirme yapıyor, montaj ve imalat süreçlerini uçtan uca yürütüyoruz. Kendi ürünümüz olan polis kelepçesini de tasarımından montajına kadar bu atölyede üretiyoruz.",
    },
    {
      q: "Teklif alabilmem için ne göndermem gerekiyor?",
      a: "Teknik resminizi ya da numunenizi paylaşmanız yeterli. Kalıp tipi, adet ve tolerans ihtiyacınızı yazarsanız dönüşümüz daha net olur. Elinizde çizim yoksa parçayı anlatmanız da bir başlangıç olur.",
    },
    {
      q: "Hangi dosya formatlarını kabul ediyorsunuz?",
      a: "Teknik resmi DWG veya PDF olarak gönderebilirsiniz. Fiziksel numune de kabul ediyoruz; elinizde çizim yoksa parçanın kendisi yeterli.",
    },
    {
      q: "Yurt dışına gönderim yapıyor musunuz?",
      a: "Evet, ülke kısıtımız yok. Nakliye ve teslim şekli siparişe göre konuşuluyor.",
    },
    {
      q: "Gizlilik sözleşmesi imzalıyor musunuz?",
      a: "Gerekiyorsa imzalıyoruz. Teklif isterken belirtmeniz yeterli.",
    },
    {
      q: "Nerede üretim yapıyorsunuz?",
      a: "Bayrampaşa / İstanbul'da, Uluyol İşkent Sanayi Sitesi'ndeyiz. Açık adres ve çalışma saatleri bu sayfanın başında, harita aşağıda.",
    },
    {
      q: "Ne zamandır bu işi yapıyorsunuz?",
      a: "1991'den bu yana kalıp imalatı yapıyoruz.",
    },
  ],
  EN: [
    {
      q: "Do you only make tooling, or do you deliver parts as well?",
      a: "Both. We design and build the die from scratch, and if you prefer, we run the series on our own eccentric presses and deliver finished parts. That way you deal with one supplier instead of a stamper who buys tooling from a third party.",
    },
    {
      q: "Can you machine hardened material?",
      a: "Yes. We run hole drilling EDM, CNC wire EDM and sinker EDM. In hardened steel — where drills and end mills cannot cut — we cut profiles and burn pockets and holes, so machining after heat treatment is possible.",
    },
    {
      q: "Which operations happen in your own workshop?",
      a: "Thirteen capabilities across six process families: machining (milling, turning), EDM, grinding, cutting, forming (eccentric presses 15–60 tonnes, roll forming) and joining (riveting, MIG/MAG welding). A part moves from raw bar to finished assembly inside the same workshop.",
    },
    {
      q: "Do you deliver assembled products?",
      a: "Yes. We join parts by riveting and MIG/MAG welding and carry assembly and fabrication end to end. Our own product, police handcuffs, is produced here from design through assembly.",
    },
    {
      q: "What do I need to send to get a quote?",
      a: "Your technical drawing or a sample is enough. Telling us the tool type, volume and tolerance you need makes our reply more precise. If you have no drawing, describing the part is a starting point.",
    },
    {
      q: "Which file formats do you accept?",
      a: "Send the drawing as DWG or PDF. We also accept a physical sample; if you have no drawing, the part itself is enough.",
    },
    {
      q: "Do you ship abroad?",
      a: "Yes, with no country restriction. Shipping and delivery terms are agreed per order.",
    },
    {
      q: "Do you sign a non-disclosure agreement?",
      a: "We sign one if it is needed. Just mention it when you ask for a quote.",
    },
    {
      q: "Where do you manufacture?",
      a: "In Bayrampasa, Istanbul, Türkiye — at the Uluyol Iskent industrial estate. The full address and working hours are at the top of this page, and the map is below.",
    },
    {
      q: "How long have you been doing this?",
      a: "We have been making dies since 1991.",
    },
  ],
};
