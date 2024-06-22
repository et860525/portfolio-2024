/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        crusta: {
          50: "#fff5ed",
          100: "#ffe8d4",
          200: "#ffcda8",
          300: "#ffaa71",
          400: "#ff8040",
          500: "#fe5711",
          600: "#ef3c07",
          700: "#c62908",
          800: "#9d230f",
          900: "#7e1f10",
          950: "#440c06",
        },
        mirage: {
          50: "#f6f6f9",
          100: "#ececf2",
          200: "#d4d4e3",
          300: "#aeaecb",
          400: "#8282ae",
          500: "#636494",
          600: "#4f4e7b",
          700: "#424064",
          800: "#393854",
          900: "#333248",
          950: "#1c1b27",
        },
        primary: "#76A1FF",
      },
    },
  },
  plugins: [],
};
