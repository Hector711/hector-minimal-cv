import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src/")
    },
  },
  build: {
    rollupOptions: {
      input: {
        es: path.resolve(__dirname, 'index-es.html'),
        en: path.resolve(__dirname, 'index-en.html'),
      }
    }
  }
});