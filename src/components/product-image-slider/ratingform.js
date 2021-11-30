import { Button, Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ProductDetailContext } from "context/ProductDetailContext";
import React from "react";
import { withRouter } from "react-router";
import { Input } from "../InputComponents/TextField/Input";
import Ratings from "../rating/rating";
import "./product-images.css";
import styles from "./style";
import useRating from "./userating";
const RatingForm = (props) => {
  return <RatingComponent {...props} />;
};
const RatingComponent = (props) => {
  const { classes } = props;
  // const clear1 = () => {
  //     props && props.clear_rating_onchange && props.clear_rating_onchange(true)
  // }
  const { values, handlers, setValues } = useRating(props);
  const newLocal = 250;

  return (
    <Grid container style={{ marginTop: "10px" }}>
      {/* <Container style={{ paddingLeft: "17px", paddingRight: "17px" }} > */}
      <div
        className={`bg-clr2 ${classes.ratingformgrid}`}
        style={{ padding: "20px" }}
      >
        <form
          id="Resetform"
          action="javascript:void(0)"
          onSubmit={(e) => handlers.handelSubmit(e, props)}
        >
          <Grid container spacing={12}>
            {/* <Grid item lg={1} /> */}
            <Grid item xs={12} lg={12}>
              <div className="rating-form ">
                <h5 className={`rating-form-head ${classes.normalfonts}`}>
                  RATE THE PRODUCT
                </h5>

                <Ratings
                  ratings="starts-review"
                  clear_rating={props.clear_rating}
                  clear_rating_onchange={props.clear_rating_onchange}
                />
                <label className="errtext">
                  {" "}
                  {values.errortext.rateerr ? values.errortext.rateerr : ""}
                </label>
              </div>
              <h6
                className={`rating-form-head ${classes.normalfonts}`}
                style={{ marginBottom: "-3px" }}
              >
                Write your review
              </h6>
              <Input
                margin="normal"
                color="secondary"
                variant="outlined"
                type="text"
                name="title"
                value={values.title}
                maxLength={60}
                placeholder="TITLE"
                className={`rating-form-text ${classes.ratingFormText}`}
                onChange={(e) => handlers.handleChange("title", e.target.value)}
                // helperText="please Enter review title"
                error={values.error && values.error.ratetitle ? true : false}
                // required
              />

              <div
                style={{ width: "100%", color: "#33346D !important" }}
                className={`tool-tips ${classes.normalfonts} ${classes.colorsmallscreen}`}
              >
                Max 60 characters
              </div>
              <label className="errtext">
                {" "}
                {values.errortext.ratetitle ? values.errortext.ratetitle : ""}
              </label>

              <div style={{ padding: "10px 0px" }} class={"bigText"}>
                <TextField
                  variant="outlined"
                  type="text"
                  color="secondary"
                  name="message"
                  fullWidth
                  placeholder="TYPE YOUR REVIEW"
                  className={`rating-form-text ${classes.ratingFormText}`}
                  maxLength={250}
                  value={values.message}
                  multiline={true}
                  rowsMax={4}
                  onChange={(e) =>
                    handlers.handleChange("message", e.target.value)
                  }
                  error={values.error && values.error.ratemsg ? true : false}
                />
              </div>

              {/* <Input
                                margin="normal"
                                variant="outlined"
                                type="text"
                                name="message"
                                placeholder='Your Reviews'
                                className="rating-form-text"
                                maxLength={250}
                                value={values.message}
                                multiline={true}
                                rows={6}
                                rowsMax={4}
                                onChange={e => handlers.handleChange('message', e.target.value)}
                                error={values.error && values.error.ratemsg ? true : false}
                            /> */}
              <div
                className={`tool-tips ${classes.normalfonts} ${classes.colorsmallscreen}`}
              >
                Max 250 characters
              </div>
              <label className="errtext">
                {" "}
                {values.errortext.ratemsg ? values.errortext.ratemsg : ""}
              </label>

              {/* <button type="submit" >rr</button> */}
            </Grid>

            <Grid container spacing={12} style={{ marginTop: "20px" }}>
              <Grid item xs={12} lg={12}>
                <div style={{ float: "right" }}>
                  <Button
                    className={`form-reviews-mob ${classes.fontwhite} ${classes.normalcolorback}`}
                    style={{ boxShadow: "4px 5px 6px #BEBFBF " }}
                    type="submit"
                  >
                    {"Submit".toUpperCase()}
                  </Button>
                  <Button
                    onClick={() => {
                      handlers.clear();
                      props.clear_rating_onchange(true);
                    }}
                    className={`form-cancel-mob ${classes.normalfonts} ${classes.backgwhite}`}
                    style={{ boxShadow: "4px 5px 6px #BEBFBF " }}
                  >
                    Cancel
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* </Container> */}
    </Grid>
  );
};
const Components = (props) => {
  const {
    ProductDetailCtx: { ratingcounts },
  } = React.useContext(ProductDetailContext);
  return <RatingForm {...props} ratingcounts={ratingcounts} />;
};

export default withRouter(withStyles(styles)(Components));
