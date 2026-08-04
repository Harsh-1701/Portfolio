import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0C",
        surface: "#111113",
        line: "#1E1E22",
        muted: "#8A8A93",
        text: "#EDEDEF",
        accent: "#E8FF4C", // sharp signal-yellow (unusual, memorable)
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
        serif: ["'Instrument Serif'", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;