import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[86svh] flex-col overflow-hidden border-b border-edge"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/electric-green-aurora-storm-mountains.webp"
          srcSet="/hero-sm.webp 800w, /electric-green-aurora-storm-mountains.webp 1920w"
          sizes="100vw"
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/35 to-transparent" />
        <div className="grid-lines absolute inset-0" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-16 pt-24 sm:px-8 sm:pb-20">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
          <span aria-hidden className="inline-block h-1.5 w-1.5 animate-pulse bg-accent" />
          <span>sys.portfolio / 2026</span>
        </div>

        <h1 className="mt-8 font-display text-[clamp(2.2rem,5vw,4.6rem)] font-medium uppercase leading-[1.02] tracking-[-0.03em]">
          AI systems that run
          <br />
          on <span className="text-accent">real silicon</span>
          <span aria-hidden className="animate-blink text-accent">_</span>
        </h1>

        <p className="mt-7 max-w-lg text-base leading-relaxed text-dim sm:text-lg">
          {site.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex min-h-[52px] items-center gap-2 rounded-sm bg-accent px-7 font-mono text-[11px] uppercase tracking-[0.18em] text-black transition-colors hover:bg-ink"
          >
            View work
            <span aria-hidden>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-[52px] items-center gap-2 rounded-sm border border-edge px-7 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
