import { format } from "prettier";
import { writeFileSync } from "fs";
import {
  mapRefPaletteTokensToCssVars,
  mapRefTypographyTokensToCssVars,
  mapSysBreakpointTokensToCssVars,
  mapSysColorTokensToCssVars,
  mapSysElevationTokensToCssVars,
  mapSysOpacityTokensToCssVars,
  mapSysShapeTokensToCssVars,
  mapSysSpacingTokensToCssVars,
  mapSysStateLayerOpacityTokensToCssVars,
  mapSysTypographyTokensToCssVars,
} from "../src/utils/mappers";

export const genTokensCssFile = async () => {
  const start = performance.now();

  const refTokensCssVars = [
    ...mapRefPaletteTokensToCssVars(),
    ...mapRefTypographyTokensToCssVars(),
  ];

  const { lightThemeCssVariables, darkThemeCssVariables } =
    mapSysColorTokensToCssVars();

  const sysCommonTokens = [
    ...mapSysBreakpointTokensToCssVars(),
    ...mapSysElevationTokensToCssVars(),
    ...mapSysOpacityTokensToCssVars(),
    ...mapSysSpacingTokensToCssVars(),
    ...mapSysTypographyTokensToCssVars(),
    ...mapSysStateLayerOpacityTokensToCssVars(),
    ...mapSysShapeTokensToCssVars(),
  ];

  const formattedContent = await format(
    `:root {
      ${refTokensCssVars.join("\n")}
      ${sysCommonTokens.join("\n")}
      }
      
      [data-theme='light'] {
        ${lightThemeCssVariables.join("\n")}
      }
  
      [data-theme='dark'] {
        ${darkThemeCssVariables.join("\n")}
      }
      `,
    {
      parser: "css",
    }
  );

  writeFileSync(`./public/tokens.css`, formattedContent);

  const end = performance.now();

  console.log(
    `[tokens] Tokens CSS vars generated in ${(end - start).toFixed(2)}ms.`
  );
};

genTokensCssFile();
