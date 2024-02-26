import lodash from "lodash";
import {
  SysDarkThemeTokens,
  SysLightThemeTokens,
} from "../../src/sys-tokens/themes";

export const convertSysThemeTokensToCssVars = () => {
  const lightThemeCssVariables: string[] = [];
  const darkThemeCssVariables: string[] = [];

  // Light Theme tokens.
  for (const [tokenType, hexCode] of Object.entries(SysLightThemeTokens)) {
    lightThemeCssVariables.push(
      `--sys-color-${lodash.kebabCase(tokenType)}: ${hexCode};`
    );
  }

  // Dark Theme tokens.
  for (const [tokenType, hexCode] of Object.entries(SysDarkThemeTokens)) {
    darkThemeCssVariables.push(
      `--sys-dark-${lodash.kebabCase(tokenType)}: ${hexCode};`
    );
  }

  return {
    lightThemeCssVariables,
    darkThemeCssVariables,
  };
};
