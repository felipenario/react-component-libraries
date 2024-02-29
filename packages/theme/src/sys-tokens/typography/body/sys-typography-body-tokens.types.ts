import { RefTypographyLineHeightTokens } from "../../../ref-tokens";
import { ValueOf } from "../../../utils/valueOf";
import { SysTypographyBodyFontWeightTokensType } from "./font-weight";
import { SysTypographyBodyTokensSizeType } from "./size";

export type SysTypographyBodyTokensType = {
  size: SysTypographyBodyTokensSizeType;
  fontWeight: SysTypographyBodyFontWeightTokensType;
  lineHeight: ValueOf<typeof RefTypographyLineHeightTokens>;
};
