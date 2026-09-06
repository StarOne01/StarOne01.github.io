"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

const statusStyles: Record<string, string> = {
  active: "bg-volt text-carbon border-volt",
  development: "bg-sky-400/15 text-sky-300 border-sky-400/30",
  upcoming: "bg-amber-400/15 text-amber-300 border-amber-400/30",
  ongoing: "bg-white/[0.06] text-white/75 border-white/15",
  past: "bg-white/[0.04] text-white/50 border-white/10",
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

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
            index="04"
            eyebrow="experience"
            title={
              <>
                The road <span className="font-display italic font-normal text-volt">so far.</span>
              </>
            }
            description="A horizontal track of roles, ventures, and ongoing work. Keep scrolling to traverse."
          />

          <div className="mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-white/50">
            <span>traverse →</span>
            <div className="relative h-[3px] flex-1 max-w-xs bg-white/10 rounded-full" aria-hidden>
              <motion.div
                style={{ width: progress }}
                className="absolute inset-y-0 left-0 bg-volt rounded-full"
              />
            </div>
            <span className="text-volt tabular-nums" aria-live="polite">
              {Math.round(((experience.length - 1) / experience.length) * 100) + 1}
            </span>
          </div>
        </div>

        <div className="flex-1 flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-5 pl-6 md:pl-[max(1.5rem,calc((100vw-72rem)/2))] pr-[20vw]"
          >
            {experience.map((item, i) => (
              <article
                key={`${item.company}-${i}`}
                className="relative shrink-0 w-[min(85vw,380px)] p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-volt/60 hover:bg-white/[0.04] transition-colors group"
              >
                <div className="flex items-center justify-between mb-4 font-mono text-[10px] tracking-[0.2em] uppercase">
                  <span className="text-white/40" aria-hidden>E/{String(i + 1).padStart(2, "0")}</span>
                  <span className={`px-2.5 py-0.5 rounded-full border ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-1 leading-tight tracking-tight">
                  {item.role}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-volt/90 font-mono text-xs tracking-wide mb-1 hover:text-volt transition-colors"
                  >
                    {item.company}
                    <Icon name="external" className="w-3 h-3" aria-hidden />
                  </a>
                ) : (
                  <p className="text-white/70 font-mono text-xs tracking-wide mb-1">
                    {item.company}
                  </p>
                )}
                <p className="text-white/45 font-mono text-[10px] tracking-[0.2em] uppercase mb-5">
                  {item.period}
                </p>
                <p className="text-white/65 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
                  {item.description}
                </p>
              </article>
            ))}

            <div className="shrink-0 w-[60vw] flex items-center justify-center">
              <span className="font-display italic text-3xl text-white/30">fin.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
