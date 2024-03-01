const RefSpacingTokensKeys = [
  "2",
  "4",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "56",
  "64",
  "80",
  "96",
  "112",
  "128",
  "144",
  "160",
  "176",
  "192",
  "208",
  "224",
  "240",
  "256",
  "288",
  "320",
  "384",
] as const;

export type RefSpacingTokensType = {
  [key in (typeof RefSpacingTokensKeys)[number]]: string;
};
