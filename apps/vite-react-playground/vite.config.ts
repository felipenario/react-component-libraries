import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ["!**/node_modules/@components/react-tailwind/**"],
    },
  },
  optimizeDeps: {
    exclude: ["@components/react-tailwind"],
  },
});
