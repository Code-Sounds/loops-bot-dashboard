import { Stitches } from "../../../styles/stitches";

export const TemplateWrapper = Stitches.styled("section", {
  width: "100%",
  backgroundColor: "$bgPrimary",
  display: "flex",
});

export const TemplateSidebar = Stitches.styled("aside", {
  backgroundColor: "$bgPrimary",
  borderRight: "2px solid $bgSecondary",
  width: "110px",
  minHeight: "100vh",
  padding: "$2",
});

export const TemplateContent = Stitches.styled("main", {
  backgroundColor: "$bgPrimary",
  flex: "1",
  width: "calc(100% - 110px)",
  height: "100vh",
  overflowY: "auto",
});
