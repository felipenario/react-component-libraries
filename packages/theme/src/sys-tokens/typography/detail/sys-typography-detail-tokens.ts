import { RefTypographyLineHeightTokens } from "../../../ref-tokens/typography";
import { SysTypographyDetailFontWeightTokens } from "./font-weight/sys-typography-detail-font-weight-tokens";
import { SysTypographyDetailSizeTokens } from "./size/sys-typography-detail-size-tokens";
import { SysTypographyDetailTokensType } from "./sys-typography-detail-tokens.types";

export const SysTypographyDetailTokens = {
  size: SysTypographyDetailSizeTokens,
  fontWeight: SysTypographyDetailFontWeightTokens,
  lineHeight: RefTypographyLineHeightTokens[100],
} as const satisfies SysTypographyDetailTokensType;
