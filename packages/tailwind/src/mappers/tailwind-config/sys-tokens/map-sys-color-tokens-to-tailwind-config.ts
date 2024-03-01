import { SysLightColorTokens } from "@components/theme";

export const mapSysColorTokensToTailwindConfig = () => {
  const sysThemeTokens: Record<string, any> = {};

  for (const [themeToken, _] of Object.entries(SysLightColorTokens)) {
    sysThemeTokens[`sys-color-${themeToken}`] =
      `var(--sys-color-${themeToken})`;
  }

  return sysThemeTokens;
};
