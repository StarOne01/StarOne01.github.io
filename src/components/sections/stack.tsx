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
    return <li className="text-sm text-ink-soft hover:text-ink transition-colors">{item}</li>;
  }
  return (
    <li className="text-sm text-ink-soft hover:text-ink transition-colors flex items-baseline gap-1.5">
      <span>{item.name}</span>
      {item.fav && <span className="text-clay text-[10px]" aria-label="favorite">★</span>}
      {item.note && <span className="text-ink-soft/70 text-[10px] font-mono">({item.note})</span>}
    </li>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="px-6 max-w-6xl mx-auto mb-12 md:mb-16">
        <SectionHeader
          eyebrow="stack"
          title={
            <>
              Tools I reach for, <span className="text-clay italic">not ornaments.</span>
            </>
          }
          description="Languages, frameworks, infrastructure, and the disciplines I actually use. Grouped by what they do."
        />
      </div>

      <Marquee items={allStack} speed={55} className="mb-12" />

      <div className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(([label, items]) => (
            <div key={label} className="bg-white border border-sand rounded-2xl p-5 hover:border-clay/40 transition-colors">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-clay mb-4">
                {label}
              </p>
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
