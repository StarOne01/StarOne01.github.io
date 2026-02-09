"use client";

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Hero() {
  return (
    <div className="relative w-full min-h-[100svh] bg-zinc-950 overflow-hidden flex flex-col items-center justify-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-950"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 sm:mb-6 opacity-0 animate-fade-in tracking-tighter leading-tight" style={{animationDelay: '0.2s'}}>
          STARONE01
        </h1>
        
        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-mono text-zinc-400 mb-8 sm:mb-12 opacity-0 animate-fade-in tracking-wider" style={{animationDelay: '0.4s'}}>
          PRASHANTH | CREATIVE TECHNOLOGIST
        </p>

        {/* Split Indicator - UE5 & Golang */}
        <div className="flex items-center justify-center gap-8 mb-12 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-mono text-white/70 uppercase tracking-wider">UNREAL ENGINE 5</span>
            </div>
          </div>
          <div className="w-px h-6 bg-white/20"></div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <span className="text-xs sm:text-sm font-mono text-white/70 uppercase tracking-wider">GOLANG SYSTEMS</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-white/60 font-light max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>
          Architecting the Undoable. Merging high-performance code with cinematic storytelling.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in" style={{animationDelay: '1s'}}>
          <a
            href="#capabilities"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 bg-white text-black font-black rounded-lg hover:bg-white hover:shadow-xl hover:shadow-white/20 transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider group active:scale-95"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 border border-white/40 text-white font-black rounded-lg hover:border-white/80 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider active:scale-95"
          >
            Commission Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center opacity-0 animate-fade-in" style={{animationDelay: '1.2s'}}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/10">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight">ABOUT</h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white/60 via-white/40 to-transparent rounded-full"></div>
      </div>
      
      <div className="space-y-4 sm:space-y-6 text-white/70 text-base sm:text-lg leading-relaxed">
        <p>
          I'm <span className="text-white">STARONE01</span> — a Creative Technologist who operates at the intersection of <span className="text-red-400">cinematic vision</span> and <span className="text-blue-400">systems engineering</span>.
        </p>
        <p>
          On one side, I architect <span className="text-white">photorealistic experiences</span> in Unreal Engine 5, crafting trailers and visualizations that move audiences. On the other, I design <span className="text-white">high-performance backend systems</span> in Go and Python that scale without breaking.
        </p>
        <p>
          I don't build for agencies. I work with <span className="text-white">visionaries and founders</span> who need someone who can execute both the art direction and the underlying infrastructure. That's the rare combination I bring.
        </p>
      </div>
    </section>
  );
}

