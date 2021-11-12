import { Stitches } from "../../../styles/stitches";
import MusicIcon from "../../../assets/music.svg";

const backgroundAnimated = Stitches.keyframes({
  "0%": {
    backgroundPosition: "top left",
    backgroundSize: "600px",
  },
  "25%": {
    backgroundPosition: "right bottom",
    backgroundSize: "500px",
  },
  "50%": {
    backgroundPosition: "left bottom",
    backgroundSize: "600px",
  },
  "75%": {
    backgroundPosition: "left top",
    backgroundSize: "500px",
  },
  "100%": {
    backgroundPosition: "top right",
    backgroundSize: "600px",
  },
});

export const HomePageWrapper = Stitches.styled("section", {
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "$5",
  padding: "$5",
  backgroundImage: `url(${MusicIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  animation: `${backgroundAnimated} 10s linear infinite alternate`,
});

export const HomePageContent = Stitches.styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$5",
});

export const HomePageServers = Stitches.styled("div", {
  width: "100%",
  maxHeight: "100%",
  overflowY: "auto",
  padding: "$3",
  backgroundColor: "$bgSecondary",
  borderRadius: "$default",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "$3",
});
