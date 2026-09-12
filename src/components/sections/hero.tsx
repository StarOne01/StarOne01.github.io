"use client";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import TypingText from "@/components/ui/typing-text";
import Magnetic from "@/components/ui/magnetic";
import Marquee from "@/components/ui/marquee";

const passes = [
  "canonicalize",
  "cse",
  "inline",
  "loop-fusion",
  "vectorize",
  "lower-affine",
  "convert-scf-to-cf",
  "reconcile-unrealized-casts",
];

const jumps = [
  { n: "01", pass: "frontend", sec: "about" },
  { n: "02", pass: "lower", sec: "work" },
  { n: "03", pass: "emit", sec: "experience" },
  { n: "04", pass: "dialects", sec: "stack" },
  { n: "05", pass: "link", sec: "contact" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-end">
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(110,231,183,0.06),_transparent_60%)]" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full pt-28">
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
          <span className="text-white/40">func </span>
          <span className="text-white">@prashanth_t</span>
          <span className="text-white/40">() -&gt; </span>
          <span className="text-emerald-300">!systems.engineer</span>
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

        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          aria-label="Site sections as compiler passes"
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 max-w-3xl"
        >
          {jumps.map((j) => (
            <a
              key={j.n}
              href={`#${j.sec}`}
              className="group border border-white/12 hover:border-emerald-300/60 bg-white/[0.02] hover:bg-emerald-300/[0.06] active:border-emerald-300/60 px-4 py-3 transition-colors"
            >
              <span className="block font-mono text-[10px] text-emerald-300/80">{j.n}</span>
              <span className="block font-mono text-sm uppercase tracking-[0.15em] text-white group-hover:text-emerald-200">
                {j.pass}
              </span>
              <span className="block font-mono text-[10px] text-white/40">→ {j.sec}</span>
            </a>
          ))}
        </motion.nav>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 font-mono text-sm text-white/45"
        >
          {"}"} <span className="text-white/25">// end module — scroll to lower</span>
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 mt-10 border-y border-white/10 bg-black/40"
      >
        <Marquee items={passes} speed={40} />
      </motion.div>
    </section>
  );
}
