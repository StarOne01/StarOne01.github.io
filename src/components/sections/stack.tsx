import { stack, StackItem } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";

function Item({ item }: { item: StackItem }) {
  if (typeof item === "string") {
    return <li className="text-sm text-ink/80">{item}</li>;
  }
  return (
    <li className="flex items-baseline gap-1.5 text-sm text-ink/80">
      <span>{item.name}</span>
      {item.fav && <span className="text-[10px] text-moss" aria-label="favorite">★</span>}
      {item.note && <span className="text-[11px] text-muted">· {item.note}</span>}
    </li>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="border-y border-line bg-card">
      <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-32">
        <SectionHeader
          index="04"
          eyebrow="Stack"
          title={<>Tools I actually reach for.</>}
          description="Languages, compilers, models, and infra, grouped by what they do."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {Object.entries(stack).map(([label, items]) => (
            <div key={label} className="rounded-2xl border border-line bg-paper p-5">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-moss">
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
      </div>
    </section>
  );
}
