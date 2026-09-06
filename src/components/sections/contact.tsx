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
        index="06"
        eyebrow="contact"
        title={
          <>
            Got something <span className="font-display italic font-normal text-volt">hard?</span>
          </>
        }
        description="Open to collaborations on compilers, ML systems, and tooling for serious problems. Cold emails welcome — I read all of them."
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
              className="group relative flex items-center gap-4 p-5 bg-white/[0.02] border border-white/10 rounded-xl hover:bg-volt hover:border-volt transition-colors"
              aria-label={`${c.label}: ${c.value}`}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/[0.04] border border-white/10 rounded-lg text-white/80 group-hover:text-carbon group-hover:bg-carbon/10 group-hover:border-carbon/20 transition-colors">
                <Icon name={iconName} className="w-4 h-4" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50 group-hover:text-carbon/60 mb-1">
                  {c.label}
                </p>
                <p className="text-sm font-medium text-white/90 truncate group-hover:text-carbon">
                  {c.value}
                </p>
              </div>
              <Icon
                name="arrow"
                className="w-3.5 h-3.5 text-white/40 group-hover:text-carbon group-hover:translate-x-1 transition-all"
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
        <p className="font-display italic text-2xl sm:text-3xl text-white/50 mb-4">
          or just write to me at
        </p>
        <a
          href={`mailto:${site.email}`}
          className="inline-block text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-white hover:text-volt transition-colors break-all"
        >
          {site.email}
        </a>
      </motion.div>
    </section>
  );
}
