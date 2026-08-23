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
      <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-clay mb-4">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-ink-soft text-base md:text-lg max-w-2xl leading-relaxed", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
