"use client";

import { m, useReducedMotion, useScroll, useTransform, type TargetAndTransition } from "motion/react";
import { useRef, type ReactNode } from "react";
import { ease } from "./Reveal";

type Props = {
  children: ReactNode;
  /** true: sayfa yüklenince; false: görünür alana girince. */
  onLoad?: boolean;
  /** Kaydırırken görselin kayma miktarı (px). 0 ise paralaks yok. */
  parallax?: number;
  /** Görseli örten perdenin rengi (bölüm zeminine uygun Tailwind sınıfı). */
  curtainClass?: string;
};

/**
 * Görselin üstündeki perde aşağıdan yukarı doğru çekilir; görsel bu sırada büyükten normale oturur
 * ve sayfa kaydırıldıkça çerçevesi içinde yavaşça kayar (paralaks).
 * Görselin kendisi hiçbir zaman kırpılmaz/gizlenmez; yalnızca transform ve opacity kullanılır.
 * Kapsayıcı `overflow-hidden` olmalı.
 */
export function ImageReveal({ children, onLoad = false, parallax = 40, curtainClass = "bg-sand" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-parallax, parallax]);
  const restScale = parallax ? 1.12 : 1;

  const trigger = (to: TargetAndTransition) =>
    onLoad ? { animate: to } : { whileInView: to, viewport: { once: true, amount: 0.2 } };
  const delay = onLoad ? 0.2 : 0;

  return (
    <div ref={ref} className="relative">
      <m.div
        style={{ y }}
        initial={{ scale: 1.28, opacity: 0.4 }}
        {...trigger({ scale: restScale, opacity: 1 })}
        transition={{ duration: 1.6, ease, delay }}
      >
        {children}
      </m.div>
      <m.div
        aria-hidden="true"
        className={`absolute inset-0 origin-top ${curtainClass}`}
        initial={{ scaleY: 1 }}
        {...trigger({ scaleY: 0 })}
        transition={{ duration: 1.1, ease, delay }}
      />
    </div>
  );
}
