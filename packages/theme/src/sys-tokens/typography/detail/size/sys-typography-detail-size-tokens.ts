import { RefTypographyFontSizeTokens } from "../../../../ref-tokens/typography";
import { SysTypographyDetailSizeTokensType, SysTypographyDetailTokensSizeType } from "./sys-typography-detail-size-tokens.types";

export const SysTypographyDetailSizeDesktopTokens = {
  xl: RefTypographyFontSizeTokens.desktop.fontSize200,
  l: RefTypographyFontSizeTokens.desktop.fontSize100,
  m: RefTypographyFontSizeTokens.desktop.fontSize75,
  s: RefTypographyFontSizeTokens.desktop.fontSize50,
} as const satisfies SysTypographyDetailSizeTokensType;

export const SysTypographyDetailSizeMobileTokens = {
  xl: RefTypographyFontSizeTokens.mobile.fontSize200,
  l: RefTypographyFontSizeTokens.mobile.fontSize100,
  m: RefTypographyFontSizeTokens.mobile.fontSize75,
  s: RefTypographyFontSizeTokens.mobile.fontSize50,
} as const satisfies SysTypographyDetailSizeTokensType;

export const SysTypographyDetailSizeTokens = {
  desktop: SysTypographyDetailSizeDesktopTokens,
  mobile: SysTypographyDetailSizeMobileTokens,
} as const satisfies SysTypographyDetailTokensSizeType;
