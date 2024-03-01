import type { Config } from "tailwindcss";
import {
  mapRefPaletteTokensToTailwindConfig,
  mapRefSpacingTokensToTailwindConfig,
  mapRefTypographyTokensToTailwindConfig,
} from "../mappers/tailwind-config/ref-tokens";
import {
  mapSysBreakpointTokensToTailwindConfig,
  mapSysElevationTokensToTailwindConfig,
  mapSysColorTokensToTailwindConfig,
  mapSysShapeTokensToTailwindConfig,
} from "../mappers/tailwind-config/sys-tokens";

// ref-tokens
const refPaletteTokens = mapRefPaletteTokensToTailwindConfig();

const refSpacingTokens = mapRefSpacingTokensToTailwindConfig();

const { refFontSizeTokens, refFontWeightTokens, refLineHeightTokens } =
  mapRefTypographyTokensToTailwindConfig();

// sys-tokens

const sysBreakpointTokens = mapSysBreakpointTokensToTailwindConfig();

const sysColorTokens = mapSysColorTokensToTailwindConfig();

const sysElevationTokens = mapSysElevationTokensToTailwindConfig();

const { sysBorderWidthTokens, sysShapeCornerTokens } =
  mapSysShapeTokensToTailwindConfig();

export const TailwindConfig: Config = {
  content: [],
  darkMode: "class",
  theme: {
    borderWidth: sysBorderWidthTokens,
    borderRadius: sysShapeCornerTokens,
    boxShadow: sysElevationTokens,
    colors: {
      "ref-palette": refPaletteTokens,
      ...sysColorTokens,
    },
    fontFamily: {},
    fontSize: refFontSizeTokens,
    fontWeight: refFontWeightTokens,
    lineHeight: refLineHeightTokens,
    screens: sysBreakpointTokens,
    spacing: refSpacingTokens,
    size: {},
    zIndex: {},
  },
};
