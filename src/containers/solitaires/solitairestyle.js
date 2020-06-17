import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  preButton: {
    width: "35px!important",
    height: "42px!important",
    backgroundRepeat: "no-repeat !important",
    opacity: "1!important",
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/slider_icon.png)!important",
    backgroundPosition: "-27px -229px!important",

    borderLeft: 0,
    background: "none",
    left: 0,
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
    [theme.breakpoints.up("lg")]: {
      top: "397px !important",
    },
    [theme.breakpoints.only("xl")]: {
      top: "653px !important",
    },
  },
  headContent: {
    outline: "none !important",
    position: "relative",
  },

  mainCarosel: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "500px ",
    },
    [theme.breakpoints.down('sm')]:{
      height: "280px ",
    },
    objectFit: "cover !important",
    headContent: {
      width: "100%",
      height: "100%",
     
    },
  },
  imageContent: {
    position: "absolute",
    color: "#fff",
    fontSize: "60px",
    fontWeight: "600",
    fontFamily: "Libre Baskerville !important",
    width : "40%",
    top : "20%",
    left : "16%",
    lineHeight : "1.3",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      width : "70%",
    },
  },
  heading: {
    fontSize: "32px !important",
    fontFamily: "Libre Baskerville !important",
    padding: "40px",
    fontWeight: "500  !important",
    lineHeight: "1.1",
    color: "#1c1c1c",
    textAlign: "center",
  },
  contentPart: {
    display: "flex",
    justifyContent: "center",
  },
  bodyContent: {
    fontFamily: "Libre Baskerville !important",
    fontSize: "16px",
    lineHeight: 1.8,
    color: "#5d5d5d",
    fontWeight: 500,
  },
  hrGrid: {
    padding: "40px 0px",
    margin: "auto",
  },
  hrTag: {
    textAlign: "center",
    border: "0.5px solid #e9e9e9",
  },
}));
export default styles;
