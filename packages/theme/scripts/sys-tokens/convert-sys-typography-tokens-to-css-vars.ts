import { SysTypographyTokens } from "../../src/sys-tokens/typography";
import lodash from "lodash";

export const convertSysTypographyTokensToCssVariables = () => {
  const commonTypographyCssVariables: string[] = [];

  const desktopFontSizeCssVariables: string[] = [];

  const mobileFontSizeCssVariables: string[] = [];

  for (const [typographyType, typographyTypePropertyObject] of Object.entries(
    SysTypographyTokens
  )) {
    for (const [
      typographyTypeProperty,
      typographyTypePropertyValue,
    ] of Object.entries(typographyTypePropertyObject)) {
      if (typographyTypeProperty === "size") {
        for (const [
          typographyTypeFontSizeScaleToken,
          typographyTypeFontSizeScaleTokenValue,
        ] of Object.entries(typographyTypePropertyValue)) {
          for (const [
            typographyTypeFontSizeToken,
            typographyTypeFontSizeTokenValue,
          ] of Object.entries(typographyTypeFontSizeScaleTokenValue as any)) {
            if (typographyTypeFontSizeScaleToken === "desktop") {
              desktopFontSizeCssVariables.push(
                `--sys-typography-${typographyType}-${lodash.kebabCase(
                  typographyTypeProperty
                )}-${typographyTypeFontSizeToken}: ${typographyTypeFontSizeTokenValue};`
              );
            } else {
              mobileFontSizeCssVariables.push(
                `--sys-typography-${typographyType}-${lodash.kebabCase(
                  typographyTypeProperty
                )}-${typographyTypeFontSizeToken}: ${typographyTypeFontSizeTokenValue};`
              );
            }
          }
        }
      }

      if (typographyTypeProperty === "fontWeight") {
        for (const [
          typographyTypeFontWeightToken,
          typographyTypePropertyFontWeightTokenValue,
        ] of Object.entries(typographyTypePropertyValue)) {
          commonTypographyCssVariables.push(
            `--sys-typography-${typographyType}-${lodash.kebabCase(
              typographyTypeProperty
            )}-${typographyTypeFontWeightToken}: ${typographyTypePropertyFontWeightTokenValue};`
          );
        }
      }

      if (typographyTypeProperty === "lineHeight") {
        commonTypographyCssVariables.push(
          `--sys-typography-${typographyType}-${lodash.kebabCase(
            typographyTypeProperty
          )}: ${typographyTypePropertyValue};`
        );
      }
    }
  }

  return {
    commonTypographyCssVariables,
    desktopFontSizeCssVariables,
    mobileFontSizeCssVariables,
  };
};
