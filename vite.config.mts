import Icons from 'unplugin-icons/vite';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    Icons({
      compiler: 'jsx',
    }),
  ],

  base: "/multi-business-site/",
});