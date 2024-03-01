export type SysBaseColorTokensType = {
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

export type SysColorTokensType = {
  dark: SysBaseColorTokensType;
  light: SysBaseColorTokensType;
};
