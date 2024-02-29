import { RefPaletteTokens } from "../../../ref-tokens/palette";
import { SysBaseThemeTokensType } from "../sys-theme-tokens.types";

export const SysLightThemeTokens = {
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
} as const satisfies SysBaseThemeTokensType;
