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
            <h3 className="text-xl font-semibold mb-4">TL;DR</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">💻</span>
                Electrical student
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">🔓</span>
                Passionate about cybersecurity
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">🔧</span>
                C/C++ System Developer
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">✨</span>
                Astrophile & Open-Source Advocate
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-cyan-100 dark:bg-yellow-900/30 rounded-full text-cyan-600 dark:text-yellow-300">🎵</span>
                Melophile
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              Welcome to my digital realm! I'm a{" "}
              <span className="font-bold dark:text-yellow-300 text-cyan-600">
                A EE student
              </span>{" "}
              with a fervent passion for cybersecurity, system-level software, and electronics.
            </p>
            
            <div className="mb-6 relative">
              <h4 className="text-lg font-semibold mb-4">Professional Timeline:</h4>
              
              <div className="relative">
                {/* Journey Path Line */}
                <div className="absolute left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-yellow-400 dark:from-yellow-300 dark:via-amber-500 dark:to-cyan-400"></div>
                
                {/* Journey Points */}
                <div className="space-y-12">
                  {/* 2016-2018 */}
                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 dark:bg-black border-4 border-cyan-400 dark:border-yellow-300 transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                      <span className="text-cyan-600 dark:text-yellow-300 font-bold">2016</span>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-slate-50 to-cyan-50 dark:from-slate-800/90 dark:to-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                      <h5 className="font-semibold text-cyan-600 dark:text-yellow-300">Spark of Curiosity</h5>
                      <blockquote className="italic border-l-2 pl-3 my-2 text-sm border-cyan-300 dark:border-yellow-600">
                        "The world started making sense in circuits, logic gates, and cosmic questions."
                      </blockquote>
                      <ul className="list-disc ml-5 text-sm space-y-1 mt-2">
                        <li>Developed fascination with computer architecture—from silicon to software interfaces</li>
                        <li>Explored the intersection of theoretical physics, computational systems, and human-computer interaction</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* 2019 */}
                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-black border-4 border-blue-400 dark:border-blue-300 transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                      <span className="text-blue-600 dark:text-blue-300 font-bold">2019</span>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800/90 dark:to-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                      <h5 className="font-semibold text-blue-600 dark:text-blue-300">First Lines of Code</h5>
                      <blockquote className="italic border-l-2 pl-3 my-2 text-sm border-blue-300 dark:border-blue-600">
                        "The terminal became my playground."
                      </blockquote>
                      <ul className="list-disc ml-5 text-sm space-y-1 mt-2">
                        <li>Mastered C/C++ fundamentals, with particular focus on memory management principles</li>
                        <li>Analyzed operating system architecture and system call interfaces</li>
                        <li>Developed automation scripts for repetitive tasks and system maintenance</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* 2020 */}
                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-black border-4 border-purple-400 dark:border-amber-400 transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                      <span className="text-purple-600 dark:text-amber-300 font-bold">2020</span>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-slate-50 to-purple-50 dark:from-slate-800/90 dark:to-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                      <h5 className="font-semibold text-purple-600 dark:text-amber-300">Depth over Breadth</h5>
                      <blockquote className="italic border-l-2 pl-3 my-2 text-sm border-purple-300 dark:border-amber-600">
                        "The deeper I went, the more everything connected—math, logic, electronics."
                      </blockquote>
                      <ul className="list-disc ml-5 text-sm space-y-1 mt-2">
                        <li>Built tiny OS-level tools for learning syscall interfaces.</li>
                        <li>Started learning ARM Assembly and reverse engineering for fun.</li>
                        <li>Dived into cryptography and networking protocols—recreated them from RFCs manually.</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* 2021 */}
                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-black border-4 border-green-400 dark:border-green-500 transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                      <span className="text-green-600 dark:text-green-300 font-bold">2021</span>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-slate-50 to-green-50 dark:from-slate-800/90 dark:to-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                      <h5 className="font-semibold text-green-600 dark:text-green-300">Open Source & Real-World Tech</h5>
                      <blockquote className="italic border-l-2 pl-3 my-2 text-sm border-green-300 dark:border-green-600">
                        "I wasn't just learning anymore—I was building things people used."
                      </blockquote>
                      <ul className="list-disc ml-5 text-sm space-y-1 mt-2">
                        <li>Contributed to open-source projects and explored low-level bugs in memory management.</li>
                        <li>Created networking tools using raw sockets.</li>
                        <li>Built full-stack web apps using MERN stack (Mongo, Express, React, Node).</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* 2022 */}
                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-black border-4 border-indigo-400 dark:border-orange-400 transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                      <span className="text-indigo-600 dark:text-orange-300 font-bold">2022</span>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-slate-800/90 dark:to-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                      <h5 className="font-semibold text-indigo-600 dark:text-orange-300">Ethical Hacking & Systems Mastery</h5>
                      <blockquote className="italic border-l-2 pl-3 my-2 text-sm border-indigo-300 dark:border-orange-600">
                        "Seeing how things break made me better at building them."
                      </blockquote>
                      <ul className="list-disc ml-5 text-sm space-y-1 mt-2">
                        <li>Explored ethical hacking, bug bounty, and CTFs.</li>
                        <li>Practiced binary exploitation, stack smashing, and protocol fuzzing.</li>
                        <li>Built and broke Linux kernel modules.</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* 2023 */}
                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-black border-4 border-red-400 dark:border-red-500 transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                      <span className="text-red-600 dark:text-red-300 font-bold">2023</span>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-slate-50 to-red-50 dark:from-slate-800/90 dark:to-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                      <h5 className="font-semibold text-red-600 dark:text-red-300">Compiler Internals & Vision</h5>
                      <blockquote className="italic border-l-2 pl-3 my-2 text-sm border-red-300 dark:border-red-600">
                        "Compiler is the final boss. If I can transform code to machine instructions, I own it."
                      </blockquote>
                      <ul className="list-disc ml-5 text-sm space-y-1 mt-2">
                        <li>Contributed to LLVM.</li>
                        <li>Learned polynomial approximations, precision tuning, and low-level optimization.</li>
                        <li>Gained full-stack fluency across systems: bare metal → kernel → userspace → web → AI.</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* 2025 */}
                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-black border-4 border-amber-400 dark:border-cyan-400 transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                      <span className="text-amber-600 dark:text-cyan-300 font-bold">2025</span>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-slate-50 to-amber-50 dark:from-slate-800/90 dark:to-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                      <h5 className="font-semibold text-amber-600 dark:text-cyan-300">Multi-Domain Mastery & Beyond</h5>
                      <blockquote className="italic border-l-2 pl-3 my-2 text-sm border-amber-300 dark:border-cyan-600">
                        "The end goal is not just mastery—but superhuman synthesis."
                      </blockquote>
                      <ul className="list-disc ml-5 text-sm space-y-1 mt-2">
                        <li>Leading student innovation as President of Youth Parliament in university.</li>
                        <li>Exploring hardware acceleration, quantized model serving, and privacy-first AI.</li>
                        <li>Pushing boundaries in systems thinking, startup design, and tech philosophy.</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Future */}
                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-black border-4 border-slate-400 dark:border-slate-400 transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                      <span className="text-slate-600 dark:text-slate-300 font-bold">∞</span>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800/90 dark:to-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                      <h5 className="font-semibold text-slate-600 dark:text-slate-300">Future: Founder. Hacker. Philosopher. Architect.</h5>
                      <blockquote className="italic border-l-2 pl-3 my-2 text-sm border-slate-300 dark:border-slate-600">
                        "Creating something larger than just apps—building systems that understand humans and optimize their lives, from molecules to mindset."
                      </blockquote>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <p className="mb-4">
              As a{" "}
              <span className="font-bold dark:text-yellow-300 text-cyan-600">
                systems developer proficient in C/C++
              </span>, I'm committed to designing elegant architectures and implementing secure, scalable solutions. My expertise bridges hardware and software domains, enabling me to develop optimized systems from the ground up.
            </p>
            
            <blockquote className="italic border-l-4 border-cyan-500 dark:border-yellow-300 pl-4 my-4">
              As an electronic engineer, I harness the power of precision signals and embedded systems.
              As an electrical engineer, I design high-power infrastructure and energy-efficient solutions.
            </blockquote>
            
            <h4 className="text-lg font-semibold mb-2">Beyond the Code:</h4>
            <p className="mb-4">
              When I'm not optimizing algorithms or contemplating the cosmos, you'll find me exploring speculative fiction and theoretical physics. I'm perpetually fascinated by how quantum phenomena and computational systems converge to create the technological landscape we navigate.
            </p>
            
            <p>
              I champion open-source development and breakthrough technologies, constantly seeking to expand the boundaries of what's possible in computing, security, and digital infrastructure.
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
          Discover My Technical Expertise
        </a>
      </div>
    </div>
  );
}

