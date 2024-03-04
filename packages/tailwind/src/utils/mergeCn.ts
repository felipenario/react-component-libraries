import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeCn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
