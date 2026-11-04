import { featuredWork } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

export default function Work() {
  return (
    <section id="work" className="border-y border-edge bg-surface">
      <div className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
        <SectionHeader index="02" eyebrow="Selected work" title={<>Shipped & open-sourced.</>} />

        <ol className="border-t border-edge">
          {featuredWork.map((item, i) => (
            <li key={item.name} className="border-b border-edge">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-3 px-3 py-6 transition-colors hover:bg-accent md:grid-cols-[auto_1fr] md:gap-8 md:px-6 md:py-8"
                >
                  <Row item={item} index={i} link />
                </a>
              ) : (
                <div className="grid gap-3 px-3 py-6 md:grid-cols-[auto_1fr] md:gap-8 md:px-6 md:py-8">
                  <Row item={item} index={i} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Row({
  item,
  index,
  link = false,
}: {
  item: (typeof featuredWork)[number];
  index: number;
  link?: boolean;
}) {
  return (
    <>
      <span className="font-mono text-[11px] text-faint transition-colors group-hover:text-black/50">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-3 font-display text-2xl font-medium uppercase tracking-tight text-ink transition-colors group-hover:text-black md:text-4xl">
          {item.name}
          {link && (
            <Icon
              name="arrow"
              className="h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 md:h-5 md:w-5"
              aria-hidden
            />
          )}
        </span>
        <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-dim transition-colors group-hover:text-black/60">
          {item.tag}
        </span>
        <span className="mt-3 block max-w-2xl text-sm leading-relaxed text-dim transition-colors group-hover:text-black/75">
          {item.description}
        </span>
      </span>
    </>
  );
}
