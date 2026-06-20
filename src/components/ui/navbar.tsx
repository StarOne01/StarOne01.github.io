"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function invMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header
      className={
        "text-white " + 
        (mobileMenuOpen
          ? "fixed bottom-5 w-full z-[50]"
          : `fixed bottom-5 w-full z-40 transition-opacity duration-300 ${
              isHomePage && !isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`)
      }
    >
      <nav
        className={
          mobileMenuOpen
            ? "flex lg:max-w-3xl no-doc-scroll backdrop-blur-xl bg-white/5 border border-white/10 sm:mx-auto max-w-sm mx-6 rounded-lg items-center justify-between px-6 lg:py-3 py-3 lg:px-8"
            : "flex lg:max-w-3xl md:max-w-xl sm:mx-auto max-w-xs mx-auto bg-white/5 border border-white/10 rounded-lg items-center justify-between backdrop-blur-xl px-6 lg:py-3 py-3 lg:px-8 transition-all duration-300 hover:bg-white/8"
        }
        aria-label="Global"
      >
        <div
          className={
            mobileMenuOpen
              ? "flex secret lg:flex-1 z-[45]"
              : "flex secret lg:flex-1"
          }
        >
          <Link href="/">
            <p
              className={
                "cursor-pointer font-medium text-base text-white hover:text-white/80 transition-all " + inter.className
              }
            >
              Prashanth
            </p>
          </Link>
        </div>
        <div className="flex lg:hidden z-[45] items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className={
              "-m-2.5 inline-flex items-center justify-center rounded-md p-3 md:p-2.5 text-white z-40 hover:bg-white/10 transition-colors"
            }
            onClick={() => {
              invMenu();
            }}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon
                className="h-6 w-6 md:h-5 md:w-5 z-50 text-white"
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon className="h-6 w-6 md:h-5 md:w-5 z-50" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className={`hidden lg:flex lg:gap-x-6 ${inter.className}`}>
          {isHomePage ? (
            ["About", "Expertise", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm m-0 px-3 py-1.5 leading-6 rounded text-white/60 hover:text-white transition-all duration-300"
              >
                {item}
              </a>
            ))
          ) : (
            <Link href="/"
              className="text-sm m-0 px-3 py-1.5 leading-6 rounded text-white/60 hover:text-white transition-all duration-300"
            >
              ← Home
            </Link>
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
          {[
            { href: "mailto:ping@starone01.me", title: "Email", path: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" },
            { href: "https://www.linkedin.com/in/StarOne01/", title: "LinkedIn", path: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" },
            { href: "https://github.com/StarOne01", title: "GitHub", path: "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" },
          ].map(({ href, title, path }) => (
            <Link key={title} href={href} title={title}>
              <div className="p-2 rounded hover:bg-white/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-white/60 hover:fill-white">
                  <path d={path} />
                </svg>
              </div>
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className={"lg:hidden z-[650] fixed inset-0"}>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu}></div>
          
          {/* Menu Panel */}
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-white/10 rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-8 space-y-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-xl font-medium text-white ${inter.className}`}>Menu</h3>
                <button
                  type="button"
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={closeMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Menu Items */}
              <div className={`space-y-2 ${inter.className}`}>
                {isHomePage ? (
                  ["About", "Expertise", "Experience", "Skills", "Contact"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={closeMenu}
                      className="block px-4 py-3 rounded-lg text-base text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                    >
                      {item}
                    </a>
                  ))
                ) : (
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="block px-4 py-3 rounded-lg text-base text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                  >
                    ← Home
                  </Link>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10"></div>

              {/* Social Links */}
              <div>
                <p className={`text-xs font-medium text-white/40 uppercase tracking-wider mb-4 ${inter.className}`}>Connect</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { href: "mailto:ping@starone01.me", title: "Email", path: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" },
                    { href: "https://www.linkedin.com/in/StarOne01/", title: "LinkedIn", path: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" },
                    { href: "https://github.com/StarOne01", title: "GitHub", path: "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" },
                  ].map(({ href, title, path }) => (
                    <Link key={title} href={href} title={title} onClick={closeMenu}>
                      <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-white/60">
                          <path d={path} />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Safe Area */}
              <div className="h-4"></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ThemeToggle() {
  const [flash, setFlash] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const handleClick = () => {
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 2500);
    }, 200);
  };

  return (
    <>
      <div className={`fixed inset-0 z-[60] pointer-events-none transition-colors duration-200 ${flash ? "bg-white" : "bg-transparent"}`} />
      {showMsg && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 bg-black/80 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/60 backdrop-blur-xl whitespace-nowrap">
          light mode? in this economy?
        </div>
      )}
      <button
        onClick={handleClick}
        className="p-2 rounded hover:bg-white/10 transition-all duration-300"
        title="toggle theme"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-white/60 hover:fill-white">
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>
      </button>
    </>
  );
}