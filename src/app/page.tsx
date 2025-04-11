"use client";

import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import React from "react";
import { Parkinsans } from "next/font/google";
import { words, also, projects, contrib, nameData, cards } from "@/data/data";
import { LayoutGrid, Card } from "@/components/ui/layout-grid";
import Link from "next/link";
const parkin = Parkinsans({ weight: "400", subsets: ["latin"] });

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


function Skills() {
  return (
    <div id="Skills" className="mt-20">
      <h2
        className={
          "text-4xl underline decoration-slate-500 font-semibold md:text-5xl " +
          parkin.className
        }
      >
        Skills
        <span className="dark:text-yellow-300 py-4 text-cyan-500 font-light">
          &Expertise
        </span>
      </h2>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-slate-300 dark:border-slate-700 rounded-lg hover:shadow-lg transition-all">
          <h3
            className={
              "text-xl md:text-2xl mb-4 " +
              parkin.className
            }
          >
            <span className="text-cyan-400 dark:text-yellow-300">Ethical</span>{" "}
            Hacking
          </h3>
          <ul className="space-y-2 ml-5">
            <li className="flex items-center"><span className="mr-2">🔍</span>Computer Networks</li>
            <li className="flex items-center"><span className="mr-2">🐧</span>GNU/Linux - POSIX</li>
            <li className="flex items-center"><span className="mr-2">🐍</span>Python + Bash</li>
            <li className="flex items-center"><span className="mr-2">🦈</span>WireShark</li>
            <li className="flex items-center"><span className="mr-2">🔭</span>Nmap</li>
            <li className="flex items-center"><span className="mr-2">🔑</span>HashCat</li>
            <li className="flex items-center"><span className="mr-2">🔓</span>Jhonny</li>
            <li className="flex items-center"><span className="mr-2">📡</span>Aircrack-ng</li>
            <li className="flex items-center"><span className="mr-2">🕸️</span>Burpsuit</li>
          </ul>
        </div>
        
        <div className="p-4 border border-slate-300 dark:border-slate-700 rounded-lg hover:shadow-lg transition-all">
          <h3
            className={
              "text-xl md:text-2xl mb-4 " +
              parkin.className
            }
          >
            <span className="text-cyan-400 dark:text-yellow-300">Web</span>{" "}
            Development
          </h3>
          <ul className="space-y-2 ml-5">
            <li className="flex items-center"><span className="mr-2">⚡</span>JavaScript/TypeScript</li>
            <li className="flex items-center"><span className="mr-2">➡️</span>Next.js</li>
            <li className="flex items-center"><span className="mr-2">🟢</span>Node.js</li>
            <li className="flex items-center"><span className="mr-2">⚛️</span>React.js</li>
            <li className="flex items-center"><span className="mr-2">🚂</span>Express.js</li>
            <li className="flex items-center"><span className="mr-2">🍃</span>MongoDB</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-4 border border-slate-300 dark:border-slate-700 rounded-lg hover:shadow-lg transition-all">
        <h3
          id="interests"
          className={
            "text-xl md:text-2xl mb-4 " +
            parkin.className
          }
        >
          Also
          <span className="text-cyan-400 dark:text-yellow-300">
            {" "}
            Interested
          </span>{" "}
          in
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-5">
          <li className="flex items-center"><span className="mr-2">💻</span>Software Development</li>
          <li className="flex items-center"><span className="mr-2">🔌</span>Embedded Systems</li>
          <li className="flex items-center"><span className="mr-2">⚡</span>Digital and Analog Electronics</li>
          <li className="flex items-center"><span className="mr-2">🧠</span>Machine Learning</li>
          <li className="flex items-center"><span className="mr-2">🔢</span>Mathematics</li>
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
                        <Link
                          className="text-cyan-300"
                          href={
                            "https://github.com/llvm/llvm-project/pull/" +
                            contribs.PR
                          }
                        >
                          #{contribs.PR}{" "}
                        </Link>
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
                        <Link
                          className="text-cyan-300"
                          href={
                            "https://github.com/llvm/llvm-project/pull/" +
                            contribs.PR
                          }
                        >
                          #{contribs.PR}{" "}
                        </Link>
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
      <Hero />
      <div className={"m-7 md:max-w-[900px] lg:mx-auto md:mx-16 mx-6 text-base " + parkin.className}>
        <Whoami />
        <br />
        <Skills />
        <ThingsIlove />
        { //       <Contribs />
        }
      </div>
    </>
  );
}
