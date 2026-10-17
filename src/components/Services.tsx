import { LineDraw, Reveal, StaggerGroup, StaggerItem } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    title: "Dış Cephe Isı Yalıtımı",
    text: "Isı kayıplarını azaltmaya ve iç mekân konforunu desteklemeye yönelik uygulamalar.",
  },
  {
    title: "Mantolama Uygulamaları",
    text: "Yapının ihtiyacına uygun malzeme ve uygulama seçeneklerinin keşif sırasında değerlendirilmesi.",
  },
  {
    title: "Malzeme ve İşçilik Dahil Çözüm",
    text: "İş kapsamının, malzeme seçiminin ve uygulama planının birlikte belirlenmesi.",
  },
];

export function Services() {
  return (
    <section id="hizmetler" aria-labelledby="hizmetler-baslik" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="hizmetler-baslik"
            eyebrow="Hizmetler"
            title="Dış cepheniz için yalıtım ve mantolama."
            className="lg:col-span-7"
          />
          <Reveal
            as="p"
            delay={0.1}
            className="max-w-md text-lg leading-relaxed text-muted lg:col-span-5 lg:justify-self-end"
          >
            Düzce’de dış cephe ısı yalıtımı ve mantolama işlerinde keşiften uygulamaya kadar yanınızdayız.
          </Reveal>
        </div>

        <StaggerGroup as="ol" stagger={0.18} className="mt-14 grid gap-0 md:grid-cols-3 md:gap-10 lg:mt-20">
          {services.map((s, i) => (
            <StaggerItem as="li" key={s.title} className="group relative pb-8 md:pb-0">
              <LineDraw className="mb-8 h-px bg-navy/25" />
              <span className="font-display text-sm font-bold tabular-nums text-navy">
                <span
                  aria-hidden="true"
                  className="mr-2 inline-block h-2 w-2 rounded-full bg-yellow align-middle"
                />
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em] text-navy transition-transform duration-300 group-hover:translate-x-1">
                {s.title}
              </h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">{s.text}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
