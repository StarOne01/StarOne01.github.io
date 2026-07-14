"use client";
import { stack, StackItem } from "@/data/site";
import Marquee from "@/components/ui/marquee";
import SectionHeader from "@/components/ui/section-header";

const allStack = Object.values(stack)
  .flat()
  .map((item) => (typeof item === "string" ? item : item.name));

const categories = Object.entries(stack);

function Item({ item }: { item: StackItem }) {
  if (typeof item === "string") {
    return <li className="text-sm text-white/80 hover:text-white transition-colors">{item}</li>;
  }
  return (
    <li className="text-sm text-white/80 hover:text-white transition-colors flex items-baseline gap-1.5">
      <span>{item.name}</span>
      {item.fav && <span className="text-white/40 text-[10px]" aria-label="favorite">★</span>}
      {item.note && <span className="text-white/30 text-[10px] font-mono">({item.note})</span>}
    </li>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32 border-y border-white/[0.04]">
      <div className="px-6 max-w-6xl mx-auto mb-12 md:mb-16">
        <SectionHeader
          eyebrow="04 — stack"
          title={
            <>
              Tools, not <span className="text-white/40">ornaments.</span>
            </>
          }
          description="Languages, frameworks, infrastructure, and the disciplines I reach for. Grouped by what they actually do."
        />
      </div>

      <Marquee items={allStack} speed={55} className="mb-12" />

      <div className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-px bg-white/[0.04] border border-white/[0.06] rounded-2xl overflow-hidden">
          {categories.map(([label, items]) => (
            <div key={label} className="bg-black p-5 min-h-[140px]">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/30 mb-4">
                {label}
              </div>
              <ul className="space-y-1.5">
                {items.map((item, i) => (
                  <Item key={i} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
