import { RefTypographyFontSizeTokens } from "../../../../ref-tokens";
import { ValueOf } from "../../../../utils/valueOf";

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

export type SysTypographyBodyTokensSizeType = {
  desktop: SysTypographyBodySizeTokensType;
  mobile: SysTypographyBodySizeTokensType;
};
