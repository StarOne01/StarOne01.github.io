const primary = [
  "Compilers",
  "LLVM / MLIR",
  "Inference",
  "Embeddings",
  "Silicon",
  "Systems",
  "QLoRA",
  "RAG",
  "Termux",
];

const secondary = [
  "11.01°N 76.95°E",
  "Coimbatore · IN",
  "Open to collaboration",
  "Shipped & open-sourced",
  "sys.portfolio / 2026",
  "ASR · Compilers · Inference",
];

function Row({
  words,
  reverse = false,
}: {
  words: readonly string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex w-max py-3 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      } motion-reduce:animate-none`}
    >
      {[0, 1].map((copy) => (
        <div key={copy} className="flex shrink-0 items-center">
          {words.map((word) => (
            <span
              key={`${copy}-${word}`}
              className="flex items-center font-mono text-[11px] uppercase tracking-[0.22em]"
            >
              <span className="px-5">{word}</span>
              <span className={reverse ? "text-faint/60" : "text-faint"}>◆</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-b border-edge bg-surface"
    >
      <div className="text-accent">
        <Row words={primary} />
      </div>

      <div className="h-px w-full bg-edge" />

      <div className="text-dim">
        <Row words={secondary} reverse />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent" />
    </div>
  );
}
