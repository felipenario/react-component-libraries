import { RefPaletteTokens } from "../../src/ref-tokens/palette";
import picocolors from "picocolors";

export const convertRefPaletteTokensToCssVars = () => {
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
      `[ref-tokens: palette] CSS vars generated in ${end - start}ms.`
    )
  );

  return cssVariables;
};
