import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: "#fdf2f2",
          100: "#fce7e7",
          200: "#f8cfd0",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
        },
      },
    },
  },
  plugins: [],
};

export default config;
