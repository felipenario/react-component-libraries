import { RefTypographyFontSizeTokens } from "./font-size";
import { RefTypographyFontStyleTokens } from "./font-style";
import { RefTypographyFontWeightTokens } from "./font-weight";
import { RefTypographyLineHeightTokens } from "./line-height";
import { RefTypographyTokensType } from "./ref-typography-tokens.types";

export const RefTypographyTokens = {
  fontSize: RefTypographyFontSizeTokens,
  fontStyle: RefTypographyFontStyleTokens,
  fontWeight: RefTypographyFontWeightTokens,
  lineHeight: RefTypographyLineHeightTokens,
} as const satisfies RefTypographyTokensType;
