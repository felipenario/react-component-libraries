import { SysTypographyBodyTokensType } from "./body";
import { SysTypographyDetailTokensType } from "./detail";
import { SysTypographyHeadingTokensType } from "./heading";

export type SysTypographyTokensType = {
  body: SysTypographyBodyTokensType;
  detail: SysTypographyDetailTokensType;
  heading: SysTypographyHeadingTokensType;
};
