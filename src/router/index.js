import ResetPassword from "components/ForgotPassword/ConfirmPass";
import ForgotPassword from "components/ForgotPassword/ForgetPassword";
import AboutusPage from "containers/aboutus/aboutus";
import AdvertisingPage from "containers/advertising/advertising";
import careersPage from "containers/careers/careers";
import Blog from "containers/collection/bloagPost";
import CollectionPage from "containers/collection/collectionPage";
import rudramadeviBlog from "containers/collection/rudramadeviBlog";
import CollectionHomePage from "containers/collectionhomepage/collectionHomePage";
import Diamonds from "containers/diamonds/looseDiamonds";
import DigitalMarketing from "containers/digitalmarketing/digitalmarketing";
import NewsRoomPage from "containers/newsroom/newsroom";
import SavingsPage from "containers/savings/savings";
import Locator from "containers/storelocator/index";
import TempleWorkPage from "containers/templework/templework";
import { GlobalContext } from "context";
import { createBrowserHistory } from "history";
import React from "react";
import ReactPixel from "react-facebook-pixel";
import { withRouter } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "router/routes";
import { Stylori } from "screens";
import ChangePassword from "screens/Checkout/loginRegister/ChangePassword";
import Register from "screens/Checkout/loginRegister/register";
import Silver from "screens/SilverStylori";
import SilverListingPage from "screens/SilverStylori/listingpage";
import SilverProductDetail from "screens/SilverStylori/productDetail";
import Account from "screens/Stylori/accounts";
import Cart from "screens/Stylori/Cart";
import Checkout from "screens/Stylori/Checkout";
import Collection from "screens/Stylori/Collection";
import Faqs from "screens/Stylori/faqs";
import PricingPage from "screens/Stylori/PricingPage";
import stories from "screens/Stylori/stories";
import UserLogin from "../components/LoginAndRegister/Login";
import UserRegister from "../components/LoginAndRegister/Register";
import StoreLocationDetails from "../components/StoreLocatorDetail/index";
import CollectionFullPage from "../containers/collection/collectionsFullPage";
import ExperiencePage from "../containers/experiences/experiences";
import NecklaceMela from "containers/SpecificPage/necklaceMela";
import HomeComp from "../containers/home/home";
import Solitaires from "../containers/solitaires/solitaires";
import AkshyaTritiya from "../containers/SpecificPage/akshyaTritiya";
import BridalCollection from "../screens/BridalCollection/index";
import PaymentHiddenForm from "../screens/Checkout/paymentOption/paymentHiddenForm";
import Careers from "../screens/Stylori/careers";
import Fail from "../screens/Stylori/fail";
import Success from "../screens/Stylori/success";

const browserHistory = createBrowserHistory();

