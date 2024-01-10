import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    sourcemap: true,
    lib: {
      name: "react-tailwind",
      fileName: (format, name) => {
        if (format === "es") {
          return `${name}.js`;
        }

        return `${name}.${format}.js`;
      },
      entry: [
        resolve(__dirname, "src/index.ts")
      ],
      formats: ["es", "umd"],
    },
    rollupOptions: {
      treeshake: true,
      external: ["react", "react/jsx-runtime", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "react/jsx-runtime",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
