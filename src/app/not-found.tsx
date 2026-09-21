"use client";
import { useState } from "react";

const jokes = [
  "this page doesn't exist. try :q to quit.",
  "E173: 1 more file to edit: this 404 page.",
  "How do I exit vim? I've been here since 2023.",
  "404 | :q! | same energy",
  "Buffer not found. Try `:ls`.",
  "This page was deleted. `:w` next time.",
  "/dev/null has more content than this URL.",
  "Page has been :wq'd out of existence.",
  "It's not a bug, it's a feature ~",
  "You've reached the void. Want to pair program an exit?",
];

export default function NotFound() {
  const [joke, setJoke] = useState(jokes[0]);

  const nextJoke = () => {
    const current = jokes.indexOf(joke);
    setJoke(jokes[(current + 1) % jokes.length]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex cursor-pointer select-none flex-col items-center justify-center bg-paper px-4" onClick={nextJoke}>
      <h1 className="sr-only">404: page not found</h1>
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">error 404</p>
      <pre className="rounded-2xl border border-line bg-card px-6 py-5 text-center font-mono text-sm leading-relaxed text-ink sm:text-base">
{`╔══════════════════════════════╗
║                              ║
║   ${joke.padEnd(27)}║
║                              ║
╚══════════════════════════════╝`}
      </pre>
      <p className="mt-8 font-mono text-xs text-muted">[ click for another error ]</p>
      <a
        href="/"
        onClick={(e) => e.stopPropagation()}
        className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink px-8 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-moss"
      >
        Back home
      </a>
    </div>
  );
}
