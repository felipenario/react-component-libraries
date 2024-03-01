import { SysElevationTokens } from "@components/theme";

export const mapSysElevationTokensToTailwindConfig = () => {
  const sysElevationTokens: Record<string, any> = {};

  for (const [elevationToken, _] of Object.entries(SysElevationTokens)) {
    sysElevationTokens[`sys-elevation-${elevationToken}`] =
      `var(--sys-elevation-${elevationToken})`;
  }

  return sysElevationTokens;
};
