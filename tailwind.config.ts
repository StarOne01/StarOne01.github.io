import type { Config } from "tailwindcss";

const config: Config =  {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        serif: ["var(--font-serif)"],
      },
      colors: {
        paper: "#FAF7F2",
        cream: "#F3EDE2",
        sand: "#E9E1D3",
        ink: "#211D18",
        "ink-soft": "#57534A",
        clay: "#BC5527",
        "clay-deep": "#9C4420",
      },
    },
  },
  plugins: [],
};

export default config;
