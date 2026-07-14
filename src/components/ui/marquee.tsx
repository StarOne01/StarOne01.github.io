"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface MarqueeProps {
  items: readonly string[];
  speed?: number;
  className?: string;
  reverse?: boolean;
  separator?: string;
}

export default function Marquee({ items, speed = 30, className, reverse, separator = "✦" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"
      />
      <motion.div
        className="flex w-max gap-8 py-4"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-mono text-sm uppercase tracking-[0.2em] text-white/40 whitespace-nowrap">
            <span>{item}</span>
            <span className="text-white/15">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
