import { SysDisplayTypographyTokensType } from "./sys-display-typography-tokens.types";

export const SysDisplayTypographyTokens = {
  l: {
    fontStyle: "normal",
    fontWeight: {
      regular: "400",
    },
    lineHeight: "1.3",
    size: "3.75rem",
  },
  m: {
    fontStyle: "normal",
    fontWeight: {
      regular: "400",
    },
    lineHeight: "1.3",
    size: "2.813rem",
  },
  s: {
    fontStyle: "normal",
    fontWeight: {
      regular: "400",
    },
    lineHeight: "1.3",
    size: "2.25rem",
  },
} as const satisfies SysDisplayTypographyTokensType;
