import { SysHeadlineTypographyTokensType } from "./sys-headline-typography-tokens.types";

export const SysHeadlineTypographyTokens = {
  l: {
    fontStyle: "normal",
    fontWeight: {
      regular: "400",
    },
    lineHeight: "1.3",
    size: "2rem",
  },
  m: {
    fontStyle: "normal",
    fontWeight: {
      regular: "400",
    },
    lineHeight: "1.3",
    size: "1.75rem",
  },
  s: {
    fontStyle: "normal",
    fontWeight: {
      regular: "400",
    },
    lineHeight: "1.3",
    size: "1.563rem",
  },
} as const satisfies SysHeadlineTypographyTokensType;
