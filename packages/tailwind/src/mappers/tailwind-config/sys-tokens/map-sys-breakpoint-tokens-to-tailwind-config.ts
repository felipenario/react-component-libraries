import { SysBreakpointTokens } from "@components/theme";

export const mapSysBreakpointTokensToTailwindConfig = () => {
  const sysBreakpointTokens: Record<string, any> = {};

  for (const [breakpointToken, _] of Object.entries(SysBreakpointTokens)) {
    sysBreakpointTokens[breakpointToken] = `var(--sys-breakpoint-${breakpointToken})`;
  }

  return sysBreakpointTokens;
};
