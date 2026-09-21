import { site } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";
import Parallax from "@/components/ui/parallax";

const channels = [
  site.socials.email,
  site.socials.linkedin,
  site.socials.github,
  site.socials.x,
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-32">
      <SectionHeader
        index="05"
        eyebrow="Contact"
        title={<>Open to serious collaborations.</>}
        description="Compilers, ML systems, tooling for real problems. Cold emails welcome. I read all of them."
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((c) => {
          const iconName = c.label.toLowerCase() as "email" | "linkedin" | "github" | "x";
          return (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex min-h-[76px] items-center gap-4 rounded-2xl border border-line bg-card p-5 transition-colors hover:border-ink active:border-ink"
              aria-label={`${c.label}: ${c.value}`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink transition-colors group-hover:bg-ink group-hover:text-paper">
                <Icon name={iconName} className="h-4 w-4" aria-hidden />
              </span>
              <span className="min-w-0 font-mono">
                <span className="mb-1 block text-[10px] uppercase tracking-[0.22em] text-muted">
                  {c.label}
                </span>
                <span className="block truncate text-sm font-bold text-ink">{c.value}</span>
              </span>
              <Icon name="arrow" className="ml-auto h-3.5 w-3.5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink" aria-hidden />
            </a>
          );
        })}
      </div>

      <Parallax amount={-50}>
        <div className="mt-16 text-center md:mt-24">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Or write directly
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-block max-w-full break-words font-serif text-3xl font-medium tracking-tight underline decoration-moss/30 underline-offset-8 hover:decoration-moss sm:text-5xl md:text-6xl"
          >
            {site.email}
          </a>
        </div>
      </Parallax>
    </section>
  );
}
