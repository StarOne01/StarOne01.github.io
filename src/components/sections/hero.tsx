import ParallaxImage from "@/components/ui/parallax-image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden pb-14 md:pb-24"
    >
      {/* Full-bleed aurora backdrop */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <ParallaxImage
          src="/electric-green-aurora-storm-mountains.webp"
          srcSet="/hero-sm.webp 800w, /electric-green-aurora-storm-mountains.webp 1920w"
          sizes="100vw"
          alt=""
          eager
        />
      </div>

      {/* Legibility grading: vignette + melt into the page */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,13,23,0.6)_0%,rgba(7,13,23,0.1)_26%,rgba(7,13,23,0.3)_60%,rgba(7,13,23,0.94)_84%,#070D17_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(95%_70%_at_50%_30%,transparent_0%,rgba(7,13,23,0.45)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 sm:px-8">
        <p className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/75">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-moss shadow-[0_0_12px_2px_rgba(67,232,184,0.55)]"
          />
          {site.role} · Coimbatore
        </p>

        <h1 className="max-w-5xl font-serif text-5xl font-medium leading-[1.0] tracking-tight text-balance text-ink sm:text-7xl md:text-8xl">
          AI systems that run{" "}
          <em className="italic text-moss [text-shadow:0_0_28px_rgba(67,232,184,0.35)]">
            on real silicon.
          </em>
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
          <a
            href="#work"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-moss px-8 font-mono text-xs uppercase tracking-[0.14em] text-[#070D17] transition-colors hover:bg-ink active:bg-ink"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-ink/30 px-8 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink active:border-ink"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
