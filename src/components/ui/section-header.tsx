"use client";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({ index, eyebrow, title, description, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      <div className={cn("flex items-baseline gap-4 mb-5", align === "center" && "justify-center")}>
        <span aria-hidden className="font-black text-5xl md:text-6xl leading-none text-stroke select-none">
          {index}
        </span>
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-volt">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.02] text-white max-w-3xl text-balance">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-white/60 text-base md:text-lg max-w-2xl leading-relaxed", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
