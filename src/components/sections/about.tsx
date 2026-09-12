"use client";
import { motion } from "framer-motion";
import { site, expertise } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5">
          <SectionHeader
            index="01"
            pass="frontend"
            title="parse a human."
          />
          <div className="space-y-7 text-white/70 text-lg md:text-xl font-light leading-loose font-sans">
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

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/40 mb-10">
            focus areas
          </p>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {expertise.map((area, i) => (
              <motion.li
                key={area.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group py-8 first:pt-0 last:pb-0"
              >
                <h3 className="font-mono font-bold text-xl text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {area.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed font-sans max-w-xl">
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
