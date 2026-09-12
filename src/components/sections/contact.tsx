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
        index="05"
        pass="link"
        title="link externals."
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
              className="group relative flex items-center gap-4 p-5 bg-white/[0.02] border border-white/10 hover:border-emerald-300/60 hover:bg-emerald-300 active:bg-emerald-300 active:border-emerald-300 transition-colors"
              aria-label={`${c.label}: ${c.value}`}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/[0.04] border border-white/10 text-white/80 group-hover:text-black group-hover:bg-black/10 group-hover:border-black/20 group-active:text-black group-active:bg-black/10 group-active:border-black/20 transition-colors">
                <Icon name={iconName} className="w-4 h-4" aria-hidden />
              </div>
              <div className="flex-1 min-w-0 font-mono">
                <p className="text-[10px] tracking-[0.25em] uppercase text-white/45 group-hover:text-black/60 group-active:text-black/60 mb-1">
                  {c.label}
                </p>
                <p className="text-sm font-bold text-white/90 truncate group-hover:text-black group-active:text-black">
                  {c.value}
                </p>
              </div>
              <Icon
                name="arrow"
                className="w-3.5 h-3.5 text-white/40 group-hover:text-black group-hover:translate-x-1 group-active:text-black group-active:translate-x-1 transition-all"
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
        className="mt-20 md:mt-28 text-center font-mono"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
          <span className="text-white/25">call </span>
          <span className="text-emerald-300">@say_hello</span>
          <span className="text-white/25">() -&gt; !response</span>
        </p>
        <a
          href={`mailto:${site.email}`}
          className="inline-block text-xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white hover:text-emerald-300 active:text-emerald-300 transition-colors break-all"
        >
          {site.email}
        </a>
      </motion.div>
    </section>
  );
}
