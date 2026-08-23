"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

const statusStyles: Record<string, string> = {
  active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  development: "bg-sky-50 text-sky-700 border-sky-200",
  upcoming: "bg-amber-50 text-amber-700 border-amber-200",
  ongoing: "bg-cream text-ink-soft border-sand",
  past: "bg-cream text-ink-soft/70 border-sand",
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
      className="relative bg-cream/60 border-y border-sand"
      style={{ height: `${(experience.length + 0.5) * 80}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="pt-20 md:pt-24 px-6 max-w-6xl mx-auto w-full">
          <SectionHeader
            eyebrow="experience"
            title={
              <>
                Built &amp; broken <span className="text-clay italic">along the way.</span>
              </>
            }
            description="A horizontal track of roles, ventures, and ongoing work. Keep scrolling to traverse."
          />

          <div className="mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-soft">
            <span>progress</span>
            <div className="relative h-px flex-1 max-w-xs bg-sand" aria-hidden>
              <motion.div
                style={{ width: progress }}
                className="absolute inset-y-0 left-0 bg-clay"
              />
            </div>
            <span className="text-ink-soft tabular-nums" aria-live="polite">
              {Math.round(((experience.length - 1) / experience.length) * 100) + 1}
            </span>
          </div>
        </div>

        <div className="flex-1 flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-6 pl-6 md:pl-[max(1.5rem,calc((100vw-72rem)/2))] pr-[20vw]"
          >
            {experience.map((item, i) => (
              <article
                key={`${item.company}-${i}`}
                className="relative shrink-0 w-[min(85vw,360px)] p-6 md:p-7 rounded-2xl bg-white border border-sand hover:border-clay/40 hover:shadow-[0_8px_30px_-12px_rgba(33,29,24,0.15)] transition-all group"
              >
                <div className="flex items-center justify-between mb-4 font-mono text-[10px] tracking-[0.2em] uppercase">
                  <span className="text-ink-soft/60" aria-hidden>/{String(i + 1).padStart(2, "0")}</span>
                  <span className={`px-2 py-0.5 rounded-full border ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-ink mb-1 leading-tight">
                  {item.role}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-ink-soft text-[13px] mb-1 hover:text-clay transition-colors"
                  >
                    {item.company}
                    <Icon name="external" className="w-3 h-3" aria-hidden />
                  </a>
                ) : (
                  <p className="text-ink-soft text-[13px] mb-1">
                    {item.company}
                  </p>
                )}
                <p className="text-ink-soft/80 font-mono text-[10px] tracking-[0.2em] uppercase mb-5">
                  {item.period}
                </p>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}

            <div className="shrink-0 w-[60vw] flex items-center justify-center font-mono text-[10px] tracking-[0.3em] uppercase text-ink-soft/60">
              → end of timeline
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
