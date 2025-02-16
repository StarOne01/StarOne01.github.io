"use client";

import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import React from "react";
import Image from "next/image";
import { Parkinsans } from "next/font/google";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { words, also, projects, contrib, nameData, cards } from "@/data/data";
import { LayoutGrid, Card } from "@/components/ui/layout-grid";

const parkin = Parkinsans({ weight: "400", subsets: ["latin"] });

function unBlur() {
  (
    document.body.getElementsByClassName("blurEffect")[0] as HTMLElement
  ).style.backdropFilter = "blur(0px)";
  (
    document.body.getElementsByClassName("blurEffect")[0] as HTMLElement
  ).style.transition = "backdrop-filter 0.5s";
}

function blur() {
  (
    document.body.getElementsByClassName("blurEffect")[0] as HTMLElement
  ).style.backdropFilter = "blur(16px)";
  (
    document.body.getElementsByClassName("blurEffect")[0] as HTMLElement
  ).style.transition = "backdrop-filter 0.5s";
}

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function invMenu() {
    setMobileMenuOpen(mobileMenuOpen ? false : true);
  }
  return (
    <header
      className={
        " text-black dark:text-white bg-black " + mobileMenuOpen ? "fixed bottom-5  w-full z-[50]" : "fixed bottom-5  w-full -z-50 "
      }
    >
      <nav
        className={ mobileMenuOpen ? " flex lg:max-w-5xl no-doc-scroll dark:bg-[rgba(0,0,0,0.53)] bg-[rgba(255,255,255,0.4)]  md:max-w-xl z-[59] border sm:mx-auto max-w-sm mx-6  rounded-full items-center justify-between px-6 lg:py-2 py-3 lg:px-8" : " flex lg:max-w-5xl md:max-w-xl -z-50 sm:mx-auto max-w-xs mx-auto  bg-[rgba(255,255,255,0.4)] dark:bg-[rgb(0,0,0)] dark:border dark:border-yellow-500 dark:shadow-inner dark:shadow-yellow-300  rounded-full items-center justify-between  backdrop-blur-md px-6 lg:py-2 py-3 lg:px-8" }
        aria-label="Global"
      >
        <div className={mobileMenuOpen ? "flex secret lg:flex-1 z-[45]":"flex secret lg:flex-1 -z-50" }>
          <p
            onPointerOver={() => unBlur()}
            onPointerLeave={() => blur()}
            className={
              " sm:font-bold cursor-pointer font-semibold " +
              parkin.className
            }
          >
            <span>StarOne</span>
          </p>
        </div>
        <div className="flex lg:hidden z-[45]">
          <button
            type="button"
            className={
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-white z-40"
            }
            onClick={() => {
              invMenu();
            }}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon
                className="h-6 z-50 w-6 dark:text-white text-black"
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon className="h-6 w-6 z-50 " aria-hidden="true" />
            )}
          </button>
        </div>
        <div className={`hidden lg:flex  lg:gap-x-12 ${parkin.className}`}>
          <a
            href="#Whoami"
            className="font-semibold text-md m-1 p-1 leading-6 rounded-md text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
          >
            Whoami
          </a>
          <a
            href="#Skills"
            className="text-md font-semibold m-1 p-1 leading-6 rounded-md text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
          >
            Skills
          </a>
          {/* <a
            href="https://github.com/StarOne01"
            className="text-lg font-semibold leading-6  dark:text-white p-2 rounded-md text-gray-900"
          >
            Projects
          </a> */}
          <a
            href="prashanth-resume.pdf"
            className="text-md font-semibold m-1 p-1 leading-6 rounded-md text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
          >
            Resume
          </a>
          <a
            href="#interests"
            className="text-md font-semibold m-1 p-1 leading-6 rounded-md text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
          >
            Interests
          </a>
          <a href="#love" className="text-md m-1 p-1 font-semibold leading-6 rounded-md text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200">
            Things I love
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="mailto:thestarone01@proton.me">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="-1 0 25 25"
              className="icon dark:fill-white dark:hover:fill-black -py-1 rounded hover:fill-white hover:bg-black dark:hover:bg-yellow-200 inline-block mx-1"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/StarOne/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 24 24"
              className="icon dark:fill-white dark:hover:fill-black hover:fill-white hover:bg-black dark:hover:bg-yellow-200 inline-block mx-1 rounded-md"
            >
              <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
            </svg>
          </a>
          <a href="https://github.com/StarOne01">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 24 24"
              className="icon dark:fill-white dark:hover:fill-black hover:fill-white hover:bg-black dark:hover:bg-yellow-200 inline-block mx-1 rounded-3xl"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              ></path>
            </svg>
          </a>
        </div>
      </nav>
     {mobileMenuOpen && <div className={"lg:hidden z-[650] "}>
     <div className="fixed h-screen top-0 right-0 z-0 w-full overflow-y-auto bg-[#ffffff61] backdrop-blur-xl dark:bg-[#0000002e] px-6 py-6 sm:max-w-sm ">
     <div className="fixed h-screen top-0 right-0 z-1 w-full overflow-y-auto bg-transparent backdrop-blur-md dark:backdrop-blur-3xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="-my-6 center z-1 divide-gray-500/10">
              <div
                className={
                  "space-y-2  text-center align-middle py-6 " + parkin.className
                }
              >
                <a
                  href="#Whoami"
                  onClick={invMenu}
                  className="-mx-3 block rounded-lg px-3 py-2  text-2xl font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Whoami
                </a>
                <a
                  href="#Skills"
                  onClick={invMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Skills
                </a>
                {/* <a
                  href="https://github.com/StarOne01"
                  onClick={invMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7   text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Projects
                </a> */}
                <a
                  href="#interests"
                  onClick={invMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Interests
                </a>
                <a
                  href="prashanth-resume.pdf"
                  onClick={invMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Resume
                </a>
                <a
                  href="#love"
                  onClick={invMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Things I love
                </a>

              </div>
              <div className="py-6 flex justify-evenly">
                {/*href="#" onClick={invMenu*/}
                <a href="mailto:thestarone01@proton.me">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    className="icon dark:fill-white dark:hover:fill-black  hover:fill-white hover:bg-black dark:hover:bg-yellow-200 inline-block m-1 rounded-sm"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/StarOne/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    className="icon dark:fill-white dark:hover:fill-black hover:fill-white hover:bg-black dark:hover:bg-yellow-200 inline-block m-1 rounded-md"
                  >
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                  </svg>
                </a>
                <a href="https://github.com/StarOne01">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    className="icon dark:fill-white dark:hover:fill-black hover:fill-white hover:bg-black dark:hover:bg-yellow-200 inline-block m-1 rounded-3xl"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
                </div>
              </div>
          </div>
        </div>
      </div>}
    </header>
  );
}

function ThingsiLove({ cards }: { cards: Card[] }) {
  return (
    <div id="love" className="h-screen snap-center pb-16 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
function ThingsIlove() {
  return (
    <div id="love" className="mt-20">
      <h2
        className={
          "text-4xl underline decoration-slate-500 font-semibold sm:text-5xl " +
          parkin.className
        }
      >
        Things
        <span className="dark:text-yellow-300 py-4 text-cyan-500 font-light">
          iLove
        </span>
      </h2>
      <ThingsiLove cards={cards} />
    </div>
  );
}

function Resume() {
  return (
    <div className={"m-7 max md:mx-auto text-base " + parkin.className}></div>
  );
}

function Hero() {
  return (
    <div
      className={
        "bg-[url('../../public/AIGenImage3.webp')]  bg-cover bg-center " +
        parkin.className
      }
    >
      <div
        className={`relative blurEffect flex backdrop-blur-lg z-[50] flex-col h-[100vh] bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(0,0,0,0.53)] gap-4 items-center justify-center px-4 ${parkin.className}`}
      >
        <div className="text-4xl md:text-6xl  text-slate-100 text-center">
          <TypewriterEffectSmooth words={words} />
          <TypewriterEffectSmooth words={nameData} />
          <TypewriterEffectSmooth className="relative text-lg md:text-xl" words={also} />
        </div>
      </div>
    </div>
  );
}

function Whoami() {
  return (
    <div id="Whoami" className={" " + parkin.className}>
      <h2
        className={
          "text-4xl underline decoration-slate-500 font-semibold md:text-5xl " +
          parkin.className
        }
      >
        Who
        <span className="dark:text-yellow-300 text-cyan-500 font-light">
          ami
        </span>
      </h2>
      <br />
      <ul className="m-7 ml-5">
        <li>Full Stacker</li>
        <li>FOSS Enthusiast</li>
        <li>Astrophile</li>
        <li>Melophile</li>
        <li>Cyber Security Advocate</li>
      </ul>
      Welcome to my digital realm, where I bring code to life in extraordinary
      ways. I'm a{" "}
      <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">
        system developer, skilled in C, C++
      </span>{" "}
      – the building blocks of software magic. My journey takes me deep into the
      heart of machines, crafting their very souls and making them hum with
      electronic vitality. I'm also a{" "}
      <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">
        aspiring dual-faceted engineer,
      </span>{" "}
      both Electric and Electronic. Electronic engineering supports my{" "}
      <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">
        interests in Computers and electronical systems,
      </span>{" "}
      while my passion for Electric engineering quenches my thirst for
      understanding the beauty of physics and electromagnetism. As an electronic
      engineer, I create powerful things with mere milliamps. On the other hand,
      as an electrical engineer, I play with hundreds of volts and craft
      high-power appliances. But that's not all –{" "}
      <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">
        I'm also a cybersecurity enthusiast,
      </span>{" "}
      unearthing hidden truths across various realms.{" "}
      <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">
        From the vast expanse of astronomy to the intricate dance of wireless
        networks, and from captivating graphics to the core of bare-metal
        transistors, I love unveiling secrets and seeing what lies beneath the
        surface.
      </span>{" "}
      Come, join me on this adventure where science fiction meets reality. Let's
      explore uncharted code, push the boundaries of what's possible, and dive
      into the very heart of technology and the mysteries of the electronical
      world.
    </div>
  );
}

function FavProjs() {
  return (
    <div id="projects" className="mt-7 max-w-full ">
      <h2
        className={
          "text-4xl underline cursor-default  decoration-slate-500 font-semibold md:text-5xl " +
          parkin.className
        }
      >
        <span className="dark:text-yellow-300 text-cyan-500 font-light">
          Fav
        </span>
        Projects
      </h2>
      <br />

      {projects.map((theme) => (
        <div key={theme.name}>
          <p className="font-extrabold text-2xl"> {theme.name}: </p>
          <div className="flex flex-row gap-2 flex-wrap">
            {theme.projects.map((project) => (
              <div
                key={project.name}
                className="bg-white dark:border-yellow-300 dark:hover:shadow-lg dark:md:hover:shadow-md dark:md:hover:shadow-yellow-200 hover:text-white cursor-pointer  hover:bg-black justify-center dark:bg-black border sm:max-w-64 rounded-lg p-4 m-4 flex flex-col items-center gap-4"
              >
                <Image
                  alt={project.name + " Logo"}
                  src={project.logo}
                  width={150}
                  height={150}
                ></Image>
                <h3 className="text-xl underline decoration-slate-500 font-semibold">
                  The{" "}
                  <span className="dark:text-yellow-300 text-cyan-500 font-light">
                    {project.name}
                  </span>{" "}
                  Project
                </h3>
                <p className="text-base text-center">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div id="Skills" className="mt-7  ">
      <h2
        className={
          "text-4xl underline decoration-slate-500 font-semibold md:text-5xl " +
          parkin.className
        }
      >
        Skills
      </h2>
      <br />

      <div className=" ">
        <div>
          <h3
            className={
              "text-xl underline md:text-2xl decoration-slate-500 " +
              parkin.className
            }
          >
            <span className=" text-cyan-400 dark:text-yellow-300">Ethical</span>{" "}
            Hacking
          </h3>
          <ul className="m-7  ml-5">
            <li>Computer Networks</li>
            <li>GNU/Linux - POSIX</li>
            <li>Python + Bash</li>
            <li>WireShark</li>
            <li>Nmap</li>
            <li>HashCat</li>
            <li>Jhonny</li>
            <li>Aircrack-ng</li>
            <li>Burpsuit</li>
          </ul>
        </div>
        <div>
          <h3
            className={
              "text-xl underline md:text-2xl decoration-slate-500 " +
              parkin.className
            }
          >
            <span className=" text-cyan-400 dark:text-yellow-300">Web</span>{" "}
            Development
          </h3>
          <ul className="m-7 ml-5">
            <li>JavaScript/TypeScript</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>React.js </li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <div>
        <h3
          id="interests"
          className={
            "text-xl underline md:text-2xl decoration-slate-500  " +
            parkin.className
          }
        >
          Also
          <span className=" text-cyan-400 dark:text-yellow-300">
            {" "}
            Interested
          </span>{" "}
          in
        </h3>
        <ul className="m-7 ml-5">
          <li>Software Development</li>
          <li>Embedded Systems</li>
          <li>Digital and Analog Electronics</li>
          <li>Machine Learning</li>
          <li>Mathematics</li>
        </ul>
      </div>
    </div>
  );
}

function Contribs() {
  return (
    <div id="contributions" className="mt-7">
      <h2
        className={
          "text-4xl underline decoration-slate-500 font-semibold md:text-5xl " +
          parkin.className
        }
      >
        <span className="dark:text-yellow-300 py-4 text-cyan-500 font-light">
          {" "}
          My
        </span>
        Contribs!
      </h2>
      <br />
      <div className="flex flex-row flex-wrap">
        {contrib.map((org) => (
          <div key={org.name + "contrib"} className="max-w-80">
            <h2 className="text-2xl">{org.name}</h2>
            <ul className="mb-1 mt-1 ml-10">
            {org.contribs.code !== null && (
                <li>
                  {" "}
                  <p className="underline">Codeeee</p>
                  <ol className="mb-1 flex flex-row flex-wrap ml-10">
                    {org.contribs.code.map((contribs: { PR: string }) => (
                      <li className="p-2 list-none" key={contribs.PR}>
                        <a
                          className="text-cyan-300"
                          href={
                            "https://github.com/llvm/llvm-project/pull/" +
                            contribs.PR
                          }
                        >
                          #{contribs.PR}{" "}
                        </a>
                      </li>
                    ))}
                  </ol>
                </li>
              )}
              </ul>
            <ul className="mb-1 mt-1 ml-10">
              {org.contribs.docs !== null && (
                <li>
                  {" "}
                  <p className="underline">Doc works</p>
                  <ol className="mb-1 flex flex-row flex-wrap ml-10">
                    {org.contribs.docs.map((contribs: { PR: string }) => (
                      <li className="p-2 list-none" key={contribs.PR}>
                        <a
                          className="text-cyan-300"
                          href={
                            "https://github.com/llvm/llvm-project/pull/" +
                            contribs.PR
                          }
                        >
                          #{contribs.PR}{" "}
                        </a>
                      </li>
                    ))}
                  </ol>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className={"m-7 md:max-w-[900px] lg:mx-auto md:mx-16 mx-6 text-base " + parkin.className}>
        <Whoami />
        <br />
        <Skills />
        <ThingsIlove />
        <FavProjs />
{ //       <Contribs />
}
      </div>
    </>
  );
}
