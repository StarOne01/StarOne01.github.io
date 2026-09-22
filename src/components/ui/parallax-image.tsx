"use client";
import { useEffect, useRef } from "react";
import { subscribeParallax, prefersReducedMotion } from "@/components/ui/scroll-hub";

interface ParallaxImageProps {
  src: string;
  alt: string;
  eager?: boolean;
}

/**
 * Scroll parallax for framed photos, driven by the shared scroll hub
 * (batched reads before writes, one listener for all layers).
 */
export default function ParallaxImage({ src, alt, eager = false }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const frame = el?.parentElement;
    if (!el || !frame) return;
    if (prefersReducedMotion()) return;

    return subscribeParallax({
      frame,
      apply: (progress, frameHeight) => {
        const travel = frameHeight * 0.36;
        el.style.transform = `translate3d(0, ${((0.5 - progress) * travel).toFixed(1)}px, 0)`;
      },
    });
  }, []);

  return (
    <div ref={ref} className="absolute inset-x-0 -top-[20%] h-[140%] will-change-transform">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
