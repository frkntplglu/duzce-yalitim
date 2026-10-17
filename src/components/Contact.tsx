import { site } from "@/lib/site";
import { ArrowUpRightIcon, InstagramIcon, MapPinIcon, PhoneIcon } from "./Icons";
import { LineDraw, StaggerGroup, StaggerItem } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="iletisim" aria-labelledby="iletisim-baslik" className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-5">
          <SectionHeading
            id="iletisim-baslik"
            eyebrow="İletişim"
            title="Eviniz için ilk adımı birlikte atalım."
          />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Ücretsiz keşif talebiniz için bizi arayın. Yapınızın konumunu ve ihtiyacınızı paylaşmanız yeterli.
          </p>

          <dl className="mt-10 space-y-5 border-t border-line pt-8">
            <div>
              <dt className="text-sm font-medium text-muted">İlgili kişiler</dt>
              <dd className="mt-1 font-display text-lg font-bold text-navy">{site.contacts}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted">Hizmet bölgesi</dt>
              <dd className="mt-1 flex items-center gap-2 font-display text-lg font-bold text-navy">
                <MapPinIcon width={18} height={18} className="text-navy/70" />
                {site.region}
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <StaggerGroup as="ul" stagger={0.1} className="border-t border-navy/25">
            {site.phones.map((p) => (
              <StaggerItem as="li" key={p.href}>
                <a
                  href={p.href}
                  className="focus-on-light group flex items-center justify-between gap-4 py-7 sm:py-9"
                >
                  <span>
                    <span className="block text-sm font-medium text-muted">{p.label}</span>
                    <span className="mt-1 block font-display text-[1.9rem] font-extrabold tabular-nums tracking-[-0.02em] text-navy transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl">
                      {p.display}
                    </span>
                  </span>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-yellow text-navy transition-[background-color,transform] duration-300 group-hover:scale-110 group-hover:bg-yellow-deep sm:h-16 sm:w-16">
                    <PhoneIcon width={24} height={24} className="phone-ring-hover" />
                    <span className="sr-only">Ara</span>
                  </span>
                </a>
                <LineDraw className="h-px bg-navy/15" />
              </StaggerItem>
            ))}
            <StaggerItem as="li">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-on-light group flex items-center justify-between gap-4 py-7"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/25 text-navy">
                    <InstagramIcon width={20} height={20} />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-muted">Instagram</span>
                    <span className="block font-display text-xl font-bold text-navy">
                      {site.instagram.handle}
                    </span>
                  </span>
                </span>
                <ArrowUpRightIcon
                  width={22}
                  height={22}
                  className="text-navy/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                <span className="sr-only">(yeni sekmede açılır)</span>
              </a>
              <LineDraw className="h-px bg-navy/15" />
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
