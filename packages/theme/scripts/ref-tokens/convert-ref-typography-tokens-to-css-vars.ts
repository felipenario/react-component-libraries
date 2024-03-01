import lodash from "lodash";
import { RefTypographyTokens } from "../../src/ref-tokens/typography";
import picocolors from "picocolors";

export const converRefTypographyTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  // font-size variables.
  for (const [fontSizeTokenScale, fontSizeTokens] of Object.entries(
    RefTypographyTokens.fontSize
  )) {
    for (const [fontSizeToken, hexCode] of Object.entries(fontSizeTokens)) {
      cssVariables.push(
        `--ref-typography-font-size-${fontSizeTokenScale}-${lodash.kebabCase(
          fontSizeToken
        )}: ${hexCode};`
      );
    }
  }

  // font-style variables.
  for (const [fontStyleToken, fontStyleValue] of Object.entries(
    RefTypographyTokens.fontStyle
  )) {
    cssVariables.push(
      `--ref-typography-font-style-${fontStyleToken}: ${fontStyleValue};`
    );
  }

  // font-weight variables.
  for (const [fontWeightToken, fontWeightValue] of Object.entries(
    RefTypographyTokens.fontWeight
  )) {
    cssVariables.push(
      `--ref-typography-font-weight-${fontWeightToken}: ${fontWeightValue};`
    );
  }

  // line-height variables.
  for (const [lineHeightToken, lineHeightValue] of Object.entries(
    RefTypographyTokens.lineHeight
  )) {
    cssVariables.push(
      `--ref-typography-font-weight-${lineHeightToken}: ${lineHeightValue};`
    );
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[ref-tokens: typography] CSS vars generated in ${end - start}ms.`
    )
  );

  return cssVariables;
};
