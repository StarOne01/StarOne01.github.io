"use client";
import { stack, StackItem } from "@/data/site";
import Marquee from "@/components/ui/marquee";
import SectionHeader from "@/components/ui/section-header";

const allStack = Object.values(stack)
  .flat()
  .map((item) => (typeof item === "string" ? item : item.name));

const categories = Object.entries(stack);

function Pill({ item }: { item: StackItem }) {
  const name = typeof item === "string" ? item : item.name;
  const note = typeof item === "string" ? null : item.note;
  const fav = typeof item !== "string" && item.fav;
  return (
    <li
      className={`inline-flex items-baseline gap-1.5 px-4 py-2 rounded-full border text-sm transition-colors cursor-default ${
        fav
          ? "border-volt/60 text-volt"
          : "border-white/12 text-white/80 hover:border-volt/60 hover:text-volt"
      }`}
    >
      <span>{name}</span>
      {fav && (
        <span className="text-[10px]" aria-label="favorite">
          ★
        </span>
      )}
      {note && <span className="text-[10px] font-mono opacity-60">({note})</span>}
    </li>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32 border-y border-white/[0.06]">
      <div className="px-6 max-w-6xl mx-auto mb-12 md:mb-16">
        <SectionHeader
          index="05"
          eyebrow="stack"
          title={
            <>
              Loaded <span className="font-display italic font-normal text-volt">and dangerous.</span>
            </>
          }
          description="Languages, compilers, models, and infra I actually reach for. Grouped by what they do."
        />
      </div>

      <Marquee items={allStack} speed={55} className="mb-12" />

      <div className="px-6 max-w-6xl mx-auto space-y-8">
        {categories.map(([label, items]) => (
          <div key={label}>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
              <span className="text-volt">▸</span> {label}
            </p>
            <ul className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <Pill key={i} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
