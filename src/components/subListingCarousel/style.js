import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  title: {
    fontFamily: "notoSerif-regular !important",
    [theme.breakpoints.down("lg")]: {
      fontSize: "24px ",
      // fontWeight: 'bold'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px ",
    },
    [theme.breakpoints.down("xs")]: {},
    marginTop: "30px",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "28px",
  },
  dis: {
    color: theme.palette.text.secondary,
  },
  icon: {
    color: theme.palette.primary.main,
  },
  pricedetails: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 10px",
    },
  },
  width: {
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 10px",
    },
  },
  // pricetabs
  modals: {
    [theme.breakpoints.down("xs")]: {
      background: "#fff !important",
      height: "auto",
      width: "60%",
      marginTop: "3%",
      marginBottom: "3%",
      marginLeft: "20%",
      outline: "none !important",
    },
    [theme.breakpoints.up("lg")]: {
      background: "#fff !important",
      height: "auto",
      width: "60%",
      marginTop: "3%",
      marginBottom: "3%",
      marginLeft: "20%",
      outline: "none !important",
    },
  },
  pagination: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      // textAlign: "center"
    },
  },

  normalfonts_tabs: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginLeft: "4px",
      // marginRight: "8px"
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      marginLeft: "8px",
      marginRight: "8px",
    },
  },
  tabs_values_font: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px !important",
      marginTop: "5px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "10px !important",
      marginTop: "5px",
    },
  },
  tabsheadcolor: {
    color: theme.palette.secondary.main,
  },
  tabsRingBckg: {
    background: theme.palette.primary.main,
  },

  normalfonts: {
    color: theme.palette.text.primary,
  },
  normalcolorback: {
    background: theme.palette.text.primary,
  },
  fontwhite: {
    color: theme.palette.overallButoon.contrastText,
  },
  backgwhite: {
    background: theme.palette.overallButoon.contrastText,
  },
  fontgray: {
    color: theme.palette.text.disabled,
  },
  // buynow
  buttons: {
    background: theme.palette.overallButoon.primary,
    color: theme.palette.overallButoon.contrastText,
  },
  backgsecondary: {
    background: theme.palette.secondary.main,
  },
  shadow: {
    boxShadow:
      "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  },
  [theme.breakpoints.up("md")]: {
    shadow: {
      boxShadow: "none",
    },
  },
  iconRightcaro: {
   
    fill: "black !important",
    // backgroundImage: `url("https://alpha-assets.stylori.com/images/static/home/slider_button.png")`,

    /* border-right: 1px solid #ccc, */
  },

  iconLeftcaro: {
    
    fill: "black !important",
    // backgroundImage: `url("https://alpha-assets.stylori.com/images/static/home/slider_button.png")`,
    /* border-left: 1px solid #ccc, */
  },
  subsliderCarousel: {
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    width: "100% !important",
    textAlign: "center !important",
    cursor: "pointer !important",
  },
  subCarouselHead: {
    padding: "30px",
  },
  anchor: {
    color: "#191919",
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: 1.1,
    fontWeight: "600",
    paddingRight: "10px",
  },
  algins: {
    display: "flex",
    justifyContent: "center",
  },
  anchorMain: {
    paddingTop: "20px",
    textAlign: "center",
    cursor: "pointer",
    padding: "15px",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "1.1",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 0px 0px 0px",
      // display:"flex",
    },
    miniCarousel: {
      padding: "5px 22px",
      marginTop: "20px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
        padding: "5px 22px",
      },
    },
  },
  // title: {

  // },
}));
export default styles;
