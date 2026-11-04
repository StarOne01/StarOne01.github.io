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
        // Aurora night: deep navy sky, warm starlight, aurora accents.
        paper: "#070D17",
        card: "#0C1522",
        ink: "#EDECE4",
        muted: "#8291A6",
        line: "#1B2635",
        moss: "#43E8B8",
        mossdeep: "#8FF7DA",
      },
    },
  },
  plugins: [],
};

export default config;
