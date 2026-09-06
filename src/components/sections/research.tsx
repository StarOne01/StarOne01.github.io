"use client";
import { motion } from "framer-motion";
import { research } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

export default function Research() {
  return (
    <section id="research" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <SectionHeader
        index="03"
        eyebrow="research & writing"
        title={
          <>
            Questions <span className="font-display italic font-normal text-volt">worth testing.</span>
          </>
        }
        description="Original evaluation work and building in public — in Tamil and English."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {research.map((item, i) => {
          const card = (
            <>
              <div className="flex items-start justify-between mb-8">
                <span aria-hidden className="font-black text-6xl leading-none text-stroke select-none">
                  R{i + 1}
                </span>
                {item.href && (
                  <Icon
                    name="external"
                    className="w-5 h-5 text-white/30 group-hover:text-volt group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                    aria-hidden
                  />
                )}
              </div>

              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-volt mb-3">
                {item.tag}
              </p>
              <h3 className="text-2xl md:text-[1.7rem] font-extrabold text-white mb-3 tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {item.description}
              </p>
            </>
          );
          const classes =
            "group flex flex-col p-7 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-volt/60 hover:bg-white/[0.04] active:border-volt/60 active:bg-white/[0.04] transition-colors min-h-[280px]";
          const motionProps = {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: { duration: 0.5, delay: i * 0.08 },
          };
          if (item.href) {
            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={classes}
                {...motionProps}
              >
                {card}
              </motion.a>
            );
          }
          return (
            <motion.div key={item.title} className={classes} {...motionProps}>
              {card}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
