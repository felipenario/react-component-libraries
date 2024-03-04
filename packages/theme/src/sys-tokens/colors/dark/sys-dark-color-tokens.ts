import { RefPaletteTokens } from "../../../ref-tokens/palette";
import { SysBaseColorTokensType } from "../sys-color-tokens.types";

export const SysDarkColorTokens = {
  primary: RefPaletteTokens.emerald[500],
  secondary: RefPaletteTokens.cyan[500],
  background: RefPaletteTokens.neutral[900],
  surface: RefPaletteTokens.neutral[800],
  error: RefPaletteTokens.red[500],
  onPrimary: RefPaletteTokens.neutral[50],
  onSecondary: RefPaletteTokens.neutral[50],
  onBackground: RefPaletteTokens.neutral[50],
  onSurface: RefPaletteTokens.neutral[50],
  onError: RefPaletteTokens.neutral[50],
} as const satisfies SysBaseColorTokensType;
