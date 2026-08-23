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
      className={`fixed top-0 inset-x-0 z-[60] flex justify-center px-4 pt-4 transition-all duration-300 ${
        isHomePage && !isScrolled ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100"
      }`}
    >
      <nav
        className="flex items-center justify-between backdrop-blur-xl bg-paper/85 border border-sand shadow-sm rounded-full pl-5 pr-2 py-2 max-w-xl w-full"
        aria-label="Global"
      >
        <Link href="/" className="flex items-center gap-2 group" aria-label={`${site.name} home`}>
          <span className="w-2 h-2 rounded-full bg-clay group-hover:bg-clay-deep transition-colors" aria-hidden />
          <span className="font-serif text-base text-ink tracking-tight">{site.name}</span>
        </Link>

        <div className="hidden lg:flex lg:gap-1" role="list">
          {isHomePage ? (
            site.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                role="listitem"
                className="px-3 py-1.5 text-[13px] text-ink-soft hover:text-ink transition-colors"
              >
                {item}
              </a>
            ))
          ) : (
            <Link href="/" className="px-3 py-1.5 text-[13px] text-ink-soft hover:text-ink transition-colors">
              ← home
            </Link>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-0.5">
          <a
            href={site.socials.email.href}
            aria-label="Email Prashanth"
            className="p-2 rounded-full hover:bg-cream text-ink-soft hover:text-ink transition-colors"
          >
            <Icon name="email" className="w-3.5 h-3.5" aria-hidden />
          </a>
          <a
            href={site.socials.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prashanth on LinkedIn (opens in new tab)"
            className="p-2 rounded-full hover:bg-cream text-ink-soft hover:text-ink transition-colors"
          >
            <Icon name="linkedin" className="w-3.5 h-3.5" aria-hidden />
          </a>
          <a
            href={site.socials.github.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prashanth on GitHub (opens in new tab)"
            className="p-2 rounded-full hover:bg-cream text-ink-soft hover:text-ink transition-colors"
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
          className="lg:hidden -mr-1 inline-flex items-center justify-center p-2 text-ink hover:bg-cream rounded-full transition-colors"
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
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden
          />
          <div className="absolute bottom-0 inset-x-0 bg-paper border-t border-sand rounded-t-3xl p-6 pb-10 max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-soft">menu</span>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="p-2 text-ink-soft hover:text-ink"
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
                    className="block px-4 py-3 rounded-xl font-serif text-lg text-ink hover:bg-cream transition-colors"
                  >
                    {item}
                  </a>
                ))
              ) : (
                <Link href="/" onClick={closeMenu} className="block px-4 py-3 rounded-xl font-serif text-lg text-ink hover:bg-cream transition-colors">
                  ← home
                </Link>
              )}
            </div>
            <div className="h-px bg-sand mb-6" aria-hidden />
            <div className="grid grid-cols-3 gap-2">
              <a
                href={site.socials.email.href}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-sand text-ink-soft hover:text-ink hover:border-clay/40 transition-colors"
                aria-label="Email Prashanth"
              >
                <Icon name="email" className="w-5 h-5" aria-hidden />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">email</span>
              </a>
              <a
                href={site.socials.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-sand text-ink-soft hover:text-ink hover:border-clay/40 transition-colors"
                aria-label="Prashanth on LinkedIn (opens in new tab)"
              >
                <Icon name="linkedin" className="w-5 h-5" aria-hidden />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">linkedin</span>
              </a>
              <a
                href={site.socials.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-sand text-ink-soft hover:text-ink hover:border-clay/40 transition-colors"
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
