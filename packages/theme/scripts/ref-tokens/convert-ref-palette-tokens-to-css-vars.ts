import { RefPaletteTokens } from "../../src/ref-tokens/palette";

export const convertRefPaletteTokensToCssVars = () => {
  const cssVariables: string[] = [];

  for (const [colorName, shades] of Object.entries(RefPaletteTokens)) {
    for (const [shade, hexCode] of Object.entries(shades)) {
      cssVariables.push(`--ref-palette-${colorName}-${shade}: ${hexCode};`);
    }
  }

  return cssVariables;
};
