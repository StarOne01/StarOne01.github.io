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
  { n: "01", label: "frontend", href: "#about" },
  { n: "02", label: "lower", href: "#work" },
  { n: "03", label: "emit", href: "#experience" },
  { n: "04", label: "dialects", href: "#stack" },
  { n: "05", label: "link", href: "#contact" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-end">
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.05),_transparent_60%)]" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm text-white/45 mb-6"
        >
          module <span className="text-amber-400">@starone01</span> {"{"}
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
          <span className="text-amber-400">!systems.engineer</span>
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
            <span className="w-1.5 h-1.5 bg-amber-400 animate-pulse" aria-hidden />
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
            <span className="relative z-10 block px-7 py-3 font-mono text-sm bg-amber-400 text-black font-bold group-hover:bg-white transition-colors">
              [ run --work ]
            </span>
          </Magnetic>

          <Magnetic as="a" href="#contact" strength={0.4} className="group">
            <span className="block px-7 py-3 font-mono text-sm bg-transparent border border-white/20 text-white/90 hover:border-amber-400 hover:text-amber-400 transition-colors">
              [ run --contact ]
            </span>
          </Magnetic>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          aria-label="Passes"
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs"
        >
          {jumps.map((j) => (
            <a key={j.n} href={j.href} className="group text-white/40 hover:text-amber-400 transition-colors">
              <span className="text-amber-400/70 group-hover:text-amber-400">{j.n}</span>
              {" //"}{j.label}
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
