import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  mainCarosel: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      height: "230px",
    },
  },
  preButton: {
    width: "35px!important",
    height: "42px!important",
    backgroundRepeat: "no-repeat !important",
    opacity: "1!important",
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/slider_icon.png)!important",
    backgroundPosition: "-27px -229px!important",
    // background-color: #fff!important;
    // border: 1px solid #ccc;
    borderLeft: 0,
    background: "none",
    left: 0,
    // top:"55% !important",
    marginTop: "-30px",
    fontSize: "20px",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    zIndex: 9,
    [theme.breakpoints.only("xs")]: {
      top: "229px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.only("sm")]: {
      top: "262px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.only("md")]: {
      top: "321px !important",
    },
    // [theme.breakpoints.only('lg')]: {
    //   top: "33% !important",
    // },
    [theme.breakpoints.up("lg")]: {
      top: "426px !important",
    },
    [theme.breakpoints.only("xl")]: {
      top: "682px !important",
    },
  },
  nextButton: {
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/slider_icon.png)!important",
    width: "35px!important",
    height: "42px!important",
    backgroundRepeat: "no-repeat!important",
    opacity: "1!important",
    backgroundPosition: "-160px -229px!important",
    // backgroundColor: "#fff!important",
    // border: "1px solid #ccc",
    borderRight: 0,
    position: "absolute",
    zIndex: 9,
    float: "right",
    right: 0,
    top: "55%!important",
    [theme.breakpoints.only("xs")]: {
      top: "199px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.only("sm")]: {
      top: "231px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.only("md")]: {
      top: "291px !important",
    },
    // [theme.breakpoints.only('lg')]: {
    //   top: "33% !important",
    // },
    [theme.breakpoints.up("lg")]: {
      top: "397px !important",
    },
    [theme.breakpoints.only("xl")]: {
      top: "653px !important",
    },
  },
  dataCon: {
    margin: "auto",
    display: "flex",
  },
  textColor: {
    color: "#5d5d5d",
  },
  countGrid: {
    padding: "10px 0px",
    margin: "auto",
  },
}));
export default styles;
