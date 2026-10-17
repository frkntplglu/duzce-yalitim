"use client";

import { m } from "motion/react";
import { primaryPhone, whatsappHref } from "@/lib/site";
import { PhoneIcon } from "./Icons";
import { ease } from "./motion/Reveal";
import { WhatsAppGlyph } from "./WhatsAppButton";

// Mobilde ekranın altında sabit, tam genişlikte iletişim çubuğu: solda arama, sağda WhatsApp.
// Gövdeye eşdeğer alt boşluk layout.tsx'te verilir.
export function MobileCallBar() {
  return (
    <m.div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper px-3 pb-[calc(0.625rem+env(safe-area-inset-bottom))] pt-2.5 md:hidden"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease, delay: 0.9 }}
    >
      <a
        href={primaryPhone.href}
        className="focus-on-light btn-lift flex h-14 items-center justify-center gap-2 rounded-soft bg-yellow px-2 text-[0.95rem] font-semibold text-navy"
      >
        <PhoneIcon width={19} height={19} className="phone-ring shrink-0" />
        Hemen Ara
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-on-light btn-lift flex h-14 items-center justify-center gap-2 rounded-soft bg-[#0D7A5F] px-2 text-[0.9rem] font-semibold leading-tight text-white hover:bg-[#0A6650]"
      >
        <WhatsAppGlyph className="h-6 w-6 shrink-0" />
        <span className="text-left"><span className="sr-only">WhatsApp’tan </span>Teklif Al</span>
        <span className="sr-only">(yeni sekmede açılır)</span>
      </a>
    </m.div>
  );
}
