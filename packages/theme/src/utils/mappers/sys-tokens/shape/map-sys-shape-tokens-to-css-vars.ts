import picocolors from "picocolors";
import {
  SysShapeBorderWidthTokens,
  SysShapeCornerTokens,
} from "../../../../sys-tokens";

export const mapSysShapeTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  for (const [borderWidthToken, borderWidthTokenValue] of Object.entries(
    SysShapeBorderWidthTokens
  )) {
    cssVariables.push(
      `--sys-shape-border-width-${borderWidthToken}: ${borderWidthTokenValue};`
    );
  }

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
      `[sys-tokens: shape] CSS vars generated in ${(end - start).toFixed(2)}ms.`
    )
  );

  return cssVariables;
};
