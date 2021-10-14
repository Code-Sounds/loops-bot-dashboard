import { FieldWrapper } from "../../components/generics/forms";
import { LoginPageForm, LoginPageWrapper } from "./styles";

export function LoginPage() {
  return (
    <LoginPageWrapper>
      <LoginPageForm>
        <FieldWrapper label="Email">
          <input type="text" />
        </FieldWrapper>
        <FieldWrapper label="Password">
          <input type="text" />
        </FieldWrapper>
      </LoginPageForm>
    </LoginPageWrapper>
  );
}
