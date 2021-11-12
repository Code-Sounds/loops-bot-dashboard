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
});
