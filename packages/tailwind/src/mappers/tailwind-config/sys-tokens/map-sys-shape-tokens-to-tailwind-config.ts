import {
  SysShapeBorderWidthTokens,
  SysShapeCornerTokens,
} from "@components/theme";

export const mapSysShapeTokensToTailwindConfig = () => {
  const sysBorderWidthTokens: Record<string, any> = {};

  const sysShapeCornerTokens: Record<string, any> = {};

  for (const [borderWidthToken, _] of Object.entries(
    SysShapeBorderWidthTokens
  )) {
    sysBorderWidthTokens[`sys-shape-border-width-${borderWidthToken}`] =
      `var(--sys-shape-border-width-${borderWidthToken})`;
  }

  for (const [shapeCornerToken, _] of Object.entries(SysShapeCornerTokens)) {
    sysShapeCornerTokens[`sys-shape-corner-${shapeCornerToken}`] =
      `var(--sys-shape-corner-${shapeCornerToken})`;
  }

  return {
    sysBorderWidthTokens,
    sysShapeCornerTokens,
  };
};
