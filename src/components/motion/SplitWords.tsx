"use client";

import { m } from "motion/react";
import { ease } from "./Reveal";

type Props = {
  text: string;
  /** true: sayfa yüklenince; false: görünür alana girince. */
  onLoad?: boolean;
  delay?: number;
  stagger?: number;
};

/**
 * Başlığı kelime kelime, maskenin altından yukarı kaydırarak gösterir.
 * Ekran okuyucular için metnin tamamı ayrıca tek parça olarak verilir.
 */
export function SplitWords({ text, onLoad = false, delay = 0, stagger = 0.06 }: Props) {
  const words = text.split(" ");
  return (
    <>
      <span className="sr-only">{text}</span>
      <m.span
        aria-hidden="true"
        className="block"
        initial="hidden"
        {...(onLoad ? { animate: "show" } : { whileInView: "show", viewport: { once: true, amount: 0.4 } })}
        variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      >
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top">
            <m.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", rotate: 4 },
                show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease } },
              }}
            >
              {w}
            </m.span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </m.span>
    </>
  );
}
