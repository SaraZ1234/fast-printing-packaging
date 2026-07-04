import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stock: "#EFEAE0",   // uncoated paper stock
        ink: "#1A1A18",     // press black
        cyan: "#00AEEF",    // process cyan
        magenta: "#EC008C", // process magenta
        yellow: "#FFE800",  // process yellow
        kraft: "#B08655",   // corrugate kraft
        kraftdark: "#8A6740",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(26,26,24,0.14) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "16px 16px",
      },
    },
  },
  plugins: [],
};

export default config;
