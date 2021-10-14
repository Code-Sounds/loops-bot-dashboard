import { Stitches } from "../../../styles/stitches";

export const DefaultButton = Stitches.styled("button", {
  width: "100%",
  borderRadius: "$default",
  padding: "0 $1",
  color: "$white",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "$semiBold",

  "&:disabled": {
    opacity: 0.5,
  },

  variants: {
    color: {
      primary: {
        backgroundColor: "$primary",
      },
      secondary: {
        backgroundColor: "$secondary",
      },
      danger: {
        backgroundColor: "$red",
      },
      purple: {
        backgroundColor: "$purple",
      },
    },
    size: {
      small: {
        height: "$1",
        fontSize: "$body",
      },
      medium: {
        height: "$2",
        fontSize: "$subtitle",
      },
      large: {
        height: "$3",
        fontSize: "$subtitle",
      },
    },
  },
});
