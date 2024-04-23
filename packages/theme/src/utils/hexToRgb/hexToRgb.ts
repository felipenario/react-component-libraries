export const hexToRgb = (hexValue: string) => {
  const HEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;

  const SHORT_HEX = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;

  const hex = hexValue
    .replace(SHORT_HEX, (_, r, g, b, a) =>
      ["#", r, r, g, g, b, b, a ? a + a : ""].join("")
    )
    .match(HEX);

  if (hex !== null) {
    return {
      mode: "rgb",
      color: [
        parseInt(hex[1], 16),
        parseInt(hex[2], 16),
        parseInt(hex[3], 16),
      ].map((v) => v.toString()),
      alpha: hex[4] ? (parseInt(hex[4], 16) / 255).toString() : undefined,
    };
  }
};
