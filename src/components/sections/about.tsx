import { expertise, site } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeader
        index="01"
        eyebrow="Profile"
        title={<>Engineer where hardware meets software.</>}
      />

      <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <p className="border-l border-accent/40 pl-6 font-display text-2xl leading-tight tracking-tight text-ink md:text-3xl">
          Final-year EEE student, self-taught from a phone via Termux, now building
          compilers, inference, and production AI.
        </p>
        <p className="text-base leading-relaxed text-dim md:text-lg">
          {site.bio[1]}
        </p>
      </div>

      <div className="mt-16 md:mt-20">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
          Capabilities
        </p>
        <ul className="divide-y divide-edge border-y border-edge">
          {expertise.map((area, i) => (
            <li
              key={area.title}
              className="grid gap-3 py-6 md:grid-cols-[auto_1fr_1.3fr] md:items-baseline md:gap-8 md:py-7"
            >
              <span className="font-mono text-[11px] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-medium tracking-tight text-ink md:text-2xl">
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed text-dim">{area.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
