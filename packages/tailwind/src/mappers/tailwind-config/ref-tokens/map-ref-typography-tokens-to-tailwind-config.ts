import {
  RefTypographyFontStyleTokens,
  RefTypographyFontWeightTokens,
  RefTypographyLineHeightTokens,
} from "@components/theme";
import { kebabCase } from "lodash";

export const mapRefTypographyTokensToTailwindConfig = () => {
  const refFontSizeTokens: Record<string, any> = {};

  const refFontWeightTokens: Record<string, any> = {};

  const refLineHeightTokens: Record<string, any> = {};

  for (const [_, sizes] of Object.entries(RefTypographyFontStyleTokens)) {
    for (const [size, _] of Object.entries(sizes)) {
      refFontSizeTokens[`ref-typography-${kebabCase(size)}`] =
        `var(--ref-typography-${kebabCase(size)})`;
    }
  }

  for (const [fontWeightToken, _] of Object.entries(RefTypographyFontWeightTokens)) {
    refFontWeightTokens[`ref-typography-font-weight-${kebabCase(fontWeightToken)}`] =
      `var(--ref-typography-font-weight-${kebabCase(fontWeightToken)})`;
  }

  for (const [lineHeightToken, _] of Object.entries(RefTypographyLineHeightTokens)) {
    refLineHeightTokens[`ref-typography-line-height-${lineHeightToken}`] =
      `var(--ref-typography-line-height-${lineHeightToken})`;
  }

  return {
    refFontSizeTokens,
    refFontWeightTokens,
    refLineHeightTokens,
  };
};
