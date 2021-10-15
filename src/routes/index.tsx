import { Route, BrowserRouter, Switch } from "react-router-dom";
import { MusicsPage } from "../pages/dashboard/musics";
import { LoginPage } from "../pages/login-page";
import { PrivateRoute } from "./private";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />

        <PrivateRoute path="/" exact>
          <MusicsPage />
        </PrivateRoute>
        {/* 
          <PrivateRoute path="/management" exact>
            <ManagementContextProvider>
              <ManagementPage />
            </ManagementContextProvider>
          </PrivateRoute>

          <PrivateRoute path="/startup" exact>
            <StartupDetailsPage />
          </PrivateRoute>

          <PrivateRoute path="/pipeline">
            <PipelinePage />
          </PrivateRoute>

          <PrivateRoute exact path="/news/startups">
            <NewsStartupsPage />
          </PrivateRoute>

          <PrivateRoute path="/saved/searches">
            <SavedSearchesPage />
          </PrivateRoute> */}
      </Switch>
    </BrowserRouter>
  );
}
