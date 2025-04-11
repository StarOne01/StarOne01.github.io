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
    <div id="love" className="h-screen snap-cente w-full">
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
        "bg-[url('../../public/AIGenImage3.webp')] bg-cover bg-center " +
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
    <div id="Whoami" className={"py-8 " + parkin.className}>
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
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="p-4 border border-slate-300 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800">
            <h3 className="text-xl font-semibold mb-4">At a Glance</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">💻</span>
                Full Stack Developer
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">🔓</span>
                FOSS Enthusiast
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">✨</span>
                Astrophile
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">🎵</span>
                Melophile
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">🔒</span>
                Cyber Security Advocate
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              Welcome to my digital realm, where I bring code to life in extraordinary ways. I'm a{" "}
              <span className="font-bold dark:text-yellow-300 text-cyan-600">
                system developer, skilled in C, C++
              </span>{" "}
              – the building blocks of software magic.
            </p>
            
            <p className="mb-4">
              My journey takes me deep into the heart of machines, crafting their very souls and making them hum with
              electronic vitality. I'm also a{" "}
              <span className="font-bold dark:text-yellow-300 text-cyan-600">
                aspiring dual-faceted engineer
              </span>, both Electric and Electronic.
            </p>
            
            <p className="mb-4">
              <strong>Electronic engineering</strong> supports my interests in computers and electronic systems,
              while my passion for <strong>Electric engineering</strong> quenches my thirst for
              understanding the beauty of physics and electromagnetism.
            </p>
            
            <blockquote className="italic border-l-4 border-cyan-500 dark:border-yellow-300 pl-4 my-4">
              As an electronic engineer, I create powerful things with mere milliamps.
              As an electrical engineer, I play with hundreds of volts and craft high-power appliances.
            </blockquote>
            
            <p className="mb-4">
              But that's not all –{" "}
              <span className="font-bold dark:text-yellow-300 text-cyan-600">
                I'm also a cybersecurity enthusiast
              </span>, unearthing hidden truths across various realms.
              From the vast expanse of astronomy to the intricate dance of wireless
              networks, and from captivating graphics to the core of bare-metal
              transistors, I love unveiling secrets and seeing what lies beneath the
              surface.
            </p>
            
            <p>
              Come, join me on this adventure where science fiction meets reality. Let's
              explore uncharted code, push the boundaries of what's possible, and dive
              into the very heart of technology and the mysteries of the electronic world.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <a 
          href="#Skills" 
          className="px-6 py-3 rounded-md bg-cyan-500 dark:bg-yellow-500 text-white dark:text-black font-medium hover:bg-cyan-600 dark:hover:bg-yellow-600 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          Explore My Skills
        </a>
      </div>
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
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🔍</span>Computer Networks</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🐧</span>GNU/Linux - POSIX</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "95%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🐍</span>Python + Bash</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🦈</span>WireShark</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🔭</span>Nmap</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🔑</span>HashCat</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "75%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🔓</span>Jhonny</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "70%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">📡</span>Aircrack-ng</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🕸️</span>Burpsuit</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
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
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">⚡</span>JavaScript/TypeScript</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">➡️</span>Next.js</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🟢</span>Node.js</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">⚛️</span>React.js</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🚂</span>Express.js</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "75%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🍃</span>MongoDB</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="p-4 border border-slate-300 dark:border-slate-700 rounded-lg hover:shadow-lg transition-all">
          <h3
            className={
              "text-xl md:text-2xl mb-4 " +
              parkin.className
            }
          >
            <span className="text-cyan-400 dark:text-yellow-300">System</span>{" "}
            Development
          </h3>
          <ul className="space-y-2 ml-5">
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🔧</span>C/C++</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "95%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">⚙️</span>Embedded Systems</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🧩</span>System Architecture</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">📊</span>Data Structures</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="p-4 border border-slate-300 dark:border-slate-700 rounded-lg hover:shadow-lg transition-all">
          <h3
            className={
              "text-xl md:text-2xl mb-4 " +
              parkin.className
            }
          >
            <span className="text-cyan-400 dark:text-yellow-300">Electronic</span>{" "}
            Engineering
          </h3>
          <ul className="space-y-2 ml-5">
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">🔌</span>Circuit Design</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">💡</span>Microcontrollers</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2">📱</span>Digital Electronics</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {["Software Development", "Embedded Systems", "Digital & Analog Electronics", 
            "Machine Learning", "Mathematics", "Astronomy", "Physics", "Open Source"].map((interest) => (
            <div key={interest} className="flex items-center justify-center p-2 border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-yellow-900/20 transition-colors">
              {interest}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <a 
          href="/prashanth-resume.pdf" 
          className="px-6 py-3 rounded-md bg-cyan-500 dark:bg-yellow-500 text-white dark:text-black font-medium hover:bg-cyan-600 dark:hover:bg-yellow-600 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
          View Full Resume
        </a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="mt-20 mb-24">
      <h2
        className={
          "text-4xl underline decoration-slate-500 font-semibold md:text-5xl " +
          parkin.className
        }
      >
        Get in
        <span className="dark:text-yellow-300 py-4 text-cyan-500 font-light">
          Touch
        </span>
      </h2>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using your preferred method below.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 mr-3 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:thestarone01@proton.me" className="text-cyan-500 dark:text-yellow-300 hover:underline">thestarone01@proton.me</a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 mr-3 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <a href="https://www.linkedin.com/in/StarOne/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 dark:text-yellow-300 hover:underline">Connect on LinkedIn</a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 mr-3 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <a href="https://github.com/StarOne01" target="_blank" rel="noopener noreferrer" className="text-cyan-500 dark:text-yellow-300 hover:underline">StarOne01</a>
              </div>
            </div>
          </div>
        </div>
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
        <Contact />
        { //       <Contribs />
        }
      </div>
    </>
  );
}
