import { Stitches } from "../../../styles/stitches";

export const ServerConnectedBoxWrapper = Stitches.styled("div", {
  width: "100%",
  minHeight: "$5",
  backgroundColor: "$bgPrimary",
  borderRadius: "$default",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "$3",
  overflow: "hidden",
  padding: "0 $1",

  "& > h3 ": {
    fontSize: "$body",
    color: "$gray100",
    fontWeight: "$medium",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "$1",
  },

  "& > h3 > svg": {
    width: "$iconSmall",
    height: "$iconSmall",
    color: "$secondary",
  },
});
