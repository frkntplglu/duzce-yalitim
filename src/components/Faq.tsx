"use client";

import { m } from "motion/react";
import { useId, useState } from "react";
import { PlusIcon } from "./Icons";
import { ease, LineDraw, StaggerGroup, StaggerItem } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "Ücretsiz keşif için nasıl iletişime geçebilirim?",
    a: "Sayfadaki telefon numaralarından birini arayarak keşif talebinizi iletebilirsiniz. Görüşmede yapınızın konumunu ve ihtiyacınızı paylaşmanız yeterlidir.",
  },
  {
    q: "Mantolama fiyatı nasıl belirlenir?",
    a: "Fiyat; uygulama yapılacak cephe alanına, yapının durumuna, seçilen malzemeye ve iş kapsamına göre değişir. Net fiyat, keşif sonrasında hazırlanan teklifle belirlenir.",
  },
  {
    q: "Malzeme ve işçilik birlikte sunuluyor mu?",
    a: "Evet, malzeme ve işçilik dahil uygulama seçeneği sunulmaktadır. Kapsam ve malzeme tercihleri teklif aşamasında birlikte netleştirilir.",
  },
  {
    q: "Hangi yalıtım malzemesi tercih edilmeli?",
    a: "Bu tercih yapının özelliklerine, beklentilerinize ve bütçenize göre değişir. Uygun seçenekler keşif sırasında yapınız üzerinde değerlendirilir.",
  },
  {
    q: "Uygulama süresi neye göre değişir?",
    a: "Süre; cephe alanına, yapının yüksekliği ve durumuna, iş kapsamına ve hava koşullarına göre değişir. Tahmini süre, keşif ve teklif aşamasında paylaşılır.",
  },
];

export function Faq() {
  // Aynı anda tek soru açık kalır; ilk soru açık başlar.
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section aria-labelledby="sss-baslik" className="border-t border-line bg-sand/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-4">
          <SectionHeading id="sss-baslik" eyebrow="Sık sorulan sorular" title="Aklınızdaki sorular." />
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            Yanıtını bulamadığınız bir konu olursa bizi arayarak sorabilirsiniz.
          </p>
        </div>

        <StaggerGroup stagger={0.08} className="lg:col-span-8">
          <LineDraw className="h-px bg-navy/25" />
          {faqs.map((f, i) => {
            const open = openIndex === i;
            const buttonId = `${baseId}-soru-${i}`;
            const panelId = `${baseId}-yanit-${i}`;
            return (
              <StaggerItem key={f.q}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="focus-on-light group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`font-display text-lg font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 sm:text-xl ${
                        open ? "text-navy" : "text-navy/80 group-hover:text-navy"
                      }`}
                    >
                      {f.q}
                    </span>
                    <m.span
                      aria-hidden="true"
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-navy"
                      initial={false}
                      animate={{
                        rotate: open ? 135 : 0,
                        backgroundColor: open ? "#F4B41B" : "rgba(244,180,27,0)",
                        borderColor: open ? "#F4B41B" : "rgba(20,40,63,0.25)",
                      }}
                      transition={{ duration: 0.45, ease }}
                    >
                      <PlusIcon width={16} height={16} />
                    </m.span>
                  </button>
                </h3>

                {/* Yanıt kapalıyken de HTML'de kalır (arama motorları için); yalnızca gizlenir ve odaklanılamaz. */}
                <m.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!open}
                  inert={!open}
                  className="overflow-hidden"
                  initial={false}
                  animate={open ? "open" : "closed"}
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    closed: { height: 0, opacity: 0 },
                  }}
                  transition={{ height: { duration: 0.5, ease }, opacity: { duration: 0.35, ease } }}
                >
                  <m.p
                    className="max-w-2xl pb-7 pr-12 leading-relaxed text-muted"
                    variants={{ open: { y: 0 }, closed: { y: -10 } }}
                    transition={{ duration: 0.5, ease }}
                  >
                    {f.a}
                  </m.p>
                </m.div>
                <span aria-hidden="true" className="block h-px bg-navy/15" />
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
