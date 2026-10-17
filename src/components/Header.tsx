"use client";

import { AnimatePresence, m, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks, primaryPhone } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";
import { Logo } from "./Logo";
import { ease } from "./motion/Reveal";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  // Aşağı kaydırınca menü gizlenir, yukarı kaydırınca geri gelir.
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > 160 && y > prev);
  });

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    // Masaüstü genişliğe geçilirse menüyü kapat
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && close();

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open, close]);

  return (
    <m.header
      className="sticky top-0 z-50 border-b border-line bg-paper"
      initial={{ y: "-100%" }}
      animate={{ y: hidden && !open ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease }}
      onFocusCapture={() => setHidden(false)}
    >
      <m.span
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-[2px] origin-left bg-yellow"
        style={{ scaleX: progress }}
      />
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#"
          className="focus-on-light shrink-0 rounded-soft"
          aria-label="Düzce Yalıtım ve Mantolama — sayfa başına dön"
        >
          <Logo />
        </a>

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="focus-on-light text-[0.95rem] font-medium text-navy/80 underline-offset-[6px] transition-colors hover:text-navy hover:underline hover:decoration-yellow hover:decoration-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={primaryPhone.href}
            className="focus-on-light hidden items-center gap-2 btn-lift rounded-soft bg-yellow px-5 py-3 text-[0.95rem] font-semibold text-navy transition-colors hover:bg-yellow-deep sm:inline-flex"
          >
            <PhoneIcon width={18} height={18} />
            Ücretsiz Keşif İçin Ara
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="focus-on-light inline-flex h-11 w-11 items-center justify-center rounded-soft border border-line text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
            key="mobil-menu"
            id="mobil-menu"
            ref={panelRef}
            className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-paper lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
            transition={{ duration: 0.3, ease }}
          >
            <nav aria-label="Mobil menü" className="mx-auto max-w-7xl px-5 pb-8 pt-2 sm:px-8">
              <ul>
                {navLinks.map((l, i) => (
                  <m.li
                    key={l.href}
                    className="border-b border-line"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease, delay: 0.06 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => close()}
                      className="focus-on-light flex items-center justify-between py-5 font-display text-2xl font-bold tracking-tight text-navy"
                    >
                      {l.label}
                      <span aria-hidden="true" className="h-[2px] w-6 bg-yellow" />
                    </a>
                  </m.li>
                ))}
              </ul>
              <a
                href={primaryPhone.href}
                onClick={() => close()}
                className="focus-on-light mt-8 flex items-center justify-center gap-2 btn-lift rounded-soft bg-yellow px-5 py-4 text-base font-semibold text-navy"
              >
                <PhoneIcon width={18} height={18} />
                Ücretsiz Keşif İçin Ara
              </a>
              <p className="mt-3 text-center text-sm text-muted">{primaryPhone.display}</p>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
