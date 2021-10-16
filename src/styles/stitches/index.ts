import { createStitches, globalCss } from "@stitches/react";

export function getRem(px: number) {
  return `${px / 16}rem`;
}

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  html: {
    fontSize: "100%",
  },
  "html, input, button, select, a": {
    fontFamily: "Inter, sans-serif",
  },
  img: {
    maxWidth: "100%",
    display: "block",
    objectFit: "contain",
    objectPosition: "center",
  },
  "a, a:visited": {
    color: "inherit",
  },
  a: {
    textDecoration: "none",
  },
  button: {
    cursor: "pointer",
  },
  "button, input": {
    border: 0,
    outline: 0,
  },
});

export const Stitches = createStitches({
  theme: {
    colors: {
      primary: "#219E47",
      primaryLight: "#55BD74",
      secondary: "#CA7B1D",
      purple: "#833FB8",
      purpleDark: "#2C193A",
      blue: "#00B2E3",
      blueDark: "#002855",
      red: "#EF2E39",
      redDark: "#511619",
      white: "#FFFFFF",
      gray100: "#A9ADC1",
      gray400: "#4B4C53",
      gray600: "#2E3039",
      bgPrimary: "#11121A",
      bgSecondary: "#14151F",
    },
    space: {
      1: getRem(10),
      2: getRem(15),
      3: getRem(20),
      4: getRem(25),
      5: getRem(30),
      6: getRem(35),
      7: getRem(40),
      8: getRem(45),
      9: getRem(50),
    },
    sizes: {
      1: getRem(30),
      2: getRem(40),
      3: getRem(45),
      4: getRem(50),
      5: getRem(60),
      iconSmall: getRem(20),
      iconMedium: getRem(22),
      iconLarge: getRem(24),
    },
    fontSizes: {
      title: getRem(22),
      subtitle: getRem(18),
      body: getRem(16),
      large: getRem(46),
      medium: getRem(26),
      small: getRem(14),
    },
    fontWeights: {
      medium: 500,
      semiBold: 600,
      body: 400,
    },
    radii: {
      default: getRem(10),
    },
    borderWidths: {
      default: getRem(1),
      2: getRem(2),
    },
    shadows: {
      default: "0px 0px 4px 4px rgba(0, 0, 0, 0.15)",
      strong: "0px 6px 4px rgba(0, 0, 0, 0.7)",
    },
  },
});
