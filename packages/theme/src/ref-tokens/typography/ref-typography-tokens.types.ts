import { RefTypographyFontSizeTokensType } from "./font-size";
import { RefTypographyFontStyleTokensType } from "./font-style";
import { RefTypographyFontWeightTokensType } from "./font-weight";
import { RefTypographyLineHeightTokensType } from "./line-height";

export type RefTypographyTokensType = {
  fontSize: RefTypographyFontSizeTokensType;
  fontStyle: RefTypographyFontStyleTokensType;
  fontWeight: RefTypographyFontWeightTokensType;
  lineHeight: RefTypographyLineHeightTokensType;
};
