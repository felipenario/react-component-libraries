import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { mapSysTypographyTokensToTailwindConfig } from "../mappers";

const {
  sysBodyFontSizeTokens,
  sysDetailFontSizeTokens,
  sysHeadingFontSizeTokens,
} = mapSysTypographyTokensToTailwindConfig();

const addTextPrefix = (string: string) => {
  return `text-${string}`;
};

export const tailwindMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        ...Object.keys(sysBodyFontSizeTokens).map(addTextPrefix),
        ...Object.keys(sysDetailFontSizeTokens).map(addTextPrefix),
        ...Object.keys(sysHeadingFontSizeTokens).map(addTextPrefix),
      ],
    },
  },
});

export const mergeCn = (...inputs: ClassValue[]) => {
  return tailwindMerge(clsx(inputs));
};
