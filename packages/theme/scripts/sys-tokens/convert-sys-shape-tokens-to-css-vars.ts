import picocolors from "picocolors";
import {
  SysShapeBorderWidthTokens,
  SysShapeCornerTokens,
} from "../../src/sys-tokens/shape";

export const convertSysShapeTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  // border-width variables.
  for (const [borderWidthToken, borderWidthTokenValue] of Object.entries(
    SysShapeBorderWidthTokens
  )) {
    cssVariables.push(
      `--sys-shape-border-width-${borderWidthToken}: ${borderWidthTokenValue};`
    );
  }

  // border-radius variables.
  for (const [borderRadiusToken, borderRadiusTokenValue] of Object.entries(
    SysShapeCornerTokens
  )) {
    cssVariables.push(
      `--sys-shape-corner-${borderRadiusToken}: ${borderRadiusTokenValue};`
    );
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[sys-tokens: shape] CSS vars generated in ${end - start}ms.`
    )
  );

  return cssVariables;
};
