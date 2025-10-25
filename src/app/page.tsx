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
    <div id="love" className="mt-16 sm:mt-32">
      <div className="mb-8 sm:mb-12">
        <h2
          className={
            "text-3xl sm:text-4xl md:text-5xl font-bold text-white " +
            parkin.className
          }
        >
          Things I
          <span className="block mt-1 sm:mt-2">Cherish</span>
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-white mt-2 sm:mt-4 rounded-full"></div>
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
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Premium background effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/8 via-white/3 to-transparent rounded-full blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-white/8 via-white/3 to-transparent rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 sm:space-y-8 px-4 sm:px-6 max-w-6xl mx-auto flex-grow flex flex-col justify-evenly pb-32 sm:pb-40">
        {/* Refined top accent */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2 sm:mb-4 opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          <span className="text-xs sm:text-sm uppercase tracking-[0.15em] text-white/50 opacity-100 md:opacity-0  font-light whitespace-nowrap">Innovator & Developer</span>
          <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent via-white/50 to-transparent"></div>
        </div>

        {/* Main greeting - Premium text */}
        <div className="space-y-1 opacity-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <p className="text-sm sm:text-base md:text-lg text-white/60 font-light tracking-wide">
            Welcome to my digital space
          </p>
        </div>

        {/* Main name - Hero text - Elegant and bold */}
        <div className="relative py-4 sm:py-6 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
          {/* Premium glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl blur-3xl opacity-40"></div>
          <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight" style={{
            textShadow: '0 20px 60px rgba(255,255,255,0.1)',
            letterSpacing: '-0.02em'
          }}>
            StarOne01
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light mt-2 sm:mt-3 tracking-wide">
            Crafting elegant systems with precision and purpose
          </p>
        </div>

        {/* Refined tagline */}
        <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/60 text-xs sm:text-sm font-light tracking-wide">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-white/40 rounded-full"></span>
              Technical Founder 
            </span>
            <span className="hidden sm:inline w-px h-4 bg-white/20"></span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-white/40 rounded-full"></span>
              Electrical Engineer
            </span>
            <span className="hidden sm:inline w-px h-4 bg-white/20"></span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-white/40 rounded-full"></span>
              Full Stacker
            </span>
          </div>
        </div>

        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-10 opacity-0 animate-fade-in" style={{animationDelay: '1s'}}>
          <a
            href="#Whoami"
            className="group relative px-8 sm:px-10 py-3 sm:py-3.5 bg-white text-black font-semibold text-sm sm:text-base rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore My Journey
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="group-hover:translate-x-1 transition-transform">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>

          <a
            href="#contact"
            className="group relative px-8 sm:px-10 py-3 sm:py-3.5 border border-white/30 text-white font-semibold text-sm sm:text-base rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:border-white/60 hover:bg-white/5 w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get in Touch
            </span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>

        </div>
      </div>



      {/* Swipe up indicator */}
      <div className="absolute bottom-8 sm:bottom-12 inset-x-0 flex justify-center z-20 opacity-0 animate-fade-in" style={{animationDelay: '1.2s'}}>
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <span className="text-xs sm:text-sm text-white/50 font-light tracking-widest uppercase">Scroll</span>
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 hover:text-white/80 transition-colors">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function Whoami() {
  return (
    <div id="Whoami" className={"py-8 sm:py-12 " + parkin.className}>
      <div className="mb-8 sm:mb-12">
        <h2
          className={
            "text-3xl sm:text-4xl md:text-5xl font-bold text-white " +
            parkin.className
          }
        >
          Whoam
          <span className="block mt-1 sm:mt-2">I?</span>
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-white mt-2 sm:mt-4 rounded-full"></div>
      </div>
      
      <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        <div className="md:col-span-1">
          <div className="p-4 sm:p-6 backdrop-blur-xl bg-white/5 dark:bg-white/5 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Quick Facts</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center group cursor-pointer">
                <span className="inline-flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 mr-2 sm:mr-4 bg-white/10 rounded-xl text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform border border-white/20 flex-shrink-0">C</span>
                <span className="text-sm sm:text-base text-slate-300 font-medium">EE Student & Dev</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <span className="inline-flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 mr-2 sm:mr-4 bg-white/10 rounded-xl text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform border border-white/20 flex-shrink-0">S</span>
                <span className="text-sm sm:text-base text-slate-300 font-medium">Cybersecurity Passionate</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <span className="inline-flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 mr-2 sm:mr-4 bg-white/10 rounded-xl text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform border border-white/20 flex-shrink-0">D</span>
                <span className="text-sm sm:text-base text-slate-300 font-medium">Systems Developer</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <span className="inline-flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 mr-2 sm:mr-4 bg-white/10 rounded-xl text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform border border-white/20 flex-shrink-0">A</span>
                <span className="text-sm sm:text-base text-slate-300 font-medium">Astrophile & OSS</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <span className="inline-flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 mr-2 sm:mr-4 bg-white/10 rounded-xl text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform border border-white/20 flex-shrink-0">M</span>
                <span className="text-sm sm:text-base text-slate-300 font-medium">Melophile</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-slate-300 leading-relaxed">
              Welcome to my digital realm! I'm an{" "}
              <span className="font-bold text-white">
                Electrical Engineering student
              </span>{" "}
              with a fervent passion for cybersecurity, system-level software, and electronics.
            </p>
            
            <div className="mb-6 sm:mb-8 relative">
              <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 text-white">My Evolution</h4>
              
              <div className="relative">
                {/* Journey Path Line */}
                <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-white/20 via-white/40 to-white/20 opacity-50"></div>
                
                {/* Journey Points */}
                <div className="space-y-4 sm:space-y-8">
                  {[
                    { year: '16', title: 'Spark of Curiosity', desc: ['Fascination with computer architecture and cosmic questions', 'Intersection of physics, computation, and human-computer interaction'] },
                    { year: '19', title: 'First Lines of Code', desc: ['Mastered C/C++ with focus on memory management', 'OS architecture and system call interfaces', 'Automation scripts for system maintenance'] },
                    { year: '20', title: 'Depth Over Breadth', desc: ['Built OS-level tools for syscall learning', 'ARM Assembly and reverse engineering', 'Cryptography and networking protocols'] },
                    { year: '21', title: 'Open Source & Real-World', desc: ['Contributing to open-source projects', 'Networking tools using raw sockets', 'Full-stack MERN development'] },
                    { year: '22', title: 'Ethical Hacking & Security', desc: ['Ethical hacking, bug bounty, and CTFs', 'Binary exploitation and protocol fuzzing', 'Linux kernel modules'] },
                    { year: '23', title: 'Compiler Internals', desc: ['Contributed to LLVM', 'Optimization and low-level compilation', 'Full-stack expertise: bare metal → AI'] },
                    { year: '25', title: 'Multi-Domain Mastery', desc: ['Leading university innovation cell', 'Hardware acceleration & quantized AI', 'Privacy-first systems thinking'] },
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-12 sm:pl-16">
                      <div className="absolute left-0 flex items-center justify-center w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-black border-2 border-white transform transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-lg">
                        <span className="text-white font-bold text-xs">{item.year}</span>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:shadow-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                        <h5 className="font-bold text-base sm:text-lg text-white">{item.title}</h5>
                        <ul className="list-disc ml-4 sm:ml-5 text-xs sm:text-sm space-y-1 sm:space-y-2 mt-2 text-slate-300">
                          {item.desc.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              As a{" "}
              <span className="font-bold text-white">
                systems developer proficient in C/C++
              </span>, I design elegant architectures and implement secure, scalable solutions.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 sm:mt-12 flex justify-center">
        <a 
          href="#Skills" 
          className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-black font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
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
    <div id="Skills" className="mt-16 sm:mt-32">
      <div className="mb-8 sm:mb-12">
        <h2
          className={
            "text-3xl sm:text-4xl md:text-5xl font-bold text-white " +
            parkin.className
          }
        >
          Technical
          <span className="block mt-1 sm:mt-2">Proficiencies</span>
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-white mt-2 sm:mt-4 rounded-full"></div>
      </div>
      
      <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <div className="p-4 sm:p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10">
          <h3
            className={
              "text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white " +
              parkin.className
            }
          >
            Network & Security
          </h3>
          <ul className="space-y-2 sm:space-y-3 ml-0">
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Computer Networks</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">GNU/Linux - POSIX</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "95%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Python + Bash</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">WireShark</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Nmap & Burpsuite</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">HashCat & Aircrack</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "75%"}}></div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="p-4 sm:p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10">
          <h3
            className={
              "text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white " +
              parkin.className
            }
          >
            Web Development
          </h3>
          <ul className="space-y-2 sm:space-y-3 ml-0">
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">JavaScript/TS</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">React & Next.js</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "88%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Node & Express</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "78%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Databases</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "75%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Tailwind CSS & UI</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">APIs & GraphQL</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-8">
        <div className="p-4 sm:p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10">
          <h3
            className={
              "text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white " +
              parkin.className
            }
          >
            Systems Development
          </h3>
          <ul className="space-y-2 sm:space-y-3 ml-0">
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">C/C++</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Architecture</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Data Structures</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "60%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Embedded Systems</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "45%"}}></div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="p-4 sm:p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10">
          <h3
            className={
              "text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white " +
              parkin.className
            }
          >
            Electronic Engineering
          </h3>
          <ul className="space-y-2 sm:space-y-3 ml-0">
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Circuit Design</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "45%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Microcontrollers</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "60%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Digital Electronics</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "65%"}}></div>
              </div>
            </li>
            <li className="flex items-center justify-between gap-2 group text-xs sm:text-sm">
              <div className="flex items-center min-w-0"><span className="text-white/40 mr-2 font-bold flex-shrink-0">▸</span><span className="text-slate-300 group-hover:text-white transition-colors truncate">Signal Processing</span></div>
              <div className="w-16 sm:w-20 bg-white/10 rounded-full h-2 flex-shrink-0">
                <div className="bg-white h-2 rounded-full" style={{width: "50%"}}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 sm:mt-8 p-4 sm:p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10">
        <h3
          id="interests"
          className={
            "text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white " +
            parkin.className
          }
        >
          Research Interests
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
          {["Software Dev", "Embedded", "Electronics", 
            "ML", "Math", "Astronomy", "Physics", "Open Source"].map((interest) => (
            <div key={interest} className="flex items-center justify-center p-2 sm:p-3 border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer transform hover:scale-105">
              <span className="text-xs sm:text-sm font-medium text-slate-300 text-center">{interest}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="mt-16 sm:mt-32 mb-16 sm:mb-24">
      <div className="mb-8 sm:mb-12">
        <h2
          className={
            "text-3xl sm:text-4xl md:text-5xl font-bold text-white " +
            parkin.className
          }
        >
          Get in
          <span className="block mt-1 sm:mt-2">Touch</span>
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-white mt-2 sm:mt-4 rounded-full"></div>
      </div>
      
      <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I welcome discussions on innovative projects, technical collaborations, and opportunities to contribute to meaningful solutions. Reach out through any channel below.
          </p>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="group flex items-start p-3 sm:p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 mr-2 sm:mr-4 bg-white/10 rounded-lg text-white flex-shrink-0 group-hover:scale-110 transition-transform border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm sm:text-base text-white">Email</p>
                <a href="mailto:thestarone01@proton.me" className="text-xs sm:text-sm text-slate-400 hover:text-white font-medium transition-colors truncate">thestarone01@proton.me</a>
              </div>
            </div>
            
            <div className="group flex items-start p-3 sm:p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 mr-2 sm:mr-4 bg-white/10 rounded-lg text-white flex-shrink-0 group-hover:scale-110 transition-transform border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm sm:text-base text-white">LinkedIn</p>
                <a href="https://www.linkedin.com/in/StarOne01/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-400 hover:text-white font-medium transition-colors">Connect on LinkedIn</a>
              </div>
            </div>
            
            <div className="group flex items-start p-3 sm:p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 mr-2 sm:mr-4 bg-white/10 rounded-lg text-white flex-shrink-0 group-hover:scale-110 transition-transform border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm sm:text-base text-white">GitHub</p>
                <a href="https://github.com/StarOne01" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-400 hover:text-white font-medium transition-colors">@StarOne01</a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-lg">
          <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Why Reach Out?</h4>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            <li className="flex items-start">
              <span className="text-slate-400 mr-2 sm:mr-3 text-base flex-shrink-0">→</span>
              <span className="text-slate-300">Interested in collaborating on innovative projects</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-400 mr-2 sm:mr-3 text-base flex-shrink-0">→</span>
              <span className="text-slate-300">Open to discussing cybersecurity and systems design</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-400 mr-2 sm:mr-3 text-base flex-shrink-0">→</span>
              <span className="text-slate-300">Looking for partnerships with like-minded innovators</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-400 mr-2 sm:mr-3 text-base flex-shrink-0">→</span>
              <span className="text-slate-300">Happy to share knowledge and insights on tech</span>
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
          "text-4xl underline decoration-white/30 font-semibold md:text-5xl text-white " +
          parkin.className
        }
      >
        <span className="text-white py-4 font-light">
          {" "}
          My
        </span>
        Contributions
      </h2>
      <br />
      <div className="flex flex-row flex-wrap">
        {contrib.map((org) => (
          <div key={org.name + "contrib"} className="max-w-80">
            <h2 className="text-2xl text-white">{org.name}</h2>
            <ul className="mb-1 mt-1 ml-10">
              {org.contribs.code !== null && (
                <li>
                  {" "}
                  <p className="underline text-white/70">Code Contributions</p>
                  <ol className="mb-1 flex flex-row flex-wrap ml-10">
                    {org.contribs.code.map((contribs: { PR: string }) => (
                      <li className="p-2 list-none" key={contribs.PR}>
                        <Link
                          className="text-white/60 hover:text-white transition-colors"
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
                  <p className="underline text-white/70">Documentation</p>
                  <ol className="mb-1 flex flex-row flex-wrap ml-10">
                    {org.contribs.docs.map((contribs: { PR: string }) => (
                      <li className="p-2 list-none" key={contribs.PR}>
                        <Link
                          className="text-white/60 hover:text-white transition-colors"
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
      <div className={"px-4 sm:px-6 md:px-7 py-4 md:max-w-[900px] lg:mx-auto md:mx-16 mx-auto text-base " + parkin.className}>
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

