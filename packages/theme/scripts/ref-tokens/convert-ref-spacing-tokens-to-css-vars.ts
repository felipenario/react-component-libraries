import { RefSpacingTokens } from "../../src";
import picocolors from "picocolors";

export const convertRefSpacingTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  for (const [spacingToken, spacingTokenValue] of Object.entries(
    RefSpacingTokens
  )) {
    cssVariables.push(
      `--ref-spacing-${spacingToken.replace(".", "")}: ${spacingTokenValue};`
    );
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[ref-tokens: spacing] CSS vars generated in ${end - start}ms.`
    )
  );

  return cssVariables;
};
