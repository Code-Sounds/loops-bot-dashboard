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

export const ActionButton = Stitches.styled("button", {
  borderRadius: "$default",
  borderWidth: "$2",
  borderStyle: "solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",
  backgroundColor: "transparent",

  variants: {
    colors: {
      secondary: {
        backgroundColor: "$secondary",
        borderColor: "$secondary",
        "& svg": {
          color: "$white",
        },

        "&:hover": {
          backgroundColor: "transparent",
          borderColor: "$secondary",

          "& svg": {
            color: "$secondary",
          },
        },
      },
      primary: {
        backgroundColor: "$primary",
        borderColor: "$primary",
        "& svg": {
          color: "$white",
        },

        "&:hover": {
          backgroundColor: "transparent",
          borderColor: "$primary",

          "& svg": {
            color: "$primary",
          },
        },
      },
      red: {
        backgroundColor: "$red",
        borderColor: "$red",
        "& svg": {
          color: "$white",
        },

        "&:hover": {
          backgroundColor: "transparent",
          borderColor: "$red",

          "& svg": {
            color: "$red",
          },
        },
      },
      blue: {
        backgroundColor: "$blue",
        borderColor: "$blue",

        "& svg": {
          color: "$white",
        },

        "&:hover": {
          backgroundColor: "transparent",
          borderColor: "$blue",

          "& svg": {
            color: "$blue",
          },
        },
      },
    },
    size: {
      small: {
        height: "$2",
        width: "$2",

        "& svg": {
          width: "$iconSmall",
          height: "$iconSmall",
        },
      },
      medium: {
        height: "$3",
        width: "$3",

        "& svg": {
          width: "$iconMedium",
          height: "$iconMedium",
        },
      },
      large: {
        height: "$4",
        width: "$4",

        "& svg": {
          width: "$iconLarge",
          height: "$iconLarge",
        },
      },
    },
  },

  defaultVariants: {
    colors: "red",
    size: "medium",
  },
});