function Capabilities() {
  const services = [
    {
      title: "3D VISUALIZATION",
      subtitle: "The Director",
      description: "I create photorealistic cinematic trailers and product reveals using Unreal Engine 5. High-impact visuals that tell your story.",
      accent: "red"
    },
    {
      title: "BACKEND ENGINEERING",
      subtitle: "The Engineer",
      description: "I build high-scale, fault-tolerant systems using Go (Gin) and Python. Production-ready infrastructure that performs.",
      accent: "blue"
    }
  ];

  return (
    <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/10">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight">CAPABILITIES</h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white/60 via-white/40 to-transparent rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {services.map((service, idx) => {
          const isRed = service.accent === "red";
          const accentColor = isRed ? "#ef4444" : "#3b82f6";
          
          return (
            <div 
              key={idx}
              className={`group relative p-8 border rounded-xl transition-all duration-300 overflow-hidden ${
                isRed
                  ? "border-red-500/20 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
                  : "border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
              }`}
            >
              {/* Subtle bg gradient on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                isRed ? "bg-red-500" : "bg-blue-500"
              }`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex items-center">
                    <div className={`w-2.5 h-2.5 rounded-full animate-pulse`} style={{backgroundColor: accentColor}}></div>
                    <div className={`absolute w-4 h-4 rounded-full animate-ping`} style={{backgroundColor: accentColor, opacity: 0.5}}></div>
                  </div>
                  <p className="text-xs font-mono text-white/60 uppercase tracking-wider">{service.subtitle}</p>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  const timeline = [
    {
      role: "Creative Technologist",
      company: "Independent Operator",
      period: "2024 - Present",
      description: "Architecting cinematic experiences and backend systems. Unreal Engine 5 cinematics, Go/Python infrastructure, working with founders and visionaries."
    },
    {
      role: "CTO & Systems Architect",
      company: "Previous Ventures",
      period: "2024 - Present",
      description: "Led technical strategy, built production systems, managed engineering teams. Deep expertise in ASR systems, NLP, and ML infrastructure."
    },
    {
      role: "Electrical Engineer",
      company: "Academic Foundation",
      period: "Ongoing",
      description: "Continuous learning in embedded systems, signal processing, and systems design. EE principles inform my technical decisions."
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/10">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight">EXPERIENCE</h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white/60 via-white/40 to-transparent rounded-full"></div>
      </div>
      
      <div className="space-y-4 sm:space-y-6">
        {timeline.map((item, idx) => (
          <div 
            key={idx}
            className="relative pl-8 pb-6 border-l border-white/20 hover:border-white/40 transition-colors duration-300"
          >
            <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full border-2 border-white/40 bg-zinc-950 group-hover:border-white transition-colors"></div>
            <span className="text-xs text-white/50 uppercase tracking-wider font-mono">{item.period}</span>
            <h3 className="text-xl font-black text-white mt-2.5">{item.role}</h3>
            <p className="text-white/60 text-sm font-mono mt-1">{item.company}</p>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "3D & CINEMATICS",
      accent: "red",
      color: "#ef4444",
      skills: ["Unreal Engine 5", "Cinematography", "Rendering", "VFX", "Motion Design", "Lighting"]
    },
    {
      title: "SYSTEMS & BACKEND",
      accent: "blue",
      color: "#3b82f6",
      skills: ["Go (Gin)", "Python", "PostgreSQL", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      title: "CORE LANGUAGES",
      accent: "white",
      color: "#ffffff",
      skills: ["TypeScript", "C++", "Python", "Go", "Rust"]
    },
    {
      title: "INFRASTRUCTURE",
      accent: "white",
      color: "#ffffff",
      skills: ["Linux/POSIX", "Cloud Architecture", "API Design", "System Design", "Networking"]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/10">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight">TECHNICAL ARSENAL</h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white/60 via-white/40 to-transparent rounded-full"></div>
      </div>
      
      <div className="space-y-8 sm:space-y-10">
        {skillCategories.map((category, idx) => {
          const borderClass = category.accent === "red" ? "border-red-500/30" : category.accent === "blue" ? "border-blue-500/30" : "border-white/15";
          
          return (
            <div key={idx} className={`pb-8 border-b ${borderClass}`}>
              <h3 className="text-xs font-black text-white/70 uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full" style={{backgroundColor: category.color}}></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-4 py-2.5 text-xs font-mono text-white/70 border border-white/15 rounded-lg hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-white/10"
                    style={{
                      borderColor: category.accent === "white" ? "rgba(255,255,255,0.15)" : category.accent === "red" ? "rgba(239,68,68,0.2)" : "rgba(59,130,246,0.2)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto mb-12 sm:mb-16 border-t border-white/10">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight">LET'S WORK</h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white/60 via-white/40 to-transparent rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        <div>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            I work with founders and visionaries who need someone who can execute at the intersection of cinematic vision and systems engineering. If you're building something undoable, let's talk.
          </p>
          
          <div className="space-y-3 sm:space-y-4">
            <a 
              href="mailto:contact@starone01.dev"
              className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-white/40 hover:bg-white/5 hover:shadow-lg hover:shadow-white/5 transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg group-hover:border-white/40 group-hover:bg-white/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-white/60 group-hover:text-white transition-colors">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors">Email</p>
                <p className="text-white/80">contact@starone01.dev</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/StarOne01/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-white/40 hover:bg-white/5 hover:shadow-lg hover:shadow-white/5 transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg group-hover:border-white/40 group-hover:bg-white/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-white/60 group-hover:text-white transition-colors">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors">LinkedIn</p>
                <p className="text-white/80">Connect with me</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/StarOne01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-white/40 hover:bg-white/5 hover:shadow-lg hover:shadow-white/5 transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg group-hover:border-white/40 group-hover:bg-white/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-white/60 group-hover:text-white transition-colors">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors">GitHub</p>
                <p className="text-white/80">@StarOne01</p>
              </div>
            </a>
          </div>
        </div>

        <div className="p-8 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/5 transition-all duration-300">
          <h3 className="text-lg font-black text-white mb-6 tracking-tight">COMMISSION OPPORTUNITIES</h3>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-0.5 font-bold">→</span>
              <span>Cinematic trailers & product reveals (UE5)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-0.5 font-bold">→</span>
              <span>Backend systems & infrastructure (Go/Python)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/30 mt-0.5 font-bold">→</span>
              <span>Consulting on technical architecture</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/30 mt-0.5 font-bold">→</span>
              <span>Fractional CTO / technical leadership</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/40 text-center sm:text-left">
        <p>© 2025 STARONE01 / Prashanth</p>
        <p>Creative Technologist | UE5 + Go/Python</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className={inter.className}>
      <Hero />
      <About />
      <Capabilities />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

