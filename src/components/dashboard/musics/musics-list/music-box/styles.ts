import { Stitches } from "../../../../../styles/stitches";

export const MusicBoxWrapper = Stitches.styled("div", {
  width: "100%",
  height: "$5",
  backgroundColor: "$bgPrimary",
  borderRadius: "$default",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "$3",
  overflow: "hidden",
});

export const MusicBoxLeft = Stitches.styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "$2",
});

export const MusicBoxLeftPosition = Stitches.styled("div", {
  height: "$5",
  width: "$5",
  backgroundColor: "$purpleDark",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& > strong": {
    fontSize: "$medium",
    color: "$purple",
    fontWeight: "$semiBold",
  },
});

export const MusicBoxLeftInfos = Stitches.styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",

  "& > span": {
    fontSize: "$body",
    color: "$white",
    fontWeight: "$body",
  },

  "& > strong": {
    fontSize: "$body",
    color: "$primary",
    fontWeight: "$medium",
  },
});

export const MusicBoxRight = Stitches.styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "$2",
  paddingRight: "$2",

  "& > span": {
    fontSize: "$body",
    color: "$gray100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "$1",
  },

  "& > span > svg": {
    width: "$iconSmall",
    height: "$iconSmall",
    color: "$gray100",
  },
});
