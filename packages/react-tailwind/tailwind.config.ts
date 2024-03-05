import type { Config } from "tailwindcss";
import { TailwindPlugin } from "@components/tailwind";

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [TailwindPlugin],
};

export default config;
