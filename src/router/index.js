import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Stylori } from '../screens'
import PricingPage from '../screens/Stylori/PricingPage'
import routes from "./routes";



export const RouterApp = () => {
    return (
        <Switch>
            <Redirect key="stylori-redirect" from="/" exact to={routes.stylori} />
            <Route key="stylori" component={Stylori} exact path={routes.stylori} />
            <Route key="PricingPage" component={PricingPage}  exact path={routes.PricingPage} />
        </Switch>
    );
};

export default RouterApp;
