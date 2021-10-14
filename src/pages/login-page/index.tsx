import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { DefaultButton } from "../../components/generics/buttons";
import { FieldWrapper } from "../../components/generics/forms";
import { LoginPageForm, LoginPageWrapper } from "./styles";
import { useAuth } from "../../hooks/use-auth";

import logoLarge from "../../assets/logo-large.svg";

export function LoginPage() {
  const history = useHistory();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSuccess = () => {
    toast.success("Login realizado com sucesso!");
    history.push("/");
  };

  const onError = () => {
    toast.error("Falha ao realizar login!");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn.mutate({ email, password });
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
  }, [signIn]);

  return (
    <LoginPageWrapper>
      <LoginPageForm onSubmit={handleSubmit}>
        <div className="logo">
          <img src={logoLarge} alt="logo" />
        </div>

        <FieldWrapper label="Email">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FieldWrapper>
        <FieldWrapper label="Password">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
