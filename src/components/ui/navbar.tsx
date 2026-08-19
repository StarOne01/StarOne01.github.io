"use client";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import Icon from "@/components/ui/icon";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <header
      className={`fixed bottom-5 inset-x-0 z-40 flex justify-center transition-opacity duration-300 ${
        isHomePage && !isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <nav
        className="flex items-center justify-between backdrop-blur-xl bg-black/60 border border-white/10 rounded-full px-4 sm:px-5 py-2.5 max-w-[calc(100vw-2rem)] sm:max-w-xl lg:max-w-3xl w-full mx-4 sm:mx-auto"
        aria-label="Global"
      >
        <Link href="/" className="flex items-center gap-2 group" aria-label={`${site.name} home`}>
          <span
            className="w-2 h-2 rounded-full bg-emerald-400/80 group-hover:bg-emerald-400 transition-colors"
            aria-hidden
          />
          <span
            className="font-mono text-xs text-white/80 group-hover:text-white tracking-wide"
            onMouseEnter={() => document.dispatchEvent(new CustomEvent("egg:prashanth-hover"))}
            onMouseLeave={() => document.dispatchEvent(new CustomEvent("egg:prashanth-leave"))}
          >
            {site.handle}
          </span>
        </Link>

        <div className="hidden lg:flex lg:gap-1" role="list">
          {isHomePage ? (
            site.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                role="listitem"
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-[0.15em] text-white/55 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))
          ) : (
            <Link href="/" className="px-3 py-1.5 text-xs font-mono uppercase tracking-[0.15em] text-white/55 hover:text-white transition-colors">
              ← home
            </Link>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-0.5">
          <a
            href={site.socials.email.href}
            aria-label="Email Prashanth"
            className="p-2 rounded-full hover:bg-white/10 text-white/55 hover:text-white transition-colors"
          >
            <Icon name="email" className="w-3.5 h-3.5" aria-hidden />
          </a>
          <a
            href={site.socials.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prashanth on LinkedIn (opens in new tab)"
            className="p-2 rounded-full hover:bg-white/10 text-white/55 hover:text-white transition-colors"
          >
            <Icon name="linkedin" className="w-3.5 h-3.5" aria-hidden />
          </a>
          <a
            href={site.socials.github.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prashanth on GitHub (opens in new tab)"
            className="p-2 rounded-full hover:bg-white/10 text-white/55 hover:text-white transition-colors"
          >
            <Icon name="github" className="w-3.5 h-3.5" aria-hidden />
          </a>
        </div>

        <button
          ref={triggerRef}
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden -mr-1 inline-flex items-center justify-center p-2 text-white/80 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen((o) => !o)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-5 h-5" aria-hidden />
          ) : (
            <Bars3Icon className="w-5 h-5" aria-hidden />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="lg:hidden fixed inset-0 z-[80]"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeMenu}
            aria-hidden
          />
          <div className="absolute bottom-0 inset-x-0 bg-black/95 border-t border-white/10 rounded-t-2xl p-6 pb-10 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/45">menu</span>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="p-2 text-white/70 hover:text-white"
              >
                <XMarkIcon className="w-5 h-5" aria-hidden />
              </button>
            </div>
            <div className="space-y-1 mb-6">
              {isHomePage ? (
                site.nav.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="block px-4 py-3 rounded-lg font-mono text-sm text-white/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
                  >
                    {item}
                  </a>
                ))
              ) : (
                <Link href="/" onClick={closeMenu} className="block px-4 py-3 rounded-lg font-mono text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                  ← home
                </Link>
              )}
            </div>
            <div className="h-px bg-white/10 mb-6" aria-hidden />
            <div className="grid grid-cols-3 gap-2">
              <a
                href={site.socials.email.href}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Email Prashanth"
              >
                <Icon name="email" className="w-5 h-5" aria-hidden />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">email</span>
              </a>
              <a
                href={site.socials.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Prashanth on LinkedIn (opens in new tab)"
              >
                <Icon name="linkedin" className="w-5 h-5" aria-hidden />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">linkedin</span>
              </a>
              <a
                href={site.socials.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Prashanth on GitHub (opens in new tab)"
              >
                <Icon name="github" className="w-5 h-5" aria-hidden />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">github</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
