import { Stitches } from "../../../styles/stitches";

export const ModalDefaultWrapperHeader = Stitches.styled("header", {
  width: "100%",
  minWidth: "360px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "$8",
  marginBottom: "$4",

  "& > button": {
    width: "$2",
    height: "$2",
    fontSize: 0,
    backgroundColor: "transparent",
    border: " 1px solid rgba(246, 27, 79, 0.41)",
    borderRadius: "$default",
    transition: "all 0.2s ease-in-out",
  },

  "& > button svg": {
    width: "$iconMedium",
    height: "$iconMedium",
    color: "rgba(246, 27, 79, 0.41)",
  },

  "& > button:hover": {
    backgroundColor: "rgba(246, 27, 79, 0.41)",
  },

  "& > div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "& > div  svg": {
    width: "$iconMedium",
    height: "$iconMedium",
    color: "$primary",
  },
  "& > div  strong": {
    marginLeft: "$1",
    color: "$gray100",
  },
});

export const ModalDefaultWrapperContent = Stitches.styled("div", {
  width: "100%",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});
