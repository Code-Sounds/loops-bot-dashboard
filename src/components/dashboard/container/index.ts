import { Stitches } from "../../../styles/stitches";

export const Container = Stitches.styled("div", {
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
  padding: "$3",

  "@media (min-width: 1100px)": {
    maxWidth: "1080px",
  },

  "@media screen and (min-width: 980px) and (max-width: 1099px)": {
    maxWidth: "940px",
  },
  "@media screen and (min-width: 720px) and (max-width: 979px)": {
    maxWidth: "720px",
  },
});
