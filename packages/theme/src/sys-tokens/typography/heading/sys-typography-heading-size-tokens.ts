import { RefTypographyFontSizeTokens } from "../../../ref-tokens/typography/font-size/ref-typography-font-size-tokens";

export const SysTypographyHeadingSizeTokens = {
  xxxl:
    RefTypographyFontSizeTokens.desktop.fontSize1300 ||
    RefTypographyFontSizeTokens.mobile.fontSize1300,
  xxl:
    RefTypographyFontSizeTokens.desktop.fontSize1100 ||
    RefTypographyFontSizeTokens.mobile.fontSize1100,
  xl:
    RefTypographyFontSizeTokens.desktop.fontSize900 ||
    RefTypographyFontSizeTokens.mobile.fontSize900,
  l:
    RefTypographyFontSizeTokens.desktop.fontSize700 ||
    RefTypographyFontSizeTokens.mobile.fontSize700,
  m:
    RefTypographyFontSizeTokens.desktop.fontSize500 ||
    RefTypographyFontSizeTokens.mobile.fontSize500,
  s:
    RefTypographyFontSizeTokens.desktop.fontSize300 ||
    RefTypographyFontSizeTokens.mobile.fontSize300,
  xs:
    RefTypographyFontSizeTokens.desktop.fontSize200 ||
    RefTypographyFontSizeTokens.mobile.fontSize200,
  xxs:
    RefTypographyFontSizeTokens.desktop.fontSize100 ||
    RefTypographyFontSizeTokens.mobile.fontSize100,
} as const;
