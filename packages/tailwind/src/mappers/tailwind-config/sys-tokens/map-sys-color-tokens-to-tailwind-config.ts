import { SysLightColorTokens } from "@components/theme";
import { kebabCase } from "lodash";

export const mapSysColorTokensToTailwindConfig = () => {
  const sysThemeTokens: Record<string, any> = {};

  for (const [themeToken, _] of Object.entries(SysLightColorTokens)) {
    sysThemeTokens[`sys-color-${kebabCase(themeToken)}`] =
      `var(--sys-color-${kebabCase(themeToken)})`;
  }

  return sysThemeTokens;
};
