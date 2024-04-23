import picocolors from "picocolors";
import { SysBreakpointTokens } from "../../../../sys-tokens";

export const mapSysBreakpointTokensToCssVars = () => {
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
      `[sys-tokens: breakpoint] CSS vars generated in ${(end - start).toFixed(2)}ms.`
    )
  );

  return cssVariables;
};
