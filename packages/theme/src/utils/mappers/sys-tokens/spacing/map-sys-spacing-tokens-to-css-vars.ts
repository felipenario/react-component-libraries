import picocolors from "picocolors";
import { SysSpacingTokens } from "../../../../sys-tokens/spacing";

export const mapSysSpacingTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  for (const [spacingToken, spacingTokenValue] of Object.entries(
    SysSpacingTokens
  )) {
    cssVariables.push(`--ref-spacing-${spacingToken}: ${spacingTokenValue};`);
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[ref-tokens: spacing] CSS vars generated in ${(end - start).toFixed(2)}ms.`
    )
  );

  return cssVariables;
};
