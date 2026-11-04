import { stack, StackItem } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";

function Item({ item }: { item: StackItem }) {
  if (typeof item === "string") {
    return (
      <li className="flex items-baseline gap-2 font-mono text-[13px] text-dim">
        <span aria-hidden className="text-edge">–</span>
        {item}
      </li>
    );
  }
  return (
    <li className="flex items-baseline gap-2 font-mono text-[13px] text-dim">
      <span aria-hidden className="text-edge">–</span>
      <span className="text-ink">{item.name}</span>
      {item.fav && (
        <span className="text-lime" aria-label="favorite">*</span>
      )}
      {item.note && <span className="text-faint">({item.note})</span>}
    </li>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="border-y border-edge bg-surface">
      <div className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
        <SectionHeader
          index="04"
          eyebrow="Manifest"
          title={<>Tools I actually reach for.</>}
          description="Languages, compilers, models, and infra, grouped by what they do."
        />

        <div className="grid grid-cols-1 gap-px border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(stack).map(([label, items]) => (
            <div key={label} className="bg-surface p-6">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-lime">
                // {label}
              </p>
              <ul className="space-y-2.5">
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
