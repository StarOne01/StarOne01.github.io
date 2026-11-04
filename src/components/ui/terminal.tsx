"use client";
import { useEffect, useRef, useState, useId } from "react";
import { cn } from "@/utils/cn";

type CommandOutput = { kind: "in" | "out" | "err"; text: string };

const commands: Record<string, string> = {
  help: "available: about, work, stack, contact, whoami, ls, clear, sudo, exit",
  about: "Prashanth T. Systems Engineer. Coimbatore. Hardware-software gap: compilers, inference, and the systems underneath.",
  work: "Medclara (founding engineer, past) · MoviesLikeThis (live) · Sherlock SFT (fine-tuning).",
  stack: "Go · Python · C++ (favorite) · TypeScript · LLVM/MLIR · QLoRA · Qdrant",
  contact: "ping@starone01.me  ·  linkedin.com/in/StarOne01  ·  github.com/StarOne01",
  projects: "Medclara (clinical AI) · MoviesLikeThis (embeddings) · bfloat16 (C++ numerics)",
  whoami: "guest@starone01.me, you are not logged in. (this is a portfolio, not a server.)",
  ls: "about.md  work.md  stack.md  contact.txt",
  sudo: "nice try.",
  exit: "you can't exit a portfolio. keep scrolling.",
};

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<CommandOutput[]>([
    { kind: "out", text: "starone01 :: portfolio, type 'help' to begin" },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "`" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("terminal:open", onOpen);
    return () => window.removeEventListener("terminal:open", onOpen);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history, open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = input.trim().toLowerCase();
    if (!raw) return;
    const next: CommandOutput[] = [...history, { kind: "in", text: raw }];
    if (raw === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    const out = commands[raw];
    next.push({ kind: out ? "out" : "err", text: out ?? `command not found: ${raw}. try 'help'.` });
    setHistory(next);
    setInput("");
  };

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-x-4 bottom-[max(5rem,calc(env(safe-area-inset-bottom)+5rem))] z-[70] flex h-[min(62vh,440px)] flex-col overflow-hidden rounded-sm border border-edge bg-surface font-mono text-[12px] text-ink shadow-[0_24px_64px_-16px_rgba(0,0,0,0.85)] sm:inset-x-auto sm:bottom-20 sm:right-6 sm:h-[min(60vh,420px)] sm:w-[min(92vw,560px)]"
        >
          <div className="flex items-center justify-between border-b border-edge bg-bg px-4 py-2">
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-edge" />
              <span className="h-2.5 w-2.5 rounded-full bg-edge" />
              <span className="h-2.5 w-2.5 rounded-full bg-lime/70" />
            </div>
            <span id={titleId} className="text-[10px] uppercase tracking-[0.2em] text-faint">
              starone01 · tty1
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close terminal"
              className="-mr-2 inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-xs text-faint hover:text-lime"
            >
              esc
            </button>
          </div>

          <div
            ref={scrollRef}
            role="log"
            aria-live="polite"
            aria-label="Terminal output"
            className="flex-1 space-y-1 overflow-y-auto p-4"
          >
            {history.map((line, i) => (
              <div
                key={i}
                className={cn(
                  "whitespace-pre-wrap break-words leading-relaxed",
                  line.kind === "in" && "text-ink",
                  line.kind === "out" && "text-dim",
                  line.kind === "err" && "italic text-faint"
                )}
              >
                {line.kind === "in" ? (
                  <>
                    <span className="text-lime">guest@starone01</span>
                    <span className="text-faint"> ~ </span>
                    <span>{line.text}</span>
                  </>
                ) : (
                  line.text
                )}
              </div>
            ))}
          </div>

          <form onSubmit={submit} className="flex items-center gap-2 border-t border-edge bg-bg px-4 py-3">
            <label className="sr-only" htmlFor="terminal-input">Terminal command</label>
            <span className="text-lime" aria-hidden>guest@starone01</span>
            <span className="text-faint" aria-hidden>~</span>
            <span className="text-faint" aria-hidden>$</span>
            <input
              id="terminal-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
              autoComplete="off"
              className="flex-1 bg-transparent text-ink outline-none placeholder:text-faint/70"
              placeholder="type a command…"
            />
          </form>
        </div>
      )}
    </>
  );
}
