import lodash from "lodash";
import {
  SysDarkColorTokens,
  SysLightColorTokens,
} from "../../../../sys-tokens";
import picocolors from "picocolors";

export const mapSysColorTokensToCssVars = () => {
  const start = performance.now();

  const lightThemeCssVariables: string[] = [];
  const darkThemeCssVariables: string[] = [];

  for (const [tokenType, hexCode] of Object.entries(SysLightColorTokens)) {
    lightThemeCssVariables.push(
      `--sys-color-${lodash.kebabCase(tokenType)}: ${hexCode};`
    );
  }

  for (const [tokenType, hexCode] of Object.entries(SysDarkColorTokens)) {
    darkThemeCssVariables.push(
      `--sys-color-${lodash.kebabCase(tokenType)}: ${hexCode};`
    );
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[sys-tokens: color] CSS vars generated in ${(end - start).toFixed(2)}ms.`
    )
  );

  return {
    lightThemeCssVariables,
    darkThemeCssVariables,
  };
};
