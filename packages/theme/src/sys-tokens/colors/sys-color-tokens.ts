import { SysDarkColorTokens } from "./dark";
import { SysLightColorTokens } from "./light";
import { SysColorTokensType } from "./sys-color-tokens.types";

export const SysColorTokens = {
  dark: SysDarkColorTokens,
  light: SysLightColorTokens,
} as const satisfies SysColorTokensType;
