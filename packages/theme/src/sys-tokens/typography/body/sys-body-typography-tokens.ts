import { SysBodyTypographyTokensType } from "./sys-body-typography-tokens.types";

export const SysBodyTypographyTokens = {
  l: {
    fontStyle: "normal",
    fontWeight: {
      regular: "400",
    },
    lineHeight: "1.5",
    size: "1rem",
  },
  m: {
    fontStyle: "normal",
    fontWeight: {
      regular: "400",
    },
    lineHeight: "1.5",
    size: "0.875rem",
  },
  s: {
    fontStyle: "normal",
    fontWeight: {
      regular: "400",
    },
    lineHeight: "1.5",
    size: "0.75rem",
  },
} as const satisfies SysBodyTypographyTokensType;
