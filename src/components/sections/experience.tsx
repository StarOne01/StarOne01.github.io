import { experience } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

const statusDot: Record<string, string> = {
  active: "bg-moss",
  development: "bg-moss/60",
  upcoming: "bg-amber-500",
  ongoing: "bg-ink/40",
  past: "bg-ink/20",
};

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-32">
      <SectionHeader
        index="03"
        eyebrow="Experience"
        title={<>Where I've been.</>}
      />
      <ol>
        {experience.map((item) => (
          <li key={item.company} className="border-t border-line py-5 last:border-b md:py-6">
            <details className="group" name="experience">
              <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-center gap-4 [&::-webkit-details-marker]:hidden">
                <span className={`h-2 w-2 rounded-full ${statusDot[item.status]}`} aria-hidden />
                <span className="min-w-0">
                  <span className="block truncate font-serif text-xl font-medium tracking-tight md:text-2xl">
                    {item.role} <span className="text-muted">·</span> {item.company}
                  </span>
                  <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {item.period} · {item.status}
                  </span>
                </span>
                <span className="font-mono text-lg text-muted transition-transform group-open:rotate-45" aria-hidden>＋</span>
              </summary>
              <div className="mt-3 max-w-2xl pl-6 leading-relaxed text-muted">
                {item.description}{" "}
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap text-mossdeep underline decoration-moss/30 underline-offset-4 hover:decoration-moss"
                  >
                    Visit
                    <Icon name="external" className="mb-0.5 ml-1 inline h-3.5 w-3.5" aria-hidden />
                  </a>
                )}
              </div>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
}
