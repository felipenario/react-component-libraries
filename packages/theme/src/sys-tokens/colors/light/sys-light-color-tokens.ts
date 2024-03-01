import { RefPaletteTokens } from "../../../ref-tokens/palette";
import { SysBaseColorTokensType } from "../sys-color-tokens.types";

export const SysLightColorTokens = {
  primary: RefPaletteTokens.sky[700],
  secondary: RefPaletteTokens.teal[700],
  background: RefPaletteTokens.neutral[50],
  surface: RefPaletteTokens.neutral[50],
  error: RefPaletteTokens.red[600],
  onPrimary: RefPaletteTokens.sky[900],
  onSecondary: RefPaletteTokens.teal[900],
  onBackground: RefPaletteTokens.neutral[950],
  onSurface: RefPaletteTokens.neutral[950],
  onError: RefPaletteTokens.neutral[50],
} as const satisfies SysBaseColorTokensType;
