import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  Popper,
  ListItem,
  ListItemText,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { useStyles } from "../styles";
import PropTypes from "prop-types";

import "./../header.css";
// import Checkbox from "components/InputComponents/CheckBox";

function HeaderHoverMenuItem(props) {
  const [opens, setOpens] = React.useState(props.opened);
  const [target, setTarget] = React.useState(props.subMenuTarget);
  const { onMouseLeave, onMouseOver } = props;
  const classes = useStyles();
  useEffect(() => {
    setOpens(props.opened);
    setTarget(props.targetopened);
  });
  const data = [
    { title: "Under 10k" },
    { title: "10k - 20k" },
    { title: "20k-30k" },
    { title: "Above 30k" },
  ];
  const ImageWithText = () => {
    return (
      <Grid
        container
        style={{
          width: 600,
          background: "#fff",
          padding: "10px 10px 20px 10px",
          zIndex: "10000",
        }}
      >
        <Grid item xs={12}>
          <Typography className={classes.listedItemstitle}>
            SHOP BY STYLE
          </Typography>
        </Grid>
        {props.data.imageContainer.slice(0, 4).map((val, index) => {
          return (
            <Grid item xs={3}>
              <Grid
                container
                className={classes.imgcont}
                onClick={() => {
                  window.location.href = val.url;
                }}
                justify="center"
                alignContent="center"
                alignItems="center"
                style={{ cursor: "pointer" }}
              >
                <Grid item style={{ margin: "auto" }}>
                  <Typography
                    style={{ margin: "auto", textAlign: "center" }}
                    className={classes.listedItemsvalue}
                  >
                    {val.content.toUpperCase()}
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    display: "flex",
                  }}
                >
                  {val.img && (
                    <img
                      style={{ width: "65%", margin: "auto" }}
                      src={val.img}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          );
        })}{" "}
        {/* second section */}
        <Grid item xs={12}>
          <Typography className={classes.listedItemstitle}>
            SHOP BY PRICE
          </Typography>
        </Grid>
        {data.map((val, index) => {
          return (
            <Grid item xs={3} className={classes.secondSection}>
              <Grid
                container
                className={classes.imgcont}
                onClick={() => {
                  window.location.href = val.url;
                }}
                justify="center"
                alignContent="center"
                alignItems="center"
                style={{ cursor: "pointer" }}
              >
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                        className={classes.checkbox}
                      />
                    }
                    label={val.title}
                  />
                </FormGroup>
              </Grid>
            </Grid>
          );
        })}{" "}
      </Grid>
    );
  };
  const ImageWithTextMultipleColumns = () => {
    return (
      <Grid
        container
        style={{
          width: 1000,
          background: "#fff",
          padding: "10px 10px 20px 10px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid item xs={6} className={classes.gridmultiplesection}>
            <Grid item xs={12}>
              <Typography className={classes.listedItemstitle}>
                SHOP BY STYLE
              </Typography>
            </Grid>
            <Grid container item xs={12}>
              {props.data.imageContainer.map((val, index) => {
                return (
                  <Grid item xs={3}>
                    <Grid
                      container
                      className={classes.imgcont}
                      onClick={() => {
                        window.location.href = val.url;
                      }}
                      justify="center"
                      alignContent="center"
                      alignItems="center"
                      style={{ cursor: "pointer" }}
                    >
                      <Grid item style={{ margin: "auto" }}>
                        <Typography
                          style={{ margin: "auto", textAlign: "center" }}
                          className={classes.listedItemsvalue}
                        >
                          {val.content.toUpperCase()}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        {val.img && (
                          <img
                            style={{ width: "65%", margin: "auto" }}
                            src={val.img}
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.gridmultiplesection}>
            <Grid container item xs={12}>
              <Grid item xs={4} style={{ padding: "0 6px 0 0px" }}>
                {/* second section */}
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    SHOP BY OCCASSION
                  </Typography>
                </Grid>
                {data.map((val, index) => {
                  return (
                    <Grid item xs={12} className={classes.secondSection}>
                      <Grid
                        container
                        className={classes.imgcont}
                        onClick={() => {
                          window.location.href = val.url;
                        }}
                        // justify="center"
                        alignContent="center"
                        alignItems="center"
                        style={{ cursor: "pointer" }}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={false}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                className={classes.checkbox}
                              />
                            }
                            label={val.title}
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
              <Grid item xs={4} style={{ padding: "0 6px 0 0px" }}>
                {/* second section */}
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    SHOP BY OCCASSION
                  </Typography>
                </Grid>
                {data.map((val, index) => {
                  return (
                    <Grid item xs={12} className={classes.secondSection}>
                      <Grid
                        container
                        className={classes.imgcont}
                        onClick={() => {
                          window.location.href = val.url;
                        }}
                        // justify="center"
                        alignContent="center"
                        alignItems="center"
                        style={{ cursor: "pointer" }}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={false}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                className={classes.checkbox}
                              />
                            }
                            label={val.title}
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
              <Grid item xs={4} style={{ padding: "0 6px 0 0px" }}>
                {/* second section */}
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    SHOP BY OCCASSION
                  </Typography>
                </Grid>
                {data.map((val, index) => {
                  return (
                    <Grid item xs={12} className={classes.secondSection}>
                      <Grid
                        container
                        className={classes.imgcont}
                        onClick={() => {
                          window.location.href = val.url;
                        }}
                        // justify="center"
                        alignContent="center"
                        alignItems="center"
                        style={{ cursor: "pointer" }}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={false}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                className={classes.checkbox}
                              />
                            }
                            label={val.title}
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  const SingleImageWithMultipleColumns = () => {
    return (
      <Grid
        container
        style={{
          width: 600,
          background: "#fff",
          padding: "10px 10px 20px 10px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid item xs={3} className={classes.gridmultiplesection} style={{margin:'auto'}}>
            <Grid container item xs={12}>
              {props.data.imageContainer.slice(0,1).map((val, index) => {
                return (
                  <Grid item xs={12}>
                    <Grid
                      container
                      className={classes.imgcont}
                      onClick={() => {
                        window.location.href = val.url;
                      }}
                      justify="center"
                      alignContent="center"
                      alignItems="center"
                      style={{ cursor: "pointer" }}
                    >
                      <Grid
                        item
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        {val.img && (
                          <img
                            style={{ width: "65%", margin: "auto" }}
                            src={val.img}
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Grid>
          <Grid item xs={9} className={classes.gridmultiplesection}>
            <Grid container item xs={12}>
              <Grid item xs={6} style={{ padding: "0 6px 0 0px" }}>
                {/* second section */}
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    FOR SPECIAL ONE
                  </Typography>
                </Grid>
                {data.map((val, index) => {
                  return (
                    <Grid item xs={12} className={classes.secondSection}>
                      <Grid
                        container
                        className={classes.imgcont}
                        onClick={() => {
                          window.location.href = val.url;
                        }}
                        // justify="center"
                        alignContent="center"
                        alignItems="center"
                        style={{ cursor: "pointer" }}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={false}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                className={classes.checkbox}
                              />
                            }
                            label={val.title}
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
              <Grid item xs={6} style={{ padding: "0 6px 0 0px" }}>
                {/* second section */}
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    GIFTS BY OCCASSION
                  </Typography>
                </Grid>
                {data.map((val, index) => {
                  return (
                    <Grid item xs={12} className={classes.secondSection}>
                      <Grid
                        container
                        className={classes.imgcont}
                        onClick={() => {
                          window.location.href = val.url;
                        }}
                        // justify="center"
                        alignContent="center"
                        alignItems="center"
                        style={{ cursor: "pointer" }}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={false}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                className={classes.checkbox}
                              />
                            }
                            label={val.title}
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid container className={classes.rootsub}>
      <Grid container item xs={12} className={classes.paperdivsub}>
        <Popper
          style={{ border: "1px solid #ccc" }}
          placement={"left-start"}
          open={opens}
          anchorEl={target}
          transition
          className={classes.mouseOverPopoversub}
        >
          <List
            component="nav"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          >
            {props.data && props.data.imageContainer && (
              // <ImageWithText {...props} />
              <SingleImageWithMultipleColumns />
            )}
            {props.data &&
              props.data.onlyText &&
              props.data.onlyText.map((val, index) => (
                <>
                  <ListItem
                    className={classes.listedItemsub}
                    component="li"
                    onClick={() => {
                      window.location.href = val.url;
                    }}
                  >
                    <ListItemText variant>
                      <Typography className={classes.listedItemsvalue2}>
                        {val.content.toUpperCase()}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </>
              ))}
          </List>
        </Popper>
      </Grid>
    </Grid>
  );
}

export default HeaderHoverMenuItem;

HeaderHoverMenuItem.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  listHoverItem: PropTypes.object.isRequired,
  tabdata: PropTypes.object.isRequired,
};
