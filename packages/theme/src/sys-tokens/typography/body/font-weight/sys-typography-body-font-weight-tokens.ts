import { RefTypographyFontWeightTokens } from "../../../../ref-tokens/typography";
import { SysTypographyBodyFontWeightTokensType } from "./sys-typography-body-font-weight-tokens.types";

export const SysTypographyBodyFontWeightTokens = {
  default: RefTypographyFontWeightTokens.regular,
} as const satisfies SysTypographyBodyFontWeightTokensType;
