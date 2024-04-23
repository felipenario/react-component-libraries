import lodash from "lodash";
import { SysTypographyTokens } from "../../../../sys-tokens";

export const mapSysTypographyTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  for (const [typographyType, typographyToken] of Object.entries(
    SysTypographyTokens
  )) {
    for (const [typographySize, typographyTokenObject] of Object.entries(
      typographyToken
    )) {
      for (const [
        typographyProperty,
        typographyPropertyValue,
      ] of Object.entries(typographyTokenObject)) {
        if (typographyProperty === "fontWeight") {
          for (const [fontWeightToken, fontWeightTokenValue] of Object.entries(
            typographyPropertyValue as never
          )) {
            cssVariables.push(
              `--sys-typography-${lodash.kebabCase(typographyType)}-${lodash.kebabCase(typographySize)}-${lodash.kebabCase(typographyProperty)}-${lodash.kebabCase(fontWeightToken)}: ${fontWeightTokenValue};`
            );
          }
        } else {
          cssVariables.push(
            `--sys-typography-${lodash.kebabCase(typographyType)}-${lodash.kebabCase(typographySize)}-${lodash.kebabCase(typographyProperty)}: ${typographyPropertyValue};`
          );
        }
      }
    }
  }

  const end = performance.now();

  console.log(
    `[sys-tokens: typography] CSS vars generated in ${(end - start).toFixed(2)}ms.`
  );

  return cssVariables;
};
