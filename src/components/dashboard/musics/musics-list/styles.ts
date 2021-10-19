import { Stitches } from "../../../../styles/stitches";

export const MusicsListWrapper = Stitches.styled("section", {
  width: "100%",
  padding: "$3",
  backgroundColor: "$bgSecondary",
  borderRadius: "$default",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  gap: "$3",

  "& > div.musics-list": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "$2",
  },

  "& > div.alert": {
    width: "100%",
    padding: "$1 $3",
    height: "$5",
    backgroundColor: "$bgPrimary",
    border: "1px solid $secondary",
    borderRadius: "$default",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  "& > div.alert > strong": {
    color: "$secondary",
    fontSize: "$body",
    fontWeight: "$body",
    textAlign: "left",
  },
});
