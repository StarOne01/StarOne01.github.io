"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import TypingText from "@/components/ui/typing-text";
import Magnetic from "@/components/ui/magnetic";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06),_transparent_60%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] border border-white/[0.04] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vmin] h-[55vmin] border border-white/[0.06] rounded-full" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-28 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
            {site.role}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.04em] leading-[0.95]"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
            {site.name}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 mb-6 flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-white/50"
        >
          <span className="h-px w-8 bg-white/25" aria-hidden />
          <span>~/</span>
          <span className="text-white/70">@{site.handle}</span>
          <span className="h-px w-8 bg-white/25" aria-hidden />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          <TypingText lines={site.typingLines} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic as="a" href="#work" strength={0.4} className="group relative">
            <span className="relative z-10 block px-7 py-3 bg-white text-slate-950 font-medium rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] group-hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.6)] transition-shadow">
              View work
            </span>
          </Magnetic>

          <Magnetic as="a" href="#contact" strength={0.4} className="group">
            <span className="block px-7 py-3 bg-white/[0.02] border border-white/15 text-white/90 rounded-full hover:bg-white/[0.06] hover:border-white/30 transition-colors">
              Get in touch
            </span>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 inset-x-0 z-10 flex justify-center"
      >
        <Link
          href="#work"
            className="group flex flex-col items-center gap-3 font-mono text-[9px] tracking-[0.3em] uppercase text-white/50 hover:text-white/80 transition-colors"
        >
          <span>scroll</span>
          <span className="relative block w-px h-12 overflow-hidden bg-white/10">
            <motion.span
              aria-hidden
              className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-transparent via-white to-transparent"
              animate={{ y: ["-100%", "400%"] }}
              transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.2 }}
            />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
