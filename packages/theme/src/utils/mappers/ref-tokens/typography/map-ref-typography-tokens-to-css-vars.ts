import lodash from "lodash";
import picocolors from "picocolors";
import { RefTypographyTokens } from "../../../../ref-tokens";

export const mapRefTypographyTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  for (const [type, typeObject] of Object.entries(RefTypographyTokens)) {
    for (const [token, tokenValue] of Object.entries(typeObject)) {
      if (type === "fontSize") {
        cssVariables.push(
          `--ref-typography-${lodash.kebabCase(token)}: ${tokenValue};`
        );
      } else {
        cssVariables.push(
          `--ref-typography-${lodash.kebabCase(type)}-${lodash.kebabCase(token)}: ${tokenValue};`
        );
      }
    }
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[ref-tokens: typography] CSS vars generated in ${(end - start).toFixed(2)}ms.`
    )
  );

  return cssVariables;
};
