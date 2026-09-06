"use client";
import { motion } from "framer-motion";
import { featuredWork } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="px-6 max-w-6xl mx-auto">
        <SectionHeader
          index="02"
          eyebrow="selected work"
          title={
            <>
              Proof, <span className="font-display italic font-normal text-volt">not promises.</span>
            </>
          }
          description="A few things I've built, researched, or shipped — all in production or open source."
        />
      </div>

      <div className="border-t border-white/10">
        {featuredWork.map((item, i) => {
          const inner = (
            <>
              <span aria-hidden className="font-mono text-sm text-volt group-hover:text-carbon group-active:text-carbon transition-colors shrink-0 pt-2 w-10">
                0{i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-none text-white group-hover:text-carbon group-active:text-carbon transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/45 group-hover:text-carbon/60 group-active:text-carbon/60 transition-colors">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-4 text-white/60 group-hover:text-carbon/75 group-active:text-carbon/75 transition-colors text-sm md:text-base leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
              <span aria-hidden className="shrink-0 self-center">
                <Icon
                  name="arrow"
                  className="w-8 h-8 text-white/25 group-hover:text-carbon group-hover:translate-x-2 group-active:text-carbon group-active:translate-x-2 transition-all"
                />
              </span>
            </>
          );
          const classes =
            "group flex items-start gap-5 md:gap-8 px-6 md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] py-10 md:py-12 border-b border-white/10 hover:bg-volt active:bg-volt transition-colors";
          const motionProps = {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: { duration: 0.5, delay: i * 0.05 },
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
                {inner}
              </motion.a>
            );
          }
          return (
            <motion.div key={item.name} className={classes} {...motionProps}>
              {inner}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
