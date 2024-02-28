import { RefTypographyFontSizeTokens } from "../../../ref-tokens/typography/font-size/ref-typography-font-size-tokens";
import { ValueOf } from "../../../utils/valueOf";

const SysTypographyBodySizeTokensKeys = [
  "xxxl",
  "xxl",
  "xl",
  "l",
  "m",
  "s",
  "xs",
] as const;

export type SysTypographyBodySizeTokensType = {
  [key in (typeof SysTypographyBodySizeTokensKeys)[number]]:
    | ValueOf<(typeof RefTypographyFontSizeTokens)["desktop"]>
    | ValueOf<(typeof RefTypographyFontSizeTokens)["mobile"]>;
};

export const SysTypographyBodySizeDesktopTokens = {
  xxxl: RefTypographyFontSizeTokens.desktop.fontSize600,
  xxl: RefTypographyFontSizeTokens.desktop.fontSize500,
  xs: RefTypographyFontSizeTokens.desktop.fontSize75,
  xl: RefTypographyFontSizeTokens.desktop.fontSize400,
  s: RefTypographyFontSizeTokens.desktop.fontSize100,
  m: RefTypographyFontSizeTokens.desktop.fontSize200,
  l: RefTypographyFontSizeTokens.desktop.fontSize300,
} as const satisfies SysTypographyBodySizeTokensType;

export const SysTypographyBodySizeMobileTokens = {
  xxxl: RefTypographyFontSizeTokens.mobile.fontSize600,
  xxl: RefTypographyFontSizeTokens.mobile.fontSize500,
  xl: RefTypographyFontSizeTokens.mobile.fontSize400,
  l: RefTypographyFontSizeTokens.mobile.fontSize300,
  m: RefTypographyFontSizeTokens.mobile.fontSize200,
  s: RefTypographyFontSizeTokens.mobile.fontSize100,
  xs: RefTypographyFontSizeTokens.mobile.fontSize75,
} as const satisfies SysTypographyBodySizeTokensType;

export const SysTypographyBodySizeTokens = {
  desktop: SysTypographyBodySizeDesktopTokens,
  mobile: SysTypographyBodySizeMobileTokens,
} as const;
