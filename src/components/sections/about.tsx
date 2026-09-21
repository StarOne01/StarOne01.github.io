import { expertise } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Parallax from "@/components/ui/parallax";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-32">
      <SectionHeader
        index="01"
        eyebrow="About"
        title={<>Engineer where hardware meets software.</>}
      />
      <div className="flex justify-end">
        <Parallax amount={-50}>
          <p className="max-w-2xl font-serif text-2xl leading-snug tracking-tight md:text-3xl">
            Final-year EEE student, self-taught from a phone via Termux, now building
            compilers, inference, and production AI.
          </p>
        </Parallax>
      </div>
      <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-16">
        {expertise.map((area, i) => (
          <li
            key={area.title}
            className="group flex items-baseline gap-4 rounded-2xl border border-line bg-card p-6 transition-colors hover:border-ink active:border-ink"
          >
            <span className="font-mono text-[11px] text-moss" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-serif text-xl font-medium tracking-tight md:text-2xl">
              {area.title}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
