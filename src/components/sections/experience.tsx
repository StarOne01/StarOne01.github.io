"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";

const statusStyles: Record<string, string> = {
  active: "bg-emerald-400/10 text-emerald-300/90 border-emerald-400/20",
  development: "bg-sky-400/10 text-sky-300/90 border-sky-400/20",
  upcoming: "bg-amber-400/10 text-amber-300/90 border-amber-400/20",
  ongoing: "bg-white/[0.04] text-white/60 border-white/10",
  past: "bg-white/[0.03] text-white/40 border-white/10 line-through decoration-white/20",
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative"
      style={{ height: `${(experience.length + 0.5) * 80}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="pt-20 md:pt-24 px-6 max-w-6xl mx-auto w-full">
          <SectionHeader
            eyebrow="03 — experience"
            title={
              <>
                Things I've <span className="text-white/40">built & broken.</span>
              </>
            }
            description="A horizontal track of roles, ventures, and ongoing work. Scroll to traverse."
          />

          <div className="mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
            <span>scroll progress</span>
            <div className="relative h-px flex-1 max-w-xs bg-white/10">
              <motion.div
                style={{ width: progress }}
                className="absolute inset-y-0 left-0 bg-white/60"
              />
            </div>
            <span className="text-white/30 tabular-nums">
              {Math.round(((experience.length - 1) / experience.length) * 100) + 1}
            </span>
          </div>
        </div>

        <div className="flex-1 flex items-center">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 pl-6 md:pl-[max(1.5rem,calc((100vw-72rem)/2))] pr-[20vw]"
          >
            {experience.map((item, i) => (
              <article
                key={`${item.company}-${i}`}
                className="relative shrink-0 w-[min(85vw,360px)] p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-colors group"
              >
                <div className="flex items-center justify-between mb-4 font-mono text-[10px] tracking-[0.2em] uppercase">
                  <span className="text-white/30">/{String(i + 1).padStart(2, "0")}</span>
                  <span className={`px-2 py-0.5 rounded-full border ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-1 leading-tight">
                  {item.role}
                </h3>
                <p className="text-white/50 font-mono text-xs tracking-wide mb-1">
                  {item.company}
                </p>
                <p className="text-white/30 font-mono text-[10px] tracking-[0.2em] uppercase mb-5">
                  {item.period}
                </p>
                <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {item.description}
                </p>
              </article>
            ))}

            <div className="shrink-0 w-[60vw] flex items-center justify-center font-mono text-[10px] tracking-[0.3em] uppercase text-white/20">
              → end of timeline
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
