import { RefSpacingTokens } from "@components/theme";

export const mapRefSpacingTokensToTailwindConfig = () => {
  const spacings: Record<string, any> = {};

  for (const [spacingToken, _] of Object.entries(RefSpacingTokens)) {
    spacings[`ref-spacing-${spacingToken}`] =
      `var(--ref-spacing-${spacingToken})`;
  }

  return spacings;
};
