import picocolors from "picocolors";
import { SysBreakpointTokens } from "../../src/sys-tokens/breakpoints";

export const convertSysBreakpointTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  for (const [breakpointToken, breakpointTokenValue] of Object.entries(
    SysBreakpointTokens
  )) {
    cssVariables.push(
      `--sys-breakpoint-${breakpointToken}: ${breakpointTokenValue};`
    );
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[sys-tokens: breakpoint] CSS vars generated in ${end - start}ms.`
    )
  );

  return cssVariables;
};
