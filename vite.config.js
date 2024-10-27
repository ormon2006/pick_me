import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/assets/pages"),
      "@helpers": path.resolve(__dirname, "src/assets/helpers"),
    },
  },

  server: {
    proxy: {
      "/get_workout_plan": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },
});
