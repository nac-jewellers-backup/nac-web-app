import { Grid, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import Slideshow from "../Carousel/carosul";
import "./index.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fff",
    padding: "0px 15px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px",
    },
  },
  [theme.breakpoints.up("lg")]: {
    root: {
      // width: "1170px !important",
      margin: "auto",
      backgroundColor: "#fff",
      padding: "0px 0px 0px 10px",
    },
  },
  [theme.breakpoints.only("xs")]: {
    imgcoinsm: {
      verticalAlign: "middle",
      width: "157px !important",
      height: "157px !important",
      margin: "auto",
    },
  },
  [theme.breakpoints.only("sm")]: {
    imgcoinsm: {
      verticalAlign: "middle",
      width: "144px !important",
      height: "144px !important",
      margin: "auto",
    },
  },

  [theme.breakpoints.down("sm")]: {
    middlecontainersm: {
      marginLeft: "0 !important",
      marginRight: "0 !important",
      padding: "0px 5px",
    },
    containerRoot: {
      width: "100%",
      backgroundImage: "none !important",
      // boxShadow: "0 0 5px #888 !important",
      border: "1px solid #8080804d",
      boxShadow: "4px 4px 4px #bebfbf",
    },
    smleftGrid: {
      marginTop: "50% !important",
    },
    Button: {
      fontSize: "9px !important",
      backgroundColor: "#2F348B",
      /* margin-top: 18px !important; */
      marginTop: "3px !important",
      color: "#fff",
      borderFadius: "0px",
      padding: "7px 15px",
      borderColor: "#ccc",
      "&:hover": {
        backgroundColor: "#454f7a",
      },
    },
  },
  [theme.breakpoints.up("sm")]: {
    middlecontainersm: {
      marginLeft: "25% !important",
      marginRight: "25% !important",
      padding: "0px 5px",
    },
    smleftGrid: {
      marginTop: "21% !important",
    },
  },
  customerName: {
    color: "#787878",
    textTransform: "capitalize",
    fontWeight: "normal",
    fontSize: "18px",
  },
  containerRoot: {
    width: "100%",
    // backgroundImage:
    //   "url(https://alpha-assets.stylori.com/images/static/home/box_bg.png)",
    // boxShadow: "0 0 5px #888 !important",
    border: "1px solid #8080804d",
  },
  imgleft: {
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/slider_icon.png) !important",
    backgroundPosition: "-27px -229px !important",
    width: "35px !important",
    height: "44px !important",
    backgroundRepeat: "no-repeat !important",
    float: "left",
    backgroundColor: "#fff",
    borderLeft: " 0px",
  },
  imgRight: {
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/slider_icon.png) !important",
    backgroundPosition: "-160px -229px !important",
    width: "35px !important",
    height: " 44px !important",
    backgroundRepeat: "no-repeat !important",
    float: "right",
    backgroundColor: "#fff",
    borderRight: "0px",
  },
  imgleftGrid: {
    display: "flex",
    alignItems: "center",
  },
  smleftGrid: {
    marginTop: "21% ",
  },
  leftIc: {
    backgroundPosition: "-16px -21px !important",
    width: "15px!important",
    height: "20px!important",
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/home/slider_button.png) !important",
    borderLeft: "1px solid #ccc",
    marginLeft: "-8px!important",
    verticalAlign: "text-top",
    backgroundColor: "#fff",
  },
  rightIc: {
    backgroundPosition: "-65px -21px !important",
    width: "15px !important",
    height: "20px !important",
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/home/slider_button.png) !important",
    borderRight: "1px solid #ccc",
    marginRight: "-8px !important",
    float: "right",
    backgroundColor: "#fff",
  },
  container: {
    display: "flex !important",
    height: "430px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  imgRightGrid: {
    justifyContent: "flex-end",
    display: "flex",
    alignItems: "center",
  },
  testimonialRight: {
    textAlign: "center !important",
    paddingLeft: " 5px !important",
    paddingRight: "5px !important",
    display: "flex !important",
    alignItems: "center !important",
  },
  testimonyTitle: {
    display: "flex",
    justifyContent: " center",
    alignContent: "center",
    minHeight: "45px",
    color: "#2F348B",
    fontWeight: "500",
    fontSize: "13px",
    marginBottom: "0px",
    lineHeight: "20px !important",
    marginTop: "10px",
  },
  imgcoin: {
    display: "flex !important",
    alignItems: "center",
    alignContent: "center",
    margin: "auto",
    padding: "5px",
    marginTop: "15px",
    marginBottom: "15px",

    fontSize: "40px",
    height: "70px !important",
    width: "70px !important",
  },
  imgcoinsm: {
    verticalAlign: "middle",
    width: "110px",
    height: "110px",
  },
  Button: {
    fontSize: "12px",
    backgroundColor: "#2F348B",
    /* margin-top: 18px !important; */
    marginTop: "8px !important",
    color: "#fff",
    borderFadius: "0px",
    padding: "7px 15px",
    borderColor: "#ccc",
    "&:hover": {
      backgroundColor: "#454f7a",
    },
  },
  exclIcon: {
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/home/Testimonial_icons.png)",
    backgroundPosition: "-24px -45px",
    width: "38px",
    height: "37px",
    backgroundRepeat: "no-repeat",
    float: "left",
    marginTop: "60px",
    marginLeft: "60px",
  },
  testimonialInner: {
    color: "#666666",
    fontSize: "13px",
    lineHeight: "30px",
    // marginTop: "60px",
    paddingLeft: "15px",
    margin: "0 100px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 0px",
      paddingLeft: "0px",
    },
  },
  textInner: {
    color: "#666666",
    fontSize: "13px",
    lineHeight: "30px",
    marginTop: "10px",
    maxHeight: "140px ",
    overflow: "hidden",
    textAlign: "center",
    fontSize: "14px",
    textTransform: "capitalize",
    color: "#808080",
  },
  name: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#2F348B",
  },
  namecountry: {
    fontSize: "13px",
    color: "#2F348B",
  },
  excliconright: {
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/home/Testimonial_icons.png)",
    backgroundPosition: "-82px -45px",
    width: "38px",
    height: "37px",
    backgroundRepeat: "no-repeat",
    float: "right",
    marginRight: "50px",
  },
  middlecontainersm: {
    marginLeft: "25%",
    marginRight: "25%",
    padding: "0px 5px",
  },
  buttonTypo: {
    textAlign: "center",
    alignItems: "center",
    padding: "15% 15px 0px 15px",
  },
  spanimage: {
    backgroundPosition: "-24px -12px",
    width: "25px",
    height: "30px",
    backgroundRepeat: "no-repeat",
    float: "left",
    marginTop: "15px",
    marginLeft: "0px",
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/home/sprites-imgs.png)",
    [theme.breakpoints.between("xs", "md")]: {
      marginTop: "0px",
    },
  },
  spanimage2: {
    backgroundPosition: "-93px -12px",
    width: "25px",
    height: "30px",
    backgroundRepeat: "no-repeat",
    float: "right",
    marginTop: "10px",
    marginLeft: "15px",
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/home/sprites-imgs.png)",
  },
  textInnersm: {
    color: "#666666",
    fontSize: "13px",
    lineHeight: "16px",
    maxHeight: "33px ",
    overflow: "hidden",
  },
}));

