import { Stitches } from "../../../styles/stitches";

export const FieldWrapperStyled = Stitches.styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginBottom: "$2",

  "& > label": {
    fontSize: "$body",
    fontWeight: "$medium",
    textAlign: "left",
    marginBottom: "$1",
    color: "$white",
  },

  "& > input": {
    width: "100%",
    height: "$2",
    borderRadius: "$default",
    border: "2px solid",
    borderColor: "$gray400",
    backgroundColor: "transparent",
    transition: "border-color 0.2s ease-in-out",
    padding: "0 $2",
    fontSize: "$body",
    fontWeight: "$body",
    color: "$gray100",

    "&:focus": {
      borderColor: "$primaryLight",
    },
  },
});
