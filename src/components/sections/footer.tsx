export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-sand" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-ink-soft">
        <p>© 2026 Prashanth T.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
          built with care · coimbatore
        </p>
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase">v2.0</p>
      </div>
    </footer>
  );
}
