import { Stitches } from "../../styles/stitches";

export const LoginPageWrapper = Stitches.styled("main", {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "$bgPrimary",
});

export const LoginPageForm = Stitches.styled("form", {
  width: "100%",
  maxWidth: "500px",
  padding: "$2",
  backgroundColor: "$bgPrimary",
  boxShadow: "$default",
  borderRadius: "$default",

  "> div.logo": {
    paddingBottom: "$2",
    marginBottom: "$5",
    borderBottom: "1px solid $gray600",

    "> img": {
      margin: "0 auto",
    },
  },
});
