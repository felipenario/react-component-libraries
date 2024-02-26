import { SysTypographyTokens } from "../../src/sys-tokens/typography";
import lodash from "lodash";

export const convertSysTypographyTokensToCssVariables = () => {
  const cssVariables: string[] = [];

  for (const [typographyType, typographyTypePropertyObject] of Object.entries(
    SysTypographyTokens
  )) {
    for (const [
      typographyTypeProperty,
      typographyTypePropertyValue,
    ] of Object.entries(typographyTypePropertyObject)) {
      if (typeof typographyTypePropertyValue === "object") {
        for (const [
          typographyTypePropertyToken,
          typographyTypePropertyTokenValue,
        ] of Object.entries(typographyTypePropertyValue)) {
          cssVariables.push(
            `--sys-typography-${typographyType}-${lodash.kebabCase(
              typographyTypeProperty
            )}-${typographyTypePropertyToken}: ${typographyTypePropertyTokenValue}`
          );
        }
      } else {
        cssVariables.push(
          `--sys-typography-${typographyType}-${lodash.kebabCase(
            typographyTypeProperty
          )}: ${typographyTypePropertyValue}`
        );
      }
    }
  }

  console.log(cssVariables);

  return cssVariables;
};
