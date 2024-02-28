import { RefTypographyFontSizeTokens } from "../../../ref-tokens/typography/font-size/ref-typography-font-size-tokens";
import { ValueOf } from "../../../utils/valueOf";

const SysTypographyHeadingSizeTokensKeys = [
  "xxxl",
  "xxl",
  "xl",
  "l",
  "m",
  "s",
  "xs",
  "xxs",
] as const;

export type SysTypographyHeadingSizeTokensType = {
  [key in (typeof SysTypographyHeadingSizeTokensKeys)[number]]:
    | ValueOf<(typeof RefTypographyFontSizeTokens)["desktop"]>
    | ValueOf<(typeof RefTypographyFontSizeTokens)["mobile"]>;
};

export const SysTypographyHeadingSizeDesktopTokens = {
  xxxl: RefTypographyFontSizeTokens.desktop.fontSize1300,
  xxl: RefTypographyFontSizeTokens.desktop.fontSize1100,
  xl: RefTypographyFontSizeTokens.desktop.fontSize900,
  l: RefTypographyFontSizeTokens.desktop.fontSize700,
  m: RefTypographyFontSizeTokens.desktop.fontSize500,
  s: RefTypographyFontSizeTokens.desktop.fontSize300,
  xs: RefTypographyFontSizeTokens.desktop.fontSize200,
  xxs: RefTypographyFontSizeTokens.desktop.fontSize100,
} as const satisfies SysTypographyHeadingSizeTokensType;

export const SysTypographyHeadingSizeMobileTokens = {
  xxxl: RefTypographyFontSizeTokens.mobile.fontSize1300,
  xxl: RefTypographyFontSizeTokens.mobile.fontSize1100,
  xl: RefTypographyFontSizeTokens.mobile.fontSize900,
  l: RefTypographyFontSizeTokens.mobile.fontSize700,
  m: RefTypographyFontSizeTokens.mobile.fontSize500,
  s: RefTypographyFontSizeTokens.mobile.fontSize300,
  xs: RefTypographyFontSizeTokens.mobile.fontSize200,
  xxs: RefTypographyFontSizeTokens.mobile.fontSize100,
} as const satisfies SysTypographyHeadingSizeTokensType;

export const SysTypographyHeadingSizeTokens = {
  desktop: SysTypographyHeadingSizeDesktopTokens,
  mobile: SysTypographyHeadingSizeMobileTokens,
} as const;
