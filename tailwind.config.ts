import type { Config } from "tailwindcss";

const config: Config =  {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        paper: "#F7F5EF",
        card: "#FFFFFF",
        ink: "#1C1B17",
        muted: "#6B675C",
        line: "#E5E1D6",
        moss: "#0F6B4A",
        mossdeep: "#0A4A34",
      },
    },
  },
  plugins: [],
};

export default config;