export default function ImageGridList(props) {
  const classes = useStyles();
  const slider = React.createRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  return (
    <Grid container className={classes.root}>
      {/* <Hidden smDown> */}
      <Grid item className={classes.containerRoot} style={{ padding: 20 }}>
        <Grid container className={classes.container}>
          <Grid item md={12} lg={12} sm={12} xs={12}>
            <Grid container>
              <Grid item xs={12} alignItems="center">
                <Slideshow dataCarousel={props.dataCarousel} sliderRef={slider}>
                  {props.carosolData.map((val, index) => (
                    <>
                      <Grid container>
                        <Grid
                          container
                          item
                          md={12}
                          lg={12}
                          sm={12}
                          xs={12}
                          justify="center"
                          className={classes.testimonialRight}
                        >
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={4}
                            xl={4}
                            style={{
                              textAlign: "center",
                              padding: "0px 15px ",
                            }}
                          >
                            <Slideshow>
                              {/* <img className={classes.imgcoin} src={val.img} /> */}
                              <Avatar className={classes.imgcoin}>
                                {val?.customerName?.charAt(0).toUpperCase() ??
                                  "S"}
                              </Avatar>
                            </Slideshow>
                          </Grid>
                        </Grid>
                        {/* <span className={classes.exclIcon}></span> */}
                        <Grid container item xs={12} justify={"center"}>
                          <Typography
                            variant="body2"
                            className={classes.customerName}
                          >
                            {val.customerName ?? " "}
                          </Typography>
                          <br />
                          <br />
                        </Grid>

                        <Rating
                          name="read-only"
                          value={val.rating}
                          readOnly
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "auto",
                          }}
                        />
                        <Grid
                          item
                          md={12}
                          lg={12}
                          sm={12}
                          xs={12}
                          className={classes.testimonialInner}
                        >
                          <div>
                            <Typography
                              variant="body2"
                              className={classes.textInner}
                            >
                              {val.message}
                            </Typography>
                          </div>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          justify={"center"}
                          style={{ padding: "8px 0px 10px 0px" }}
                        >
                          <Typography
                            variant="body2"
                            className={classes.customerName}
                          >
                            {val.title ?? ""}
                          </Typography>
                        </Grid>
                      </Grid>
                    </>
                  ))}
                </Slideshow>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
