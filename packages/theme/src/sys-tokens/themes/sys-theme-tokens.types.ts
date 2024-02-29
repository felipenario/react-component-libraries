export type SysBaseThemeTokensType = {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
};

export type SysThemeTokensType = {
  dark: SysBaseThemeTokensType;
  light: SysBaseThemeTokensType;
};
