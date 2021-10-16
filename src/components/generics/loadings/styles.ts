import { Stitches } from "../../../styles/stitches";

const UpBarAnimation = Stitches.keyframes({
  "0%": {
    height: "0px",
  },
  "50%": {
    height: "30px",
  },
  "100%": {
    height: "0px",
  },
});

export const LoadingWrapper = Stitches.styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$1",

  "& > *": {
    width: "10px",
    height: "20px",
    backgroundColor: "$primary",
    transition: "all 0.3s ease-in-out",
    transformOrigin: "bottom bottom",
  },

  "& > *:nth-child(1)": {
    animation: `${UpBarAnimation} 2s linear infinite`,
    animationDelay: "0s",
  },
  "& > *:nth-child(2)": {
    animation: `${UpBarAnimation} 2s linear infinite`,
    animationDelay: "0.3s",
  },
  "& > *:nth-child(3)": {
    animation: `${UpBarAnimation} 2s linear infinite`,
    animationDelay: "0.6s",
  },

  variants: {
    position: {
      absolute: {
        width: "100%",
        height: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      default: {
        position: "relative",
        width: "fit-content",
        height: "fit-content",
      },
    },
  },

  defaultVariants: {
    position: "default",
  },
});
