import { RefTypographyFontSizeTokens } from "../../../../ref-tokens";
import { ValueOf } from "../../../../utils/valueOf";

const SysTypographyDetailSizeTokensKeys = ["xl", "l", "m", "s"] as const;

export type SysTypographyDetailSizeTokensType = {
  [key in (typeof SysTypographyDetailSizeTokensKeys)[number]]:
    | ValueOf<(typeof RefTypographyFontSizeTokens)["desktop"]>
    | ValueOf<(typeof RefTypographyFontSizeTokens)["mobile"]>;
};

export type SysTypographyDetailTokensSizeType = {
  desktop: SysTypographyDetailSizeTokensType;
  mobile: SysTypographyDetailSizeTokensType;
};
