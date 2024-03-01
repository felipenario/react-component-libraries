import { RefPaletteTokens } from "@components/theme";

export const mapRefPaletteTokensToTailwindConfig = () => {
  const refPaletteTokens: Record<string, any> = {};

  for (const [colorToken, shadeTokens] of Object.entries(RefPaletteTokens)) {
    const allShades: Record<string, any> = {};

    for (const [shadeToken, _] of Object.entries(shadeTokens)) {
      allShades[shadeToken] = `var(--ref-palette-${colorToken}-${shadeToken})`;
    }

    refPaletteTokens[colorToken] = allShades;
  }

  return refPaletteTokens;
};
