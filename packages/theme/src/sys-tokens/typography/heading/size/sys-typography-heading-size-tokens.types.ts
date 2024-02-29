import { RefTypographyFontSizeTokens } from "../../../../ref-tokens";
import { ValueOf } from "../../../../utils/valueOf";

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

export type SysTypographyHeadingTokensSizeType = {
  desktop: SysTypographyHeadingSizeTokensType;
  mobile: SysTypographyHeadingSizeTokensType;
};
