"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

// LazyMotion yalnızca DOM animasyon özelliklerini yükler (daha küçük paket).
// reducedMotion="user": sistemde "hareketi azalt" açıksa konum/ölçek animasyonları kapanır.
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
