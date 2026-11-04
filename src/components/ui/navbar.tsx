"use client";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import Icon from "@/components/ui/icon";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

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
      <header className="fixed inset-x-0 top-0 z-[60] border-b border-edge bg-bg/80 backdrop-blur-md">
        <nav
          aria-label="Global"
          className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
        >
          <Link
            href="/"
            className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink"
            aria-label={`${site.name} home`}
          >
            StarOne01<span className="text-lime">_</span>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            {(isHomePage ? site.nav : ["Home"]).map((item, i) => {
              const id = item.toLowerCase();
              const current = isHomePage && active === id;
              return (
                <a
                  key={item}
                  href={isHomePage ? `#${id}` : "/"}
                  aria-current={current ? "location" : undefined}
                  className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                    current ? "text-lime" : "text-dim hover:text-lime"
                  }`}
                >
                  <span aria-hidden className="mr-1.5 text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-1">
            <a
              href={site.socials.email.href}
              className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-lime lg:inline"
            >
              {site.email}
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("terminal:open"))}
              aria-label="Open terminal"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm font-mono text-xs text-dim transition-colors hover:bg-raise hover:text-lime"
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
              className="inline-flex min-h-[44px] items-center gap-2 rounded-sm px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-raise md:hidden"
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

      {open && (
        <div
          aria-hidden
          onClick={close}
          className="fixed inset-0 z-[75] bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        id="site-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-[80] flex w-[min(88vw,360px)] flex-col border-l border-edge bg-surface transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          aria-label="Sidebar"
          className="flex flex-1 flex-col justify-end overflow-y-auto px-5 pb-6 pt-16 sm:px-6"
        >
          <ul>
            {(isHomePage ? site.nav : ["Home"]).map((item, i) => (
              <li key={item} className="border-b border-edge first:border-t">
                {isHomePage ? (
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={close}
                    tabIndex={open ? 0 : -1}
                    aria-current={active === item.toLowerCase() ? "location" : undefined}
                    className="group flex min-h-[64px] items-baseline gap-4 py-4"
                  >
                    <span
                      className={`font-mono text-[11px] transition-colors ${
                        active === item.toLowerCase() ? "text-lime" : "text-faint"
                      }`}
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-3xl font-medium uppercase tracking-tight transition-colors group-hover:text-lime ${
                        active === item.toLowerCase() ? "text-lime" : "text-ink"
                      }`}
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
                    <span className="font-mono text-[11px] text-faint" aria-hidden>
                      01
                    </span>
                    <span className="font-display text-3xl font-medium uppercase tracking-tight text-ink transition-colors group-hover:text-lime">
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
            className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-sm bg-lime font-mono text-[11px] uppercase tracking-[0.14em] text-black transition-colors hover:bg-ink"
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
                className="inline-flex min-h-[52px] items-center justify-center rounded-sm border border-edge text-dim transition-colors hover:border-lime hover:bg-lime hover:text-black"
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
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm text-ink transition-colors hover:bg-raise"
          >
            <XMarkIcon className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </aside>
    </>
  );
}
