import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-edge" role="contentinfo">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 pb-28 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 Prashanth T.</p>
        <a
          href={site.socials.blog.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dim transition-colors hover:text-accent"
        >
          Blog ↗
        </a>
        <p className="hidden lg:block">Visuals AI-generated · Built with Next.js</p>
        <p>Coimbatore · India</p>
        <a href="#top" className="text-dim transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
