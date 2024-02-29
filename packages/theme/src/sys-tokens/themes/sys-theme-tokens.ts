import { SysDarkThemeTokens } from "./dark";
import { SysLightThemeTokens } from "./light";
import { SysThemeTokensType } from "./sys-theme-tokens.types";

export const SysThemeTokens = {
  dark: SysDarkThemeTokens,
  light: SysLightThemeTokens,
} as const satisfies SysThemeTokensType;
