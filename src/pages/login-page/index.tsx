import { DefaultButton } from "../../components/generics/buttons";
import { FieldWrapper } from "../../components/generics/forms";
import { LoginPageForm, LoginPageWrapper } from "./styles";

import logoLarge from "../../assets/logo-large.svg";

export function LoginPage() {
  return (
    <LoginPageWrapper>
      <LoginPageForm>
        <div className="logo">
          <img src={logoLarge} alt="logo" />
        </div>

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
