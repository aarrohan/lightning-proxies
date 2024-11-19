import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-caveat)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        primary: "rgb(var(--primary-color-rgb) / <alpha-value>)",
        "dark-white": "rgb(var(--dark-white-color-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-color-rgb) / <alpha-value>)",
        "accent-dark": "rgb(var(--accent-dark-color-rgb) / <alpha-value>)",
        "off-white": "rgb(var(--off-white-color-rgb) / <alpha-value>)",
        orange: "rgb(var(--orange-color-rgb) / <alpha-value>)",
        green: "rgb(var(--green-color-rgb) / <alpha-value>)",
        purple: "rgb(var(--purple-color-rgb) / <alpha-value>)",
        yellow: "rgb(var(--yellow-color-rgb) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
