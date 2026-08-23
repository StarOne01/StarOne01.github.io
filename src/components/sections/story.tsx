"use client";
import { motion } from "framer-motion";
import { story, site, expertise } from "@/data/site";

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <motion.blockquote
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug text-ink">
          &ldquo;I wrote my first production code on a phone.{" "}
          <span className="text-clay italic">No laptop.</span> Just Termux, a cracked
          screen, and WiFi that dropped every twenty minutes.&rdquo;
        </p>
        <footer className="mt-5 text-sm text-ink-soft">— me, on how this started</footer>
      </motion.blockquote>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 space-y-5 text-ink-soft text-base md:text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {story.after}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {story.now}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-ink"
          >
            That&rsquo;s the short version. I&rsquo;m {site.name}, a final-year EE student
            from {site.location.split(",")[0]} — and I&rsquo;m still building under
            constraints, just bigger ones.
          </motion.p>
        </div>

        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-clay mb-8">
            what I work on
          </p>
          <ul className="space-y-4">
            {expertise.map((area, i) => (
              <motion.li
                key={area.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group p-6 rounded-2xl bg-white border border-sand hover:border-clay/40 transition-colors"
              >
                <h3 className="font-serif text-lg text-ink mb-1.5">{area.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{area.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
