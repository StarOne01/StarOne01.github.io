export default function Footer() {
  return (
    <footer className="border-t border-line" role="contentinfo">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 md:pb-28">
        <div className="flex flex-col items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:flex-row">
          <p>© 2026 Prashanth T.</p>
          <p>Coimbatore · India</p>
          <p>
            <a href="#main" className="transition-colors hover:text-ink">Back to top ↑</a>
          </p>
        </div>
        <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted/70 sm:text-left">
          Visuals AI-generated
          {" "}· Type: Space Grotesk, Inter, JetBrains Mono · Built with Next.js
        </p>
      </div>
    </footer>
  );
}
