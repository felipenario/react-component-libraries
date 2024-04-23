import { SysBodyTypographyTokens } from "./body";
import { SysDisplayTypographyTokens } from "./display";
import { SysHeadlineTypographyTokens } from "./headline";
import { SysLabelTypographyTokens } from "./label";
import { SysTypographyTokensType } from "./sys-typography-tokens.types";
import { SysTitleTypographyTokens } from "./title";

export const SysTypographyTokens = {
  body: SysBodyTypographyTokens,
  display: SysDisplayTypographyTokens,
  headline: SysHeadlineTypographyTokens,
  label: SysLabelTypographyTokens,
  title: SysTitleTypographyTokens,
} as const satisfies SysTypographyTokensType;
