import React from "react";

import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import LandingPage from "../../components/LandingPage";
import { Login } from "./Auth";

export default function AdminModule() {
  const match = useRouteMatch();
  return (
    <>
      <Link to="/home"> Home </Link>
      <Link to="/login"> Login </Link>

      <Switch>
        <Route exact path={`${match.path}home`} component={LandingPage} />
        <Route exact path={`${match.path}login`} component={Login} />
      </Switch>
    </>
  );
}
