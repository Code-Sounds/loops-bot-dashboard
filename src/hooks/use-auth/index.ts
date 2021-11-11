import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { API } from "../../services/fetch-api";
import { UserData } from "../../types";
import { setStoredToken, setStoredUser } from "../../utils/local-storage-utils";

type UserSignInData = {
  admin: UserData;
  token: string;
};

type UserSignInParams = {
  email: string;
  password: string;
};

export function useAuth() {
  const history = useHistory();

  const signIn = useMutation(
    (props: UserSignInParams) => {
      return API.post<UserSignInData>(
        "/admin/login",
        {
          email: props.email,
          password: props.password,
        },
        {
          validateStatus: (status) => status === 200,
        }
      );
    },
    {
      onSuccess: (data) => {
        setStoredUser(data.data.admin);
        setStoredToken(data.data.token);
      },
      onError: () => {},
    }
  );

  function signOut() {
    localStorage.clear();
    history.replace("/login");
  }

  return {
    signIn,
    signOut,
  };
}
