import { RefTypographyLineHeightTokens } from "../../../ref-tokens/typography";
import { SysTypographyHeadingFontWeightTokens } from "./font-weight/sys-typography-heading-font-weight-tokens";
import { SysTypographyHeadingSizeTokens } from "./size/sys-typography-heading-size-tokens";
import { SysTypographyHeadingTokensType } from "./sys-typography-heading-tokens.types";

export const SysTypographyHeadingTokens = {
  size: SysTypographyHeadingSizeTokens,
  fontWeight: SysTypographyHeadingFontWeightTokens,
  lineHeight: RefTypographyLineHeightTokens[100],
} as const satisfies SysTypographyHeadingTokensType;
