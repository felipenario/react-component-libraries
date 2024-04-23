import { SysTitleTypographyTokensType } from "./sys-title-typography-tokens.types";

export const SysTitleTypographyTokens = {
  l: {
    fontStyle: "normal",
    fontWeight: {
      regular: "400",
    },
    lineHeight: "1.3",
    size: "1.375rem",
  },
  m: {
    fontStyle: "normal",
    fontWeight: {
      medium: "500",
    },
    lineHeight: "1.3",
    size: "1rem",
  },
  s: {
    fontStyle: "normal",
    fontWeight: {
      medium: "500",
    },
    lineHeight: "1.3",
    size: "0.875rem",
  },
} as const satisfies SysTitleTypographyTokensType;
