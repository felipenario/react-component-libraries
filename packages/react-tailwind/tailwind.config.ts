import type { Config } from "tailwindcss";
import { tailwindPlugin } from "./src/plugin";

const config: Config = {
  content: [],
  theme: {
    colors: {}
  },
  plugins: [tailwindPlugin],
};

export default config;
