export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-white/[0.06]" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-white/40">
        <p>© 2026 Prashanth T.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-amber-400 animate-pulse" aria-hidden />
          {"// verify: passed ✓ · coimbatore"}
        </p>
        <p>opt -O3</p>
      </div>
    </footer>
  );
}
