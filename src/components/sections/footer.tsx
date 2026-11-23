import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-edge" role="contentinfo">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 pb-28 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-faint sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:px-8">
        <p>© 2026 Prashanth T.</p>
        <a
          href="/opensource"
          className="inline-flex min-h-[44px] items-center text-dim transition-colors hover:text-accent sm:min-h-0"
        >
          Open source
        </a>
        <p className="hidden lg:block">Visuals AI-generated · Built with Next.js</p>
        <p>Coimbatore · India</p>
        <a
          href="/#top"
          className="inline-flex min-h-[44px] items-center text-dim transition-colors hover:text-accent sm:min-h-0"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
