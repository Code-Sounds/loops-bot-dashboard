import { ReactNode } from "react";
import { Container } from "../container";
import { TemplateContent, TemplateSidebar, TemplateWrapper } from "./styles";

type TemplateProps = {
  children: ReactNode;
};

export function Template({ children }: TemplateProps) {
  return (
    <TemplateWrapper>
      <TemplateSidebar>
        <h3>Menu</h3>
      </TemplateSidebar>
      <TemplateContent>
        <Container>{children}</Container>
      </TemplateContent>
    </TemplateWrapper>
  );
}
