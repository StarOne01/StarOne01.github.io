"use client";
import { useState } from "react";

const jokes = [
  "this page doesn't exist. try :q to quit.",
  "E173: 1 more file to edit — this 404 page.",
  "How do I exit vim? I've been here since 2023.",
  "404 | :q! | same energy",
  "Buffer not found. Try `:ls`.",
  "This page was deleted. `:w` next time.",
  "/dev/null has more content than this URL.",
  "Page has been :wq'd out of existence.",
  "It's not a bug, it's a feature —~",
  "You've reached the void. Want to pair program an exit?",
];

export default function NotFound() {
  const [joke, setJoke] = useState(jokes[0]);

  const nextJoke = () => {
    const current = jokes.indexOf(joke);
    setJoke(jokes[(current + 1) % jokes.length]);
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100] cursor-pointer select-none" onClick={nextJoke}>
      <pre className="text-green-400/80 text-sm sm:text-base font-mono leading-relaxed text-center px-4">
{`╔══════════════════════════════╗
║                              ║
║   ${joke.padEnd(27)}║
║                              ║
╚══════════════════════════════╝`}
      </pre>
      <p className="text-white/20 text-xs mt-8 font-mono">[ click for another error ]</p>
    </div>
  );
}
