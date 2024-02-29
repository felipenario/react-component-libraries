import { RefTypographyLineHeightTokens } from "../../../ref-tokens";
import { ValueOf } from "../../../utils/valueOf";
import { SysTypographyHeadingFontWeightTokensType } from "./font-weight";
import { SysTypographyHeadingTokensSizeType } from "./size";

export type SysTypographyHeadingTokensType = {
  size: SysTypographyHeadingTokensSizeType;
  fontWeight: SysTypographyHeadingFontWeightTokensType;
  lineHeight: ValueOf<typeof RefTypographyLineHeightTokens>;
};
