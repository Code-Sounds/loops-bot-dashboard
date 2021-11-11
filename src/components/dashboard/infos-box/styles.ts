import { Stitches } from "../../../styles/stitches";

export const InfosBoxWrapper = Stitches.styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$7",
  backgroundColor: "$bgPrimary",
  boxShadow: "$default",
  padding: "$2",
  borderRadius: "$default",

  "& > h3 ": {
    fontSize: "$subtitle",
    color: "$gray100",
    fontWeight: "$medium",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "$1",
  },

  "& > h3 > svg": {
    width: "$iconMedium",
    height: "$iconMedium",
  },

  "& > strong": {
    fontSize: "$large",
    fontWeight: "$bold",
    textAlign: "center",
  },

  variants: {
    theme: {
      orange: {
        "& > h3 > svg": {
          color: "$secondary",
        },
        "& > strong": {
          color: "$secondary",
        },
      },
      green: {
        "& > h3 > svg": {
          color: "$primary",
        },
        "& > strong": {
          color: "$primary",
        },
      },
      purple: {
        "& > h3 > svg": {
          color: "$purple",
        },
        "& > strong": {
          color: "$purple",
        },
      },
      blue: {
        "& > h3 > svg": {
          color: "$blue",
        },
        "& > strong": {
          color: "$blue",
        },
      },
    },
  },

  defaultVariants: {
    theme: "orange",
  },
});
