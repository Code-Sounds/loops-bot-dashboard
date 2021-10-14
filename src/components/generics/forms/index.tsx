import { ReactNode } from "react";
import { FieldWrapperStyled } from "./styles";

type FieldWrapperProps = {
  children: ReactNode;
  label: string;
};

export function FieldWrapper({ children, label }: FieldWrapperProps) {
  return (
    <FieldWrapperStyled>
      <label>{label}</label>
      {children}
    </FieldWrapperStyled>
  );
}
