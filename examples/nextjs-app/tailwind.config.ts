import { TailwindPlugin } from "@components/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@components/react-tailwind/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [TailwindPlugin],
} satisfies Config;
export default config;
