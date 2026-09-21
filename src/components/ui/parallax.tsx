"use client";
import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  /** Total px drift across the viewport crossing. Negative = moves up faster (foreground). */
  amount?: number;
  className?: string;
}

/**
 * Generic scroll parallax for any element. Drift is proportional to the
 * element's own crossing progress, so sibling layers with different amounts
 * move relative to each other. Static when reduced motion is preferred.
 */
export default function Parallax({ children, amount = 60, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
      el.style.transform = `translate3d(0, ${((0.5 - progress) * amount).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [amount]);

  return (
    <div ref={ref} className={`will-change-transform ${className ?? ""}`}>
      {children}
    </div>
  );
}
