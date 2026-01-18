import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Industrial HMI Color Palette
        bg: {
          primary: "#0a0f14",
          secondary: "#111921",
          tertiary: "#1a242e",
        },
        accent: {
          primary: "#f97316", // Industrial orange
          secondary: "#22d3ee", // Cyan
          success: "#22c55e", // Status green
          warning: "#eab308", // Caution yellow
        },
        text: {
          primary: "#e2e8f0",
          secondary: "#94a3b8",
          muted: "#64748b",
        },
        border: {
          subtle: "#1e293b",
          panel: "#334155",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["IBM Plex Sans", "sans-serif"],
      },
      boxShadow: {
        'panel': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'panel-inset': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.4)',
        'glow-orange': '0 0 8px rgba(249, 115, 22, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
