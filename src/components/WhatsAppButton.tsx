"use client";

import { m } from "motion/react";
import { whatsappHref } from "@/lib/site";
import { ease } from "./motion/Reveal";

export function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.6 2 2.17 6.43 2.17 11.87c0 1.74.46 3.44 1.32 4.94L2.1 22l5.32-1.39a9.86 9.86 0 0 0 4.62 1.18h.01c5.44 0 9.87-4.43 9.87-9.87a9.8 9.8 0 0 0-2.87-7.01Zm-7.01 15.2h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.16.83.84-3.08-.2-.32a8.17 8.17 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.21-8.2a8.2 8.2 0 0 1 8.2 8.21c0 4.52-3.68 8.2-8.15 8.25Zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

/**
 * Sağ alt köşede sabit, etiketi her zaman açık WhatsApp butonu. Sayfa açıldıktan kısa süre sonra
 * sağdan kayarak gelir. Yalnızca masaüstünde; mobilde WhatsApp alttaki iletişim çubuğunda yer alır.
 */
export function WhatsAppButton() {
  return (
    <m.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-on-light btn-lift fixed bottom-6 right-6 z-40 hidden h-14 items-center gap-2.5 rounded-full bg-[#0D7A5F] pl-4 pr-6 text-white shadow-[0_6px_20px_-6px_rgb(20_40_63/0.45)] hover:bg-[#0A6650] md:flex"
      initial={{ x: 320, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease, delay: 1.4 }}
      whileTap={{ scale: 0.96 }}
    >
      <WhatsAppGlyph className="h-7 w-7 shrink-0" />
      <span className="whitespace-nowrap text-base font-semibold">WhatsApp’tan Teklif Al</span>
      <span className="sr-only">(yeni sekmede açılır)</span>
    </m.a>
  );
}
