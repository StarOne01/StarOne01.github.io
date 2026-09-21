import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import Parallax from "@/components/ui/parallax";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeader({ index, eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <Parallax amount={-50}>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-moss">{index}</span>
          <span aria-hidden className="h-px w-10 bg-line" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{eyebrow}</span>
        </div>
        <h2 className="font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        )}
      </Parallax>
    </div>
  );
}
