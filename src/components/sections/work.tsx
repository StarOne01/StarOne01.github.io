"use client";
import { motion } from "framer-motion";
import { featuredWork } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <SectionHeader
        index="02"
        pass="lower"
        title="lower ideas to prod."
        description="A few things I've built, researched, or shipped — all in production or open source."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredWork.map((item, i) => {
          const op = item.name.toLowerCase().replace(/[^a-z]+/g, "_").replace(/^_|_$/g, "");
          const card = (
            <>
              <div className="flex items-center justify-between mb-5 font-mono">
                <span className="text-[13px] font-bold text-white">
                  <span className="text-white/35 font-normal">op </span>
                  <span className="text-emerald-300">@</span>{op}
                </span>
                {item.href ? (
                  <Icon
                    name="external"
                    className="w-4 h-4 text-white/30 group-hover:text-emerald-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    aria-hidden
                  />
                ) : (
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30">
                    noescape
                  </span>
                )}
              </div>

              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">
                traits = ["{item.tag.toLowerCase()}"]
              </p>
              <h3 className="font-mono font-bold text-xl text-white mb-3 tracking-tight">
                {item.name}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-sans flex-1">
                {item.description}
              </p>

              <div className="mt-6 pt-4 border-t border-dashed border-white/12 font-mono text-[11px] text-white/40">
                <span className="text-white/25">→ result: </span>
                <span className={item.href ? "text-emerald-300" : "text-white/70"}>
                  {item.href ? "open" : "shipped"}
                </span>
              </div>
            </>
          );
          const classes =
            "group flex flex-col p-6 md:p-7 bg-white/[0.02] border border-white/10 hover:border-emerald-300/50 hover:bg-white/[0.04] active:border-emerald-300/50 transition-colors min-h-[260px]";
          const motionProps = {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: { duration: 0.5, delay: i * 0.08 },
          };
          if (item.href) {
            return (
              <motion.a
                key={item.name}
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
            <motion.div key={item.name} className={classes} {...motionProps}>
              {card}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
