import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@apis": path.resolve(__dirname, "./src/shared/apis"),
      "@assets": path.resolve(__dirname, "./src/shared/assets"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@styles": path.resolve(__dirname, "./src/shared/styles"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
    },
  },
});
