"use client";
import { useEffect, useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  eager?: boolean;
}

/**
 * Subtle scroll parallax for framed photos. The image layer is taller than
 * its overflow-hidden frame and drifts ±18% of the frame height as it crosses
 * the viewport. One rAF-throttled listener, GPU transform only, and fully
 * static when the user prefers reduced motion.
 */
export default function ParallaxImage({ src, alt, eager = false }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const frame = el?.parentElement;
    if (!el || !frame) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
      const travel = rect.height * 0.36;
      el.style.transform = `translate3d(0, ${((0.5 - progress) * travel).toFixed(1)}px, 0)`;
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
    <div ref={ref} className="absolute inset-x-0 -top-[20%] h-[140%] will-change-transform">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
