import Parallax from "@/components/ui/parallax";
import ParallaxImage from "@/components/ui/parallax-image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 md:pb-20">
      <div className="mx-auto w-full max-w-6xl px-5 pt-28 sm:px-8">
        <Parallax amount={-60}>
          <h1 className="mt-10 max-w-5xl font-serif text-5xl font-medium leading-[1.0] tracking-tight text-balance sm:text-7xl md:text-8xl">
            AI systems that run <em className="italic text-moss">on real silicon.</em>
          </h1>
        </Parallax>

        <Parallax amount={-35}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink px-8 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-moss active:bg-moss"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-ink/20 px-8 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink active:border-ink"
            >
              Get in touch
            </a>
          </div>
        </Parallax>
      </div>

      <figure className="relative mx-2 mt-12 h-64 overflow-hidden rounded-xl border border-line sm:mx-3 sm:h-80 sm:rounded-2xl md:mx-4 md:mt-16 md:h-[440px] lg:h-[70vh] lg:max-h-[620px]">
        <ParallaxImage src="/electric-green-aurora-storm-mountains.webp" alt="Electric green aurora storm over black mountain ridges" eager />
      </figure>
    </section>
  );
}
