"use client";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  index: string;
  pass: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({ index, pass, title, description, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      <p className="font-mono text-xs md:text-sm text-amber-400 mb-4">
        <span className="text-white/30">pass {index}/05 — </span>"{pass}"
      </p>
      <h2 className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-white/55 text-base md:text-lg max-w-2xl leading-relaxed font-sans", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
