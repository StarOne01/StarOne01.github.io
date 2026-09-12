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
    return (
      <li className="font-mono text-sm text-white/75 hover:text-amber-400 transition-colors">
        <span className="text-white/25">%{item.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "")}</span>
      </li>
    );
  }
  return (
    <li className="font-mono text-sm text-white/75 hover:text-amber-400 transition-colors flex items-baseline gap-1.5">
      <span>
        <span className="text-white/25">%</span>{item.name}
      </span>
      {item.fav && <span className="text-amber-400 text-[10px]" aria-label="favorite">★</span>}
      {item.note && <span className="text-white/35 text-[10px]">({item.note})</span>}
    </li>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32 border-y border-white/[0.06]">
      <div className="px-6 max-w-6xl mx-auto mb-12 md:mb-16">
        <SectionHeader
          index="04"
          pass="dialects"
          title="loaded dialects."
          description="Languages, compilers, models, and infra I actually reach for. Grouped by what they do."
        />
      </div>

      <Marquee items={allStack} speed={55} className="mb-12" />

      <div className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(([label, items]) => (
            <div key={label} className="bg-white/[0.02] border border-white/10 hover:border-amber-400/50 active:border-amber-400/50 transition-colors p-5">
              <p className="font-mono text-[11px] text-amber-400 mb-4">
                dialect <span className="text-white">"{label.toLowerCase()}"</span> {"{"}
              </p>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <Item key={i} item={item} />
                ))}
              </ul>
              <p className="font-mono text-[11px] text-amber-400 mt-4">{"}"}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-mono text-[11px] tracking-[0.2em] uppercase text-white/30">
          target = prod <span className="text-white/15">·</span> opt = -O3 <span className="text-white/15">·</span> host = coimbatore
        </p>
      </div>
    </section>
  );
}
