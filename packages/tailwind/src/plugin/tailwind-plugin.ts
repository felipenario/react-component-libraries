import plugin from "tailwindcss/plugin";
import { TailwindConfig } from "./tailwind-config";

export const TailwindPlugin = plugin(() => {}, TailwindConfig);