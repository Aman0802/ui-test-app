import React from 'react';

import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import LandingPage from '../../components/LandingPage';
import { Login, Signup, ForgotPassword } from "./Auth";

export default function AdminModule() {
    const match = useRouteMatch();
    return (
        <>
        <Link to="/home" > Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/signup" > Signup </Link>
        <Link to="/forgotPassword" > ForgotPassword </Link>

        <Switch>
            <Route exact path={`${match.path}home`} component={LandingPage} />
            <Route exact path={`${match.path}login`} component={Login} />
            <Route exact path={`${match.path}signup`} component={Signup} />
            <Route exact path={`${match.path}forgotPassword`} component={ForgotPassword} />
        </Switch>

        </>
    )
}
