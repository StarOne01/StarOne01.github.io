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
            eyebrow="about"
            title={
              <>
                A bit about <span className="text-clay italic">me.</span>
              </>
            }
          />
          <div className="space-y-5 text-ink-soft text-base md:text-lg leading-relaxed">
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
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-soft mb-8">
            what I work on
          </p>
          <ul className="space-y-4">
            {expertise.map((area, i) => (
              <motion.li
                key={area.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group p-6 rounded-2xl bg-white border border-sand hover:border-clay/40 transition-colors"
              >
                <h3 className="font-serif text-lg text-ink mb-1.5">
                  {area.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
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
