"use client";
import { stack, StackItem } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";

const categories = Object.entries(stack);

function Item({ item }: { item: StackItem }) {
  if (typeof item === "string") {
    return (
      <li className="font-mono text-sm text-white/75 hover:text-emerald-300 transition-colors">
        {item}
      </li>
    );
  }
  return (
    <li className="font-mono text-sm text-white/75 hover:text-emerald-300 transition-colors flex items-baseline gap-1.5">
      <span>{item.name}</span>
      {item.fav && <span className="text-emerald-300 text-[10px]" aria-label="favorite">★</span>}
      {item.note && <span className="text-white/35 text-[11px]">· {item.note}</span>}
    </li>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32 border-y border-white/[0.06]">
      <div className="px-6 max-w-6xl mx-auto">
        <SectionHeader
          index="04"
          pass="dialects"
          title="loaded dialects."
          description="Languages, compilers, models, and infra I actually reach for. Grouped by what they do."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(([label, items]) => (
            <div key={label} className="bg-white/[0.02] border border-white/10 p-5">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-emerald-300 mb-4">
                {label}
              </p>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <Item key={i} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-emerald-200/90 border border-emerald-300/25 bg-emerald-300/[0.05] px-4 py-2">
          target = prod <span className="text-white/25">·</span> opt = -O3 <span className="text-white/25">·</span> host = coimbatore
        </p>
      </div>
    </section>
  );
}
