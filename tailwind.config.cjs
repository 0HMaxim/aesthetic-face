// tailwind.config.cjs

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "var(--background)",
        primary: "var(--primary)",
      },
      colors: {
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
