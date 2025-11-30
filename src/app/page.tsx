"use client";

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Hero() {
  return (
    <div className="relative w-full min-h-[100svh] bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Role badge */}
        <div className="mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <span className="inline-block px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60 border border-white/20 rounded-full">
            Chief Technology Officer
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white mb-4 opacity-0 animate-fade-in" style={{animationDelay: '0.4s', letterSpacing: '-0.02em'}}>
          Prashanth
        </h1>

        {/* Company */}
        <div className="flex items-center justify-center gap-3 mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="h-px w-12 bg-white/30"></div>
          <span className="text-xl sm:text-2xl text-white/80 font-light tracking-wide">Medclara</span>
          <div className="h-px w-12 bg-white/30"></div>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-white/50 font-light max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>
          Building technology that transforms healthcare delivery
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{animationDelay: '1s'}}>
          <a
            href="#about"
            className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-300"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            Get in Touch
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
        <h2 className="text-3xl font-semibold text-white mb-2">About</h2>
        <div className="w-12 h-0.5 bg-white/40"></div>
      </div>
      
      <div className="space-y-6 text-white/70 text-lg leading-relaxed">
        <p>
          As <span className="text-white">Chief Technology Officer at Medclara</span>, I lead the technical vision and engineering strategy for our healthcare technology platform.
        </p>
        <p>
          With a background in <span className="text-white">Electrical Engineering</span> and expertise in systems development, I bridge the gap between complex technical challenges and innovative solutions that improve patient care.
        </p>
        <p>
          My focus is on building secure, scalable infrastructure that enables healthcare providers to deliver better outcomes through technology.
        </p>
      </div>
    </section>
  );
}

function Expertise() {
  const areas = [
    {
      title: "Technical Leadership",
      description: "Guiding engineering teams, defining architecture, and driving technical strategy aligned with business objectives."
    },
    {
      title: "Healthcare Technology",
      description: "Building compliant, secure systems for healthcare data management and patient care optimization."
    },
    {
      title: "Systems Architecture",
      description: "Designing scalable infrastructure with focus on performance, security, and reliability."
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end development expertise from embedded systems to modern web applications."
    }
  ];

  return (
    <section id="expertise" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white mb-2">Expertise</h2>
        <div className="w-12 h-0.5 bg-white/40"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {areas.map((area, idx) => (
          <div 
            key={idx}
            className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300"
          >
            <h3 className="text-lg font-medium text-white mb-2">{area.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const timeline = [
    {
      role: "Chief Technology Officer",
      company: "Medclara",
      period: "Present",
      description: "Leading technology strategy and engineering for healthcare innovation platform."
    },
    {
      role: "Open Source Contributor",
      company: "LLVM Project",
      period: "Ongoing",
      description: "Contributing to foundational compiler infrastructure and documentation."
    },
    {
      role: "Electrical Engineering",
      company: "Academic",
      period: "Ongoing",
      description: "Pursuing degree with focus on embedded systems and signal processing."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white mb-2">Experience</h2>
        <div className="w-12 h-0.5 bg-white/40"></div>
      </div>
      
      <div className="space-y-8">
        {timeline.map((item, idx) => (
          <div 
            key={idx}
            className="relative pl-8 border-l border-white/20"
          >
            <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 bg-white rounded-full"></div>
            <span className="text-xs text-white/40 uppercase tracking-wider">{item.period}</span>
            <h3 className="text-lg font-medium text-white mt-1">{item.role}</h3>
            <p className="text-white/60 text-sm">{item.company}</p>
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
      title: "Languages & Frameworks",
      skills: ["TypeScript", "Python", "C/C++", "React", "Next.js", "Node.js"]
    },
    {
      title: "Infrastructure",
      skills: ["Linux/POSIX", "Cloud Architecture", "Docker", "CI/CD", "Databases"]
    },
    {
      title: "Security & Systems",
      skills: ["Network Security", "Embedded Systems", "System Design", "API Development"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white mb-2">Technical Skills</h2>
        <div className="w-12 h-0.5 bg-white/40"></div>
      </div>
      
      <div className="space-y-8">
        {skillCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-sm text-white/40 uppercase tracking-wider mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span 
                  key={skillIdx}
                  className="px-4 py-2 text-sm text-white/70 border border-white/15 rounded-lg hover:border-white/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto mb-16">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white mb-2">Contact</h2>
        <div className="w-12 h-0.5 bg-white/40"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-white/60 leading-relaxed mb-8">
            I welcome discussions on healthcare technology, engineering leadership, and opportunities to collaborate on meaningful solutions.
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:thestarone01@proton.me"
              className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-white/20 transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg group-hover:border-white/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-white/60">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/40">Email</p>
                <p className="text-white/80">thestarone01@proton.me</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/StarOne01/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-white/20 transition-all group"
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
              className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-white/20 transition-all group"
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
          <h3 className="text-lg font-medium text-white mb-4">Let's Connect</h3>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-start gap-3">
              <span className="text-white/30 mt-0.5">→</span>
              <span>Healthcare technology partnerships</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/30 mt-0.5">→</span>
              <span>Technical advisory opportunities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/30 mt-0.5">→</span>
              <span>Engineering leadership discussions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/30 mt-0.5">→</span>
              <span>Open source collaboration</span>
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
        <p>© 2024 Prashanth. All rights reserved.</p>
        <p>CTO at Medclara</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className={inter.className}>
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

