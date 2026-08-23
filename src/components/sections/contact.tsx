"use client";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

const channels = [
  site.socials.email,
  site.socials.linkedin,
  site.socials.github,
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 max-w-6xl mx-auto relative">
      <SectionHeader
        eyebrow="contact"
        title={
          <>
            Let&rsquo;s build <span className="text-clay italic">something real.</span>
          </>
        }
        description="Open to collaborations on AI infrastructure, systems engineering, and tooling for serious problems. Cold emails welcome — I read all of them."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {channels.map((c, i) => {
          const iconName = c.label.toLowerCase() as "email" | "linkedin" | "github";
          return (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative flex items-center gap-4 p-5 bg-white border border-sand rounded-2xl hover:border-clay/40 hover:shadow-[0_8px_30px_-12px_rgba(33,29,24,0.15)] transition-all"
              aria-label={`${c.label}: ${c.value}`}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-cream border border-sand rounded-xl text-ink group-hover:bg-clay group-hover:text-paper group-hover:border-clay transition-colors">
                <Icon name={iconName} className="w-4 h-4" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-soft mb-1">
                  {c.label}
                </p>
                <p className="text-sm font-medium text-ink truncate">
                  {c.value}
                </p>
              </div>
              <Icon
                name="arrow"
                className="w-3.5 h-3.5 text-ink-soft/50 group-hover:text-clay group-hover:translate-x-1 transition-all"
                aria-hidden
              />
            </motion.a>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 md:mt-28 text-center"
      >
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-soft mb-4">
          or, if you prefer
        </p>
        <a
          href={`mailto:${site.email}`}
          className="inline-block font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink hover:text-clay transition-colors"
        >
          {site.email} →
        </a>
      </motion.div>
    </section>
  );
}
