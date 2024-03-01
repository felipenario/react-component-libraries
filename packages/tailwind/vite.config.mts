import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
    copyPublicDir: true,
    lib: {
      name: "theme",
      fileName: (format, name) => {
        if (format === "es") {
          return `${name}.js`;
        }

        return `${name}.${format}.js`;
      },
      entry: [resolve(__dirname, "src/index.ts")],
      formats: ["es", "umd"],
    },
    rollupOptions: {
      treeshake: true,
      external: [
        "@components/theme",
        "react",
        "react/jsx-runtime",
        "react-dom",
        "tailwindcss",
      ],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "react/jsx-runtime",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
          "@components/theme": "@components/theme",
        },
      },
    },
  },
});
