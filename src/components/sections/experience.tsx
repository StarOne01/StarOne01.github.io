import { experience } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

const dot: Record<string, string> = {
  active: "bg-accent",
  development: "bg-accent/60",
  upcoming: "bg-amber-400",
  ongoing: "bg-accent/70",
  past: "bg-faint",
};

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeader index="03" eyebrow="Trace" title={<>Where I've been.</>} />

      <ol className="border-t border-edge">
        {experience.map((item) => (
          <li key={item.company} className="border-b border-edge">
            <div className="flex gap-4 py-6 md:gap-8 md:py-7">
              <span
                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dot[item.status]}`}
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-xl font-medium tracking-tight text-ink md:text-2xl">
                    {item.role} <span className="text-faint">/</span> {item.company}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    {item.period} <span className="text-accent/70">· {item.status}</span>
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-dim">
                  {item.description}{" "}
                  {item.href && (
                    <a
                      href={item.href}
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="whitespace-nowrap text-accent underline-offset-4 hover:underline"
                    >
                      {item.linkLabel ?? "Visit"}
                      <Icon
                        name={item.href.startsWith("http") ? "external" : "arrow"}
                        className="mb-0.5 ml-1 inline h-3.5 w-3.5"
                        aria-hidden
                      />
                    </a>
                  )}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
