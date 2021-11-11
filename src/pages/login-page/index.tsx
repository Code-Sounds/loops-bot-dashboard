import { useHistory } from "react-router-dom";
import { useCallback, useEffect, useRef } from "react";
import toast from "react-hot-toast";

import { DefaultButton } from "../../components/generics/buttons";
import { FieldWrapper } from "../../components/generics/forms";
import { LoginPageForm, LoginPageWrapper } from "./styles";
import { useAuth } from "../../hooks/use-auth";

import logoLarge from "../../assets/logo-large.svg";

export function LoginPage() {
  const history = useHistory();
  const { signIn } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSuccess = useCallback(() => {
    toast.success("Login realizado com sucesso!");
    history.push("/");
  }, [history]);

  const onError = () => {
    toast.error("Dados de login incorretos!");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    if (data.email && data.password) {
      signIn.mutate({
        email: data.email,
        password: data.password,
      });
      return;
    }

    toast.error("Preencha todos os campos!");
  };

  useEffect(() => {
    if (signIn.isSuccess) {
      onSuccess();
      return;
    }
    if (signIn.isError) {
      onError();
      return;
    }
  }, [onSuccess, signIn]);

  return (
    <LoginPageWrapper>
      <LoginPageForm onSubmit={handleSubmit}>
        <div className="logo">
          <img src={logoLarge} alt="logo" />
        </div>

        <FieldWrapper label="Email">
          <input type="email" ref={emailRef} required />
        </FieldWrapper>
        <FieldWrapper label="Password">
          <input type="password" ref={passwordRef} required />
        </FieldWrapper>

        <DefaultButton
          color="primary"
          size="medium"
          type="submit"
          css={{ marginTop: "$3" }}
        >
          {signIn.isLoading ? "Carregando..." : "Entrar"}
        </DefaultButton>
      </LoginPageForm>
    </LoginPageWrapper>
  );
}
