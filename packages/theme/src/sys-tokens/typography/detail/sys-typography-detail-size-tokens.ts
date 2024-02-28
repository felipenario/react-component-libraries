import { RefTypographyFontSizeTokens } from "../../../ref-tokens/typography/font-size/ref-typography-font-size-tokens";
import { ValueOf } from "../../../utils/valueOf";

const SysTypographyDetailSizeTokensKeys = ["xl", "l", "m", "s"] as const;

export type SysTypographyDetailSizeTokensType = {
  [key in (typeof SysTypographyDetailSizeTokensKeys)[number]]:
    | ValueOf<(typeof RefTypographyFontSizeTokens)["desktop"]>
    | ValueOf<(typeof RefTypographyFontSizeTokens)["mobile"]>;
};

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
} as const;
