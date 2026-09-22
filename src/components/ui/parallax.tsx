"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { subscribeParallax, prefersReducedMotion } from "@/components/ui/scroll-hub";

interface ParallaxProps {
  children: ReactNode;
  /** Total px drift across the viewport crossing. Negative = moves up faster (foreground). */
  amount?: number;
  className?: string;
}

/**
 * Generic scroll parallax for any element, driven by the shared scroll hub.
 */
export default function Parallax({ children, amount = 60, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    return subscribeParallax({
      frame: el,
      apply: (progress) => {
        el.style.transform = `translate3d(0, ${((0.5 - progress) * amount).toFixed(1)}px, 0)`;
      },
    });
  }, [amount]);

  return (
    <div ref={ref} className={`will-change-transform ${className ?? ""}`}>
      {children}
    </div>
  );
}
