import { SysStateLayerOpacityTokensType } from "./sys-state-layer-opacity-tokens.types";

export const SysStateLayerOpacityTokens = {
  disabled: 0.38,
  drag: 0.16,
  focus: 0.1,
  hover: 0.08,
  pressed: 0.1,
} as const satisfies SysStateLayerOpacityTokensType;
