import { Stitches } from "../../../../styles/stitches";

export const MenuButtonStyled = Stitches.styled("button", {
  width: "$5",
  height: "$5",
  borderRadius: "$default",
  borderWidth: "$2",
  borderStyle: "solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: "$secondary",
    borderColor: "$secondary",

    "& svg": {
      color: "$white",
    },
  },

  "& svg": {
    width: "$iconLarge",
    height: "$iconLarge",
  },

  variants: {
    colors: {
      active: {
        borderColor: "$secondary",

        "& svg": {
          color: "$secondary",
        },
      },
      inactive: {
        borderColor: "$gray400",

        "& svg": {
          color: "$gray400",
        },
      },
    },
  },

  defaultVariants: {
    colors: "inactive",
  },
});
