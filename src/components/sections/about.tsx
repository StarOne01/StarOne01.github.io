"use client";
import { motion } from "framer-motion";
import { site, expertise } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeader
            index="01"
            pass="frontend"
            title="parse a human."
          />
          <div className="space-y-5 text-white/70 text-base md:text-lg leading-relaxed font-sans">
            {site.bio.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] tracking-[0.25em] text-white/40 mb-8">
            <span className="text-amber-400">%ops</span> = focus areas
          </p>
          <ul className="space-y-4">
            {expertise.map((area, i) => (
              <motion.li
                key={area.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group p-6 bg-white/[0.02] border border-white/10 hover:border-amber-400/50 active:border-amber-400/50 transition-colors"
              >
                <p className="font-mono text-[11px] text-amber-400 mb-2" aria-hidden>
                  %op{i + 1} = "{area.title.toLowerCase().replace(/[^a-z]+/g, "_")}"()
                </p>
                <h3 className="font-mono font-bold text-lg text-white mb-1.5">
                  {area.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-sans">
                  {area.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
