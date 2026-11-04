import { site } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

const channels = [
  site.socials.email,
  site.socials.linkedin,
  site.socials.github,
  site.socials.x,
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeader
        index="05"
        eyebrow="Uplink"
        title={<>Open to serious collaborations.</>}
        description="Compilers, ML systems, tooling for real problems. Cold emails welcome — I read all of them."
      />

      <a
        href={`mailto:${site.email}`}
        className="group block border-y border-edge py-10 md:py-14"
      >
        <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
          Direct line
        </span>
        <span className="mt-3 block break-words font-display text-3xl font-medium tracking-tight text-ink transition-colors group-hover:text-accent sm:text-5xl md:text-7xl">
          {site.email}
          <Icon
            name="arrow"
            className="mb-2 ml-2 inline h-5 w-5 -rotate-45 text-accent opacity-0 transition-opacity group-hover:opacity-100 md:h-9 md:w-9"
            aria-hidden
          />
        </span>
      </a>

      <div className="mt-10 grid grid-cols-1 gap-px border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((c) => {
          const iconName = c.label.toLowerCase() as "email" | "linkedin" | "github" | "x";
          return (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 bg-bg p-5 transition-colors hover:bg-accent"
              aria-label={`${c.label}: ${c.value}`}
            >
              <span className="flex min-w-0 items-center gap-3">
                <Icon
                  name={iconName}
                  className="h-4 w-4 shrink-0 text-dim transition-colors group-hover:text-black"
                  aria-hidden
                />
                <span className="min-w-0 font-mono">
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-faint transition-colors group-hover:text-black/60">
                    {c.label}
                  </span>
                  <span className="block truncate text-sm text-ink transition-colors group-hover:text-black">
                    {c.value}
                  </span>
                </span>
              </span>
              <Icon
                name={c.href.startsWith("http") ? "external" : "arrow"}
                className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-black"
                aria-hidden
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
