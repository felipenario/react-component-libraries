import { RefTypographyFontWeightTokens } from "../../../../ref-tokens/typography";
import { SysTypographyHeadingFontWeightTokensType } from "./sys-typography-heading-font-weight-tokens.types";

export const SysTypographyHeadingFontWeightTokens = {
  light: RefTypographyFontWeightTokens.light,
  default: RefTypographyFontWeightTokens.medium,
  heavy: RefTypographyFontWeightTokens.bold,
} as const satisfies SysTypographyHeadingFontWeightTokensType;
