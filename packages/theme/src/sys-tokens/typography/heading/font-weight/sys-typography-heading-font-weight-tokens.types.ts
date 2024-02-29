import { RefTypographyFontWeightTokens } from "../../../../ref-tokens";
import { ValueOf } from "../../../../utils/valueOf";

export type SysTypographyHeadingFontWeightTokensType = {
  light: ValueOf<typeof RefTypographyFontWeightTokens>;
  default: ValueOf<typeof RefTypographyFontWeightTokens>;
  heavy: ValueOf<typeof RefTypographyFontWeightTokens>;
};
