"use client";
import { useState } from "react";

export default function ThemeJoke() {
  const [flash, setFlash] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const handleClick = () => {
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 2500);
    }, 200);
  };

  return (
    <>
      <div className={`fixed inset-0 z-[60] pointer-events-none transition-colors duration-200 ${flash ? "bg-white" : "bg-transparent"}`} />
      <button
        onClick={handleClick}
        className="fixed bottom-24 left-4 z-50 bg-black/80 border border-white/10 rounded-lg px-3 py-2 text-xs font-mono text-white/40 hover:text-white/70 backdrop-blur-md transition-all duration-300 hover:border-white/30"
        title="toggle theme"
      >
        {showMsg ? "light mode? in this economy?" : "🌙"}
      </button>
    </>
  );
}
