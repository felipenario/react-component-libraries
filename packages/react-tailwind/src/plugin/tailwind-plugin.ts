import plugin from "tailwindcss/plugin";

export const tailwindPlugin = plugin(() => {}, {
  content: [],
  theme: {
    colors: {
      primary: "#313e50",
      secondary: "#3a435e",
      tertiary: "#455561",
    },
  },
  plugins: [],
});
