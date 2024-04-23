import lodash from "lodash";
import { SysStateLayerOpacityTokens } from "../../../../sys-tokens";
import picocolors from "picocolors";

export const mapSysStateLayerOpacityTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  for (const [state, value] of Object.entries(SysStateLayerOpacityTokens)) {
    cssVariables.push(
      `--sys-state-${lodash.kebabCase(state)}-layer-opacity: ${value};`
    );
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[sys-tokens: state-layer-opacity] CSS vars generated in ${(end - start).toFixed(2)}ms.`
    )
  );

  return cssVariables;
};
