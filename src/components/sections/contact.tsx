"use client";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";
import Magnetic from "@/components/ui/magnetic";

const channels = [
  site.socials.email,
  site.socials.linkedin,
  site.socials.github,
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 max-w-6xl mx-auto relative">
      <SectionHeader
        eyebrow="06 — contact"
        title={
          <>
            Let's build <span className="text-white/40">something real.</span>
          </>
        }
        description="Open to collaborations on AI infrastructure, systems engineering, and tooling for serious problems. Cold emails welcome."
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
              className="group relative flex items-center gap-4 p-5 bg-white/[0.02] border border-white/[0.06] rounded-xl hover:bg-white/[0.05] hover:border-white/15 transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/[0.04] border border-white/[0.08] rounded-lg text-white/70 group-hover:text-black group-hover:bg-white group-hover:border-white transition-colors">
                <Icon name={iconName} className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35 mb-1">
                  {c.label}
                </p>
                <p className="text-sm font-medium text-white/85 truncate group-hover:text-white">
                  {c.value}
                </p>
              </div>
              <Icon name="arrow" className="w-3.5 h-3.5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
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
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
          or, if you prefer
        </p>
        <Magnetic as="a" href={`mailto:${site.email}`} strength={0.3}>
          <span className="inline-block text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white hover:text-white/70 transition-colors">
            {site.email} →
          </span>
        </Magnetic>
      </motion.div>
    </section>
  );
}
