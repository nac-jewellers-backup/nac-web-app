import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NetworkProvider, GlobalProvider } from "context";
import "./index.css";
import Loading from "screens/Loading";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { lambda_func_front_end } from "./utils";
import Theme from "./Theme.js";
import { withRouter } from "react-router-dom";

import { jewelleryTheme } from "./jewellery_theme";
let jewellery_theme = createTheme(jewelleryTheme);
let silver_jewellery_theme = createTheme(
  require("./silver_jewellery_theme.json")
);
let jewelleryThemes = responsiveFontSizes(jewellery_theme);
let silverThemes = responsiveFontSizes(silver_jewellery_theme);
const RouterApp = React.lazy(() => import("router"));

const theme_func = () => {
  if (window.location.pathname === "/StyloriSilver") {
    return silverThemes;
  } else {
    return jewelleryThemes;
  }
};

class App extends React.Component {
  async componentDidMount() {
    lambda_func_front_end();
  }
  render() {
    return (
      <GlobalProvider>
        <Theme>
          <NetworkProvider>
            <Router>
              <React.Suspense fallback={Loading}>
                <RouterApp />
              </React.Suspense>
            </Router>
          </NetworkProvider>
        </Theme>
      </GlobalProvider>
    );
  }
}

export default withRouter(App);
