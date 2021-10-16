import { Stitches } from "../../../styles/stitches";

export const Container = Stitches.styled("div", {
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
  padding: "0 $3",

  "@media (min-width: 1200px)": {
    maxWidth: "1180px",
  },

  "@media screen and (min-width: 980px) and (max-width: 1200px)": {
    maxWidth: "940px",
  },
  "@media screen and (min-width: 720px) and (max-width: 980px)": {
    maxWidth: "720px",
  },
});
