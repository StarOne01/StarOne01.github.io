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
  const isOpenSource = pathname.startsWith("/opensource");
  const menuItems = isHomePage
    ? [
        ...site.nav.map((item) => ({ label: item, href: `#${item.toLowerCase()}` })),
        { label: "Open Source", href: "/opensource" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Open Source", href: "/opensource" },
      ];
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
  }, [open]);

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
  }, [open]);

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
              ? "border border-edge bg-surface/90 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.85)] backdrop-blur-md"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Link
            href="/"
            className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink"
            aria-label={`${site.name} home`}
          >
            StarOne01<span className="text-accent">_</span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/opensource"
              aria-current={isOpenSource ? "page" : undefined}
              className={`hidden items-center font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:text-accent sm:inline-flex ${
                isOpenSource ? "text-accent" : "text-dim"
              }`}
            >
              Open source
            </Link>
            <a
              href={site.socials.email.href}
              className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-accent md:inline"
            >
              {site.email}
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("terminal:open"))}
              aria-label="Open terminal"
              tabIndex={awake ? 0 : -1}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full font-mono text-xs text-dim transition-colors hover:bg-raise hover:text-accent"
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
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-raise"
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
        className={`fixed bottom-0 right-0 top-0 z-[80] flex w-[min(88vw,380px)] flex-col border-l border-edge bg-surface transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          aria-label="Sidebar"
          className="flex flex-1 flex-col justify-end overflow-y-auto px-5 pb-6 pt-16 sm:px-6"
        >
          <ul>
            {menuItems.map((item, i) => {
              const isAnchor = item.href.startsWith("#");
              const isCurrent = isAnchor
                ? active === item.href.slice(1)
                : pathname === item.href;

              const inner = (
                <>
                  <span
                    className={`font-mono text-[11px] transition-colors ${
                      isCurrent ? "text-accent" : "text-faint"
                    }`}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-3xl font-medium uppercase tracking-tight transition-colors group-hover:text-accent ${
                      isCurrent ? "text-accent" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                </>
              );

              return (
                <li key={item.href} className="border-b border-edge first:border-t">
                  {isAnchor ? (
                    <a
                      href={item.href}
                      onClick={close}
                      tabIndex={open ? 0 : -1}
                      aria-current={isCurrent ? "location" : undefined}
                      className="group flex min-h-[64px] items-baseline gap-4 py-4"
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={close}
                      tabIndex={open ? 0 : -1}
                      aria-current={isCurrent ? "page" : undefined}
                      className="group flex min-h-[64px] items-baseline gap-4 py-4"
                    >
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <a
            href={site.socials.email.href}
            tabIndex={open ? 0 : -1}
            className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-sm bg-accent font-mono text-[11px] uppercase tracking-[0.14em] text-black transition-colors hover:bg-ink"
          >
            {site.email}
          </a>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {[site.socials.linkedin, site.socials.github, site.socials.x].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                aria-label={`${site.name} on ${social.label} (opens in new tab)`}
                className="inline-flex min-h-[52px] items-center justify-center rounded-sm border border-edge text-dim transition-colors hover:border-accent hover:bg-accent hover:text-black"
              >
                <Icon
                  name={social.label.toLowerCase() as "linkedin" | "github" | "x"}
                  className="h-5 w-5"
                  aria-hidden
                />
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-between border-t border-edge py-3 pl-5 pr-3 sm:pl-6 sm:pr-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            Coimbatore · India
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-ink transition-colors hover:bg-raise"
          >
            <XMarkIcon className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </aside>
    </>
  );
}
