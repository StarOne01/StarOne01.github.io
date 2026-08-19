"use client";
import { useEffect, useRef, useState, useId } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

type CommandOutput = { kind: "in" | "out" | "err"; text: string };

const commands: Record<string, string> = {
  help: "available: about, work, stack, contact, whoami, ls, clear, sudo, exit",
  about: "Prashanth. ML Systems Engineer. Coimbatore. Builds production ASR, compilers, and the infrastructure in between.",
  work: "Medclara (co-founder, past) · primesoma (founder, upcoming) · self (founder, in development) · LLVM contributor · EfficientXLang (research).",
  stack: "Go · Python · TypeScript · C++ (favorite) · AWS · GCP · Whisper · LLVM · UE5 · DaVinci Resolve",
  contact: "ping@starone01.me  ·  linkedin.com/in/StarOne01  ·  github.com/StarOne01",
  projects: "EfficientXLang (research) · PhraseNuX (C++ CLI) · Medclara (clinical AI)",
  whoami: "guest@starone01.me — you are not logged in. (this is a portfolio, not a server.)",
  ls: "about.md  work.md  stack.md  contact.txt  resume.pdf",
  sudo: "nice try.",
  banner: "",
  exit: "you can't exit a portfolio. keep scrolling.",
};

const banner = `
  ███████╗████████╗ █████╗ ██████╗  ██████╗ ███╗   ██╗███████╗ ██████╗  ██╗
  ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔═══██╗████╗  ██║██╔════╝██╔═████╗███║
  ███████╗   ██║   ███████║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██║██╔██║╚██║
  ╚════██║   ██║   ██╔══██║██╔══██╗██║   ██║██║╚██╗██║██╔══╝  ████╔╝██║ ██║
  ███████║   ██║   ██║  ██║██║  ██║╚██████╔╝██║ ╚████║███████╗╚██████╔╝ ██║
  ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝  ╚═╝
`;

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [history, setHistory] = useState<CommandOutput[]>([
    { kind: "out", text: "starone01 :: portfolio v2.0 — type 'help' to begin" },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
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
    if (raw === "banner") {
      setHistory([...next, { kind: "out", text: banner }]);
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
      <button
        onClick={() => setOpen(true)}
        aria-label="Open terminal (Ctrl+` or ⌘`)"
        aria-expanded={open}
        aria-haspopup="dialog"
        className={`fixed bottom-5 max-sm:bottom-24 right-5 z-[55] font-mono text-[11px] tracking-[0.2em] uppercase text-white/55 hover:text-white border border-white/15 hover:border-white/30 bg-white/5 backdrop-blur-md rounded-md px-3 py-2 transition-opacity duration-300 ${
          isHomePage && !isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        &gt;_ term
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-5 z-[70] w-[min(92vw,560px)] h-[min(60vh,420px)] bg-black/95 border border-white/15 rounded-lg shadow-2xl shadow-black backdrop-blur-xl flex flex-col overflow-hidden font-mono text-[12px]"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-1.5" aria-hidden>
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span id={titleId} className="text-white/55 text-[10px] tracking-[0.2em] uppercase">
                starone01 — tty1
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close terminal"
                className="text-white/55 hover:text-white text-xs"
              >
                esc
              </button>
            </div>

            <div
              ref={scrollRef}
              role="log"
              aria-live="polite"
              aria-label="Terminal output"
              className="flex-1 overflow-y-auto p-4 space-y-1"
            >
              {history.map((line, i) => (
                <div
                  key={i}
                  className={cn(
                    "whitespace-pre-wrap break-words leading-relaxed",
                    line.kind === "in" && "text-white",
                    line.kind === "out" && "text-white/80",
                    line.kind === "err" && "text-white/50 italic"
                  )}
                >
                  {line.kind === "in" ? (
                    <>
                      <span className="text-white/55">guest@starone01</span>
                      <span className="text-white/40"> ~ </span>
                      <span>{line.text}</span>
                    </>
                  ) : (
                    line.text
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={submit} className="flex items-center gap-2 px-4 py-3 border-t border-white/10">
              <label className="sr-only" htmlFor="terminal-input">Terminal command</label>
              <span className="text-white/55" aria-hidden>guest@starone01</span>
              <span className="text-white/40" aria-hidden>~</span>
              <span className="text-white/55" aria-hidden>$</span>
              <input
                id="terminal-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                spellCheck={false}
                autoComplete="off"
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/50"
                placeholder="type a command…"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
