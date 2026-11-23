import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden border-b border-edge"
    >
      <div className="absolute inset-0 -z-10">
        <picture>
          <source media="(max-width: 639px)" srcSet="/hero-mobile.webp" />
          <img
            src="/electric-green-aurora-storm-mountains.webp"
            srcSet="/hero-sm.webp 800w, /electric-green-aurora-storm-mountains.webp 1920w"
            sizes="100vw"
            alt=""
            fetchPriority="high"
            className="h-full w-full object-cover opacity-70"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/55 to-transparent sm:from-bg/85 sm:via-bg/35" />
        <div className="grid-lines absolute inset-0" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-24 pt-28 sm:px-8">
        <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-ink/70 sm:text-[11px] sm:tracking-[0.22em]">
          <span aria-hidden className="hidden h-1.5 w-1.5 animate-pulse bg-accent sm:inline-block" />
          <span>sys.portfolio / 2026</span>
        </div>

        <h1 className="mt-6 font-display text-[clamp(2.25rem,9.35vw,2.6rem)] font-medium leading-[1.06] tracking-[-0.02em] sm:text-[clamp(2.6rem,6.2vw,5.6rem)]">
          AI systems that{" "}
          <br className="sm:hidden" />
          run
          <br className="hidden sm:inline" />{" "}
          on <span className="text-accent">real silicon</span>
          <span aria-hidden className="animate-blink text-accent">_</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-ink/80 sm:text-lg">
          {site.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
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

      <a
        href="#about"
        aria-label="Scroll to the profile section"
        className="absolute bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 px-4 font-mono text-[9px] uppercase tracking-[0.22em] text-faint transition-colors hover:text-accent sm:hidden [@media(max-height:620px)]:hidden"
      >
        Scroll
        <span
          aria-hidden
          className="block h-7 w-px bg-gradient-to-b from-faint/70 to-transparent"
        />
      </a>
    </section>
  );
}
