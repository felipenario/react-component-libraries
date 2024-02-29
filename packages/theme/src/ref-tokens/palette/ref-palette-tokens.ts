import { RefPaletteAmberTokens } from "./amber/ref-palette-amber-tokens";
import { RefPaletteBlueTokens } from "./blue/ref-palette-blue-tokens";
import { RefPaletteCyanTokens } from "./cyan/ref-palette-cyan-tokens";
import { RefPaletteEmeraldTokens } from "./emerald/ref-palette-emerald-tokens";
import { RefPaletteFuchsiaTokens } from "./fuchsia/ref-palette-fuchsia-tokens";
import { RefPaletteGrayTokens } from "./gray/ref-palette-gray-tokens";
import { RefPaletteGreenTokens } from "./green/ref-palette-green-tokens";
import { RefPaletteIndigoTokens } from "./indigo/ref-palette-indigo-tokens";
import { RefPaletteLimeTokens } from "./lime/ref-palette-lime-tokens";
import { RefPaletteNeutralTokens } from "./neutral/ref-palette-neutral-tokens";
import { RefPaletteOrangeTokens } from "./orange/ref-palette-orange-tokens";
import { RefPalettePinkTokens } from "./pink/ref-palette-pink-tokens";
import { RefPalettePurpleTokens } from "./purple/ref-palette-purple-tokens";
import { RefPaletteRedTokens } from "./red/ref-palette-red-tokens";
import { RefPaletteTokensType } from "./ref-palette-tokens.types";
import { RefPaletteRoseTokens } from "./rose/ref-palette-rose-tokens";
import { RefPaletteSkyTokens } from "./sky/ref-palette-sky-tokens";
import { RefPaletteSlateTokens } from "./slate/ref-palette-slate-tokens";
import { RefPaletteStoneTokens } from "./stone/ref-palette-stone-tokens";
import { RefPaletteTealTokens } from "./teal/ref-palette-teal-tokens";
import { RefPaletteVioletTokens } from "./violet/ref-palette-violet-tokens";
import { RefPaletteYellowTokens } from "./yellow/ref-palette-yellow-tokens";
import { RefPaletteZincTokens } from "./zinc/ref-palette-zinc-tokens";

export const RefPaletteTokens = {
  amber: RefPaletteAmberTokens,
  blue: RefPaletteBlueTokens,
  cyan: RefPaletteCyanTokens,
  emerald: RefPaletteEmeraldTokens,
  fuchsia: RefPaletteFuchsiaTokens,
  gray: RefPaletteGrayTokens,
  green: RefPaletteGreenTokens,
  indigo: RefPaletteIndigoTokens,
  lime: RefPaletteLimeTokens,
  neutral: RefPaletteNeutralTokens,
  orange: RefPaletteOrangeTokens,
  pink: RefPalettePinkTokens,
  purple: RefPalettePurpleTokens,
  red: RefPaletteRedTokens,
  rose: RefPaletteRoseTokens,
  sky: RefPaletteSkyTokens,
  slate: RefPaletteSlateTokens,
  stone: RefPaletteStoneTokens,
  teal: RefPaletteTealTokens,
  violet: RefPaletteVioletTokens,
  yellow: RefPaletteYellowTokens,
  zinc: RefPaletteZincTokens,
} as const satisfies RefPaletteTokensType;
