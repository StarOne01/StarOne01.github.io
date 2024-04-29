"use client";
import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative m-0 flex flex-col h-[100vh] justify-center bg-white dark:bg-black  text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="inset-0 m-0 overflow-hidden">
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className="bg-black"
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
