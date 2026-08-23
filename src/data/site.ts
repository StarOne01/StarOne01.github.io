export const site = {
  name: "Prashanth",
  handle: "StarOne01",
  role: "ML Systems Engineer",
  location: "Coimbatore, Tamil Nadu",
  intro: "I build speech models, compilers, and the infrastructure between them.",
  bio: [
    "Final-year electrical engineering student from Coimbatore who taught himself to program on a phone with a cracked screen. These days I build production ASR systems, compiler infrastructure, and the distributed systems in between.",
    "My favorite problems are the constrained ones: Tamil medical conversations running through an ASR pipeline on a single consumer GPU, fully on-premise — because Indian healthcare data can't leave the hospital.",
  ],
  tagline: "Constraint-driven engineer. Ships from first principles.",
  email: "ping@starone01.me",
  socials: {
    email: { label: "Email", value: "ping@starone01.me", href: "mailto:ping@starone01.me" },
    linkedin: { label: "LinkedIn", value: "in/StarOne01", href: "https://www.linkedin.com/in/StarOne01/" },
    github: { label: "GitHub", value: "@StarOne01", href: "https://github.com/StarOne01" },
  },
  nav: ["Story", "Work", "Experience", "Stack", "Contact"],
} as const;

export const story = {
  quote:
    "I wrote my first production code on a phone. No laptop. Just Termux, a cracked screen, and WiFi that dropped every twenty minutes.",
  after:
    "PhraseNuX — a C++ password manager with AES encryption — was built entirely on that phone. People said wait until you have the right setup. I didn't wait.",
  now: "Five years later the problems got bigger but the approach stayed the same: a voice-first clinical AI system that runs on one consumer GPU inside the hospital, because the data can't leave. The limitation was never the phone.",
} as const;

export const expertise = [
  {
    title: "Production ASR & ML",
    description:
      "Custom ASR architectures (Conformer, RNN-T, CTC), Whisper fine-tuning with QLoRA, speaker diarization, and on-premise inference via Ollama with structured clinical outputs.",
  },
  {
    title: "Systems & Infrastructure",
    description:
      "Privacy-by-design backends for AI companions, GDPR (Art. 9, 22), India DPDP Act, CCPA/CPRA. Argon2id encryption, AWS & GCP, and Go services.",
  },
  {
    title: "Compilers & Open Source",
    description:
      "Active LLVM contributor. Authored PhraseNuX, a C++ CLI password manager with AES encryption. Research on cross-lingual reasoning compression in multilingual LLMs.",
  },
  {
    title: "Creative Technologies",
    description:
      "Unreal Engine 5 cinematics and DaVinci Resolve pipelines, fusing technical rigor with high-end visual work.",
  },
] as const;

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  status: "active" | "upcoming" | "development" | "ongoing" | "past";
  href?: string;
  description: string;
};

export const experience: readonly ExperienceItem[] = [
  {
    role: "Creator",
    company: "MoviesLikeThis",
    period: "In production",
    status: "active" as const,
    description:
      "The film that makes you feel the way the last one did, not just another one \u201clike\u201d it. Built so that a few ratings find the rest of your life's library.",
  },
  {
    role: "Founder",
    company: "Software Development Agency",
    period: "Present",
    status: "active" as const,
    href: "https://softwares.primesoma.com",
    description:
      "Coimbatore-based agency funding other ventures. High-end web projects, custom AI agent systems (WhatsApp bots), and enterprise software for real estate, studios, and manufacturing.",
  },
  {
    role: "Open Source Contributor & Researcher",
    company: "LLVM · EfficientXLang",
    period: "Ongoing",
    status: "ongoing" as const,
    description:
      "15+ merged LLVM PRs (incl. float-related changes). Original research on cross-lingual reasoning in multilingual LLMs. Authored technical series on production AI realities.",
  },
  {
    role: "Founder",
    company: "self (primesoma)",
    period: "In development",
    status: "development" as const,
    description:
      "AI-native dating platform matching through meaningful conversation. Go/Gin backend, Flutter mobile, end-to-end encryption.",
  },
  {
    role: "Founder",
    company: "primesoma",
    period: "Upcoming",
    status: "upcoming" as const,
    description:
      "Vertically integrated wellness ecosystem, food, groceries, farms, fitness, health. Owning the entire stack end-to-end.",
  },
  {
    role: "Co-founder",
    company: "Medclara",
    period: "Past",
    status: "past" as const,
    description:
      "Co-founded a voice-first, multilingual clinical documentation platform. Doctor-patient conversations → structured SOAP notes via custom ASR and LLMs.",
  },
] as const;

export type StackItem = string | { name: string; fav?: boolean; note?: string };

export const stack: Record<string, readonly StackItem[]> = {
  Languages: ["Go", "Python", "TypeScript", "JavaScript", { name: "C++", fav: true }, "Dart"],
  "AI / ML": ["ASR (Conformer · RNN-T · CTC)", "Whisper", "IndicConformer", "PEFT / QLoRA", "Ollama", "Local Inference"],
  "Cloud & Infra": ["AWS", "GCP", "Docker", "Redis", "PostgreSQL", "Supabase", "Vercel", "On-prem AI", "Voice Pipelines"],
  Frontend: ["Next.js", "React", "Tailwind", "Framer Motion"],
  "Semantic Search": ["pgvector (HNSW)", "Embedding Pipelines", "Relevance Ranking"],
  "Low-level": ["LLVM", "Compiler Internals", "AST Transformations", "Systems C++"],
  Disciplines: ["System Design", "Architecting", { name: "Testing in prod", note: "lol" }],
  Creative: ["Unreal Engine 5", "DaVinci Resolve", "Cinematic Editing"],
};

export type WorkItem = {
  name: string;
  tag: string;
  description: string;
  href?: string;
};

export const featuredWork: readonly WorkItem[] = [
  {
    name: "Medclara",
    tag: "Clinical AI · Co-founder",
    description:
      "Voice-first, multilingual clinical documentation. Tamil doctor-patient conversations become structured SOAP notes through custom ASR and local LLMs — on one GPU, fully on-premise.",
  },
  {
    name: "MoviesLikeThis",
    tag: "Full Stack",
    description:
      "Movie discovery by feeling, not labels. The recommender keeps offering you more sci-fi, more action; this matches films by what they do to you — the ache, the wonder, the quiet.",
    href: "https://movieslikethis.starone01.me",
  },
  {
    name: "LLVM",
    tag: "Open Source",
    description:
      "15+ merged contributions to the compiler infrastructure behind Swift, Rust, and Clang — including float-related changes. Research on cross-lingual reasoning compression in multilingual LLMs.",
    href: "https://github.com/StarOne01",
  },
  {
    name: "PhraseNuX",
    tag: "Where it started",
    description:
      "C++ CLI password manager with AES encryption. Zero dependencies, audited crypto — built entirely on a phone, to teach myself systems-level C++ the hard way.",
    href: "https://github.com/StarOne01/PhraseNuX",
  },
];
