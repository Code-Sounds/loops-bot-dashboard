import { createStitches, globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  html: {
    fontSize: "100%",
  },
});

export const Stitches = createStitches({});
