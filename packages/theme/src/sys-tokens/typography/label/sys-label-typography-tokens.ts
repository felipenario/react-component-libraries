import { SysLabelTypographyTokensType } from "./sys-label-typography-tokens.types";

export const SysLabelTypographyTokens = {
  l: {
    fontStyle: "normal",
    fontWeight: {
      medium: "500",
    },
    lineHeight: "1.5",
    size: "0.875rem",
  },
  m: {
    fontStyle: "normal",
    fontWeight: {
      medium: "500",
    },
    lineHeight: "1.5",
    size: "0.75rem",
  },
  s: {
    fontStyle: "normal",
    fontWeight: {
      medium: "500",
    },
    lineHeight: "1.5",
    size: "0.688rem",
  },
} as const satisfies SysLabelTypographyTokensType;
