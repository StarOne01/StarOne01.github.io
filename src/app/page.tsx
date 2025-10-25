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
    <div id="love" className="mt-32">
      <div className="mb-12">
        <h2
          className={
            "text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white " +
            parkin.className
          }
        >
          Things I
          <span className="block mt-2">Cherish</span>
        </h2>
        <div className="w-16 h-1 bg-slate-900 dark:bg-white mt-4 rounded-full"></div>
      </div>
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
        className={`relative flex backdrop-blur-2xl z-[50] flex-col h-[100vh] bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-black/80 gap-4 items-center justify-center px-4 ${parkin.className}`}
      >
        <div className="text-center space-y-6">
          <div className="text-4xl md:text-7xl text-slate-100 font-light tracking-wide">
            <TypewriterEffectSmooth words={words} />
          </div>
          <div className="text-5xl md:text-7xl font-bold text-white">
            <TypewriterEffectSmooth words={nameData} />
          </div>
          <div className="text-lg md:text-2xl text-slate-300 font-light">
            <TypewriterEffectSmooth words={also} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Whoami() {
  return (
    <div id="Whoami" className={"py-12 " + parkin.className}>
      <div className="mb-12">
        <h2
          className={
            "text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white " +
            parkin.className
          }
        >
          Who am
          <span className="block mt-2">I?</span>
        </h2>
        <div className="w-16 h-1 bg-slate-900 dark:bg-white mt-4 rounded-full"></div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="p-6 backdrop-blur-xl bg-white/10 dark:bg-slate-800/40 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15 dark:hover:bg-slate-800/60">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-center group cursor-pointer">
                <span className="inline-flex items-center justify-center w-10 h-10 mr-4 bg-slate-200 dark:bg-slate-700 rounded-xl text-slate-900 dark:text-white font-bold text-lg group-hover:scale-110 transition-transform">💻</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">EE Student & Dev</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <span className="inline-flex items-center justify-center w-10 h-10 mr-4 bg-slate-200 dark:bg-slate-700 rounded-xl text-slate-900 dark:text-white font-bold text-lg group-hover:scale-110 transition-transform">🔐</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">Cybersecurity Passionate</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <span className="inline-flex items-center justify-center w-10 h-10 mr-4 bg-slate-200 dark:bg-slate-700 rounded-xl text-slate-900 dark:text-white font-bold text-lg group-hover:scale-110 transition-transform">⚙️</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">Systems Developer</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <span className="inline-flex items-center justify-center w-10 h-10 mr-4 bg-slate-200 dark:bg-slate-700 rounded-xl text-slate-900 dark:text-white font-bold text-lg group-hover:scale-110 transition-transform">✨</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">Astrophile & OSS</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <span className="inline-flex items-center justify-center w-10 h-10 mr-4 bg-slate-200 dark:bg-slate-700 rounded-xl text-slate-900 dark:text-white font-bold text-lg group-hover:scale-110 transition-transform">🎵</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">Melophile</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
              Welcome to my digital realm! I'm an{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                Electrical Engineering student
              </span>{" "}
              with a fervent passion for cybersecurity, system-level software, and electronics.
            </p>
            
            <div className="mb-8 relative">
              <h4 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">My Evolution</h4>
              
              <div className="relative">
                {/* Journey Path Line */}
                <div className="absolute left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 dark:from-slate-500 dark:via-slate-600 dark:to-slate-700 opacity-50"></div>
                
                {/* Journey Points */}
                <div className="space-y-8">
                  {[
                    { year: '16', title: 'Spark of Curiosity', desc: ['Fascination with computer architecture and cosmic questions', 'Intersection of physics, computation, and human-computer interaction'] },
                    { year: '19', title: 'First Lines of Code', desc: ['Mastered C/C++ with focus on memory management', 'OS architecture and system call interfaces', 'Automation scripts for system maintenance'] },
                    { year: '20', title: 'Depth Over Breadth', desc: ['Built OS-level tools for syscall learning', 'ARM Assembly and reverse engineering', 'Cryptography and networking protocols'] },
                    { year: '21', title: 'Open Source & Real-World', desc: ['Contributing to open-source projects', 'Networking tools using raw sockets', 'Full-stack MERN development'] },
                    { year: '22', title: 'Ethical Hacking & Security', desc: ['Ethical hacking, bug bounty, and CTFs', 'Binary exploitation and protocol fuzzing', 'Linux kernel modules'] },
                    { year: '23', title: 'Compiler Internals', desc: ['Contributed to LLVM', 'Optimization and low-level compilation', 'Full-stack expertise: bare metal → AI'] },
                    { year: '25', title: 'Multi-Domain Mastery', desc: ['Leading university innovation cell', 'Hardware acceleration & quantized AI', 'Privacy-first systems thinking'] },
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-16">
                      <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-900 dark:border-white transform transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-lg">
                        <span className="text-slate-900 dark:text-white font-bold">{item.year}</span>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all backdrop-blur-sm">
                        <h5 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h5>
                        <ul className="list-disc ml-5 text-sm space-y-2 mt-2 text-slate-700 dark:text-slate-300">
                          {item.desc.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              As a{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                systems developer proficient in C/C++
              </span>, I design elegant architectures and implement secure, scalable solutions.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 flex justify-center">
        <a 
          href="#Skills" 
          className="group relative px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          <span>Explore My Skills</span>
        </a>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="Skills" className="mt-32">
      <div className="mb-12">
        <h2
          className={
            "text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white " +
            parkin.className
          }
        >
          Technical
          <span className="block mt-2">Proficiencies</span>
        </h2>
        <div className="w-16 h-1 bg-slate-900 dark:bg-white mt-4 rounded-full"></div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 backdrop-blur-xl bg-white/10 dark:bg-slate-800/40 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3
            className={
              "text-2xl font-bold mb-6 text-slate-900 dark:text-white " +
              parkin.className
            }
          >
            Network & Security
          </h3>
          <ul className="space-y-3 ml-0">
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Computer Networks</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">GNU/Linux - POSIX</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "95%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Python + Bash</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">WireShark</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Nmap & Burpsuite</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">HashCat & Aircrack-ng</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "75%"}}></div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="p-6 backdrop-blur-xl bg-white/10 dark:bg-slate-800/40 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3
            className={
              "text-2xl font-bold mb-6 text-slate-900 dark:text-white " +
              parkin.className
            }
          >
            Web Development
          </h3>
          <ul className="space-y-3 ml-0">
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">JavaScript/TypeScript</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-emerald-500 dark:text-emerald-300 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">React.js & Next.js</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-400 to-green-400 dark:from-emerald-300 dark:to-green-300 h-2 rounded-full" style={{width: "88%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-emerald-500 dark:text-emerald-300 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">Node.js & Express</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-400 to-green-400 dark:from-emerald-300 dark:to-green-300 h-2 rounded-full" style={{width: "78%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-emerald-500 dark:text-emerald-300 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">MongoDB & PostgreSQL</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-400 to-green-400 dark:from-emerald-300 dark:to-green-300 h-2 rounded-full" style={{width: "75%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-emerald-500 dark:text-emerald-300 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">Tailwind CSS & UI</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-400 to-green-400 dark:from-emerald-300 dark:to-green-300 h-2 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-emerald-500 dark:text-emerald-300 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">REST APIs & GraphQL</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-400 to-green-400 dark:from-emerald-300 dark:to-green-300 h-2 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="p-6 backdrop-blur-xl bg-white/10 dark:bg-slate-800/40 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3
            className={
              "text-2xl font-bold mb-6 text-slate-900 dark:text-white " +
              parkin.className
            }
          >
            Systems Development
          </h3>
          <ul className="space-y-3 ml-0">
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">C/C++</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Computer Architecture</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Data Structures & Algorithms</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "60%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Embedded Systems</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "45%"}}></div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="p-6 backdrop-blur-xl bg-white/10 dark:bg-slate-800/40 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3
            className={
              "text-2xl font-bold mb-6 text-slate-900 dark:text-white " +
              parkin.className
            }
          >
            Electronic Engineering
          </h3>
          <ul className="space-y-3 ml-0">
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Circuit Design</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "45%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Microcontrollers</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "60%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Digital Electronics</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "65%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between group">
              <div className="flex items-center"><span className="text-slate-600 dark:text-slate-400 mr-2 font-bold">▸</span><span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Signal Processing</span></div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-slate-900 dark:bg-white h-2 rounded-full" style={{width: "50%"}}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-6 backdrop-blur-xl bg-white/10 dark:bg-slate-800/40 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3
          id="interests"
          className={
            "text-2xl font-bold mb-6 text-slate-900 dark:text-white " +
            parkin.className
          }
        >
          Research Interests
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {["Software Development", "Embedded Systems", "Digital & Analog Electronics", 
            "Machine Learning", "Mathematics", "Astronomy", "Physics", "Open Source"].map((interest) => (
            <div key={interest} className="flex items-center justify-center p-3 border border-slate-200 dark:border-slate-700/50 rounded-lg bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer transform hover:scale-105">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200 text-center">{interest}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="mt-32 mb-24">
      <div className="mb-12">
        <h2
          className={
            "text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white " +
            parkin.className
          }
        >
          Get in
          <span className="block mt-2">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-slate-900 dark:bg-white mt-4 rounded-full"></div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            I welcome discussions on innovative projects, technical collaborations, and opportunities to contribute to meaningful solutions. Reach out through any channel below.
          </p>
          
          <div className="space-y-4">
            <div className="group flex items-start p-4 backdrop-blur-sm bg-white/5 dark:bg-slate-800/40 rounded-xl border border-white/20 dark:border-slate-700/50 hover:bg-white/10 dark:hover:bg-slate-800/60 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 mr-4 bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Email</p>
                <a href="mailto:thestarone01@proton.me" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 font-medium transition-colors">thestarone01@proton.me</a>
              </div>
            </div>
            
            <div className="group flex items-start p-4 backdrop-blur-sm bg-white/5 dark:bg-slate-800/40 rounded-xl border border-white/20 dark:border-slate-700/50 hover:bg-white/10 dark:hover:bg-slate-800/60 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 mr-4 bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">LinkedIn</p>
                <a href="https://www.linkedin.com/in/StarOne01/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 font-medium transition-colors">Connect on LinkedIn</a>
              </div>
            </div>
            
            <div className="group flex items-start p-4 backdrop-blur-sm bg-white/5 dark:bg-slate-800/40 rounded-xl border border-white/20 dark:border-slate-700/50 hover:bg-white/10 dark:hover:bg-slate-800/60 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 mr-4 bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">GitHub</p>
                <a href="https://github.com/StarOne01" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 font-medium transition-colors">@StarOne01</a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 backdrop-blur-xl bg-white/10 dark:bg-slate-800/40 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-lg">
          <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Why Reach Out?</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-slate-600 dark:text-slate-400 mr-3 text-lg">→</span>
              <span className="text-slate-700 dark:text-slate-300">Interested in collaborating on innovative projects</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-600 dark:text-slate-400 mr-3 text-lg">→</span>
              <span className="text-slate-700 dark:text-slate-300">Open to discussing cybersecurity and systems design</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-600 dark:text-slate-400 mr-3 text-lg">→</span>
              <span className="text-slate-700 dark:text-slate-300">Looking for partnerships with like-minded innovators</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-600 dark:text-slate-400 mr-3 text-lg">→</span>
              <span className="text-slate-700 dark:text-slate-300">Happy to share knowledge and insights on tech</span>
            </li>
          </ul>
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

