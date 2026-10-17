import { projectPhotos } from "@/lib/gallery";
import { SectionHeading } from "./SectionHeading";

// Yalnızca gerçek proje fotoğrafları eklendiğinde görünür (bkz. src/lib/gallery.ts).
export function ProjectGallery() {
  if (projectPhotos.length === 0) return null;

  return (
    <section aria-labelledby="galeri-baslik" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading id="galeri-baslik" eyebrow="Uygulamalarımızdan" title="Sahadan kareler." />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectPhotos.map((p) => (
            <li key={p.src}>
              <figure>
                <img
                  src={p.src}
                  width={p.width}
                  height={p.height}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] h-auto w-full rounded-card bg-sand object-cover"
                />
                {p.caption && <figcaption className="mt-3 text-sm text-muted">{p.caption}</figcaption>}
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
