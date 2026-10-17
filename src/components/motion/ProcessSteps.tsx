"use client";

import { m } from "motion/react";
import { ease } from "./Reveal";

type Step = { title: string; text: string };

const viewport = { once: true, amount: 0.3 } as const;
const STEP_DELAY = 0.28;

/** Adımlar sırayla belirir; aralarındaki çizgi bir sonraki adıma doğru çizilir. */
export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <m.ol
      className="mt-14 grid gap-0 lg:mt-20 lg:grid-cols-4 lg:gap-8"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {steps.map((s, i) => {
        const delay = i * STEP_DELAY;
        const isLast = i === steps.length - 1;
        return (
          <li
            key={s.title}
            className="relative grid grid-cols-[3rem_1fr] gap-5 pb-10 last:pb-0 lg:block lg:pb-0"
          >
            {!isLast && (
              <>
                {/* Mobil: dikey çizgi */}
                <m.span
                  aria-hidden="true"
                  className="absolute bottom-0 left-6 top-12 w-px origin-top bg-navy/20 lg:hidden"
                  variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1 } }}
                  transition={{ duration: 0.8, ease, delay: delay + 0.3 }}
                />
                {/* Masaüstü: yatay çizgi */}
                <m.span
                  aria-hidden="true"
                  className="absolute -right-6 left-14 top-6 hidden h-px origin-left bg-navy/20 lg:block"
                  variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
                  transition={{ duration: 0.8, ease, delay: delay + 0.3 }}
                />
              </>
            )}

            <m.span
              className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border font-display text-base font-bold tabular-nums ${
                i === 0 ? "border-yellow bg-yellow text-navy" : "border-navy/25 bg-paper text-navy"
              }`}
              variants={{ hidden: { opacity: 0, scale: 0.6 }, show: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.6, ease, delay }}
            >
              {i + 1}
            </m.span>

            <m.div
              className="pt-2.5 lg:pt-7"
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease, delay: delay + 0.08 }}
            >
              <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-navy">{s.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-muted">{s.text}</p>
            </m.div>
          </li>
        );
      })}
    </m.ol>
  );
}
