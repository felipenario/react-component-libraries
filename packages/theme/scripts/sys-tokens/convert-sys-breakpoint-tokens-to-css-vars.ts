import { SysBreakpointTokens } from "../../src/sys-tokens/breakpoints";

export const convertSysBreakpointTokensToCssVars = () => {
  const cssVariables: string[] = [];

  for (const [breakpointToken, breakpointTokenValue] of Object.entries(
    SysBreakpointTokens
  )) {
    cssVariables.push(
      `--sys-breakpoint-${breakpointToken}: ${breakpointTokenValue};`
    );
  }

  return cssVariables;
};
