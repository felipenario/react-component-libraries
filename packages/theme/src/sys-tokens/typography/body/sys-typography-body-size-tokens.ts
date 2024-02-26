import { RefTypographyFontSizeTokens } from "../../../ref-tokens/typography/font-size/ref-typography-font-size-tokens";

export const SysTypographyBodySizeTokens = {
  xxxl:
    RefTypographyFontSizeTokens.desktop.fontSize600 ||
    RefTypographyFontSizeTokens.mobile.fontSize600,
  xxl:
    RefTypographyFontSizeTokens.desktop.fontSize500 ||
    RefTypographyFontSizeTokens.mobile.fontSize500,
  xl:
    RefTypographyFontSizeTokens.desktop.fontSize400 ||
    RefTypographyFontSizeTokens.mobile.fontSize400,
  l:
    RefTypographyFontSizeTokens.desktop.fontSize300 ||
    RefTypographyFontSizeTokens.mobile.fontSize300,
  m:
    RefTypographyFontSizeTokens.desktop.fontSize200 ||
    RefTypographyFontSizeTokens.mobile.fontSize200,
  s:
    RefTypographyFontSizeTokens.desktop.fontSize100 ||
    RefTypographyFontSizeTokens.mobile.fontSize100,
  xs:
    RefTypographyFontSizeTokens.desktop.fontSize75 ||
    RefTypographyFontSizeTokens.mobile.fontSize75,
} as const;
