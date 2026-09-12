"use client";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({ eyebrow, title, description, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs tracking-[0.35em] uppercase text-emerald-300 shrink-0">
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-emerald-300/50 to-transparent" aria-hidden />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
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
