import {
  SysTypographyBodyFontWeightTokens,
  SysTypographyBodySizeTokens,
  SysTypographyBodyTokens,
  SysTypographyDetailFontWeightTokens,
  SysTypographyDetailSizeTokens,
  SysTypographyDetailTokens,
  SysTypographyHeadingFontWeightTokens,
  SysTypographyHeadingSizeTokens,
  SysTypographyHeadingTokens,
} from "@components/theme";

export const mapSysTypographyTokensToTailwindConfig = () => {
  const {
    sysBodyFontSizeTokens,
    sysBodyFontWeightTokens,
    sysBodyLineHeightTokens,
  } = mapSysTypographyBodyTokens();

  const {
    sysDetailFontSizeTokens,
    sysDetailFontWeightTokens,
    sysDetailLineHeightTokens,
  } = mapSysTypographyDetailTokens();

  const {
    sysHeadingFontSizeTokens,
    sysHeadingFontWeightTokens,
    sysHeadingLineHeightTokens,
  } = mapSysTypographyHeadingTokens();

  return {
    sysBodyFontSizeTokens,
    sysBodyFontWeightTokens,
    sysBodyLineHeightTokens,
    sysDetailFontSizeTokens,
    sysDetailFontWeightTokens,
    sysDetailLineHeightTokens,
    sysHeadingFontSizeTokens,
    sysHeadingFontWeightTokens,
    sysHeadingLineHeightTokens,
  };
};

const mapSysTypographyBodyTokens = () => {
  const sysBodyFontWeightTokens: Record<string, any> = {};
  const sysBodyFontSizeTokens: Record<string, any> = {};
  const sysBodyLineHeightTokens: Record<string, any> = {};

  for (const [bodyFontWeightToken, _] of Object.entries(
    SysTypographyBodyFontWeightTokens
  )) {
    sysBodyFontWeightTokens[
      `sys-typography-body-font-weight-${bodyFontWeightToken}`
    ] = `var(--sys-typography-body-font-weight-${bodyFontWeightToken})`;
  }

  for (const [_, bodyFontSizeTokensObject] of Object.entries(
    SysTypographyBodySizeTokens
  )) {
    for (const [bodyFontSizeToken, _] of Object.entries(
      bodyFontSizeTokensObject
    )) {
      sysBodyFontSizeTokens[`sys-typography-body-size-${bodyFontSizeToken}`] =
        `var(--sys-typography-body-size-${bodyFontSizeToken})`;
    }
  }

  for (const [bodyTokenType, _] of Object.entries(SysTypographyBodyTokens)) {
    if (bodyTokenType === "lineHeight") {
      sysBodyLineHeightTokens[`sys-typography-body-line-height`] =
        `var(--sys-typography-body-line-height)`;
    }
  }

  return {
    sysBodyFontWeightTokens,
    sysBodyFontSizeTokens,
    sysBodyLineHeightTokens,
  };
};

const mapSysTypographyDetailTokens = () => {
  const sysDetailFontWeightTokens: Record<string, any> = {};
  const sysDetailFontSizeTokens: Record<string, any> = {};
  const sysDetailLineHeightTokens: Record<string, any> = {};

  for (const [detailFontWeightToken, _] of Object.entries(
    SysTypographyDetailFontWeightTokens
  )) {
    sysDetailFontWeightTokens[
      `sys-typography-detail-font-weight-${detailFontWeightToken}`
    ] = `var(--sys-typography-detail-font-weight-${detailFontWeightToken})`;
  }

  for (const [_, detailFontSizeTokensObject] of Object.entries(
    SysTypographyDetailSizeTokens
  )) {
    for (const [detailFontSizeToken, _] of Object.entries(
      detailFontSizeTokensObject
    )) {
      sysDetailFontSizeTokens[
        `sys-typography-detail-size-${detailFontSizeToken}`
      ] = `var(--sys-typography-body-size-${detailFontSizeToken})`;
    }
  }

  for (const [detailTokenType, _] of Object.entries(
    SysTypographyDetailTokens
  )) {
    if (detailTokenType === "lineHeight") {
      sysDetailLineHeightTokens[`sys-typography-detail-line-height`] =
        `var(--sys-typography-detail-line-height)`;
    }
  }

  return {
    sysDetailFontWeightTokens,
    sysDetailFontSizeTokens,
    sysDetailLineHeightTokens,
  };
};

const mapSysTypographyHeadingTokens = () => {
  const sysHeadingFontWeightTokens: Record<string, any> = {};
  const sysHeadingFontSizeTokens: Record<string, any> = {};
  const sysHeadingLineHeightTokens: Record<string, any> = {};

  for (const [headingFontWeightToken, _] of Object.entries(
    SysTypographyHeadingFontWeightTokens
  )) {
    sysHeadingFontWeightTokens[
      `sys-typography-heading-font-weight-${headingFontWeightToken}`
    ] = `var(--sys-typography-heading-font-weight-${headingFontWeightToken})`;
  }

  for (const [_, headingFontSizeTokensObject] of Object.entries(
    SysTypographyHeadingSizeTokens
  )) {
    for (const [headingFontSizeToken, _] of Object.entries(
      headingFontSizeTokensObject
    )) {
      sysHeadingFontSizeTokens[
        `sys-typography-heading-size-${headingFontSizeToken}`
      ] = `var(--sys-typography-heading-size-${headingFontSizeToken})`;
    }
  }

  for (const [headingTokenType, _] of Object.entries(
    SysTypographyHeadingTokens
  )) {
    if (headingTokenType === "lineHeight") {
      sysHeadingLineHeightTokens[`sys-typography-heading-line-height`] =
        `var(--sys-typography-heading-line-height)`;
    }
  }

  return {
    sysHeadingFontWeightTokens,
    sysHeadingFontSizeTokens,
    sysHeadingLineHeightTokens,
  };
};
