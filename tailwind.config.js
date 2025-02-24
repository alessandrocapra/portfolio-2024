/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Make Work Sans the default monospace font
        mono: ["Work Sans", ...defaultTheme.fontFamily.mono],
        // Keep sans as fallback
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  safelist: [
    'items-start',
    'items-center',
    'items-end'
  ],
};
