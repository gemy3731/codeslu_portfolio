import { content, plugin } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    content(),
  ],
  theme: {
    extend: {
      fontSize: {
        responsive1: "clamp(1.5rem, 2.5vw, 2rem)",
      },
    },
  },
  plugins: [
    plugin(),
  ],
}
export default config;