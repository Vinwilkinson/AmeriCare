import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#6fad45",
        secondary: "#359BA7",
        darkBg: "#040D12",
        themeBlack: "#222222",
        forest: "#205735",
        leaf: "#397b4b",
        mint: "#eaf4ec",
        ink: "#20312a",
        muted: "#62716a",
        cream: "#faf9f5",
      }
    },
  },
};
export default config;
