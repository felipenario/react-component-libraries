// import { convertSysElevationTokensToCssVars } from "./convert-sys-elevation-tokens-to-css-vars";
// import { convertSysShapeTokensToCssVars } from "./convert-sys-shape-tokens-to-css-vars";
// import { convertSysThemeTokensToCssVars } from "./convert-sys-theme-tokens-to-css-vars";
import { convertSysTypographyTokensToCssVariables } from "./convert-sys-typography-tokens-to-css-vars";

export const convertSysTokensToCssVars = () => {
//   const generalCssVariables = [
//     ...convertSysElevationTokensToCssVars(),
//     ...convertSysShapeTokensToCssVars(),
//   ];

//   const { lightThemeCssVariables, darkThemeCssVariables } =
//     convertSysThemeTokensToCssVars();

  const typographyCssVariables = convertSysTypographyTokensToCssVariables();

  console.log(typographyCssVariables);
};

convertSysTokensToCssVars();
