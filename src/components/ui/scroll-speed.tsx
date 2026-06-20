"use client";
import { useEffect, useRef, useState } from "react";

const messages = [
  "why?",
  "you good?",
  "calm down",
  "read, don't skim",
  "slow down, speedster",
  "touch grass instead",
];

export default function ScrollSpeed() {
  const [speed, setSpeed] = useState(0);
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState("");
  const busy = useRef(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let accPx = 0;
    let accStart = 0;

    const onScroll = () => {
      if (busy.current) return;

      const now = performance.now();
      const dy = Math.abs(window.scrollY - lastY);
      lastY = window.scrollY;

      if (dy === 0) return;
      if (accPx === 0) accStart = now;

      accPx += dy;
      const elapsed = now - accStart;

      if (accPx > 500 && elapsed > 50 && elapsed < 300) {
        setSpeed(Math.round(accPx / (elapsed / 1000)));
        setMsg(messages[Math.floor(Math.random() * messages.length)]);
        setVisible(true);
        busy.current = true;
        setTimeout(() => { busy.current = false; setVisible(false); }, 4000);
        accPx = 0;
      }

      if (elapsed > 400) accPx = 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-24 right-4 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-black/80 border border-white/10 rounded-lg px-4 py-2 text-xs font-mono text-white/60 backdrop-blur-md whitespace-nowrap">
        {speed}px/s — {msg}
      </div>
    </div>
  );
}
