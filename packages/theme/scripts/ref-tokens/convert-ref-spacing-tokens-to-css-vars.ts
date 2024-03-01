import { RefSpacingTokens } from "../../src";

export const convertRefSpacingTokensToCssVars = () => {
  const cssVariables: string[] = [];

  for (const [spacingToken, spacingTokenValue] of Object.entries(
    RefSpacingTokens
  )) {
    cssVariables.push(
      `--ref-spacing-${spacingToken.replace(".", "")}: ${spacingTokenValue};`
    );
  }

  return cssVariables;
};
