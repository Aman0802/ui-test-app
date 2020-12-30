import React from "react";

import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import LandingPage from "../../components/LandingPage";
import { Login } from "./Auth";

export default function AdminModule() {
  const match = useRouteMatch();
  return (
    <>
      <Redirect to="/home"> Home </Redirect>

      <Switch>
        <Route exact path={`${match.path}`} component={LandingPage} />
        <Route exact path={`${match.path}home`} component={LandingPage} />
        <Route exact path={`${match.path}login`} component={Login} />
      </Switch>
    </>
  );
}
