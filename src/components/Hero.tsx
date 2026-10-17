import { primaryPhone } from "@/lib/site";
import { ArrowDownIcon, PhoneIcon } from "./Icons";
import { ImageReveal } from "./motion/ImageReveal";
import { Reveal, StaggerGroup, StaggerItem } from "./motion/Reveal";
import { SplitWords } from "./motion/SplitWords";

export function Hero() {
  return (
    <section aria-labelledby="hero-baslik" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
        <StaggerGroup onLoad stagger={0.09} className="flex flex-col justify-center lg:col-span-6 lg:pr-6">
          <StaggerItem as="p" className="flex items-center gap-3 text-sm font-semibold text-navy">
            <span aria-hidden="true" className="h-[2px] w-8 bg-yellow" />
            Düzce{" "}
            <span aria-hidden="true" className="text-yellow-deep">
              •
            </span>{" "}
            Dış Cephe Yalıtımı ve Mantolama
          </StaggerItem>

          <h1
            id="hero-baslik"
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.035em] text-navy sm:text-6xl lg:text-[4.4rem]"
          >
            <SplitWords
              text="Evinize konfor, cephenize yeni bir görünüm."
              onLoad
              delay={0.2}
              stagger={0.07}
            />
          </h1>

          <StaggerItem as="p" className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Dış cephe yalıtımı ve mantolama ihtiyaçlarınız için malzeme ve işçilik dahil uygulama seçenekleri.
            Ücretsiz keşif için bizimle iletişime geçin.
          </StaggerItem>

          <StaggerItem className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={primaryPhone.href}
              className="focus-on-light inline-flex items-center justify-center gap-2.5 btn-lift rounded-soft bg-yellow px-7 py-4 text-base font-semibold text-navy transition-colors hover:bg-yellow-deep"
            >
              <PhoneIcon width={19} height={19} className="phone-ring" />
              Ücretsiz Keşif İçin Ara
            </a>
            <a
              href="#hizmetler"
              className="focus-on-light inline-flex items-center justify-center gap-2.5 btn-lift rounded-soft border border-navy/25 px-7 py-4 text-base font-semibold text-navy transition-colors hover:border-navy"
            >
              Hizmetleri İncele
              <ArrowDownIcon width={18} height={18} />
            </a>
          </StaggerItem>

          <StaggerItem
            as="ul"
            className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-6 text-[0.95rem] font-medium text-navy/85"
          >
            <li>Ücretsiz keşif</li>
            <li aria-hidden="true" className="text-yellow-deep">
              •
            </li>
            <li>Malzeme ve işçilik dahil</li>
            <li aria-hidden="true" className="text-yellow-deep">
              •
            </li>
            <li>Düzce’de hizmet</li>
          </StaggerItem>
        </StaggerGroup>

        <figure className="relative lg:col-span-6">
          <div className="relative overflow-hidden rounded-card bg-sand">
            <ImageReveal onLoad parallax={50} curtainClass="bg-paper">
              <img
                src="/images/cephe-yalitim-960.webp"
                srcSet="/images/cephe-yalitim-640.webp 640w, /images/cephe-yalitim-960.webp 960w, /images/cephe-yalitim-1280.webp 1280w"
                sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw"
                width={1280}
                height={1600}
                alt="Yalıtım levhalarıyla kaplanmış bir dış cephede halatla çalışan, baretli bir uygulama işçisi"
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] h-auto w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              />
            </ImageReveal>
          </div>
          <Reveal
            as="p"
            delay={0.6}
            y={0}
            className="mt-3 flex items-center justify-between gap-4 text-xs text-muted"
          >
            <span>Temsilî görsel</span>
            <span>Dış cephe yalıtım levhası uygulaması</span>
          </Reveal>
        </figure>
      </div>
    </section>
  );
}
