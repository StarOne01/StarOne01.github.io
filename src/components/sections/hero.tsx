"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import TypingText from "@/components/ui/typing-text";
import Magnetic from "@/components/ui/magnetic";
import Marquee from "@/components/ui/marquee";

const strip = ["compilers", "embeddings", "inference", "llvm / mlir", "clinical ai", "go", "c++", "rag"];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-end">
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,_rgba(217,255,61,0.07),_transparent_70%)]" />
        <div className="absolute top-24 right-8 hidden md:block font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase [writing-mode:vertical-rl]">
          folio ©2026 — {site.handle}
        </div>
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full pt-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] tracking-[0.35em] uppercase text-white/50 mb-6"
        >
          <span className="text-volt">●</span>&nbsp;&nbsp;{site.role} — {site.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="font-black uppercase leading-[0.88] tracking-[-0.045em] text-[clamp(3.8rem,13vw,11rem)]"
        >
          <span className="block text-white">Prashanth</span>
          <span className="block">
            <span className="font-display italic normal-case font-normal tracking-normal text-volt">T.</span>
            <span className="text-stroke select-none"> engineer</span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-8 text-sm sm:text-base text-white/60 font-light max-w-xl leading-relaxed"
        >
          <TypingText lines={site.typingLines} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Magnetic as="a" href="#work" strength={0.4} className="group relative">
            <span className="relative z-10 block px-8 py-3.5 bg-volt text-carbon font-semibold rounded-full group-hover:bg-white transition-colors">
              View work ↓
            </span>
          </Magnetic>

          <Magnetic as="a" href="#contact" strength={0.4} className="group">
            <span className="block px-8 py-3.5 border border-white/20 text-white/90 rounded-full hover:border-volt hover:text-volt transition-colors">
              Get in touch
            </span>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 mt-16 md:mt-20 border-y border-white/10 bg-carbon/60 backdrop-blur-sm"
      >
        <Marquee items={strip} speed={28} variant="volt" />
        <Link
          href="#about"
          aria-label="Scroll to about"
          className="absolute -top-3 left-6 font-mono text-[9px] tracking-[0.3em] uppercase text-white/40 hover:text-volt transition-colors bg-carbon px-2"
        >
          scroll ↓
        </Link>
      </motion.div>
    </section>
  );
}
