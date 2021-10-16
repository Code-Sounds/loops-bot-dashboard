import { Route, BrowserRouter, Switch } from "react-router-dom";
import { HomePage } from "../pages/dashboard/home";
import { MusicsPage } from "../pages/dashboard/musics";
import { LoginPage } from "../pages/login-page";
import { PrivateRoute } from "./private";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />

        <PrivateRoute path="/" exact>
          <HomePage />
        </PrivateRoute>

        <PrivateRoute path="/musics" exact>
          <MusicsPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
