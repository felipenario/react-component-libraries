import { RefTypographyFontSizeTokens } from "../../../ref-tokens/typography/font-size/ref-typography-font-size-tokens";

export const SysTypographyDetailSizeTokens = {
  xl:
    RefTypographyFontSizeTokens.desktop.fontSize200 ||
    RefTypographyFontSizeTokens.mobile.fontSize200,
  l:
    RefTypographyFontSizeTokens.desktop.fontSize100 ||
    RefTypographyFontSizeTokens.mobile.fontSize100,
  m:
    RefTypographyFontSizeTokens.desktop.fontSize75 ||
    RefTypographyFontSizeTokens.mobile.fontSize75,
  s:
    RefTypographyFontSizeTokens.desktop.fontSize50 ||
    RefTypographyFontSizeTokens.mobile.fontSize50,
} as const;
