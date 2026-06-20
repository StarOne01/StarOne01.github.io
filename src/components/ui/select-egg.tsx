"use client";
import { useEffect, useState } from "react";

const messages = [
  "that's me!",
  "you found me",
  "yes, that's my name",
  "stop that",
  "weird flex but ok",
  "selective attention",
];

export default function SelectEgg() {
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const show = () => {
      clearTimeout(timer);
      setMsg(messages[Math.floor(Math.random() * messages.length)]);
      setVisible(true);
    };

    const hide = () => {
      timer = setTimeout(() => {
        setVisible(false);
        setMsg("");
      }, 400);
    };

    const onSelect = () => {
      const text = document.getSelection()?.toString() || "";
      if (text.match(/Prashanth/)) show();
      else hide();
    };

    const onHover = () => show();
    const onLeave = () => hide();

    document.addEventListener("selectionchange", onSelect);
    document.addEventListener("egg:prashanth-hover", onHover);
    document.addEventListener("egg:prashanth-leave", onLeave);
    return () => {
      document.removeEventListener("selectionchange", onSelect);
      document.removeEventListener("egg:prashanth-hover", onHover);
      document.removeEventListener("egg:prashanth-leave", onLeave);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-36 right-4 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/60 backdrop-blur-xl whitespace-nowrap">
        {msg}
      </div>
    </div>
  );
}