browserHistory.listen(() => {
  window.scrollTo(0, 0);
  ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: true });
  ReactPixel.pageView();
});
export const RouterApp = (props) => {
  const { Globalctx } = React.useContext(GlobalContext);
  const func_location_silver = () => {
    var loc = window.location.pathname
      .split("/")[1]
      .split("-")
      .filter((val) => {
        if (val === "silver") return val;
      });
    return loc[0];
  };

  const paths = [
    "/:params1/:params2",
    "/:params1/:params2/:params3",
    "/:params1/:params2/:params3/:params4",
  ];
  var loc_PD = window.location.pathname.split("/").filter((val) => {
    if (val === "silverjewellery") return val;
  });

  return (
    <Switch history={browserHistory}>
      <Route
        key="StoreLocationDetails"
        component={StoreLocationDetails}
        exact
        path={routes.StoreDetail}
      />
      <Route
        key="CollectionFullPage"
        component={CollectionFullPage}
        exact
        path={routes.CollectionFullPage}
      />
      <Route
        key="AkshyaTritiya"
        component={AkshyaTritiya}
        exact
        path={routes.AkshyaTritiya}
      />
      <Route
        key="HomePageStylori"
        component={HomeComp}
        exact
        path={routes.HomePageStylori}
      />
      <Route key="Silver" component={Silver} exact path={routes.Silver} />
      <Route key="Faqs" component={AboutusPage} exact path={routes.Faqs} />
      <Route
        key="ProductCare"
        component={Faqs}
        exact
        path={routes.ProductCare}
      />
      <Route key="Shipping" component={Faqs} exact path={routes.Shipping} />
      <Route
        key="PrivacyPolicy"
        component={AboutusPage}
        exact
        path={routes.PrivacyPolicy}
      />
      <Route
        key="TermsConditions"
        component={AboutusPage}
        exact
        path={routes.TermsConditions}
      />
      <Route key="Checkout" component={Checkout} exact path={routes.Checkout} />
      <Route
        key="AboutUs"
        component={AboutusPage}
        exact
        path={routes.AboutUs}
      />
      <Route
        key="Contacs"
        component={AboutusPage}
        exact
        path={routes.ContactUs}
      />
      <Route key="Carees" component={Careers} exact path={routes.Careers} />
      <Route
        key="forgotpassword"
        component={ForgotPassword}
        exact
        path={routes.ForgotPassword}
      />
      <Route
        key="resetPassword"
        component={ResetPassword}
        exact
        path={`${routes.ResetPassword}/:id`}
      />
      <Route
        key="ChangePassword"
        component={ChangePassword}
        exact
        path={routes.ChangePassword}
      />
      <Route
        key="paymenthidden"
        component={PaymentHiddenForm}
        exact
        path={routes.paymenthidden}
      />
      <Route
        key="paymentsuccess"
        component={Success}
        exact
        path={`${routes.paymentsuccess}/:id`}
      />
      <Route
        key="SiteMap"
        component={AboutusPage}
        exact
        path={routes.SiteMap}
      />
      <Route
        key="AboutUs"
        component={AboutusPage}
        exact
        path={routes.AboutUsPage}
      />
      <Route key="Return" component={AboutusPage} exact path={routes.Return} />
      <Route
        key="Delivery"
        component={AboutusPage}
        exact
        path={routes.Delivery}
      />
      <Route
        key="bridalCollection"
        component={BridalCollection}
        exact
        path={routes.BridalCollection}
      />
      <Route
        key="Education"
        component={AboutusPage}
        exact
        path={routes.Education}
      />
      <Route
        key="careersni"
        component={careersPage}
        exact
        path={routes.CareersPage}
      />
      <Route
        key="paymentfail"
        component={Fail}
        exact
        path={`${routes.paymentfail}/:id`}
      />
      {props.location.pathname !== "/cart" &&
        props.location.pathname !==
          `/account${"-" + window.location.pathname.split("-")[1]}` &&
        props.location.pathname !== "/savingscheme" &&
        props.location.pathname !== "/aboutus" &&
        props.location.pathname !== "/newsroom" &&
        props.location.pathname !== "/terms" &&
        props.location.pathname !== "/return" &&
        props.location.pathname !== "/delivery" &&
        props.location.pathname !== "/privacy" &&
        props.location.pathname !== "/contactuspage" &&
        props.location.pathname !== "/sitemap" &&
        props.location.pathname !== "/faq" &&
        props.location.pathname !== "/education" &&
        props.location.pathname !== "/store" &&
        props.location.pathname !== "/loc/:id" &&
        props.location.pathname !== "/careers" &&
        props.location.pathname !== "/careersDetail" &&
        props.location.pathname !== "/solitaires-search" &&
        props.location.pathname !== "/collectionhome" &&
        props.location.pathname !== "/collectionpage" &&
        props.location.pathname !== "/blog" &&
        props.location.pathname !== "/rudramadeviBlog" &&
        props.location.pathname !== "/advertising" &&
        props.location.pathname !== "/temple-work" &&
        props.location.pathname !== "/experiences" &&
        props.location.pathname !== "/registers" &&
        props.location.pathname !== "/login" &&
        props.location.pathname !== "/checkout" &&
        props.location.pathname !== "/forgotpassword" &&
        props.location.pathname !== "/careers" &&
        props.location.pathname !== "/resetpassword/:id" &&
        props.location.pathname !== "/changepassword" &&
        props.location.pathname !== "/collections" &&
        props.location.pathname !== "/education" &&
        props.location.pathname !== "/stories" &&
        props.location.pathname !== "/paymentfail" &&
        props.location.pathname !== "/paymentsuccess/:id" &&
        props.location.pathname !== "/contactus" &&
        props.location.pathname !== "/solitaires" &&
        props.location.pathname !== "/necklaceMela" &&
        Globalctx &&
        Globalctx.pathName === false &&
        props.location.pathname !== "/homes" && (
          <Route exact={true} component={Stylori} path={"/:listingpage"} />
        )}
      {Globalctx &&
        Globalctx.pathName &&
        loc_PD.length !== "silverjewellery" && (
          <Route
            key="silverListingpage"
            component={SilverListingPage}
            path={window.location.pathname}
          />
        )}
      <Route key="sto" component={stories} exact path={routes.Stories} />

      <Route
        key="Collection"
        component={Collection}
        exact
        path={routes.Collection}
      />
      <Route
        key="Collection"
        component={CollectionPage}
        exact
        path={routes.CollectionPage}
      />

      {props.location.pathname !== "/cart" &&
        props.location.pathname !==
          `/account${"-" + window.location.pathname.split("-")[1]}` &&
        props.location.pathname !== "/savingscheme" &&
        props.location.pathname !== "/aboutus" &&
        props.location.pathname !== "/terms" &&
        props.location.pathname !== "/return" &&
        props.location.pathname !== "/delivery" &&
        props.location.pathname !== "/privacy" &&
        props.location.pathname !== "/contactuspage" &&
        props.location.pathname !== "/sitemap" &&
        props.location.pathname !== "/faq" &&
        props.location.pathname !== "/education" &&
        props.location.pathname !== "/store" &&
        props.location.pathname !== "/blog" &&
        props.location.pathname !== "/loc/:id" &&
        props.location.pathname !== "/careers" &&
        props.location.pathname !== "/careersDetail" &&
        props.location.pathname !== "/solitaires-search" &&
        props.location.pathname !== "/collectionhome" &&
        props.location.pathname !== "/collectionpage" &&
        props.location.pathname !== "/rudramadeviBlog" &&
        props.location.pathname !== "/newsroom" &&
        props.location.pathname !== "/advertising" &&
        props.location.pathname !== "/temple-work" &&
        props.location.pathname !== "/experiences" &&
        props.location.pathname !== "/registers" &&
        props.location.pathname !== "/login" &&
        props.location.pathname !== "/checkout" &&
        props.location.pathname !== "/careers" &&
        props.location.pathname !== "/forgotpassword" &&
        props.location.pathname !== "/resetpassword/:id" &&
        props.location.pathname !== "/changepassword" &&
        props.location.pathname !== "/paymentfail" &&
        props.location.pathname !== "/contactus" &&
        props.location.pathname !== "/paymentsuccess/:id" &&
        props.location.pathname !== "/homes" &&
        props.location.pathname !== "/solitaires" &&
        props.location.pathname !== "/necklaceMela" && (
          <Route exact={true} component={Stylori} path={"/:listingpage"} />
        )}

      {Globalctx && Globalctx.pathName && loc_PD.length > 0 ? (
        <Route exact component={SilverProductDetail} path={paths} />
      ) : (
        <Route exact component={PricingPage} path={paths} />
      )}
      <Route key="cart" exact component={Cart} path={routes.Cart} />
      <Route key="Register" component={Register} exact path={routes.Register} />
      {localStorage.getItem("user_id") ? (
        <Redirect key="stylori-redirect" from="/login" exact to={"/"} />
      ) : (
        <Route
          key="login"
          component={UserLogin}
          exact
          path={routes.UserLogin}
        />
      )}

      {Boolean(localStorage.getItem("user_id")) ? (
        <Route key="Account" component={Account} exact path={routes.Account} />
      ) : (
        <Redirect
          key="stylori-redirect"
          from={routes.Account}
          exact
          to={"/login"}
        />
      )}
      <Route
        key="registers"
        component={UserRegister}
        exact
        path={routes.UserRegister}
      />
      {/* Static Pages */}

      <Route
        key="StoreLocator"
        component={Locator}
        exact
        path={routes.StoreLocator}
      />

      <Route key="Diamonds" component={Diamonds} exact path={routes.Diamonds} />
      <Route
        key="rudramadeviBlog"
        component={rudramadeviBlog}
        exact
        path={routes.rudramadeviBlog}
      />
      <Route key="blog" component={Blog} exact path={routes.Blog} />

      <Route key="HomePage" component={HomeComp} exact path={routes.HomePage} />
      <Route
        key="CollectionHomePage"
        component={CollectionHomePage}
        exact
        path={routes.CollectionHomePage}
      />
      <Route
        key="DigitalMarketing"
        component={DigitalMarketing}
        exact
        path={routes.DigitalMarketing}
      />
      <Route
        key="SavingsPage"
        component={SavingsPage}
        exact
        path={routes.SavingsPage}
      />
      <Route
        key="ExperiencePage"
        component={ExperiencePage}
        exact
        path={routes.ExperiencePage}
      />
      <Route
        key="AdvertisingPage"
        component={AdvertisingPage}
        exact
        path={routes.AdvertisingPage}
      />
      <Route
        key="TempleWorkPage"
        component={TempleWorkPage}
        exact
        path={routes.TempleWorkPage}
      />
      <Route
        key="NewsRoomPage"
        component={NewsRoomPage}
        exact
        path={routes.NewsRoomPage}
      />

      <Route
        key="Solitaires"
        component={Solitaires}
        exact
        path={routes.Solitaires}
      />
      <Route
        key="necklacemela"
        component={NecklaceMela}
        exact
        path={routes.NecklaceMela}
      />
    </Switch>
  );
};
export default withRouter(RouterApp);
