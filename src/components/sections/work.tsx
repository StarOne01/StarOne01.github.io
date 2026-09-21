import { featuredWork } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

export default function Work() {
  return (
    <section id="work" className="border-y border-line bg-card">
      <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-32">
        <SectionHeader
          index="02"
          eyebrow="Selected work"
          title={<>Shipped & open-sourced.</>}
        />
        <ol className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {featuredWork.map((item, i) => (
            <li
              key={item.name}
              className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-ink active:border-ink md:p-8"
            >
              <span className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-moss" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={`${item.name}, open link`}
                    className="rounded-full p-1 text-muted transition-colors hover:text-ink"
                  >
                    <Icon name="arrow" className="h-4 w-4" aria-hidden />
                  </a>
                ) : null}
              </span>
              <span className="mt-6 block font-serif text-3xl font-medium tracking-tight md:text-4xl">
                {item.name}
              </span>
              <span className="mt-3">
                <span className="inline-block rounded-full border border-line bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {item.tag}
                </span>
              </span>
              <details className="group mt-5" name="work">
                <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mossdeep hover:text-ink [&::-webkit-details-marker]:hidden">
                  <span className="inline-block transition-transform group-open:rotate-45" aria-hidden>＋</span>
                  About
                </summary>
                <span className="mt-3 block leading-relaxed text-muted">
                  {item.description}
                </span>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
