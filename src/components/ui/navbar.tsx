"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Parkinsans } from "next/font/google";
import { usePathname } from "next/navigation";

const parkin = Parkinsans({ weight: "400", subsets: ["latin"] });

function unBlur() {
  const element = document.body.getElementsByClassName("blurEffect")[0] as HTMLElement | undefined;
  if (element) {
    element.style.backdropFilter = "blur(0px)";
    element.style.transition = "backdrop-filter 0.5s";
  }
}

function blur() {
  const element = document.body.getElementsByClassName("blurEffect")[0] as HTMLElement | undefined;
  if (element) {
    element.style.backdropFilter = "blur(16px)";
    element.style.transition = "backdrop-filter 0.5s";
  }
}

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
            ? "flex lg:max-w-5xl no-doc-scroll backdrop-blur-xl bg-white/10 border border-white/20 sm:mx-auto max-w-sm mx-6 rounded-2xl items-center justify-between px-6 lg:py-3 py-3 lg:px-8 shadow-xl"
            : "flex lg:max-w-5xl md:max-w-xl sm:mx-auto max-w-xs mx-auto bg-white/5 border border-white/10 rounded-2xl items-center justify-between backdrop-blur-xl px-6 lg:py-3 py-3 lg:px-8 shadow-lg transition-all duration-300 hover:bg-white/10"
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
              onPointerOver={() => unBlur()}
              onPointerLeave={() => blur()}
              className={
                "sm:font-bold cursor-pointer font-semibold text-lg text-white hover:text-slate-200 transition-all " + parkin.className
              }
            >
              <span>StarOne</span>
            </p>
          </Link>
        </div>
        <div className="flex lg:hidden z-[45]">
          <button
            type="button"
            className={
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white z-40 hover:bg-white/10 transition-colors"
            }
            onClick={() => {
              invMenu();
            }}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon
                className="h-6 z-50 w-6 text-white"
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon className="h-6 w-6 z-50 " aria-hidden="true" />
            )}
          </button>
        </div>
        <div className={`hidden lg:flex lg:gap-x-8 ${parkin.className}`}>
          {isHomePage ? (
            <>
              <a
                href="#Whoami"
                className="font-semibold text-sm m-0 p-2 leading-6 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Whoami
              </a>
              <a
                href="#Skills"
                className="text-sm font-semibold m-0 p-2 leading-6 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Skills
              </a>
              <Link
                href="/projects"
                className="text-sm font-semibold m-0 p-2 leading-6 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Projects
              </Link>
              <a
                href="#love"
                className="text-sm m-0 p-2 font-semibold leading-6 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Things I Love
              </a>
              <a
                href="#contact"
                className="text-sm m-0 p-2 font-semibold leading-6 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Contact
              </a>
            </>
          ) : (
            <Link href="/"
              className="text-sm font-semibold m-0 p-2 leading-6 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Back to Home
            </Link>
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
          <Link href="mailto:thestarone01@proton.me" title="Email">
            <div className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="icon fill-white hover:fill-slate-200"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
              </svg>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/StarOne/" title="LinkedIn">
            <div className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="icon fill-white hover:fill-slate-200"
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
              </svg>
            </div>
          </Link>
          <Link href="https://github.com/StarOne01" title="GitHub">
            <div className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="icon fill-white hover:fill-slate-200"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className={"lg:hidden z-[650] "}>
          <div className="fixed h-screen top-0 right-0 z-0 w-full overflow-y-auto bg-white/20 backdrop-blur-xl px-6 py-6 sm:max-w-sm" onClick={closeMenu}></div>
          <div className="fixed h-screen top-0 right-0 z-1 w-full overflow-y-auto bg-transparent backdrop-blur-md px-6 py-6 sm:max-w-sm">
            <div className="-my-6 center z-1">
              <div
                className={
                  "space-y-2 text-center align-middle py-6 " +
                  parkin.className
                }
              >
                {isHomePage ? (
                  <>
                    <a
                      href="#Whoami"
                      onClick={closeMenu}
                      className="-mx-3 block rounded-lg px-3 py-3 text-xl font-semibold leading-7 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      Whoami
                    </a>
                    <a
                      href="#Skills"
                      onClick={closeMenu}
                      className="-mx-3 block rounded-lg px-3 py-3 text-xl font-semibold leading-7 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      Skills
                    </a>
                    <Link
                      href="/projects"
                      onClick={closeMenu}
                      className="-mx-3 block rounded-lg px-3 py-3 text-xl font-semibold leading-7 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      Projects
                    </Link>
                    <a
                      href="#love"
                      onClick={closeMenu}
                      className="-mx-3 block rounded-lg px-3 py-3 text-xl font-semibold leading-7 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      Things I Love
                    </a>
                    <a
                      href="#contact"
                      onClick={closeMenu}
                      className="-mx-3 block rounded-lg px-3 py-3 text-xl font-semibold leading-7 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      Contact
                    </a>
                  </>
                ) : (
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="-mx-3 block rounded-lg px-3 py-3 text-xl font-semibold leading-7 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Back to Home
                  </Link>
                )}
              </div>
              <div className="py-6 flex justify-evenly">
                <Link href="mailto:thestarone01@proton.me" title="Email">
                  <div className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      className="icon fill-white hover:fill-slate-200"
                    >
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                    </svg>
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/in/StarOne/" title="LinkedIn">
                  <div className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      className="icon fill-white hover:fill-slate-200"
                    >
                      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                    </svg>
                  </div>
                </Link>
                <Link href="https://github.com/StarOne01" title="GitHub">
                  <div className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      className="icon fill-white hover:fill-slate-200"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}