import { DefaultButton } from "../../components/generics/buttons";
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

        <DefaultButton
          color="primary"
          size="medium"
          type="submit"
          css={{ marginTop: "$3" }}
        >
          Login
        </DefaultButton>
      </LoginPageForm>
    </LoginPageWrapper>
  );
}
