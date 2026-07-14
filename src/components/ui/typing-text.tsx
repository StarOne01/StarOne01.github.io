"use client";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

interface TypingTextProps {
  lines: readonly string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
  cursor?: string;
}

export default function TypingText({
  lines,
  className,
  typeSpeed = 45,
  deleteSpeed = 25,
  holdTime = 1600,
  cursor = "▍",
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(lines[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[index % lines.length];
    if (!current) return;

    if (text === current && !deleting) {
      const t = setTimeout(() => setDeleting(true), holdTime);
      return () => clearTimeout(t);
    }
    if (text === "" && deleting) {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }
    const delay = deleting ? deleteSpeed : typeSpeed;
    const t = setTimeout(() => {
      setText((cur) =>
        deleting ? current.slice(0, cur.length - 1) : current.slice(0, cur.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, lines, typeSpeed, deleteSpeed, holdTime]);

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      <span aria-live="polite">{text}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block w-[1ch] -translate-y-[1px] text-white/70 animate-pulse"
      >
        {cursor}
      </span>
    </span>
  );
}
