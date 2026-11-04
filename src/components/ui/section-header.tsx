import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeader({ index, eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em]">
        <span className="text-accent">{index}</span>
        <span aria-hidden className="h-px flex-1 bg-edge" />
        <span className="text-dim">{eyebrow}</span>
      </div>
      <h2 className="max-w-4xl font-display text-4xl font-medium uppercase leading-[0.95] tracking-[-0.02em] text-balance sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-dim md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
