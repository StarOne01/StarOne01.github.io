"use client";
import { motion } from "framer-motion";

const K = "text-emerald-300";
const V = "text-white";
const T = "text-amber-200/90";
const C = "text-white/35";
const S = "text-white/60";

function L({ children }: { children: React.ReactNode }) {
  return <div className="whitespace-pre">{children}</div>;
}

export default function IrPanel() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6"
      aria-label="How this site is organized, written as compiler IR"
    >
      <div className="border border-white/12 bg-white/[0.02] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 border-b border-white/10">
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/50">
            pipeline.mlir
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-emerald-300/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" aria-hidden />
            specimen
          </span>
        </div>
        <div className="overflow-x-auto no-scrollbar px-4 sm:px-5 py-5 font-mono text-[12px] sm:text-[13px] leading-[1.9]">
          <L><span className={K}>func.func</span> <span className={V}>@starone01</span><span className={S}>(%idea: </span><span className={T}>!prod.prototype</span><span className={S}>) -&gt; </span><span className={T}>!prod.shipped</span> <span className={S}>{"{"}</span></L>
          <L>  <span className={V}>%ast</span><span className={S}>     = </span><span className={K}>"frontend.parse"</span><span className={S}>(%idea) : (</span><span className={T}>!prod.prototype</span><span className={S}>) -&gt; </span><span className={T}>!ir.ast</span></L>
          <L>  <span className={V}>%lowered</span><span className={S}> = </span><span className={K}>"midend.lower"</span><span className={S}>(%ast) : (</span><span className={T}>!ir.ast</span><span className={S}>) -&gt; </span><span className={T}>!mlir.module</span></L>
          <L>  <span className={V}>%opt</span><span className={S}>     = </span><span className={K}>"midend.canonicalize"</span><span className={S}>(%lowered) : (</span><span className={T}>!mlir.module</span><span className={S}>) -&gt; </span><span className={T}>!mlir.module</span></L>
          <L>  <span className={V}>%bin</span><span className={S}>     = </span><span className={K}>"backend.emit"</span><span className={S}>(%opt) </span><span className={C}>{"{target = \"prod\", opt = \"-O3\"}"}</span><span className={S}> : (</span><span className={T}>!mlir.module</span><span className={S}>) -&gt; </span><span className={T}>!prod.shipped</span></L>
          <L>  <span className={K}>return</span> <span className={V}>%bin</span><span className={S}> : </span><span className={T}>!prod.shipped</span></L>
          <L><span className={S}>{"}"}</span>  <span className={C}>{"// scroll to execute each pass"}</span></L>
        </div>
      </div>
    </motion.figure>
  );
}
