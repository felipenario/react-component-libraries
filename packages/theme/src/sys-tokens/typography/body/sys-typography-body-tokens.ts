import { RefTypographyLineHeightTokens } from "../../../ref-tokens/typography";
import { SysTypographyBodyFontWeightTokens } from "./font-weight/sys-typography-body-font-weight-tokens";
import { SysTypographyBodySizeTokens } from "./size/sys-typography-body-size-tokens";
import { SysTypographyBodyTokensType } from "./sys-typography-body-tokens.types";

export const SysTypographyBodyTokens = {
  size: SysTypographyBodySizeTokens,
  fontWeight: SysTypographyBodyFontWeightTokens,
  lineHeight: RefTypographyLineHeightTokens[200],
} as const satisfies SysTypographyBodyTokensType;
