import lodash from "lodash";
import { SysElevationTokens } from "../../src/sys-tokens/elevation";
import picocolors from "picocolors";

export const convertSysElevationTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  for (const [elevationToken, elevationTokenValue] of Object.entries(
    SysElevationTokens
  )) {
    cssVariables.push(
      `--sys-elevation-${lodash.kebabCase(
        elevationToken
      )}: ${elevationTokenValue};`
    );
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[sys-tokens: elevation] CSS vars generated in ${end - start}ms.`
    )
  );

  return cssVariables;
};
