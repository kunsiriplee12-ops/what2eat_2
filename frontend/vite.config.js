import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "https://what2eat-backend-ret4.onrender.com"

    },
  },
  preview: {
    port: 4173,
    proxy: {
      "/api": "https://what2eat-backend-ret4.onrender.com"
    },
  },
});
