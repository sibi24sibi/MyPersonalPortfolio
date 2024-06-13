/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('not-first', '&:not(:first-child)');
    },
  ],
}