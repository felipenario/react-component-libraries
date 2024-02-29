import { SysTypographyBodyTokens } from "./body";
import { SysTypographyDetailTokens } from "./detail";
import { SysTypographyHeadingTokens } from "./heading";
import { SysTypographyTokensType } from "./sys-typography-tokens.types";

export const SysTypographyTokens = {
  body: SysTypographyBodyTokens,
  detail: SysTypographyDetailTokens,
  heading: SysTypographyHeadingTokens,
} as const satisfies SysTypographyTokensType;
