export const site = {
  name: "Prashanth",
  handle: "StarOne01",
  role: "ML Systems Engineer",
  location: "Coimbatore, Tamil Nadu",
  bio: [
    "Final-year Electrical & Electronics Engineering student and self-taught programmer. I build software from zero-to-one — production ML pipelines, compiler infrastructure, and the distributed systems in between.",
    "My work bridges bare-metal inference and responsive UI. Custom ASR systems, voice-first clinical AI, and privacy-by-design infrastructure.",
  ],
  tagline: "Curiosity-driven engineer exploring systems from first principles.",
  typingLines: [
    "Curiosity-driven engineer exploring systems from first principles.",
    "Production ASR, compilers, and systems in the wild.",
    "Shipping ML pipelines and the infrastructure underneath.",
  ],
  email: "ping@starone01.me",
  socials: {
    email: { label: "Email", value: "ping@starone01.me", href: "mailto:ping@starone01.me" },
    linkedin: { label: "LinkedIn", value: "in/StarOne01", href: "https://www.linkedin.com/in/StarOne01/" },
    github: { label: "GitHub", value: "@StarOne01", href: "https://github.com/StarOne01" },
  },
  nav: ["Work", "Stack", "Experience", "Contact"],
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
      "Privacy-by-design backends for AI companions — GDPR (Art. 9, 22), India DPDP Act, CCPA/CPRA. Argon2id encryption, AWS & GCP, and Go services.",
  },
  {
    title: "Compilers & Open Source",
    description:
      "Active LLVM contributor. Authored PhraseNuX, a C++ CLI password manager with AES encryption. Research on cross-lingual reasoning compression in multilingual LLMs.",
  },
  {
    title: "Creative Technologies",
    description:
      "Unreal Engine 5 cinematics and DaVinci Resolve pipelines — fusing technical rigor with high-end visual work.",
  },
] as const;

export const experience = [
  {
    role: "Founder",
    company: "Software Development Agency",
    period: "Present",
    status: "active" as const,
    description:
      "Coimbatore-based agency funding other ventures. High-end web projects, custom AI agent systems (WhatsApp bots), and enterprise software for real estate, studios, and manufacturing.",
  },
  {
    role: "Founder",
    company: "primesoma",
    period: "Upcoming",
    status: "upcoming" as const,
    description:
      "Vertically integrated wellness ecosystem — food, groceries, farms, fitness, health. Owning the entire stack end-to-end.",
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
    role: "Co-founder",
    company: "Medclara",
    period: "Past",
    status: "past" as const,
    description:
      "Co-founded a voice-first, multilingual clinical documentation platform. Doctor-patient conversations → structured SOAP notes via custom ASR and LLMs.",
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
    role: "Full-stack Builder",
    company: "MoviesLikeThis",
    period: "In production",
    status: "ongoing" as const,
    description:
      "Taste-first movie discovery. Semantic pgvector recommendations across 5,000+ films, trailer-first Next.js pages, IMDb CSV import, and a Postgres queue that auto-matches ratings the moment a film lands.",
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

export const featuredWork = [
  {
    name: "EfficientXLang",
    tag: "Research",
    description:
      "Original research assessing cross-lingual reasoning in multilingual LLMs. A study on whether reasoning compresses across languages — and where it doesn't.",
    href: "https://github.com/StarOne01",
  },
  {
    name: "PhraseNuX",
    tag: "Open Source",
    description:
      "C++ CLI password manager with AES encryption. Zero dependencies, audited crypto, built to teach myself systems-level C++ the hard way.",
    href: "https://github.com/StarOne01/PhraseNuX",
  },
  {
    name: "Medclara",
    tag: "Founder",
    description:
      "Voice-first, multilingual clinical documentation. Doctor-patient conversations → structured SOAP notes via custom ASR and local LLMs.",
    href: "mailto:ping@starone01.me",
  },
  {
    name: "MoviesLikeThis",
    tag: "Full Stack",
    description:
      "Movie discovery by feeling, not genre tags. Semantic pgvector embeddings over 5,000+ films, trailer-first pages, IMDb CSV import, and a Postgres queue that auto-matches stray ratings the moment a film is added.",
    href: "https://github.com/StarOne01/MoviesLikeThis",
  },
] as const;
