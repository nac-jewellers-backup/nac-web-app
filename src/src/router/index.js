import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Stylori } from 'screens'
import PricingPage from 'screens/Stylori/PricingPage'
import Cart from 'screens/Stylori/Cart'
import Checkout from 'screens/Stylori/Checkout'
import Register from 'screens/Checkout/loginRegister/register';
import UserLogin from '../components/LoginAndRegister/Login';
import UserRegister from '../components/LoginAndRegister/Register';
import routes from "router/routes";
import { withRouter } from "react-router";
// const Tacos = ({ props }) => {
//     if (window.location.search !== null) {

//         return (
//             <Route
//                 path={`/stylori     ${window.location.search}`}
//                 component={Stylori}
//             />
//         )

//     }
//     else{
//         return(
//             <Route
//             path={routes.stylori}
//             component={Stylori}
//         />
//         )
//     }
// }

export const RouterApp = (props) => {
    console.log('window.location.pathnamewindow.location.pathname', window.location.pathname, props.location.pathname)
    return (
        <Switch>
            {/* <Redirect key="stylori-redirect" component={} from="/" exact to={"/hemow"} /> */}
            <Route key="Checkout" component={Checkout} exact path={routes.Checkout} />

            {(props.location.pathname !== "/cart" && props.location.pathname !== "/registers" && props.location.pathname !== "/login" && props.location.pathname !== "/checkout") &&
                <Route exact={true} component={Stylori} path={"/:listingpage"} />}

            <Route exact component={PricingPage} path={`/:productCategory/:productType/:material/:productName`} />
            <Route key="cart" exact component={Cart} path={routes.Cart} />
            <Route key="Register" component={Register} exact path={routes.Register} />
            <Route key="login" component={UserLogin} exact path={routes.UserLogin} />
            <Route key="registers" component={UserRegister} exact path={routes.UserRegister} />
        </Switch>
    );
};
export default withRouter(RouterApp);