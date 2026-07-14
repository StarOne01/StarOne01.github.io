"use client";
import { motion } from "framer-motion";
import { featuredWork } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="05 — selected work"
        title={
          <>
            Things I've shipped <span className="text-white/55">in the wild.</span>
          </>
        }
        description="A few things I've built, researched, or shipped. All live, all in production or open source."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredWork.map((item, i) => (
          <motion.a
            key={item.name}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative flex flex-col p-6 md:p-7 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:bg-white/[0.03] hover:border-white/15 transition-colors min-h-[260px]"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/55">
                {item.tag}
              </span>
              <Icon
                name="external"
                className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                aria-hidden
              />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              {item.name}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors flex-1">
              {item.description}
            </p>

            <div className="mt-6 pt-5 border-t border-white/[0.06] font-mono text-[10px] tracking-[0.2em] uppercase text-white/50 group-hover:text-white/75 transition-colors flex items-center gap-2">
              <span>open</span>
              <span className="text-white/30" aria-hidden>/</span>
              <span>{item.name.toLowerCase()}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
