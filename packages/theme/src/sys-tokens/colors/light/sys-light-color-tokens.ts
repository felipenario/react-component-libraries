import { RefPaletteTokens } from "../../../ref-tokens/palette";
import { SysBaseColorTokensType } from "../sys-color-tokens.types";

export const SysLightColorTokens = {
  primary: RefPaletteTokens.emerald[500],
  secondary: RefPaletteTokens.cyan[500],
  background: RefPaletteTokens.neutral[100],
  surface: RefPaletteTokens.neutral[200],
  error: RefPaletteTokens.red[500],
  onPrimary: RefPaletteTokens.neutral[900],
  onSecondary: RefPaletteTokens.neutral[900],
  onBackground: RefPaletteTokens.neutral[900],
  onSurface: RefPaletteTokens.neutral[900],
  onError: RefPaletteTokens.neutral[900],
} as const satisfies SysBaseColorTokensType;
