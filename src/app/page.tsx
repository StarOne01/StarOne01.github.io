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
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-6 opacity-0 animate-fade-in tracking-tighter" style={{animationDelay: '0.2s'}}>
          STARONE01
        </h1>
        
        {/* Subtitle */}
        <p className="text-sm sm:text-base font-mono text-zinc-400 mb-12 opacity-0 animate-fade-in tracking-wider" style={{animationDelay: '0.4s'}}>
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
            href="#work"
            className="px-10 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 text-sm uppercase tracking-wider"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-10 py-3 border border-white/30 text-white font-semibold rounded-lg hover:border-white/60 hover:bg-white/5 transition-all duration-300 text-sm uppercase tracking-wider"
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
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">ABOUT</h2>
        <div className="w-12 h-0.5 bg-white/40"></div>
      </div>
      
      <div className="space-y-6 text-white/70 text-lg leading-relaxed">
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
    <section id="capabilities" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">CAPABILITIES</h2>
        <div className="w-12 h-0.5 bg-white/40"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, idx) => {
          const accentColor = service.accent === "red" ? "red-500" : "blue-500";
          const hoverBorder = service.accent === "red" ? "hover:border-red-500/50" : "hover:border-blue-500/50";
          const glowClass = service.accent === "red" ? "group-hover:shadow-red-500/20" : "group-hover:shadow-blue-500/20";
          
          return (
            <div 
              key={idx}
              className={`group p-8 border border-white/10 rounded-lg transition-all duration-300 ${hoverBorder} ${glowClass} hover:shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-2 h-2 bg-${accentColor} rounded-full`}></div>
                <p className="text-xs font-mono text-white/50 uppercase tracking-wider">{service.subtitle}</p>
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
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
      period: "2022 - 2024",
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
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">EXPERIENCE</h2>
        <div className="w-12 h-0.5 bg-white/40"></div>
      </div>
      
      <div className="space-y-8">
        {timeline.map((item, idx) => (
          <div 
            key={idx}
            className="relative pl-8 border-l border-white/20"
          >
            <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 bg-white rounded-full"></div>
            <span className="text-xs text-white/40 uppercase tracking-wider font-mono">{item.period}</span>
            <h3 className="text-lg font-black text-white mt-2">{item.role}</h3>
            <p className="text-white/60 text-sm font-mono">{item.company}</p>
            <p className="text-white/40 text-sm mt-2">{item.description}</p>
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
      skills: ["Unreal Engine 5", "Cinematography", "Rendering", "VFX", "Motion Design", "Lighting"]
    },
    {
      title: "SYSTEMS & BACKEND",
      accent: "blue",
      skills: ["Go (Gin)", "Python", "PostgreSQL", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      title: "CORE LANGUAGES",
      accent: "white",
      skills: ["TypeScript", "C++", "Python", "Go", "Rust"]
    },
    {
      title: "INFRASTRUCTURE",
      accent: "white",
      skills: ["Linux/POSIX", "Cloud Architecture", "API Design", "System Design", "Networking"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">TECHNICAL ARSENAL</h2>
        <div className="w-12 h-0.5 bg-white/40"></div>
      </div>
      
      <div className="space-y-8">
        {skillCategories.map((category, idx) => {
          const borderClass = category.accent === "red" ? "border-red-500/30" : category.accent === "blue" ? "border-blue-500/30" : "border-white/15";
          const hoverClass = category.accent === "red" ? "hover:border-red-500/50" : category.accent === "blue" ? "hover:border-blue-500/50" : "hover:border-white/30";
          
          return (
            <div key={idx} className={`pb-8 border-b ${borderClass}`}>
              <h3 className="text-xs font-black text-white/60 uppercase tracking-wider mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className={`px-4 py-2 text-xs font-mono text-white/70 border rounded-lg transition-all ${hoverClass}`}
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
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto mb-16">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">LET'S WORK</h2>
        <div className="w-12 h-0.5 bg-white/40"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-white/60 leading-relaxed mb-8">
            I work with founders and visionaries who need someone who can execute at the intersection of cinematic vision and systems engineering. If you're building something undoable, let's talk.
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:contact@starone01.dev"
              className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-white/30 transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg group-hover:border-white/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-white/60">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/40">Email</p>
                <p className="text-white/80">contact@starone01.dev</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/StarOne01/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-white/30 transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg group-hover:border-white/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-white/60">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/40">LinkedIn</p>
                <p className="text-white/80">Connect with me</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/StarOne01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-white/30 transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg group-hover:border-white/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-white/60">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/40">GitHub</p>
                <p className="text-white/80">@StarOne01</p>
              </div>
            </a>
          </div>
        </div>

        <div className="p-6 border border-white/10 rounded-lg">
          <h3 className="text-lg font-black text-white mb-4 tracking-tight">COMMISSION OPPORTUNITIES</h3>
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
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>© 2025 STARONE01 / Prashanth. All rights reserved.</p>
        <p>Creative Technologist | Unreal Engine 5 + Go/Python Systems</p>
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

