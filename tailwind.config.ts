import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        "background-light": "var(--color-background-light)",
        surface: "var(--color-surface)",
        "text-primary": "var(--color-text-primary)",
        "text-dark": "var(--color-text-dark)",
        "text-secondary": "var(--color-text-secondary)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        blackbase: "var(--color-footer)",
        "accent-gold": "var(--color-accent-gold)",
        gold: "var(--color-accent-gold)",
        golddark: "#B89B5F",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};

export default config;
