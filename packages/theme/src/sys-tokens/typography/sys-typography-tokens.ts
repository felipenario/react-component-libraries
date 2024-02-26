import { SysTypographyBodyTokens } from "./body/sys-typography-body-tokens";
import { SysTypographyDetailTokens } from "./detail/sys-typography-detail-tokens";
import { SysTypographyHeadingTokens } from "./heading/sys-typography-heading-tokens";

export const SysTypographyTokens = {
  body: SysTypographyBodyTokens,
  detail: SysTypographyDetailTokens,
  heading: SysTypographyHeadingTokens,
} as const;
