export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-white/[0.06]" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
        <p>© 2026 Prashanth T.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-volt animate-pulse" aria-hidden />
          set in inter & instrument serif
        </p>
        <p>v3.0 — volt</p>
      </div>
    </footer>
  );
}
