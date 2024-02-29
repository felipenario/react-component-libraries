import { RefTypographyLineHeightTokens } from "../../../ref-tokens";
import { ValueOf } from "../../../utils/valueOf";
import { SysTypographyDetailFontWeightTokensType } from "./font-weight";
import { SysTypographyDetailTokensSizeType } from "./size";

export type SysTypographyDetailTokensType = {
  size: SysTypographyDetailTokensSizeType;
  fontWeight: SysTypographyDetailFontWeightTokensType;
  lineHeight: ValueOf<typeof RefTypographyLineHeightTokens>;
};
