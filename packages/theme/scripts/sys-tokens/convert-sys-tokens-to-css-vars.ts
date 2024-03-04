import { convertSysBreakpointTokensToCssVars } from "./convert-sys-breakpoint-tokens-to-css-vars";
import { convertSysElevationTokensToCssVars } from "./convert-sys-elevation-tokens-to-css-vars";
import { convertSysShapeTokensToCssVars } from "./convert-sys-shape-tokens-to-css-vars";
import { convertSysColorTokensToCssVars } from "./convert-sys-color-tokens-to-css-vars";
import { convertSysTypographyTokensToCssVariables } from "./convert-sys-typography-tokens-to-css-vars";
import { format } from "prettier";
import { writeFileSync } from "fs";
import { SysBreakpointTokens } from "../../src/sys-tokens/breakpoints";
import picocolors from "picocolors";

export const convertSysTokensToCssVars = async () => {
  const start = performance.now();

  const generalCssVariables = [
    ...convertSysBreakpointTokensToCssVars(),
    ...convertSysElevationTokensToCssVars(),
    ...convertSysShapeTokensToCssVars(),
  ];

  const { lightThemeCssVariables, darkThemeCssVariables } =
    convertSysColorTokensToCssVars();

  const {
    commonTypographyCssVariables,
    desktopFontSizeCssVariables,
    mobileFontSizeCssVariables,
  } = convertSysTypographyTokensToCssVariables();

  const formattedContent = await format(
    `:root {
        ${generalCssVariables.join("\n")}
        ${commonTypographyCssVariables.join("\n")}
        ${mobileFontSizeCssVariables.join("\n")}
      }
    
      html[data-theme="light"] {
        ${lightThemeCssVariables.join("\n")}
      }

      html[data-theme="dark"] {
        ${darkThemeCssVariables.join("\n")}
      }
      
      @media screen and (min-width: ${SysBreakpointTokens.xl}) {
        :root {
          ${desktopFontSizeCssVariables.join("\n")}
        }
      }
    `,
    {
      parser: "css",
    }
  );

  writeFileSync(`./public/sys-tokens-vars.css`, formattedContent);

  const end = performance.now();

  console.log(
    picocolors.green(
      `[sys-tokens] Sys tokens CSS vars generated in ${end - start}ms.`
    )
  );
};

convertSysTokensToCssVars();
