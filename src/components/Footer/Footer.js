import React from "react";

import {
  Grid,
  Button,
  Hidden,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import cartoonFooter from "../../assets/cartoonFooter.png";
import "./Footer.css";
import styloriLogo from "../../assets/Stylorilogo.svg";
import { API_URL } from "config";
import { SnackBar } from "components/snackbarAlert/SnackBar";
import { Link } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  navTitle: {
    cursor: "pointer",
    padding: "7px 0px 6px 0px",
    color: "#6b6b6b",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  colorMain: {
    // backgroundColor: "#b78231",
  },
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
    // width: '100%',
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
    // backgroundColor: "#b78231",
    // padding: "3% 0px 2% 0px",
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
}));

export default function Footer(props) {
  const silver = props.silver;
  const [state, setState] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [stateClassname, setStateClassname] = React.useState("snackBar");

  const classes = useStyles();
  // const footerData = [
  //     {
  //         url: "aboutus",
  //         Title: "About Us"
  //     },
  //     {
  //         url: "/store",
  //         Title: "Store Locator"
  //     },
  //     {
  //         url: "/contactus",
  //         Title: "Contact"
  //     },
  //     {
  //         url: "/privacy",
  //         Title: "Privacy Policy"
  //     },

  // ]
  const footerData1 = [
    {
      url: "/aboutus",
      Title: "About Us",
    },
    {
      url: "/stories",
      Title: "Our Story",
    },
    {
      url: "/temple-work",
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
  ];
  const footerData2 = [
    {
      url: "#",
      Title: "Know Your Jewellery",
    },
    {
      url: "/collections",
      Title: "Collections",
    },
    {
      url: "/",
      Title: "Diamond Guide",
    },
    {
      url: "/",
      Title: "Birthstones Guide",
    },
    {
      url: "/",
      Title: "Caring For Your Jewellery",
    },
  ];
  const footerData3 = [
    {
      url: "C",
      Title: "Customer Service",
    },
    {
      url: "",
      Title: "Track Your Order",
    },
    {
      url: "",
      Title: "30 Day Return",
    },
    // {
    //   url:
    //     "https://www.google.co.in/maps/@13.0457285,80.2325498,3a,75y,281.19h,87.03t/data=!3m7!1e1!3m5!1siBMPPhrps9EAAAQ0H3M5OQ!2e0!3e2!7i13312!8i6656!6m1!1e1",
    //   Title: "360 ° Store View",
    // },
  ];
  const footerData4 = [
    {
      url: "/contactus",
      Title: "Contact Us",
    },
    {
      url: "",
      Title: "+91 44 4399 6666 - Customer Care",
    },
    {
      url: "",
      Title: "care@nacjewellers.com - Email",
    },
    {
      url: "",
      Title: "+91 95974 57555 - WhatsApp",
    },
    {
      url: "/careersPage",
      Title: "Careers",
    },
  ];
  const MobilefooterData1 = [
    {
      url: "/aboutus",
      Title: "About Us",
      content: [
        {
          subTitle: "Our Story",
          url: "/stories",
        },
        {
          subTitle: "Temple Work",
          url: "/temple-work",
        },
        {
          subTitle: "In The News",
          url: "/temple-work",
        },
        {
          subTitle: "Advertisements",
          url: "/temple-work",
        },
      ],
    },
    {
      url: "/careers",
      Title: "Know Your Jewellery",
      content: [
        {
          subTitle: "Collections",
          url: "/stories",
        },
        {
          subTitle: "Diamond Guide",
          url: "/temple-work",
        },
        {
          subTitle: "Birthstones Gudide",
          url: "/temple-work",
        },
        {
          subTitle: "Caring For Your Jewellery",
          url: "/temple-work",
        },
      ],
    },
    {
      url: "/newsroom",
      Title: "Customer Service",
      content: [
        {
          subTitle: "Track Your Order",
          url: "/stories",
        },
        {
          subTitle: "30 Day Return",
          url: "/temple-work",
        },
      ],
    },
    {
      url: "/advertising",
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
  const MobilefooterData2 = [
    {
      url: "/store",
      Title: "Store Locator",
    },
    {
      url: "/education",
      Title: "Education",
    },
    {
      url: "/sitemap",
      Title: "Sitemap",
    },
    {
      url: "/contactus",
      Title: "Contact",
    },
    {
      url: "",
      Title: "Track Order",
    },
  ];
  const MobilefooterData3 = [
    {
      url: "/temple-work",
      Title: "Temple Work",
    },
    {
      url: "/termsconditions",
      Title: "Terms & Conditions",
    },
    {
      url: "https://www.google.co.in/maps/@13.0457285,80.2325498,3a,75y,281.19h,87.03t/data=!3m7!1e1!3m5!1siBMPPhrps9EAAAQ0H3M5OQ!2e0!3e2!7i13312!8i6656!6m1!1e1",
      Title: "360 ° Store View",
    },
    {
      url: "/faqs",
      Title: "FAQ",
    },
    {
      url: "/delivery",
      Title: "Delivery Info",
    },
  ];
  const status = (response) => {
    if (
      (response.status >= 200 && response.status < 300) ||
      response.status === 409
    ) {
      if (response.status === 409) setStateClassname("snackBarError");
      else setStateClassname("snackBar");
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  const json = (response) => {
    return response.json();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChage = (e) => {
    setState(e.target.value);
    var element = document.getElementById("_button");
    var element_input = document.getElementById("_input");
    element_input.classList.remove("error");
    element.classList.remove("error");
  };
  const handleEmail = (e) => {
    var element = document.getElementById("_button");
    var element_input = document.getElementById("_input");
    element_input.classList.remove("error");
    element.classList.remove("error");
    var emailvld =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!document.getElementById("_input").value.length > 0) {
      element_input.classList.add("error");
      element.classList.add("error");
      return;
    } else if (
      !Boolean(document.getElementById("_input").value.match(emailvld))
    ) {
      element_input.classList.add("error");
      element.classList.add("error");
      return;
    } else if (
      document.getElementById("_input").value.length > 0 &&
      document.getElementById("_input").value.match(emailvld)
    ) {
      fetch(`${API_URL}/addemailsubscription`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state,
        }),
      })
        .then(status)
        .then(json)
        .then(async (val) => {
          setMessage(val.message);
          setOpen(true);
        });
    }
  };
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ marginTop: "30px", backgroundColor: "#efefef" }}
    >
      <Hidden only={["sm", "xs"]}>
        {/* <Grid className={"containlarge"}>
                   
                    <Grid container item style={{ padding: '15px 0px 15px 0px' }}>
                       
                        <Grid container item xs={4} className={classes.topConatinerfooter} >
                        <Grid container item className={classes.buttonConatiner} xs={7}>
                            <Grid item style={{ width: "260px" }}>
                                <input
                                    value={state}
                                    id="_input"
                                    style={{ width: "255px" }}
                                    type="email"
                                    onInvalid={(e) => { e.preventDefault() }}
                                    onChange={(e) => handleChage(e)}
                                    placeholder='Email address'
                                    className={`${classes.buynowSearch}`}
                                />
                            </Grid>
                            <Grid item>
                                <Button type="submit" id="_button" className={`${classes.searchButtonFooter}`} onClick={(e) => { return handleEmail(e) }}>Stay Informed</Button>
                               </Grid>
                        </Grid>
                        <Grid xs={5} item container style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: "10px" }} className="footer-icons">
                            <Grid item style={{ width: "100%", textAlign: "end" }}>
                                <a style={{ textDecoration: "none" }} target="_blank" href={`http://www.twitter.com/share?url=${window.location.href}`}>
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '3px', }} className="fa">&#xf099;</i> </a>
                                <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf09a;</i></a>
                                <a target="_blank" href="https://in.pinterest.com/stylori2015/">
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf231;</i></a>
                                <a target="_blank" href="https://instagram.com/stylorilove">
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf16d;</i></a>
                                <a target="_blank" href="https://www.youtube.com/c/stylori">
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf167;</i></a>
                            </Grid>
                        </Grid>

                    </Grid>
                    </Grid>
                </Grid>F
  */}
        <Container>
          <Grid container item xs={12} style={{ marginTop: 20 }}>
            <Grid container item xs={12} alignItems="center">
              <Grid
                container
                item
                xs={12}
                style={{ color: "white", fontSize: "13px" }}
              >
                <Grid item xs={3}>
                  {footerData1.map((data) => {
                    return (
                      <Grid container>
                        <Link
                          className={classes.navTitle}
                          onClick={() => {
                            window.location.href = data.url;
                          }}
                          style={{
                            fontWeight: data.Title === "About Us" ? "800" : "",
                          }}
                          // href="#"
                        >
                          {data.Title}
                        </Link>
                      </Grid>
                    );
                  })}
                </Grid>
                <Grid item xs={3}>
                  {footerData2.map((data) => {
                    return (
                      <Grid container>
                        <Link
                          className={classes.navTitle}
                          onClick={() => {
                            window.location.href = data.url;
                          }}
                          style={{
                            fontWeight:
                              data.Title === "Know Your Jewellery" ? "800" : "",
                          }}
                          href="#"
                        >
                          {data.Title}
                        </Link>
                      </Grid>
                    );
                  })}
                </Grid>
                <Grid item xs={3}>
                  {footerData3.map((data) => {
                    return (
                      <Grid container>
                        <Link
                          className={classes.navTitle}
                          onClick={() => {
                            window.location.href = data.url;
                          }}
                          style={{
                            fontWeight:
                              data.Title === "Customer Service" ? "800" : "",
                          }}
                          href="#"
                        >
                          {data.Title}
                        </Link>
                      </Grid>
                    );
                  })}
                </Grid>
                <Grid item xs={3}>
                  {footerData4.map((data) => {
                    return (
                      <Grid container>
                        <Link
                          className={classes.navTitle}
                          onClick={() => {
                            window.location.href = data.url;
                          }}
                          style={{
                            fontWeight:
                              data.Title === "Contact Us" ? "800" : "",
                          }}
                          href="#"
                        >
                          {data.Title}
                        </Link>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid container style={{ display: "flex", padding: "15px 0px" }}>
                <Grid container xs={9} style={{ width: "100%" }}>
                  <Grid item className={"imageClass"}>
                    <Grid item className={classes.footerSocialIcons}>
                      <a
                        target="_blank"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      >
                        <i
                          style={{
                            fontSize: "24px",
                            color: "#434e77",
                            paddingLeft: "3px",
                          }}
                          className="fa "
                        >
                          &#xf09a;
                        </i>
                      </a>
                      <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        href={`http://www.twitter.com/share?url=${window.location.href}`}
                      >
                        <i
                          style={{
                            fontSize: "24px",
                            color: "#434e77",
                            paddingLeft: "5%",
                          }}
                          className="fa"
                        >
                          &#xf099;
                        </i>{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://instagram.com/stylorilove"
                      >
                        <i
                          style={{
                            fontSize: "24px",
                            color: "#434e77",
                            paddingLeft: "5%",
                          }}
                          className="fa "
                        >
                          &#xf16d;
                        </i>
                      </a>
                      <a
                        target="_blank"
                        href="https://in.pinterest.com/stylori2015/"
                      >
                        <i
                          style={{
                            fontSize: "24px",
                            color: "#434e77",
                            paddingLeft: "5%",
                          }}
                          className="fa "
                        >
                          &#xf231;
                        </i>
                      </a>

                      <a
                        target="_blank"
                        href="https://www.youtube.com/c/stylori"
                      >
                        <i
                          style={{
                            fontSize: "24px",
                            color: "#434e77",
                            paddingLeft: "5%",
                          }}
                          className="fa "
                        >
                          &#xf167;
                        </i>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container xs={3}>
                  <Button
                    style={{
                      background: "#33366D",
                      color: "white",
                      fontSize: "11px",
                    }}
                  >
                    Store Locator
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                item={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0px",
                }}
              >
                <Grid container xs={4}>
                  <Grid item>
                    <Link className={classes.linkText} to="/sitemap">
                      SITEMAP &nbsp;{" "}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link className={classes.linkText} to="/termsconditions">
                      |&nbsp; TERMS & CONDITION &nbsp;{" "}
                    </Link>
                  </Grid>{" "}
                  <Grid item>
                    <Link className={classes.linkText} to="/faqs">
                      |&nbsp; FAQS &nbsp;{" "}
                    </Link>
                  </Grid>{" "}
                  <Grid item>
                    <Link className={classes.linkText} to="/delivery">
                      |&nbsp; DELIVERY INFO &nbsp;{" "}
                    </Link>
                  </Grid>{" "}
                  <Grid item>
                    <Link className={classes.linkText} to="/privacy">
                      |&nbsp; PRIVACY POLICY &nbsp;
                    </Link>
                  </Grid>
                </Grid>
                <Grid container style={{ justifyContent: "center" }} xs={4}>
                  <Grid item>
                    <p style={{ fontSize: "13px", color: "#6b6b6b" }}>
                      @NAC Jewellers Pvt.Ltd. All rights reserved
                    </p>
                  </Grid>
                </Grid>
                <Grid container xs={4}>
                  <Grid item className={"imageClass"}>
                    <img
                      src={
                        "https://assets.stylori.com/images/static/footer.png"
                      }
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4}>
              <Grid
                xs={12}
                item
                container
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "10px",
                }}
                className="footer-icons"
              ></Grid>
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
                  backgroundColor: "rgb(239, 239, 239)",
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

            {/* <Grid container item xs={3} style={{ backgroundColor: 'colorMain', fontSize: '12px' }} alignItems="center" className={`${classes.colorWhite}`}>
                            {
                                footerData4.map(data => {
                                    return (
                                        <Grid item xs={12} sm={12} container  style={{ padding: '2px 0px 8px 0px' }} onClick={() => { window.location.href = data.url }} href="#">
                                            {data.Title}
                                        </Grid>
                                    )
                                })
                            }
                        </Grid> */}
          </Grid>
          {/* <Grid container className={classes.messageconatainer}>
                        <Grid container style={{ display: 'flex', justifyContent: 'center', padding: "6px 0px 0px 0px" }}>
                            <Grid item >
                                <input
                                    value={state}
                                    id="_input"
                                    type="email"
                                    onInvalid={(e) => { e.preventDefault() }}
                                    // ref={this._inputRef}
                                    onChange={(e) => handleChage(e)}
                                    placeholder='Email address'
                                    className={`${classes.buynowSearch}`}
                                />
                            </Grid>
                            <Grid item >
                                <Button type="submit" id="_button" className={`${classes.searchButtonFooter}`} onClick={(e) => handleEmail(e)}>Stay Informed</Button>
                            </Grid>
                        </Grid>
                    </Grid> */}

          <Grid
            item
            sm={12}
            xs={12}
            style={{ textAlign: "center", margin: "10px 0 10px 0" }}
          >
            <Button
              style={{
                background: "#33366D",
                color: "white",
                fontSize: "11px",
                borderRadius: "0px",
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
