"use client";
import { motion } from "framer-motion";
import { research } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

export default function Research() {
  return (
    <section id="research" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="03 — research & writing"
        title={
          <>
            Asking questions <span className="text-white/55">models can&rsquo;t answer.</span>
          </>
        }
        description="Original evaluation work and building in public — in Tamil and English."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {research.map((item, i) => {
          const card = (
            <>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/55">
                  {item.tag}
                </span>
                {item.href && (
                  <Icon
                    name="external"
                    className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    aria-hidden
                  />
                )}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors flex-1">
                {item.description}
              </p>
            </>
          );
          const classes =
            "group flex flex-col p-6 md:p-7 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:bg-white/[0.03] hover:border-white/15 transition-colors min-h-[220px]";
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
