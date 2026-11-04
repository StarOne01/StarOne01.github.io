const words = [
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

export default function Marquee() {
  return (
    <div aria-hidden className="overflow-hidden border-b border-edge bg-lime text-black">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {words.map((word) => (
              <span
                key={`${copy}-${word}`}
                className="flex items-center py-3 font-mono text-[11px] uppercase tracking-[0.22em]"
              >
                <span className="px-6">{word}</span>
                <span className="text-black/40">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
