import { SysShapeBorderWidthTokens } from "./border-width";
import { SysShapeCornerTokens } from "./corner";
import { SysShapeTokensType } from "./sys-shape-tokens.types";

export const SysShapeTokens = {
  borderWidth: SysShapeBorderWidthTokens,
  corner: SysShapeCornerTokens,
} as const satisfies SysShapeTokensType;
