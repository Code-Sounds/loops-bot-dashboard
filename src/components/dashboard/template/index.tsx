import { ReactNode } from "react";
import { FiHome, FiMusic, FiPower } from "react-icons/fi";
import { Container } from "../container";
import { MenuButton } from "./menu-button";
import { TemplateContent, TemplateSidebar, TemplateWrapper } from "./styles";

type TemplateProps = {
  children: ReactNode;
};

export function Template({ children }: TemplateProps) {
  return (
    <TemplateWrapper>
      <TemplateSidebar>
        <nav>
          <MenuButton Icon={<FiHome />} redirectTo="/" isRedirect />
          <MenuButton Icon={<FiMusic />} redirectTo="/musics" isRedirect />
        </nav>

        <MenuButton Icon={<FiPower />} isRedirect={false} className="logout" />
      </TemplateSidebar>
      <TemplateContent>
        <Container>{children}</Container>
      </TemplateContent>
    </TemplateWrapper>
  );
}
