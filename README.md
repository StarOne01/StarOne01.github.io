# Prashanth T. (@StarOne01)

**Systems Engineer. AI systems that run on real silicon.**

```mlir
module @starone01 {
  func @prashanth_t() -> !systems.engineer
}
```

Final-year EEE student working the gap between hardware and software: compilers, inference, and the systems that make AI run on real silicon. Self-taught, starting on a phone through Termux before I ever owned a laptop.

Since then: a production multilingual clinical AI system, LLVM contributions, a film engine on custom embeddings, and multilingual LLM research. Now going deep on compiler internals and MLIR, the layer where models actually meet hardware.

Live portfolio: **[starone01.me](https://starone01.me)** · Coimbatore, Tamil Nadu

---

## Focus areas

**Compilers & LLVM**
Contributions across the X86 backend (_Float16 lowering: FABS, FNEG, FCOPYSIGN), a Clang Sema diagnostic, and libc POSIX docs. Now going deeper into MLIR and compiler internals.

**Local & On-device AI**
Private inference without the cloud: local pipelines over open models with Ollama, quantization for constrained hardware, and on-device deployment.

**ML Systems & Inference**
Local LLM inference and deployment of open models in production. Fine-tuning (SFT, QLoRA) with hands-on failure-mode debugging, and CUDA fundamentals in progress.

**Embeddings & Retrieval**
Custom embedding and content-fingerprinting techniques for recommendation, plus RAG pipelines over Qdrant. Built to solve matching problems genre tags cannot.

---

## Selected work

| Project | What it is |
|---|---|
| **Medclara**, Clinical AI, Founding Engineer | Voice-first multilingual clinical documentation. IndicConformer for speech recognition with a fine-tuned Gemma model for clinical note generation, covering architecture, infra, and compliance solo. |
| **[MoviesLikeThis](https://movieslikethis.starone01.me)**, Embeddings, Full Stack | The films that stay with you. Not "more sci-fi." Not "another action movie." Same feeling, different film: matched by emotional experience, not genre. |
| **Sherlock SFT**, Fine-Tuning | Fine-tuned a character-consistent language model via supervised fine-tuning, iterating on training data quality and debugging a QLoRA NaN loss down to root cause. |
| **[bfloat16](https://github.com/StarOne01/bfloat16)**, Open Source, Numerics | A lightweight C++ implementation of Google Brain's bfloat16 format. Same 8-bit exponent as FP32 with a 7-bit mantissa, the number format ML hardware actually speaks. |

Also: **[PhraseNuX](https://github.com/StarOne01/PhraseNuX)**, a C++ CLI password manager with AES encryption, zero dependencies, written entirely on a phone.

---

## Experience

- **Creator @ MoviesLikeThis**, in production. The films that stay with you, matched by emotional experience, not genre.
- **Founder @ Software Development Agency**, present. Coimbatore-based agency funding other ventures. High-end web, custom AI agent systems, and enterprise software. [softwares.primesoma.com](https://softwares.primesoma.com)
- **Open Source Contributor @ LLVM**, ongoing. X86 backend _Float16 lowering, a Clang Sema diagnostic through extensive review, and a series of libc POSIX header docs. Now deepening into MLIR.
- **Founder @ primesoma**, upcoming. Vertically integrated wellness ecosystem, food, groceries, farms, fitness, health.
- **Founding Engineer @ Medclara**, past. Founding engineer and technical lead for the clinical AI pipeline described above.

---

## Open source

**LLVM**
Backend and codegen (X86 _Float16), frontend (Clang Sema diagnostic), and libc docs. Tracking toward MLIR.

- `llvm/llvm-project`: profile pinned, all reviews public on GitHub.

**Other**
- `StarOne01/bfloat16`: bfloat16 in C++
- `StarOne01/PhraseNuX`: secure CLI password manager

---

## Stack

**Languages:** Go, Python, C++ (favorite), TypeScript / Next.js

**Systems & Compilers:** LLVM, MLIR (in progress), Compilers, System Design, Local LLM Inference, CUDA (in progress)

**ML / AI:** SFT / QLoRA, ASR Pipelines, Embeddings, RAG

**Infra & Data:** AWS, GCP, PostgreSQL, Qdrant, Fedora

---

## Connect

- Email: [ping@starone01.me](mailto:ping@starone01.me)
- LinkedIn: [in/StarOne01](https://www.linkedin.com/in/StarOne01/)
- GitHub: [@StarOne01](https://github.com/StarOne01)
- X: [@iamstarone01](https://x.com/iamstarone01)
- Portfolio: [starone01.me](https://starone01.me)

---

## This portfolio repo

Light editorial design: paper background, Space Grotesk display type, Inter body, JetBrains Mono labels. Right push sidebar with scroll-spy, rAF scroll parallax on photos and headlines, expandable work and experience entries, pop-up terminal (`Ctrl/⌘ + \``), AI-generated aurora imagery.

Built with Next.js, TypeScript, and Tailwind. Static export to GitHub Pages.

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # static export to dist/
```

Deployed from `main` to `starone01.me` via GitHub Pages. Analytics via Cloudflare Web Analytics (production only).
