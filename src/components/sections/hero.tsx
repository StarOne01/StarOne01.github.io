"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-clay/[0.07] blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-cream blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-paper to-transparent" />
      </div>

      <div className="relative z-10 px-6 max-w-3xl mx-auto pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-ink-soft mb-4"
        >
          Hi, I&rsquo;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl font-medium tracking-[-0.03em] leading-[0.98] text-ink"
        >
          Prashanth<span className="text-clay">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-6 text-base sm:text-lg text-ink-soft leading-relaxed max-w-md"
        >
          {site.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-5 flex items-center gap-2.5 text-sm text-ink-soft"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-sand rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
            {site.role}
          </span>
          <span aria-hidden>·</span>
          <span>{site.location}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper rounded-full hover:bg-clay-deep transition-colors"
          >
            See what I&rsquo;ve built
            <span aria-hidden className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="px-6 py-3 bg-white border border-sand text-ink rounded-full hover:border-clay/50 transition-colors"
          >
            Say hello
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 inset-x-0 z-10 flex justify-center"
      >
        <Link
          href="#story"
          className="group flex flex-col items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-ink-soft/70 hover:text-ink transition-colors"
        >
          <span>scroll</span>
          <span className="relative block w-px h-10 overflow-hidden bg-sand">
            <motion.span
              aria-hidden
              className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-transparent via-clay to-transparent"
              animate={{ y: ["-100%", "400%"] }}
              transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.2 }}
            />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
