// İşletmeye ait tüm doğrulanmış bilgiler tek yerde tutulur.
// Buraya doğrulanmamış bilgi (adres, e-posta, kuruluş yılı vb.) eklemeyin.

export const site = {
  name: "Düzce Yalıtım ve Mantolama",
  shortName: "Düzce Yalıtım",
  title: "Düzce Yalıtım ve Mantolama | Ücretsiz Keşif",
  description:
    "Düzce’de dış cephe yalıtımı ve mantolama. Malzeme ve işçilik dahil uygulama seçenekleri ve ücretsiz keşif için iletişime geçin.",
  summary: "Düzce’de dış cephe ısı yalıtımı ve mantolama; malzeme ve işçilik dahil uygulama, ücretsiz keşif.",
  contacts: "Samet Çelebi ve Davut Sürmeli",
  region: "Düzce",
  instagram: {
    handle: "@duzceyalitim",
    url: "https://www.instagram.com/duzceyalitim/",
  },
  phones: [
    { label: "Telefon", display: "0543 442 11 61", href: "tel:+905434421161", e164: "+905434421161" },
    {
      label: "Alternatif telefon",
      display: "0533 271 81 25",
      href: "tel:+905332718125",
      e164: "+905332718125",
    },
  ],
} as const;

export const primaryPhone = site.phones[0];

// WhatsApp: ana numara üzerinden, hazır karşılama mesajıyla açılır.
const whatsappMessage = "Merhaba, dış cephe mantolama için ücretsiz keşif hakkında bilgi almak istiyorum.";
export const whatsappHref = `https://wa.me/905434421161?text=${encodeURIComponent(whatsappMessage)}`;

export const navLinks = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#surec", label: "Uygulama Süreci" },
  { href: "#iletisim", label: "İletişim" },
] as const;
