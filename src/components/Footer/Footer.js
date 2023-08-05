import { Button, Container, Grid, Hidden, Typography } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { SnackBar } from "components/snackbarAlert/SnackBar";

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  navTitle: {
    cursor: "pointer",
    padding: "7px 0px 15px 0px",
    color: "#6b6b6b",
    textDecoration: "none",
    fontSize: "16px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  colorMain: {},
  colorWhiteBackground: {
    backgroundColor: theme.palette.common.white,
  },
  colorWhite: {
    color: "white",
    fontSize: "12px",
  },
  colorBlue: {
    color: theme.palette.primary.main,
    fontSize: "11px",
    padding: "0px 0px 10px 0px",
  },
  paddingSpace: {
    padding: "1% 2%",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  buynowSearch: {
    color: theme.palette.primary.main,
    fontSize: "13px",
    backgroundColor: "#b78231",

    height: "34px",
    border: "1px solid #232a46",
    borderRadius: "0",
    padding: "0px 3px",
  },

  searchButtonFooter: {
    border: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: "10px",
    borderRadius: "0",
    height: "36px",
    width: "100%",
    fontWeight: "400",
    lineHeight: "1.42857143",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "12px",
    },
  },
  spanSizeColor: {
    color: "#808080",
    fontSize: "12px",
  },

  colorWhiteBorder: {
    borderTop: `1px solid ${theme.palette.common.white}`,
  },
  topConatinerfooter: {
    color: "#6b6b6b",
    fontSize: "12px",
    lineHeight: "16px",

    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "750px",
      fontSize: "12px",
    },
    [theme.breakpoints.up("md")]: {
      width: "970px",
      fontSize: "13px",
      lineHeight: "19px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "1170px",
      fontSize: "13px",
      lineHeight: "19px",
    },
  },
  buttonConatiner: {
    width: "350px",
    flexGrow: 1,
  },
  messageconatainer: {
    padding: "15px 15px 15px 15px",
    [theme.breakpoints.up("sm")]: {
      padding: "30px 15px 15px 15px",
    },
  },
  footerSocialIcons: {
    width: "100%",

    [theme.breakpoints.between(1280, 1340)]: {
      textAlign: "left",
    },
  },
  textFieldEmail: {
    width: "100%",
    paddingLeft: 10,
    backgroundColor: "#fff",
    textAlign: "center",

    "& .MuiInput-underline": {
      "&::before": {
        borderBottom: "none",
      },
      "&::after": {
        borderBottom: "none",
      },
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled)": {
      "&::before": {
        borderBottom: "none",
      },
      "&::after": {
        borderBottom: "none",
      },
    },
  },
  input: {
    color: " rgba(58, 69, 120, 1)",
    border: "0px",
    height: "34px",
    padding: "0px 3px",
    fontSize: "12px",
    borderRadius: "0",
    textAlign: "center",
    width: "300px",
    margin: "10px 0px",
    "&::placeholder": {
      /* Chrome, Firefox, Opera, Safari 10.1+ */ paddingLeft: 5,
      fontSize: 13,
    },
    "&:-ms-input-placeholder": {
      /* Internet Explorer 10-11 */ paddingLeft: 5,
      fontSize: 13,
    },
    "&::-ms-input-placeholder": {
      /* Microsoft Edge */ paddingLeft: 5,
      fontSize: 13,
    },
  },
  textFieldEmailMobile: {
    width: "100%",
    paddingLeft: 5,
    backgroundColor: "#fff",
    textAlign: "center",

    "& .MuiInput-underline": {
      "&::before": {
        borderBottom: "none",
      },
      "&::after": {
        borderBottom: "none",
      },
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled)": {
      "&::before": {
        borderBottom: "none",
      },
      "&::after": {
        borderBottom: "none",
      },
    },
  },
  MobileInput: {
    "&::placeholder": {
      /* Chrome, Firefox, Opera, Safari 10.1+ */ paddingLeft: 5,
      fontSize: 10,
    },
    "&:-ms-input-placeholder": {
      /* Internet Explorer 10-11 */ paddingLeft: 5,
      fontSize: 10,
    },
    "&::-ms-input-placeholder": {
      /* Microsoft Edge */ paddingLeft: 5,
      fontSize: 10,
    },
  },
  linkText: {
    fontSize: "11px",
    color: "#6b6b6b",
    textDecoration: "none",
  },
  linkTextm: {
    fontSize: "9px",
    color: "#6b6b6b",
    textDecoration: "none",
  },
  linkTextmlg: {
    fontSize: "14px",
    color: "#6b6b6b",
    fontWeight: 549,
    textDecoration: "none",
  },

  headingMobile: {
    fontSize: "12px",
    color: "#6b6b6b",
    fontWeight: "800",
    margin: "0px !important",
  },
  bodyMobile: {
    padding: "0px",
    display: "block",
  },
  linkMobile: {
    fontSize: "11px",
    color: "#6b6b6b",
    lineHeight: "1.2rem",
  },
  accordionEdit: {
    padding: "0px",
    height: "30px",
  },
  accodianTotal: {
    margin: "5px 0 !important",
  },
  iconColor: {
    "& .MuiSvgIcon-root": {
      fill: "#6b6b6b !important",
    },
  },
  line: {
    border: "0.5px solid #d3d0d0",
    width: "100%",
    backgroundColor: "#d3d0d0",
    marginBottom: "6px",
  },
  social: {
    margin: "0px 10px",
    position: "relative",
  },
  signup: {
    background: "#2F348B ",
    color: "white",
    fontSize: "15px",
    boxShadow: "2px 3px 6px 2px #888888",
    borderRadius: "0",
    "&:hover": {
      background: "#2F348B ",
      color: "white",
    },
  },
  signupdiv: {
    display: "flex",
    justifyContent: "flex-end",
  },
  parentdiv: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  socialdiv: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },
  rights: {
    fontSize: "15px",
    color: "#6b6b6b",
    float: "left",
  },
}));

