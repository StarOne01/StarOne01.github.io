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
      <div className={cn("flex items-center gap-3 mb-5", align === "center" && "justify-center")}>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
          {eyebrow}
        </span>
        <span className="h-px w-10 bg-white/15" />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-white/50 text-base md:text-lg max-w-2xl leading-relaxed", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
