"use client";

import { m } from "motion/react";
import { ease } from "./motion/Reveal";
import { SplitWords } from "./motion/SplitWords";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, tone = "dark", className = "" }: Props) {
  const isDark = tone === "dark";
  return (
    <div className={className}>
      <m.p
        className={`flex items-center gap-3 text-sm font-semibold ${isDark ? "text-navy" : "text-paper"}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        <m.span
          aria-hidden="true"
          className="h-[2px] w-8 origin-left bg-yellow"
          variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.7, ease } } }}
        />
        <m.span
          variants={{
            hidden: { opacity: 0, x: -12 },
            show: { opacity: 1, x: 0, transition: { duration: 0.6, ease, delay: 0.2 } },
          }}
        >
          {eyebrow}
        </m.span>
      </m.p>
      <h2
        id={id}
        className={`mt-5 font-display text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl ${
          isDark ? "text-navy" : "text-paper"
        }`}
      >
        <SplitWords text={title} delay={0.15} />
      </h2>
    </div>
  );
}
