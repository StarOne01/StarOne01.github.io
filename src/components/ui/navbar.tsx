"use client";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import Icon from "@/components/ui/icon";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [awake, setAwake] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setScrolled(window.scrollY > 8);
        // Any scroll wakes the nav; short pages show it outright.
        const scrollable =
          document.documentElement.scrollHeight > window.innerHeight + 40;
        setAwake(!scrollable || window.scrollY > 40);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("sidebar-open", open);
    if (open) closeRef.current?.focus();
    return () => {
      document.documentElement.classList.remove("sidebar-open");
    };
  }, [open ]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    if (!isHomePage) return;
    const ids = site.nav.map((n) => n.toLowerCase());
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHomePage]);

  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => menuRef.current?.focus());
  };

  return (
    <>
      <header className="site-shift fixed inset-x-0 bottom-3 z-[60] px-3 sm:bottom-4 sm:px-5">
        <nav
          aria-label="Global"
          className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5 ${
            awake ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[160%] opacity-0"
          } ${
            scrolled
              ? "border border-line bg-paper/90 shadow-[0_12px_32px_-16px_rgba(28,27,23,0.25)] backdrop-blur-md"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight" aria-label={`${site.name} home`}>
            {site.handle}
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href={site.socials.email.href}
              className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink md:inline"
            >
              {site.email}
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("terminal:open"))}
              aria-label="Open terminal"
              tabIndex={awake ? 0 : -1}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full font-mono text-xs text-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              &gt;_
            </button>
            <button
              ref={menuRef}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-sidebar"
              onClick={() => (open ? close() : setOpen(true))}
              tabIndex={awake ? 0 : -1}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink/5"
            >
              {open ? (
                <XMarkIcon className="h-5 w-5" aria-hidden />
              ) : (
                <Bars3Icon className="h-5 w-5" aria-hidden />
              )}
              Menu
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar (right, push) */}
      <aside
        id="site-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        className={`fixed bottom-0 right-0 top-0 z-[80] flex w-[min(88vw,380px)] flex-col border-l border-line bg-paper transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav aria-label="Sidebar" className="flex flex-1 flex-col justify-end overflow-y-auto px-5 pb-6 pt-16 sm:px-6">
          <ul>
            {(isHomePage ? site.nav : ["Home"]).map((item, i) => (
              <li key={item} className="border-b border-line first:border-t">
                {isHomePage ? (
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={close}
                    tabIndex={open ? 0 : -1}
                    aria-current={active === item.toLowerCase() ? "location" : undefined}
                    className="group flex min-h-[64px] items-baseline gap-4 py-4"
                  >
                    <span
                      className={`font-mono text-[11px] transition-colors ${active === item.toLowerCase() ? "text-moss" : "text-muted/50"}`}
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-serif text-3xl font-medium tracking-tight transition-all duration-200 group-hover:translate-x-1 ${active === item.toLowerCase() ? "translate-x-1 text-mossdeep" : ""}`}
                    >
                      {item}
                    </span>
                  </a>
                ) : (
                  <Link
                    href="/"
                    onClick={close}
                    tabIndex={open ? 0 : -1}
                    className="group flex min-h-[64px] items-baseline gap-4 py-4"
                  >
                    <span className="font-mono text-[11px] text-moss" aria-hidden>01</span>
                    <span className="font-serif text-3xl font-medium tracking-tight transition-transform duration-200 group-hover:translate-x-1">
                      Home
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <a
            href={site.socials.email.href}
            tabIndex={open ? 0 : -1}
            className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-ink font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-moss"
          >
            {site.email}
          </a>

          <div className="mt-6 grid grid-cols-3 gap-2">
            <a
              href={site.socials.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              aria-label="Prashanth on LinkedIn (opens in new tab)"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-line font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper active:border-ink active:bg-ink active:text-paper"
            >
              <Icon name="linkedin" className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={site.socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              aria-label="Prashanth on GitHub (opens in new tab)"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-line font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper active:border-ink active:bg-ink active:text-paper"
            >
              <Icon name="github" className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={site.socials.x.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              aria-label="Prashanth on X (opens in new tab)"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-line font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper active:border-ink active:bg-ink active:text-paper"
            >
              <Icon name="x" className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </nav>

        <div className="flex items-center justify-between border-t border-line py-3 pl-5 pr-3 sm:pl-6 sm:pr-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted/70">
            Coimbatore · India
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
          >
            <XMarkIcon className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </aside>
    </>
  );
}
