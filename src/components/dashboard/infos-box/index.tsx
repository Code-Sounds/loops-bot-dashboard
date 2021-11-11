import { ReactNode } from "react";
import { InfosBoxWrapper } from "./styles";

type InfosBoxProps = {
  title: string;
  Icon: ReactNode;
  value: string | number;
  theme?: "orange" | "purple" | "green" | "blue";
};

export function InfosBox({ title, Icon, value, theme }: InfosBoxProps) {
  return (
    <InfosBoxWrapper theme={theme}>
      <h3>
        {Icon}
        {title}
      </h3>

      <strong>{value}</strong>
    </InfosBoxWrapper>
  );
}
