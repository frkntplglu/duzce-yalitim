// Yalnızca işletmenin kendi tamamladığı işlerin GERÇEK fotoğrafları buraya eklenir.
// Stok veya yapay zekâ görselleri eklemeyin. Liste boş kaldığı sürece galeri bölümü sayfada görünmez.
//
// Örnek:
// { src: "/images/projeler/ornek-1.webp", width: 1200, height: 1500,
//   alt: "Mantolama uygulaması yapılmış iki katlı konut cephesi", caption: "Merkez, Düzce" }

export type ProjectPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export const projectPhotos: ProjectPhoto[] = [];
