import React from "react";

interface SectionHeaderProps {
  title: string;
  align?: "center" | "left" | "right";
}

export default function SectionHeader({ title, align = "center" }: SectionHeaderProps) {
  const alignClasses = {
    center: "items-center text-center",
    left: "items-start text-left",
    right: "items-end text-right",
  };

  const gradientDir = align === "right" ? "to-l" : "to-r";

  return (
    <div className={`mb-16 flex flex-col ${alignClasses[align]}`}>
      <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">
        {title}
      </h2>
      <div className={`w-16 h-1 bg-gradient-to-${gradientDir} from-white/40 to-white/10 rounded-full`} />
    </div>
  );
}
