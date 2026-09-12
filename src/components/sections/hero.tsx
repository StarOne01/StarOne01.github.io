"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import TypingText from "@/components/ui/typing-text";
import Magnetic from "@/components/ui/magnetic";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(110,231,183,0.06),_transparent_60%)]" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full py-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm text-white/45 mb-6"
        >
          module <span className="text-emerald-300">@starone01</span> {"{"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-mono font-bold tracking-tight leading-[1.05] text-2xl sm:text-4xl md:text-[3.4rem]"
        >
          <span className="text-emerald-300">@</span><span className="text-white">prashanth_t</span><span aria-hidden className="ml-2 inline-block w-[0.5em] h-[0.9em] translate-y-[0.1em] bg-emerald-300 animate-pulse" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-sm sm:text-base text-white/60 font-light max-w-xl leading-relaxed font-sans"
        >
          <TypingText lines={site.typingLines} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-6 mb-8 flex flex-wrap items-center gap-2 font-mono text-[11px]"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-white/85 bg-white/[0.04] border border-white/12">
            <span className="w-1.5 h-1.5 bg-emerald-300 animate-pulse" aria-hidden />
            {site.role}
          </span>
          <span className="px-3 py-1.5 text-white/50 border border-dashed border-white/15">
            {site.location.toLowerCase()}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Magnetic as="a" href="#work" strength={0.4} className="group relative">
            <span className="relative z-10 block px-7 py-3 font-mono text-sm bg-emerald-300 text-black font-bold group-hover:bg-white transition-colors">
              [ run --work ]
            </span>
          </Magnetic>

          <Magnetic as="a" href="#contact" strength={0.4} className="group">
            <span className="block px-7 py-3 font-mono text-sm bg-transparent border border-white/20 text-white/90 hover:border-emerald-300 hover:text-emerald-300 transition-colors">
              [ run --contact ]
            </span>
          </Magnetic>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-10 font-mono text-sm text-white/45"
        >
          {"}"} <span className="text-white/25">// end module — scroll to lower</span>
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 inset-x-0 z-10 flex justify-center"
      >
        <Link
          href="#about"
          className="group flex flex-col items-center gap-3 font-mono text-[9px] tracking-[0.3em] uppercase text-white/40 hover:text-emerald-300 transition-colors"
        >
          <span>scroll</span>
          <span className="relative block w-px h-12 overflow-hidden bg-white/10">
            <motion.span
              aria-hidden
              className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-transparent via-emerald-300 to-transparent"
              animate={{ y: ["-100%", "400%"] }}
              transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.2 }}
            />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
