"use client";

import { m, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

const viewport = { once: true, amount: 0.2 } as const;

type Tag = "div" | "li" | "ul" | "ol" | "figure" | "p" | "span";

type RevealProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delay?: number;
  y?: number;
};

/** Görünür alana girince bir kez, yukarı kayarak ve netleşerek belirir. */
export function Reveal({ children, as = "div", className, delay = 0, y = 44 }: RevealProps) {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={viewport}
      transition={{ duration: 0.85, ease, delay }}
    >
      {children}
    </Component>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: (stagger: number) => ({ transition: { staggerChildren: stagger, delayChildren: 0.05 } }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } },
};

type GroupProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  stagger?: number;
  /** true: sayfa yüklenince oynat (ilk ekran için); false: görünür alana girince. */
  onLoad?: boolean;
};

/** Çocuk StaggerItem'ları sırayla gösterir. */
export function StaggerGroup({
  children,
  as = "div",
  className,
  stagger = 0.12,
  onLoad = false,
}: GroupProps) {
  const Component = m[as];
  return (
    <Component
      className={className}
      variants={groupVariants}
      custom={stagger}
      initial="hidden"
      {...(onLoad ? { animate: "show" } : { whileInView: "show", viewport })}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  as = "div",
  className,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
}) {
  const Component = m[as];
  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}

/**
 * Soldan sağa çizilen ince çizgi. Bir StaggerGroup/StaggerItem içinde kullanıldığında
 * ebeveynin "show" durumunu devralır; tek başına kullanıldığında görünür alana girince çizilir.
 */
export function LineDraw({
  className = "",
  standalone = false,
}: {
  className?: string;
  standalone?: boolean;
}) {
  return (
    <m.span
      aria-hidden="true"
      className={`block origin-left ${className}`}
      variants={{
        hidden: { scaleX: 0 },
        show: { scaleX: 1, transition: { duration: 1, ease } },
      }}
      {...(standalone ? { initial: "hidden", whileInView: "show", viewport } : {})}
    />
  );
}
