import { site } from "@/data/site";

const status = [
  { label: "Status", value: "Open to collaboration" },
  { label: "Focus", value: "Compilers · Inference" },
  { label: "Base", value: "Coimbatore, IN" },
  { label: "Now", value: "MLIR · LLVM" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden border-b border-edge"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/electric-green-aurora-storm-mountains.webp"
          srcSet="/hero-sm.webp 800w, /electric-green-aurora-storm-mountains.webp 1920w"
          sizes="100vw"
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/55 to-bg" />
        <div className="grid-lines absolute inset-0" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 sm:px-8">
        <div className="flex items-center gap-3 pt-24 font-mono text-[11px] uppercase tracking-[0.22em] text-dim sm:pt-28">
          <span aria-hidden className="inline-block h-1.5 w-1.5 animate-pulse bg-lime" />
          <span>sys.portfolio / 2026</span>
          <span aria-hidden className="ml-auto hidden sm:inline">11.01°N · 76.95°E</span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-16 md:py-20">
          <h1 className="font-display text-[clamp(2.6rem,8.5vw,7.5rem)] font-medium uppercase leading-[0.92] tracking-[-0.03em]">
            AI systems
            <br />
            that run on
            <br />
            <span className="text-lime">real silicon</span>
            <span aria-hidden className="animate-blink text-lime">_</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
            {site.tagline} Self-taught from a phone via Termux.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-sm bg-lime px-7 font-mono text-[11px] uppercase tracking-[0.18em] text-black transition-colors hover:bg-ink"
            >
              View work
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-sm border border-edge px-7 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-lime hover:text-lime"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-edge bg-bg/70 backdrop-blur">
        <dl className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-x divide-edge/70 sm:grid-cols-4">
          {status.map((item) => (
            <div key={item.label} className="px-5 py-4 sm:px-8">
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                {item.label}
              </dt>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
