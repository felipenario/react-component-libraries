import { RefTypographyFontWeightTokens } from "../../../../ref-tokens/typography";
import { SysTypographyDetailFontWeightTokensType } from "./sys-typography-detail-font-weight-tokens.types";

export const SysTypographyDetailFontWeightTokens = {
  light: RefTypographyFontWeightTokens.regular,
  default: RefTypographyFontWeightTokens.bold,
} as const satisfies SysTypographyDetailFontWeightTokensType;
