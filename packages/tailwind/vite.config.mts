import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
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
      external: ["./scripts"],
    },
  },
});