function Professional() {
  return (
    <div id="professional" className="mt-20 mb-10">
      <h2
        className={
          "text-4xl underline decoration-slate-500 font-semibold md:text-5xl " +
          parkin.className
        }
      >
        Current
        <span className="dark:text-yellow-300 py-4 text-cyan-500 font-light">
          Role
        </span>
      </h2>
      
      <div className="mt-8 p-6 border border-slate-300 dark:border-slate-700 rounded-lg bg-gradient-to-r from-slate-50 to-cyan-50/30 dark:from-slate-800 dark:to-slate-800/80 hover:shadow-lg transition-all">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-cyan-600 dark:text-yellow-300 mb-2">
                Co-founder & CTO
              </h3>
              <h4 className="text-lg font-medium mb-4">Auxacode Solutions</h4>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Full Stack Development
              </div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Cybersecurity
              </div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Technical Leadership
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-semibold mb-3">Building Innovative Solutions</h3>
            <p className="mb-4">
              As the co-founder and CTO of <span className="font-semibold text-cyan-600 dark:text-yellow-300">Auxacode Solutions</span>, I lead our technical strategy and oversee the development of scalable, secure applications for businesses and organizations.
            </p>
            <p className="mb-4">
              My expertise in full stack development and passion for cybersecurity has helped us build robust solutions that prioritize both functionality and security, providing our clients with reliable systems that protect their sensitive data.
            </p>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-sm">
                <div className="text-xs uppercase text-slate-500 dark:text-slate-400 mb-1">Focus Area</div>
                <div className="font-medium">Web Applications</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-sm">
                <div className="text-xs uppercase text-slate-500 dark:text-slate-400 mb-1">Focus Area</div>
                <div className="font-medium">API Development</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-sm">
                <div className="text-xs uppercase text-slate-500 dark:text-slate-400 mb-1">Focus Area</div>
                <div className="font-medium">Secure Architecture</div>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://auxacode.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 bg-cyan-500 dark:bg-yellow-500 text-white dark:text-black font-medium rounded-md hover:bg-cyan-600 dark:hover:bg-yellow-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Auxacode Solutions
              </a>
            </div>
          </div>
        </div>
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
        Technical
        <span className="dark:text-yellow-300 py-4 text-cyan-500 font-light">
          Proficiencies
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
            <span className="text-cyan-400 dark:text-yellow-300">Network</span>{" "}
            Security
          </h3>
          <ul className="space-y-2 ml-5">
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Computer Networks</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>GNU/Linux - POSIX</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "95%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Python + Bash</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>WireShark</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Nmap</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>HashCat</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "75%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Jhonny</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "70%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Aircrack-ng</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "75%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Burpsuit</div>
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
              <div className="flex items-center"><span className="mr-2"></span>JavaScript/TypeScript</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Next.js</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Node.js</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>React.js</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Express.js</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "75%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>MongoDB</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Tailwind CSS</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>HTML/CSS</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>REST APIs</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Postgres SQL</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "70%"}}></div>
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
              <div className="flex items-center"><span className="mr-2"></span>C/C++</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Embedded Systems</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "45%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Computer Architecture</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Data Structures and algorithmns</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "60%"}}></div>
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
              <div className="flex items-center"><span className="mr-2"></span>Circuit Design</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "45%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Microcontrollers</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "60%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center"><span className="mr-2"></span>Digital Electronics</div>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 dark:bg-yellow-300 h-2.5 rounded-full" style={{width: "65%"}}></div>
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
          Research
          <span className="text-cyan-400 dark:text-yellow-300">
            {" "}
            Interests
          </span>
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
        Connect
        <span className="dark:text-yellow-300 py-4 text-cyan-500 font-light">
          WithMe
        </span>
      </h2>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-6">
            I welcome discussions on innovative projects, technical collaborations, and opportunities to contribute to meaningful solutions. Reach out through any of the channels below.
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
                <a href="https://www.linkedin.com/in/StarOne01/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 dark:text-yellow-300 hover:underline">Connect on LinkedIn</a>
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
        <Professional />
        <Skills />
        <ThingsIlove />
        <Contact />
        { //       <Contribs />
        }
      </div>
    </>
  );
}

