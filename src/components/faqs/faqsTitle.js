import { Grid } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import "./faqs.css";

class FaqsTitle extends React.Component {

  render() {
    return (
      <Grid style={{ marginTop: "4%" }}>
        <Grid item xs={12} className="main">
          <NavLink
            to={"/faqs"}
            activeClassName={"active"}
            style={{ color: "#2F348B", textDecoration: "none" }}
          >
            <Grid className="router">Frequently Asked Questions</Grid>
          </NavLink>
        </Grid>
        <Grid item xs={12} className="main">
          <NavLink
            to={"/deliveryreturns"}
            activeClassName={"active"}
            style={{ color: "#2F348B", textDecoration: "none" }}
          >
            <Grid className="router">Shipping And Returns</Grid>
          </NavLink>
        </Grid>
        <Grid item xs={12} className="main">
          <NavLink
            to={"/productcare"}
            activeClassName={"active"}
            style={{ color: "#2F348B", textDecoration: "none" }}
          >
            <Grid className="router">Product Care</Grid>
          </NavLink>
        </Grid>
        <Grid item xs={12} className="main">
          <NavLink
            to={"/privacypolicy"}
            activeClassName={"active"}
            style={{ color: "#2F348B", textDecoration: "none" }}
          >
            <Grid className="router">Privacy & Cookie Policy</Grid>
          </NavLink>
        </Grid>
        <Grid item xs={12} className="main">
          <NavLink
            to={"/termsconditions"}
            activeClassName={"active"}
            style={{ color: "#2F348B", textDecoration: "none" }}
          >
            <Grid className="router">Terms & Conditions</Grid>
          </NavLink>
        </Grid>
      </Grid>
    );
  }
}
export default FaqsTitle;
