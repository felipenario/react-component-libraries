import { RefTypographyLineHeightTokens } from "../../../ref-tokens/typography";
import { SysTypographyDetailFontWeightTokens } from "./sys-typography-detail-font-weight-tokens";
import { SysTypographyDetailSizeTokens } from "./sys-typography-detail-size-tokens";

export const SysTypographyDetailTokens = {
  size: SysTypographyDetailSizeTokens,
  fontWeight: SysTypographyDetailFontWeightTokens,
  lineHeight: RefTypographyLineHeightTokens[100],
} as const;
