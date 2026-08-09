import type { Config } from "tailwindcss";

// PLACEHOLDER PALETTE — swap these four hex values for the exact tokens
// from Figma Dev Mode (select each fill in "Portfolio Redesign — Homepage v2"
// and copy the hex from the right-hand inspector). Everything else in the
// codebase references these names, not raw hex, so updating here recolors
// the whole site.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#10173B", // TODO: replace with exact Figma navy
          light: "#1B2456",   // TODO: secondary navy surface / card bg on dark sections
        },
          lime: {
          DEFAULT: "#C6F24E", // TODO: replace with exact Figma lime accent
          ink: "#5C7A1E", // darker lime variant — WCAG-safe for text on white/light backgrounds
        },        
          lavender: {
          DEFAULT: "#B7A9F0", // TODO: replace with exact Figma lavender accent
        },
        paper: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        card: "20px",
      },
      animation: {
      "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;