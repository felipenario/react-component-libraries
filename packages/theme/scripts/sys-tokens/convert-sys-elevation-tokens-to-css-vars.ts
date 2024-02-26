import lodash from "lodash";
import { SysElevationTokens } from "../../src/sys-tokens/elevation";

export const convertSysElevationTokensToCssVars = () => {
  const cssVariables: string[] = [];

  for (const [elevationToken, elevationTokenValue] of Object.entries(
    SysElevationTokens
  )) {
    cssVariables.push(
      `--sys-elevation-${lodash.kebabCase(
        elevationToken
      )}: ${elevationTokenValue}`
    );
  }

  return cssVariables;
};
