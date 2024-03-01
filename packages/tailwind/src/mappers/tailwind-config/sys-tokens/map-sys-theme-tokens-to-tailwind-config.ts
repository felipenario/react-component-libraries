import { SysLightThemeTokens } from "@components/theme";

export const mapSysThemeTokensToTailwindConfig = () => {
  const sysThemeTokens: Record<string, any> = {};

  for (const [themeToken, _] of Object.entries(SysLightThemeTokens)) {
    sysThemeTokens[`sys-color-${themeToken}`] =
      `var(--sys-color-${themeToken})`;
  }

  return sysThemeTokens;
};
