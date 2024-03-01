import { convertSysBreakpointTokensToCssVars } from "./convert-sys-breakpoint-tokens-to-css-vars";
import { convertSysElevationTokensToCssVars } from "./convert-sys-elevation-tokens-to-css-vars";
import { convertSysShapeTokensToCssVars } from "./convert-sys-shape-tokens-to-css-vars";
import { convertSysThemeTokensToCssVars } from "./convert-sys-theme-tokens-to-css-vars";
import { convertSysTypographyTokensToCssVariables } from "./convert-sys-typography-tokens-to-css-vars";
import { format } from "prettier";
import { writeFileSync } from "fs";

export const convertSysTokensToCssVars = async () => {
  const generalCssVariables = [
    ...convertSysBreakpointTokensToCssVars(),
    ...convertSysElevationTokensToCssVars(),
    ...convertSysShapeTokensToCssVars(),
  ];

  const { lightThemeCssVariables, darkThemeCssVariables } =
    convertSysThemeTokensToCssVars();

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
    
      @media (prefers-color-scheme: light) {
        :root {
          ${lightThemeCssVariables.join("\n")}
        }
      }

      @media (prefers-color-scheme: dark) {
        :root {
          ${darkThemeCssVariables.join("\n")}
        }
      }
      
      @media screen and (min-width: 1024px) {
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
};

convertSysTokensToCssVars();
