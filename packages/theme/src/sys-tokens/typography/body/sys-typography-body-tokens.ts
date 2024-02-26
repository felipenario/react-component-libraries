import { RefTypographyLineHeightTokens } from "../../../ref-tokens/typography";
import { SysTypographyBodyFontWeightTokens } from "./sys-typography-body-font-weight-tokens";
import { SysTypographyBodySizeTokens } from "./sys-typography-body-size-tokens";

export const SysTypographyBodyTokens = {
  size: SysTypographyBodySizeTokens,
  fontWeight: SysTypographyBodyFontWeightTokens,
  lineHeight: RefTypographyLineHeightTokens[200],
} as const;
