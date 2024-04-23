import lodash from "lodash";
import { SysOpacityTokens } from "../../../../sys-tokens";
import picocolors from "picocolors";

export const mapSysOpacityTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  for (const [token, tokenValue] of Object.entries(SysOpacityTokens)) {
    cssVariables.push(`--sys-${lodash.kebabCase(token)}: ${tokenValue};`);
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[sys-tokens: opacity] CSS vars generated in ${(end - start).toFixed(2)}ms.`
    )
  );

  return cssVariables;
};
