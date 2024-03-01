import { RefPaletteTokens } from "../../../ref-tokens/palette";
import { SysBaseColorTokensType } from "../sys-color-tokens.types";

export const SysDarkColorTokens = {
  primary: RefPaletteTokens.sky[950],
  secondary: RefPaletteTokens.teal[950],
  background: RefPaletteTokens.sky[950],
  surface: RefPaletteTokens.teal[700],
  error: RefPaletteTokens.red[600],
  onPrimary: RefPaletteTokens.sky[700],
  onSecondary: RefPaletteTokens.teal[700],
  onBackground: RefPaletteTokens.neutral[50],
  onSurface: RefPaletteTokens.teal[950],
  onError: RefPaletteTokens.neutral[50],
} as const satisfies SysBaseColorTokensType;
