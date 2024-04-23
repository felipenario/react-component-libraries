import {
  RefTypographyFontSizeTokens,
  RefTypographyFontStyleTokens,
  RefTypographyFontWeightTokens,
  RefTypographyFontWeightTokensType,
  RefTypographyLineHeightTokens,
} from "../../ref-tokens";
import { ValueOf } from "../../utils";
import { SysBodyTypographyTokensType } from "./body/sys-body-typography-tokens.types";
import { SysDisplayTypographyTokensType } from "./display/sys-display-typography-tokens.types";
import { SysHeadlineTypographyTokensType } from "./headline/sys-headline-typography-tokens.types";
import { SysLabelTypographyTokensType } from "./label/sys-label-typography-tokens.types";
import { SysTitleTypographyTokensType } from "./title/sys-title-typography-tokens.types";

export type SysTypographyTokensType = {
  body: SysBodyTypographyTokensType;
  display: SysDisplayTypographyTokensType;
  headline: SysHeadlineTypographyTokensType;
  label: SysLabelTypographyTokensType;
  title: SysTitleTypographyTokensType;
};

export type SysTypographyFontWeightTokenType = Partial<{
  [key in keyof RefTypographyFontWeightTokensType]: ValueOf<
    typeof RefTypographyFontWeightTokens
  >;
}>;

export type SysTypographyTokenType = {
  size: ValueOf<typeof RefTypographyFontSizeTokens>;
  lineHeight: ValueOf<typeof RefTypographyLineHeightTokens>;
  fontStyle: ValueOf<typeof RefTypographyFontStyleTokens>;
  fontWeight: SysTypographyFontWeightTokenType;
};
