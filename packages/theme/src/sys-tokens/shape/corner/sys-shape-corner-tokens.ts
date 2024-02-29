import { SysShapeCornerTokensType } from "./sys-shape-corner-tokens.types";

export const SysShapeCornerTokens = {
  none: "0",
  xs: "4px",
  s: "8px",
  m: "12px",
  l: "16px",
  xl: "28px",
  full: "9999px",
} as const satisfies SysShapeCornerTokensType;
