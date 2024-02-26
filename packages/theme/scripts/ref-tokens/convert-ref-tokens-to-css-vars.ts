import { convertRefPaletteTokensToCssVars } from "./convert-ref-palette-tokens-to-css-vars";
import { converRefTypographyTokensToCssVars } from "./convert-ref-typography-tokens-to-css-vars";
import { format } from "prettier";
import { writeFileSync } from "fs";

export const convertRefTokensToCssVars = async () => {
  const refTokensCssVars = [
    ...convertRefPaletteTokensToCssVars(),
    ...converRefTypographyTokensToCssVars(),
  ];

  const formattedContent = await format(
    `:root {
    ${refTokensCssVars.join("\n")}
}`,
    {
      parser: "css",
    }
  );

  writeFileSync(`./public/ref-tokens-vars.css`, formattedContent);
};

convertRefTokensToCssVars();
