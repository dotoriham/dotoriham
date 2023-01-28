import { makeVariant } from "../theme.utils";

const gray = {
  "100": "#F9F9F9",
  "200": "#F3F3F3",
  "300": "#E5E5E5",
  "400": "#D1D1D1",
  "500": "#B3B3B3",
  "600": "#919191",
  "700": "#6E6E6E",
  "800": "#4F4F4F",
  "900": "#333333",
} as const;

const blue = {
  "100": "#BAE0FF",
  "200": "#8BCEFF",
  "300": "#53BAFF",
  "400": "#14AAFF",
  "50": "#E2F3FF",
  "500": "#009AFF",
  "600": "#008BFF",
  "700": "#0078FF",
  "800": "#1564EC",
  "900": "#2242CD",
} as const;

const palette = {
  primary: "#48bf91",
  primaryDark: "#0baa78",
  primaryLight: "#f8ffed",
  error: "#F4364C",
  grayDarkest: "#323232",
  grayDarker: "#5B5B5B",
  grayDark: "#848484",
  gray: "#AAAAAA",
  grayLight: "#D4D2CF",
  grayLightest: "#F3F2EF",
  lightGreen: "#BAE303",
  skyBlue: "#00B7EB",
  purpleDark: "#4A25AA",
  purple: "#963CBD",
  link0: "#0BAA78",
  shadow0: "rgba(0, 0, 0, 0.15)",
  shadow1: "rgba(0, 174, 199, 0.1)",
  shadow2: "rgba(0, 0, 0, 0.1)",
  shadow3: "rgba(0, 0, 0, 0.08)",
  hover0: "rgba(72, 191, 145, 0.1)",
  hover1: "#f7fcf9",
  border0: "#eee",
} as const;

const semantic = {
  caution: "#FF923A",
  cautionText: "#FF5300",
  error: "#FF0000",
} as const;

const colorVariants = {
  ...makeVariant("gray", gray),
  ...makeVariant("blue", blue),
};
const processedColors = {
  accent: colorVariants["blue_700"],
  black: "#000000",
  negative: semantic["error"],
  white: "#ffffff",
  ...palette,
  ...semantic,
  ...colorVariants,
} as const;

const colors = processedColors;
export default colors;
