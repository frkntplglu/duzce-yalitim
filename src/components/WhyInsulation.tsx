import { FacadeIcon, LayersIcon, ThermometerIcon } from "./Icons";
import { ImageReveal } from "./motion/ImageReveal";
import { Reveal, StaggerGroup, StaggerItem } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  {
    Icon: LayersIcon,
    title: "Isı kayıplarını azaltmaya yardımcı olur",
    text: "Dış duvarlara uygulanan yalıtım katmanı, ısının duvarlar üzerinden kaybolmasını sınırlamaya yardımcı olur.",
  },
  {
    Icon: ThermometerIcon,
    title: "İç mekân sıcaklık dengesini destekler",
    text: "Kışın içerideki sıcaklığın, yazın ise serinliğin daha dengeli korunmasına katkı sağlar.",
  },
  {
    Icon: FacadeIcon,
    title: "Dış cepheyi yeniler",
    text: "Uygulamanın son katlarıyla birlikte yapının dış görünümü de yenilenmiş olur.",
  },
];

export function WhyInsulation() {
  return (
    <section aria-labelledby="neden-baslik" className="bg-navy text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <figure className="order-2 lg:order-1 lg:col-span-5">
          <div className="overflow-hidden rounded-card bg-navy-soft">
            <ImageReveal curtainClass="bg-navy">
              <img
                src="/images/apartman-cephe-960.webp"
                srcSet="/images/apartman-cephe-640.webp 640w, /images/apartman-cephe-960.webp 960w, /images/apartman-cephe-1280.webp 1280w"
                sizes="(min-width: 1280px) 480px, (min-width: 1024px) 40vw, 100vw"
                width={1280}
                height={1600}
                alt="Balkonlu, açık renk sıvalı çok katlı bir apartmanın dış cephesi"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] h-auto w-full object-cover sm:aspect-[16/11] lg:aspect-[4/5]"
              />
            </ImageReveal>
          </div>
          <figcaption className="mt-3 text-xs text-paper/65">Temsilî görsel</figcaption>
        </figure>

        <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-7">
          <SectionHeading
            id="neden-baslik"
            eyebrow="Mantolama neden önemli?"
            title="Mevsimler değişsin, evinizin konforu sürsün."
            tone="light"
          />
          <Reveal as="p" delay={0.1} className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            Mantolama, binanın dış duvarlarının yalıtım levhaları ve koruyucu katmanlarla kaplanmasıdır. Doğru
            malzeme ve özenli uygulamayla hem evinizin konforuna hem de cephenizin görünümüne katkı sağlar.
          </Reveal>

          <StaggerGroup as="ul" stagger={0.12} className="mt-12 border-t border-line-light">
            {benefits.map(({ Icon, title, text }) => (
              <StaggerItem
                as="li"
                key={title}
                className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-line-light py-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-soft border border-line-light text-yellow">
                  <Icon width={22} height={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-paper">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-paper/75">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
