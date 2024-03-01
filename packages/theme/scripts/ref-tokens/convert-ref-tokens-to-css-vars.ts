import { convertRefPaletteTokensToCssVars } from "./convert-ref-palette-tokens-to-css-vars";
import { converRefTypographyTokensToCssVars } from "./convert-ref-typography-tokens-to-css-vars";
import { convertRefSpacingTokensToCssVars } from "./convert-ref-spacing-tokens-to-css-vars";
import { format } from "prettier";
import { writeFileSync } from "fs";
import picocolors from "picocolors";

export const convertRefTokensToCssVars = async () => {
  const start = performance.now();

  const refTokensCssVars = [
    ...convertRefPaletteTokensToCssVars(),
    ...convertRefSpacingTokensToCssVars(),
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

  const end = performance.now();

  console.log(picocolors.green(
    `[ref-tokens] Ref tokens CSS vars generated in ${end - start}ms.`
  ));
};

convertRefTokensToCssVars();
