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
            eyebrow="about"
            title={
              <>
                Hardware roots, <span className="font-display italic font-normal text-volt">software</span> reach.
              </>
            }
          />
          <div className="space-y-5 text-white/70 text-base md:text-lg leading-relaxed">
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
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-8">
            ＋ focus areas
          </p>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {expertise.map((area, i) => (
              <motion.li
                key={area.title}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group grid grid-cols-12 gap-4 py-6 cursor-default"
              >
                <span className="col-span-1 font-mono text-[11px] text-volt pt-1.5" aria-hidden>
                  0{i + 1}
                </span>
                <div className="col-span-11">
                  <h3 className="text-xl font-bold text-white group-hover:text-volt transition-colors mb-1.5 tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {area.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
