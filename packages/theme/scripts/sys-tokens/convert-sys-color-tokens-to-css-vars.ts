import lodash from "lodash";
import {
  SysDarkColorTokens,
  SysLightColorTokens,
} from "../../src/sys-tokens/colors";
import picocolors from "picocolors";

export const convertSysColorTokensToCssVars = () => {
  const start = performance.now();

  const lightThemeCssVariables: string[] = [];
  const darkThemeCssVariables: string[] = [];

  // Light Theme tokens.
  for (const [tokenType, hexCode] of Object.entries(SysLightColorTokens)) {
    lightThemeCssVariables.push(
      `--sys-color-${lodash.kebabCase(tokenType)}: ${hexCode};`
    );
  }

  // Dark Theme tokens.
  for (const [tokenType, hexCode] of Object.entries(SysDarkColorTokens)) {
    darkThemeCssVariables.push(
      `--sys-color-${lodash.kebabCase(tokenType)}: ${hexCode};`
    );
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[sys-tokens: color] CSS vars generated in ${end - start}ms.`
    )
  );

  return {
    lightThemeCssVariables,
    darkThemeCssVariables,
  };
};
