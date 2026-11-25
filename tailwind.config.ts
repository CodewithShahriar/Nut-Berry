import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50: "#f0f7f2",
            100: "#dcf0e2",
            200: "#bbe2c8",
            300: "#8ecdab",
            400: "#5db28b",
            500: "#3d9670",
            600: "#2d7857",
            700: "#256047",
            800: "#1f4d3a",
            900: "#133527",
            950: "#0b2017",
          },
          cream: "#FAF7F2",
          warmBg: "#FBF8F3",
          gold: "#D4A373",
          dark: "#1A251E",
        },
      },
      fontFamily: {
        condensed: ["'Bebas Neue'", "'Oswald'", "Impact", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
