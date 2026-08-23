"use client";
import { motion } from "framer-motion";
import { featuredWork } from "@/data/site";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="selected work"
        title={
          <>
            Things I&rsquo;ve made <span className="text-clay italic">that are live.</span>
          </>
        }
        description="A few things I've built, researched, or shipped — all in production or open source."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredWork.map((item, i) => {
          const card = (
            <>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-clay">
                  {item.tag}
                </span>
                {item.href && (
                  <Icon
                    name="external"
                    className="w-3.5 h-3.5 text-ink-soft/50 group-hover:text-clay group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    aria-hidden
                  />
                )}
              </div>

              <h3 className="font-serif text-2xl text-ink mb-3 tracking-tight">
                {item.name}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed flex-1">
                {item.description}
              </p>

              <div className="mt-6 pt-4 border-t border-sand font-mono text-[10px] tracking-[0.2em] uppercase text-ink-soft/70 flex items-center gap-2">
                <span>{item.href ? "open" : "shipped"}</span>
                <span aria-hidden>·</span>
                <span>{item.name.toLowerCase()}</span>
              </div>
            </>
          );
          const classes =
            "group flex flex-col p-7 rounded-2xl bg-white border border-sand hover:border-clay/40 hover:shadow-[0_8px_30px_-12px_rgba(33,29,24,0.15)] transition-all min-h-[260px]";
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
