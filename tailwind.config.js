/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  fontFamily: {
    serif: ['"Playfair Display"', 'Georgia', 'serif'],
    sans: ['"Inter"', 'system-ui', 'sans-serif'],
  }
}