export default function Footer(props) {
  const [state, setState] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [stateClassname, setStateClassname] = React.useState("snackBar");

  const classes = useStyles();
  const footerData = [
    {
      row: [
        {
          url: "/aboutus",
          heading: "About Us",
        },

        {
          url: "/blogsPage",
          Title: "Blog",
        },
        {
          url: "/templeWork",
          Title: "Temple Work",
        },
        {
          url: "/newsroom",
          Title: "In The News",
        },
        {
          url: "/advertising",
          Title: "Advertisements",
        },
      ],
    },
    {
      row: [
        {
          url: "#",
          heading: "Know Your Jewellery",
        },
        {
          url: "/collections",
          Title: "Collections",
        },
        {
          url: "/productcare?pro=diamond",
          Title: "Diamond Guide",
        },
        {
          url: "/birthStones",
          Title: "Birthstones Guide",
        },
        {
          url: "/productcare",
          Title: "Jewellery Care",
        },
      ],
    },

    {
      row: [
        {
          url: "/account-profile",
          heading: "Customer Service",
        },

        {
          url: "/account-allorders",
          Title: "Track Your Order",
        },
        {
          url: "/return",
          Title: "30 Day Return",
        },
        {
          Title: 'Experiences',
          url: '/experiences'
        }
      ],
    },
    {
      row: [
        {
          url: "/contactus",
          heading: "Contact Us",
        },

        {
          url: "/contactus",
          Title: "+91 44 4399 6666 - Customer Care",
        },
        {
          url: "mailto:care@nacjewellers.com",
          Title: "care@nacjewellers.com - Email",
        },
        {
          url: "https://wa.me/9597457555",
          Title: "+91 95974 57555 - WhatsApp",
        },
        {
          url: "/careers",
          Title: "Careers",
        },
      ],
    },
  ];
  const MobilefooterData1 = [
    {
      url: "/aboutus",
      Title: "About Us",
      content: [
        {
          subTitle: "Our Story",
          url: "/blogsPage",
        },
        {
          subTitle: "Temple Work",
          url: "/templeWork",
        },
        {
          subTitle: "In The News",
          url: "/newsroom",
        },
        {
          subTitle: "Advertisements",
          url: "/advertising",
        },
      ],
    },
    {
      url: "/productcare",
      Title: "Know Your Jewellery",
      content: [
        {
          subTitle: "Collections",
          url: "/collections",
        },
        {
          subTitle: "Diamond Guide",
          url: "/productcare?pro=diamond",
        },
        {
          subTitle: "Birthstones Gudide",
          url: "/birthStones",
        },
        {
          subTitle: "Jewellery Care",
          url: "/productcare",
        },
      ],
    },
    {
      url: "/newsroom",
      Title: "Customer Service",
      content: [
        {
          subTitle: "Track Your Order",
          url: "/account-allorders",
        },
        {
          subTitle: "30 Day Return",
          url: "/account-allorders",
        },
        {
          subTitle: 'Experiences',
          url: '/experiences'
        }
      ],
    },
    {
      url: "/contactus",
      Title: "Contact us",
      content: [
        {
          subTitle: "+91 44 4399 6666 - Customer Care",
          url: "",
        },
        {
          subTitle: "care@nacjewellers.com - Email",
          url: "",
        },
        {
          subTitle: "+91 95974 57555",
          url: "",
        },
        {
          subTitle: "Careers",
          url: "",
        },
      ],
    },
  ];

  
 
  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ backgroundColor: "#E0E1E1" }}
    >
      <Hidden only={["sm", "xs"]}>
        <Container>
          <Grid container item xs={12} style={{ marginTop: 40 }}>
            <Grid container item xs={12} alignItems="center">
              <Grid
                container
                item
                xs={12}
                style={{ color: "white", fontSize: "14px" }}
              >
                {footerData.map((data, i) => {
                  return (
                    <Grid item xs={3}>
                      {data.row.map((v, s) => {
                        return (
                          <Grid container>
                            <Link
                              className={classes.navTitle}
                              onClick={() => {
                                window.location.href = v.url;
                              }}

                            // href="#"
                            >
                              <b style={{ fontSize: "16px" }}>{v.heading}</b>
                            </Link>

                            <Link
                              className={classes.navTitle}
                              onClick={() => {
                                window.location.href = v.url;
                              }}

                            // href="#"
                            >
                              <span style={{ fontSize: "14px" }}>
                                {" "}
                                {v.Title}
                              </span>
                            </Link>
                          </Grid>
                        );
                      })}
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={9}>
              <Grid className={classes.parentdiv} item xs={4}>
                <div>
                  <div className={classes.socialdiv}>
                    <div className={classes.social}>
                      <a
                        target="_blank"
                        el="noopener noreferrer"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      >
                        <img
                          src={
                            "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_footer/Path+52.svg"
                          }
                          alt="img"
                          loading="lazy"
                          style={{
                            width: "40px",
                            height: "auto",
                            borderRadius: "20px 20px",
                            boxShadow: "2px 3px 6px 2px #888888",
                          }}
                        />
                      </a>
                    </div>
                    <div className={classes.social}>
                      <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        el="noopener noreferrer"
                        href={`http://www.twitter.com/share?url=${window.location.href}`}
                      >
                       
                        <img
                          src={
                            "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_footer/Path+53.svg"
                          }
                          alt="img"
                          loading="lazy"
                          style={{
                            width: "40px",
                            height: "auto",
                            borderRadius: "20px 20px",
                            boxShadow: "2px 3px 6px 2px #888888",
                          }}
                        />
                      </a>
                    </div>
                    <div className={classes.social}>
                      <a
                        target="_blank"
                        el="noopener noreferrer"
                        href="https://instagram.com/stylorilove"
                      >
                        <i
                          style={{
                            fontSize: "32px",
                            color: "#2F348B",
                            position: "absolute",
                            top: "5px",
                            right: "7px",
                          }}
                          className="fa "
                        >
                          &#xf16d;
                        </i>
                        <img
                          src={
                            "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_footer/Path+54.svg"
                          }
                          alt="img"
                          loading="lazy"
                          style={{
                            width: "40px",
                            height: "auto",
                            borderRadius: "20px 20px",
                            boxShadow: "2px 3px 6px 2px #888888",
                          }}
                        />
                      </a>
                    </div>
                    <div className={classes.social}>
                      <a
                        target="_blank"
                        el="noopener noreferrer"
                        href="https://www.youtube.com/c/stylori"
                      >
                        <i
                          style={{
                            position: "absolute",
                            fontSize: "13px",
                            top: "14px",
                            left: "17px",
                            color: "#2F348B",
                          }}
                          className="fa"
                          aria-hidden="true"
                        >
                          &#xf04b;
                        </i>
                        <img
                          src={
                            "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_footer/Path+57.svg"
                          }
                          alt="img"
                          loading="lazy"
                          style={{
                            width: "40px",
                            height: "auto",
                            borderRadius: "20px 20px",
                            boxShadow: "2px 3px 6px 2px #888888",
                          }}
                        />
                      </a>
                    </div>
                    <div className={classes.social}>
                      <a
                        target="_blank"
                        el="noopener noreferrer"
                        href="https://in.pinterest.com/stylori2015/"
                      >
                        
                        <img
                          src={
                            " https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_footer/nQjOPg.tif.svg"
                          }
                          alt="img"
                          loading="lazy"
                          style={{
                            width: "40px",
                            height: "auto",
                            borderRadius: "20px 20px",
                            boxShadow: "2px 3px 6px 2px #888888",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  {/* </Grid> */}
                </div>
              </Grid>
            </Grid>
            <Grid item xs={3} style={{ margin: "10px 0 10px 0" }}>
              <Button
                style={{
                  background: "#2F348B",
                  color: "white",
                  fontSize: "14px",
                  borderRadius: "0px",
                  fontWeight: "bold",
                  boxShadow: "4px 4px 4px #A5A4A5",
                }}
                onClick={() => {
                  window.location.href = "/store";
                }}
              >
                &nbsp;Store Locator&nbsp;
              </Button>
            </Grid>

            <Grid
              container
              direction="row"
              item={12}
              style={{
                alignItems: "center",
                padding: "35px 0px",
              }}
              spacing={1}
            >
              <Grid item lg={6}>
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  style={{
                    display: "flex",
                    color: "#6b6b6b",
                  }}>
                  {" "}
                  <Grid item>
                    <Link className={classes.linkTextmlg} onClick={() => {window.location.href = "/siteMap"}}>
                      SITEMAP &nbsp;{" "}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link className={classes.linkTextmlg} to="/termsconditions">
                      |&nbsp; TERMS & CONDITION &nbsp;{" "}
                    </Link>
                  </Grid>{" "}
                  <Grid item>
                    <Link className={classes.linkTextmlg} to="/faqs">
                      |&nbsp; FAQS &nbsp;{" "}
                    </Link>
                  </Grid>{" "}
                  <Grid item>
                    <Link className={classes.linkTextmlg} to="/delivery">
                      |&nbsp; DELIVERY INFO &nbsp;{" "}
                    </Link>
                  </Grid>{" "}
                  <Grid item>
                    <Link className={classes.linkTextmlg} to="/privacy">
                      |&nbsp; PRIVACY POLICY &nbsp;
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={3}>
                <p className={classes.rights}>
                  @NAC Jewellers Pvt.Ltd. All rights reserved
                </p>
              </Grid>
              <Grid item lg={3} className={"imageClass"}>
                <img
                  src={
                    "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/k77ABP.tif%402x.webp"
                  }
                  alt="img"
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Hidden>

      {/* ------------------------------------------------------------------------------------------------------------ */}
      <Hidden only={["lg", "xl", "md"]}>
        <Grid container item className={classes.topConatinerfooter} xs={12}>
          <Grid
            container
            direction="row"
            item
            xl={5}
            lg={5}
            md={5}
            xs={10}
            sm={10}
            spacing={0.5}
            style={{ margin: "auto", paddingTop: "16px", display: "block" }}
          >
            {MobilefooterData1.map((data) => (
              <Accordion
                style={{
                  backgroundColor: "rgb(224, 225, 225)",
                  boxShadow: "none",
                  margin: "0px !important",
                }}
                classes={{ expanded: classes.accodianTotal }}
              >
                <AccordionSummary
                  expandIcon={
                    <ArrowDropDownIcon
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "#6b6b6b",
                      }}
                      color="primary"
                      className={classes.iconColor}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{
                    padding: "0px !important",
                    minHeight: "0px",
                    margin: "0px !important",
                  }}
                  classes={{
                    root: classes.accordionEdit,
                    expanded: classes.accordionExpand,
                  }}
                >
                  <Typography className={classes.headingMobile}>
                    {data.Title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.bodyMobile}>
                  <div className={classes.line}></div>
                  {data.content.map((data2) => (
                    <Typography
                      className={classes.linkMobile}
                      onClick={() => {
                        window.location.href = data2.url;
                      }}
                      href="#"
                    >
                      {data2.subTitle}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          <Grid
            item
            sm={12}
            xs={12}
            style={{ textAlign: "center", margin: "10px 0 10px 0" }}
          >
            <Button
              style={{
                background: "#2F348B ",
                color: "white",
                fontSize: "11px",
                borderRadius: "0px",
              }}
              onClick={() => {
                window.location.href = "/store";
              }}
            >
              Store Locator
            </Button>
          </Grid>

          <Grid
            container
            item
            xs={12}
            className={`${classes.colorWhite} ${classes.colorMain}`}
            style={{ padding: "0px 15px 15px 15px", lineHeight: "16px" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              className="footer-icons"
              style={{
                paddingTop: "6px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                class="valuesallow"
                style={{ textDecoration: "none" }}
                target="_blank"
                el="noopener noreferrer"
                href={`http://www.twitter.com/share?url=${window.location.href}`}
              >
                <i
                  style={{
                    fontSize: "24px",
                    color: "#434e77",
                    paddingLeft: "3px",
                  }}
                  className="fa"
                >
                  &#xf099;
                </i>{" "}
              </a>
              <a
                class="valuesallow"
                target="_blank"
                el="noopener noreferrer"
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              >
                <i
                  style={{
                    fontSize: "24px",
                    color: "#434e77",
                    paddingLeft: "7%",
                  }}
                  className="fa "
                >
                  &#xf09a;
                </i>
              </a>
              <a
                class="valuesallow"
                target="_blank"
                el="noopener noreferrer"
                href="https://in.pinterest.com/stylori2015/"
              >
                <i
                  style={{
                    fontSize: "24px",
                    color: "#434e77",
                    paddingLeft: "7%",
                  }}
                  className="fa "
                >
                  &#xf231;
                </i>
              </a>
              <a
                class="valuesallow"
                target="_blank"
                el="noopener noreferrer"
                href="https://instagram.com/stylorilove"
              >
                <i
                  style={{
                    fontSize: "24px",
                    color: "#434e77",
                    paddingLeft: "7%",
                  }}
                  className="fa "
                >
                  &#xf16d;
                </i>
              </a>
              <a
                class="valuesallow"
                target="_blank"
                el="noopener noreferrer"
                href="https://www.youtube.com/c/stylori"
              >
                <i
                  style={{
                    fontSize: "24px",
                    color: "#434e77",
                    paddingLeft: "7%",
                  }}
                  className="fa "
                >
                  &#xf167;
                </i>
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.colorMain}
          item
          xs={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#6b6b6b",
            fontSize: "11px",
            padding: "8px 0px",
          }}
        >
          © NAC Jewellers Pvt.Ltd. All rights reserved.
        </Grid>
        <Grid
          container
          className={classes.colorMain}
          item
          xs={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#6b6b6b",
            fontSize: "11px",
            padding: "8px 0px",
          }}
        >
          {" "}
          <Grid item>
            <Link className={classes.linkTextm} to="/siteMap">
              SITEMAP &nbsp;{" "}
            </Link>
          </Grid>
          <Grid item>
            <Link className={classes.linkTextm} to="/termsconditions">
              |&nbsp; TERMS & CONDITION &nbsp;{" "}
            </Link>
          </Grid>{" "}
          <Grid item>
            <Link className={classes.linkTextm} to="/faqs">
              |&nbsp; FAQS &nbsp;{" "}
            </Link>
          </Grid>{" "}
          <Grid item>
            <Link className={classes.linkTextm} to="/delivery">
              |&nbsp; DELIVERY INFO &nbsp;{" "}
            </Link>
          </Grid>{" "}
          <Grid item>
            <Link className={classes.linkTextm} to="/privacy">
              |&nbsp; PRIVACY POLICY &nbsp;
            </Link>
          </Grid>
        </Grid>
      </Hidden>

      <SnackBar
        handleClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        classNameCloseIcon={"closeIcon"}
        classNames={stateClassname}
        message={message}
        open={open}
      />
    </Grid>
  );
}
