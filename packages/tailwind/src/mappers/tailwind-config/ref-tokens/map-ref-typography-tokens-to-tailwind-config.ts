import {
  RefTypographyFontSizeTokens,
  RefTypographyFontWeightTokens,
  RefTypographyLineHeightTokens,
} from "@components/theme";
import { kebabCase } from "lodash";

export const mapRefTypographyTokensToTailwindConfig = () => {
  const refFontSizeTokens: Record<string, any> = {};

  const refFontWeightTokens: Record<string, any> = {};

  const refLineHeightTokens: Record<string, any> = {};

  for (const [scale, tokenSizes] of Object.entries(
    RefTypographyFontSizeTokens
  )) {
    for (const [tokenSize, _] of Object.entries(tokenSizes)) {
      refFontSizeTokens[
        `ref-typography-font-size-${scale}-${kebabCase(tokenSize)}`
      ] = `var(--ref-typography-font-size-${scale}-${kebabCase(tokenSize)}`;
    }
  }

  for (const [fontWeightToken, _] of Object.entries(
    RefTypographyFontWeightTokens
  )) {
    refFontWeightTokens[
      `ref-typography-font-weight-${kebabCase(fontWeightToken)}`
    ] = `var(--ref-typography-font-weight-${kebabCase(fontWeightToken)})`;
  }

  for (const [lineHeightToken, _] of Object.entries(
    RefTypographyLineHeightTokens
  )) {
    refLineHeightTokens[`ref-typography-line-height-${lineHeightToken}`] =
      `var(--ref-typography-line-height-${lineHeightToken})`;
  }

  return {
    refFontSizeTokens,
    refFontWeightTokens,
    refLineHeightTokens,
  };
};
