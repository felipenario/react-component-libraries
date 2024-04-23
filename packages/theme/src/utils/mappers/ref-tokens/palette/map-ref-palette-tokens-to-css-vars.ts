import picocolors from "picocolors";
import { RefPaletteTokens } from "../../../../ref-tokens";

export const mapRefPaletteTokensToCssVars = () => {
  const start = performance.now();

  const cssVariables: string[] = [];

  for (const [colorName, shades] of Object.entries(RefPaletteTokens)) {
    for (const [shade, hexCode] of Object.entries(shades)) {
      cssVariables.push(`--ref-palette-${colorName}-${shade}: ${hexCode};`);
    }
  }

  const end = performance.now();

  console.log(
    picocolors.green(
      `[ref-tokens: palette] CSS vars generated in ${(end - start).toFixed(2)}ms.`
    )
  );

  return cssVariables;
};
