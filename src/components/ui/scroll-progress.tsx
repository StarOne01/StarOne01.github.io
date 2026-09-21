"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let last = -1;

    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      // Skip DOM write if unchanged to avoid layout work on every frame.
      if (Math.abs(p - last) > 0.0005) {
        last = p;
        el.style.transform = `scaleX(${p})`;
      }
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
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{ transform: "scaleX(0)", transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-moss will-change-transform"
    />
  );
}
