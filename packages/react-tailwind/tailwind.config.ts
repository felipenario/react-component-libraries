import type { Config } from "tailwindcss";
import { tailwindPlugin } from "./src/plugin";

const config: Config = {
  content: [],
  plugins: [tailwindPlugin],
};

export default config;
