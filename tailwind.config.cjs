// tailwind.config.js

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
        background: "var(--background)",   // теперь есть bg-background
        primary: "var(--primary)",         // bg-primary
      },
      colors: {
        foreground: "var(--foreground)",   // text-foreground
        secondary: "var(--secondary)",     // text-secondary / bg-secondary
        muted: "var(--muted)",     // text-secondary / bg-secondary
      },
    },
  },
  plugins: [],
};