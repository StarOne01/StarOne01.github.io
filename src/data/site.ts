export const site = {
  name: "Prashanth T.",
  handle: "StarOne01",
  role: "Systems Engineer",
  location: "Coimbatore, Tamil Nadu",
  bio: [
    "I'm Prashanth — most people know me as Ragi or StarOne01. I'm a final-year Electrical and Electronics Engineering student, but most of what I actually do lives in the gap between hardware and software: compilers, model inference, and the systems that make AI run efficiently on real silicon.",
    "I'm self-taught — started coding on a phone through Termux before I even owned a laptop — and I've spent the last few years building things that actually ship: a production multilingual clinical AI system, open-source contributions to LLVM, a film recommendation engine built on custom embeddings, and original research into where and why language models fail on multilingual tasks.",
    "Right now I'm going deep on compiler internals and MLIR — the layer where AI models actually meet hardware — because that's where I think the most interesting (and most underbuilt) engineering problems are.",
  ],
  tagline: "Systems engineer building at the intersection of hardware and AI.",
  typingLines: [
    "Systems engineer building at the intersection of hardware and AI.",
    "Compilers, embeddings, and the systems underneath them.",
    "EE fundamentals. Production AI systems. LLVM.",
  ],
  email: "ping@starone01.me",
  socials: {
    email: { label: "Email", value: "ping@starone01.me", href: "mailto:ping@starone01.me" },
    linkedin: { label: "LinkedIn", value: "in/StarOne01", href: "https://www.linkedin.com/in/StarOne01/" },
    github: { label: "GitHub", value: "@StarOne01", href: "https://github.com/StarOne01" },
  },
  nav: ["Work", "Research", "Experience", "Stack", "Contact"],
} as const;

export const expertise = [
  {
    title: "Compilers & LLVM",
    description:
      "16 contributions across the X86 backend (_Float16 lowering: FABS, FNEG, FCOPYSIGN), a Clang Sema diagnostic, and libc POSIX docs. Now going deeper into MLIR and compiler internals.",
  },
  {
    title: "Production ASR & Clinical AI",
    description:
      "IndicConformer speech recognition paired with a fine-tuned Gemma model for clinical note generation, with ABDM/FHIR integration — built solo for doctors in Indian Tier-2/3 cities.",
  },
  {
    title: "ML Systems & Inference",
    description:
      "Local LLM inference and deployment of open models in production. Fine-tuning (SFT, QLoRA) with hands-on failure-mode debugging, and CUDA fundamentals in progress.",
  },
  {
    title: "Embeddings & Retrieval",
    description:
      "Custom embedding and content-fingerprinting techniques for recommendation, plus RAG pipelines over Qdrant. Built to solve matching problems genre tags can't.",
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
      "The film that makes you feel the way the last one did, not just another one \u201clike\u201d it. Custom embeddings and content fingerprinting so a few ratings find the rest of your life's library.",
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
    role: "Open Source Contributor",
    company: "LLVM",
    period: "Ongoing",
    status: "ongoing" as const,
    description:
      "16 contributions: X86 backend _Float16 lowering, a Clang Sema diagnostic through extensive review, and a series of libc POSIX header docs. Now deepening into MLIR.",
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
    role: "Founding Engineer",
    company: "Medclara",
    period: "Past",
    status: "past" as const,
    description:
      "Founding engineer and technical lead. IndicConformer ASR plus a fine-tuned Gemma model for clinical notes, with ABDM/FHIR integration — architecture, infra, and compliance, solo.",
  },
] as const;

export type ResearchItem = {
  title: string;
  tag: string;
  description: string;
  href?: string;
};

export const research: readonly ResearchItem[] = [
  {
    title: "Do price, size, or reputation predict LLM failure?",
    tag: "Original research",
    description:
      "A multilingual LLM evaluation study testing whether model price, size, or reputation predict task-specific failure — findings suggest they don't, at least not reliably. Latest run benchmarked 6 models on multilingual code-switched number parsing.",
  },
  {
    title: "StarOne Labs",
    tag: "Writing · Tamil & English",
    description:
      "Writing and building in public around open-source AI in production — an ongoing Ollama deep-dive series (inference internals, scheduling engines) and honest, no-theory takes on what actually works when deploying open models.",
    href: "https://starone01.me",
  },
] as const;

export type StackItem = string | { name: string; fav?: boolean; note?: string };

export const stack: Record<string, readonly StackItem[]> = {
  Languages: ["Go", "Python", { name: "C++", fav: true }, "TypeScript / Next.js"],
  "Systems & Compilers": ["LLVM", { name: "MLIR", note: "in progress" }, "Local LLM Inference", { name: "CUDA", note: "in progress" }],
  "ML / AI": ["SFT / QLoRA", "ASR Pipelines", "Embeddings", "RAG"],
  "Infra & Data": ["AWS", "Qdrant", "Ory Kratos"],
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
    tag: "Clinical AI · Founding Engineer",
    description:
      "Voice-first multilingual clinical documentation. IndicConformer for speech recognition with a fine-tuned Gemma model for clinical note generation, plus ABDM/FHIR integration — architecture, infra, and compliance, solo.",
  },
  {
    name: "Primesoma — Film Discovery",
    tag: "Embeddings · Full Stack",
    description:
      "A recommendation system around custom embedding and content-fingerprinting techniques, built to solve the “movies like this” problem better than genre-tag matching — including the hub pathology work most engines skip.",
    href: "https://movieslikethis.starone01.me",
  },
  {
    name: "BrailleVision",
    tag: "Hackathon Build",
    description:
      "A Flutter + YOLO + ONNX mobile app for real-time Braille OCR, built under hackathon time pressure. Computer vision meeting accessibility, shipped end-to-end solo.",
  },
  {
    name: "Sherlock SFT",
    tag: "Fine-Tuning",
    description:
      "Fine-tuned a character-consistent language model via supervised fine-tuning — iterating on training data quality and debugging a QLoRA NaN loss down to root cause.",
  },
];
