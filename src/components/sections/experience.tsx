"use client";
import { motion } from "framer-motion";
import { experience } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

const statusStyles: Record<string, string> = {
  active: "bg-emerald-300 text-black border-emerald-300",
  development: "bg-sky-400/15 text-sky-300 border-sky-400/30",
  upcoming: "bg-emerald-300/10 text-emerald-200 border-emerald-300/30",
  ongoing: "bg-white/[0.06] text-white/75 border-white/15",
  past: "bg-white/[0.04] text-white/50 border-white/10",
};

const statusDot: Record<string, string> = {
  active: "bg-emerald-300",
  development: "bg-sky-300",
  upcoming: "bg-emerald-200",
  ongoing: "bg-white/50",
  past: "bg-white/25",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <SectionHeader
        index="03"
        pass="emit"
        title="emit history."
        description="Every role, venture, and ongoing thread — newest first, no passes skipped."
      />

      <ol className="relative ml-1.5 border-l border-dashed border-white/15 space-y-8">
        {experience.map((item, i) => (
          <motion.li
            key={`${item.company}-${i}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.25) }}
            className="relative pl-8 md:pl-10"
          >
            <span
              aria-hidden
              className={`absolute -left-[5px] top-2 w-2.5 h-2.5 ${statusDot[item.status]}`}
            />
            <div className="group bg-white/[0.02] border border-white/10 hover:border-emerald-300/50 active:border-emerald-300/50 transition-colors p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3 font-mono text-[11px]">
                <span className="text-white/30" aria-hidden>
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span className={`px-2 py-0.5 border uppercase tracking-[0.15em] ${statusStyles[item.status]}`}>
                  {item.status}
                </span>
                <span className="text-white/35 uppercase tracking-[0.15em]">{item.period}</span>
              </div>

              <h3 className="font-mono font-bold text-xl md:text-2xl text-white tracking-tight">
                {item.role} <span className="text-white/30 font-normal">@</span>{" "}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {item.company}
                    <Icon name="external" className="w-3.5 h-3.5" aria-hidden />
                  </a>
                ) : (
                  <span className="text-white">{item.company}</span>
                )}
              </h3>
              <p className="mt-3 text-white/60 text-sm md:text-[15px] leading-relaxed font-sans max-w-2xl">
                {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>

      <p className="mt-10 font-mono text-xs text-white/30">
        {"// end of log — "}{experience.length}{" entries emitted"}
      </p>
    </section>
  );
}
