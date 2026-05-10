import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Hero() {
  return (
    <div className="relative w-full min-h-[100svh] bg-slate-950 overflow-hidden flex flex-col items-center justify-center">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] -left-[10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-[-10%] -right-[10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
        {/* Role badge */}
        <div className="mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md shadow-2xl shadow-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></span>
            AI & Systems Engineer
          </span>
        </div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', letterSpacing: '-0.03em'}}>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
            Prashanth
          </span>
        </h1>
        
        {/* Alias */}
        <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/30"></div>
          <p className="text-white/40 text-sm tracking-[0.3em] uppercase font-medium">
            StarOne01
          </p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/30"></div>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
          Curiosity-driven engineer exploring systems from first principles. Building high-performance distributed systems, AI voice agents, and production ML pipelines.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 opacity-0 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <a
            href="#about"
            className="px-8 py-3.5 bg-white text-slate-950 font-semibold rounded-full hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-white/[0.03] border border-white/10 text-white font-medium rounded-full hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-sm transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center opacity-0 animate-fade-in" style={{animationDelay: '1.2s'}}>
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase font-medium">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 via-white/10 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white flex animate-scroll-drop"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scroll-drop {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-scroll-drop {
          animation: scroll-drop 1.5s cubic-bezier(0.6, 0.05, 0.15, 0.95) infinite;
        }
      `}</style>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-4xl mx-auto">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">About</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-white/40 to-white/10 rounded-full"></div>
      </div>
      
      <div className="space-y-8 text-white/70 text-lg md:text-xl font-light leading-relaxed p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.05] shadow-2xl backdrop-blur-sm">
        <p>
          I am a <span className="font-semibold text-white">Systems and AI Engineer</span> based in Coimbatore, Tamil Nadu. Currently a third-year Electrical & Electronics Engineering student, I am a self-taught programmer driven by an insatiable curiosity about how complex systems work. I specialize in building software from zero-to-one through deep exploration and investigative problem-solving.
        </p>
        <p>
          As the <span className="font-semibold text-white">Founding Engineer at Medclara</span>, I architect voice-first, multilingual clinical documentation platforms that convert doctor-patient conversations into structured SOAP notes using custom ASR and LLMs. I also run a <span className="font-semibold text-white">Software Development Agency</span> delivering high-end enterprise software and AI agent systems for diverse businesses, while building an upcoming startup called <span className="font-semibold text-white">primesoma</span>.
        </p>
        <p>
          My core expertise spans <span className="font-semibold text-white">production machine learning pipelines</span> running local inference with fine-tuned Whisper and Indic models, down to <span className="font-semibold text-white">core compiler infrastructure</span> with over 15 merged PRs to LLVM. I bridge the complex constraints of local bare-metal inference and responsive UI to deliver optimal, robust solutions.
        </p>
      </div>
    </section>
  );
}

function Expertise() {
  const areas = [
    {
      title: "Production Machine Learning",
      description: "Developing state-of-the-art ASR architectures (Conformer, RNN-T, CTC). Fine-tuning Whisper models with QLoRA, handling speaker diarization, and deploying local inference pipelines (Ollama) with structured clinical outputs."
    },
    {
      title: "Systems & Infrastructure",
      description: "Architecting ABDM/ABHA, FHIR R4 integrations and targeting rigorous Indian compliance standards (DPDP Act). Building on-premise PostgreSQL architectures and deterministic concurrent Go/C++ backends."
    },
    {
      title: "Open Source & Compilers",
      description: "Active LLVM contributor with 15+ merged PRs including float-related changes. Creator of PhraseNuX, a C++ CLI password manager with AES encryption, and researcher on cross-lingual reasoning compression."
    },
    {
      title: "Creative Technologies",
      description: "Fusing technical rigor with high-end creative tools, working with Unreal Engine 5 cinematics and DaVinci Resolve for advanced color grading and export pipelines."
    }
  ];

  return (
    <section id="expertise" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">Expertise</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-white/40 to-white/10 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {areas.map((area, idx) => (
          <div 
            key={idx}
            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-hover:from-white/30 group-hover:to-white/10 transition-all duration-700"></div>
            <h3 className="text-xl font-semibold text-white/90 mb-3">{area.title}</h3>
            <p className="text-white/50 text-base leading-relaxed">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const timeline = [
    {
      role: "Founding Engineer",
      company: "Medclara",
      period: "Present",
      description: "Architecting a voice-first, multilingual clinical documentation platform. Built a pipeline achieving ~88/100 clinical accuracy from raw Tamil inputs in a single call. Integrated ABDM/FHIR R4 targeting Tier-2/3 cities with on-premise deployments."
    },
    {
      role: "Founder",
      company: "Software Development Agency",
      period: "Present",
      description: "Running a Coimbatore-based agency funding other ventures. Delivering high-end web projects, custom AI agent systems (like WhatsApp bots), and enterprise software for real estate firms, studios, and manufacturing businesses."
    },
    {
      role: "Founder",
      company: "primesoma",
      period: "Upcoming Startup",
      description: "Building a vertically integrated wellness ecosystem — everything a prime body needs from food and groceries to farms, fitness, and health. Owning the entire stack to deliver seamless, end-to-end wellness solutions."
    },
    {
      role: "Open Source Contributor & Researcher",
      company: "LLVM, EfficientXLang",
      period: "Ongoing",
      description: "Authored 15+ merged LLVM PRs. Conducted original research assessing cross-lingual reasoning in multilingual LLMs. Created PhraseNuX (C++ CLI password manager) and authored technical series on production AI realities."
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 max-w-4xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="mb-16 flex flex-col items-start">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">Experience</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-white/40 to-white/10 rounded-full"></div>
      </div>
      
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-white/20 before:via-white/10 before:to-transparent">
        {timeline.map((item, idx) => (
          <div 
            key={idx}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-slate-950 bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-125 transition-transform duration-300 relative z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[-3px] md:mx-0"></div>
            
            {/* Content card */}
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] group-hover:border-white/[0.15] group-hover:bg-white/[0.04] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white/90">{item.role}</h3>
                <span className="text-xs font-medium text-white/70 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider mt-2 sm:mt-0 w-fit">{item.period}</span>
              </div>
              <p className="text-white/60 font-medium mb-3">{item.company}</p>
              <p className="text-white/50 text-base leading-relaxed">{item.description}</p>
            </div>
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
    skills: ["Go", "Python", "TypeScript", "C++", "Next.js", "React", "PostgreSQL"]
  },
  {
    title: "AI & ML Systems",
    skills: ["Whisper Fine-tuning", "IndicConformer", "Speaker Diarization", "PEFT / QLoRA", "Ollama", "Local LLM Inference", "Multilingual NLP"]
  },
  {
    title: "Production & Infrastructure",
    skills: ["On-premise AI Deployment", "ABDM / FHIR R4", "WhatsApp Bot Systems", "Voice Pipelines", "AES Encryption", "REST APIs"]
  },
  {
    title: "Low-level & Compilers",
    skills: ["LLVM", "Compiler Internals", "C++ Systems Programming", "AST Transformations"]
  },
  {
    title: "Creative & Motion",
    skills: ["Unreal Engine 5", "DaVinci Resolve", "Cinematic Editing", "Color Grading"]
  }
];

  return (
    <section id="skills" className="py-32 px-6 max-w-5xl mx-auto overflow-hidden">
      <div className="mb-16 flex flex-col items-end text-right">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">Technical Stack</h2>
        <div className="w-16 h-1 bg-gradient-to-l from-white/40 to-white/10 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="relative z-10">
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-5 ml-1">{category.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, skillIdx) => (
                <span 
                  key={skillIdx}
                  className="px-5 py-2 text-sm font-medium text-white/80 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white hover:border-white/[0.2] hover:scale-105 active:scale-95 rounded-full transition-all duration-300 cursor-default shadow-sm backdrop-blur-sm"
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
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto mb-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-white/5 blur-[120px] rounded-[100%] pointer-events-none -z-10"></div>
      
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">Contact</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-white/40 to-white/10 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            I welcome discussions on AI technology, systems architecture, engineering leadership, and opportunities to collaborate on meaningful projects pushing the boundaries of what's possible.
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:thestarone01@proton.me"
              className="flex items-center gap-5 p-5 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300 group backdrop-blur-md"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-white/70 rounded-xl group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">Email</p>
                <p className="text-base font-medium text-white/90 group-hover:text-white transition-colors">thestarone01@proton.me</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/StarOne01/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300 group backdrop-blur-md"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-white/70 rounded-xl group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="text-base font-medium text-white/90 group-hover:text-white transition-colors">Connect with me</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/StarOne01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300 group backdrop-blur-md"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-white/70 rounded-xl group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:border-white shadow-[0_0_20px_rgba(255,255,255,0)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">GitHub</p>
                <p className="text-base font-medium text-white/90 group-hover:text-white transition-colors">StarOne01</p>
              </div>
            </a>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.05] backdrop-blur-xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 blur-[50px] rounded-full"></div>
          <h3 className="text-2xl font-bold text-white mb-6">Recent Research & Work</h3>
          <ul className="space-y-5 text-base text-white/60">
            <li className="flex items-start gap-4 group">
              <span className="text-white/40 mt-1 transition-transform group-hover:translate-x-1">→</span>
              <span className="group-hover:text-white transition-colors">15+ Merged LLVM PRs (float-related changes)</span>
            </li>
            <li className="flex items-start gap-4 group">
              <span className="text-white/40 mt-1 transition-transform group-hover:translate-x-1">→</span>
              <span className="group-hover:text-white transition-colors">EfficientXLang: Cross-lingual reasoning gap in LLMs</span>
            </li>
            <li className="flex items-start gap-4 group">
              <span className="text-white/40 mt-1 transition-transform group-hover:translate-x-1">→</span>
              <span className="group-hover:text-white transition-colors">PhraseNuX: C++ CLI AES password manager</span>
            </li>
            <li className="flex items-start gap-4 group">
              <span className="text-white/40 mt-1 transition-transform group-hover:translate-x-1">→</span>
              <span className="group-hover:text-white transition-colors">Active content series: Multilingual LLM evaluation & ASR architecture</span>
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
        <p>© 2026 Prashanth T. All rights reserved.</p>
        <p>Founding Engineer</p>
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

