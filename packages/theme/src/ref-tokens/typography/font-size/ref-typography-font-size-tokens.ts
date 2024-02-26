export const RefTypographyFontSizeDesktopScaleTokens = {
  fontSize50: "0.688rem",
  fontSize75: "0.75rem",
  fontSize100: "0.875rem",
  fontSize200: "1rem",
  fontSize300: "1.125rem",
  fontSize400: "1.25rem",
  fontSize500: "1.375rem",
  fontSize600: "1.563rem",
  fontSize700: "1.75rem",
  fontSize800: "2rem",
  fontSize900: "2.25rem",
  fontSize1000: "2.5rem",
  fontSize1100: "2.813rem",
  fontSize1200: "3.125rem",
  fontSize1300: "3.75rem",
} as const;

export const RefTypographyFontSizeMobileScaleTokens = {
  fontSize50: "0.813rem",
  fontSize75: "0.938rem",
  fontSize100: "1.063rem",
  fontSize200: "1.188rem",
  fontSize300: "1.375rem",
  fontSize400: "1.5rem",
  fontSize500: "1.688rem",
  fontSize600: "1.938rem",
  fontSize700: "2.125rem",
  fontSize800: "2.438rem",
  fontSize900: "2.75rem",
  fontSize1000: "3.063rem",
  fontSize1100: "3.438rem",
  fontSize1200: "3.875rem",
  fontSize1300: "4.375rem",
} as const;

export const RefTypographyFontSizeTokens = {
  desktop: RefTypographyFontSizeDesktopScaleTokens,
  mobile: RefTypographyFontSizeMobileScaleTokens,
} as const;
