import { RefTypographyLineHeightTokens } from "../../../ref-tokens/typography";
import { SysTypographyHeadingFontWeightTokens } from "./sys-typography-heading-font-weight-tokens";
import { SysTypographyHeadingSizeTokens } from "./sys-typography-heading-size-tokens";

export const SysTypographyHeadingTokens = {
  size: SysTypographyHeadingSizeTokens,
  weight: SysTypographyHeadingFontWeightTokens,
  lineHeight: RefTypographyLineHeightTokens[100],
} as const;
