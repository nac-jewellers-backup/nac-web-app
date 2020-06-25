import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  heading: {
    fontSize: "30px !important",
    fontFamily: "Libre Baskerville",
    fontWeight: "500 !important",
    lineHeight: "1.1",
  },
  containerHead: {
    display: "-webkit-inline-box !important",
    borderBottom: "1px solid #ddd",
    padding: "50px 0px",
    outline: "none !important",
  },
  para: {
    padding: "30px 0px 8px 0px",
    fontFamily: "Source Sans Pro !important",
    fontSize: "15px",
    lineHeight: "30px",
    color: "#5d5d5d !important",
  },
  gridHr: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  hrTag: {
    border: "0.5px solid #d8d8d8",
    margin: "auto",
  },
  imgClass: {
    width: "90% !important",
    height: "100% !important",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  contentPart: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "30px",
    },
  },
  contentHeading: {
    fontSize: "15px",
    lineHeight: "1.42857",
    fontWeight: "700 !important",
    color: "#191919",
  },
  contentHeadingLinks: {
    fontSize: "15px",
    lineHeight: "1.42857",
    fontWeight: "700 !important",
    color: "#191919",
    textDecoration: "none !important",
    "&:hover": {
      color: "#5d5d5d",
    },
  },
  padding: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "20px",
    },
  },
  averageInvestment: {
    fontSize: "15px",
    color: "#5d5d5d",
    lineHeight: "1.42857",
  },
  contentDetails: {
    padding: "30px 0px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  imageGrid: {
    ObjectFit: "cover !important",
    // height: "250px !important",
    [theme.breakpoints.down("sm")]: {
      // height: "150px !important",
    },
  },
  ToggleButton: {
    color: "#5d5d5d",
    fontWeight: "700",
    fontSize: "15px",

    display: "inline-block",
    cursor: "pointer",
  },
  GridButtonMoreCollection: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "32px 0px 16px 0px",
  },
  buttonLink: {
    fontWeight: "700",
    color: "#333",
    textDecoration: "none",
    fontSize: "14px",
    display: "flex",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8",
    },
  },
  buttonLinkNoMoreproducts:{
    fontWeight: "700",
    color: "#33333340",
    textDecoration: "none",
    fontSize: "14px",
    display: "flex",
    cursor: "not-allowed",
    
  },
  MoreCollectionImg: {
    transform: "rotate(90deg)",
  },

  imgGridMoreCollection: {
    display: "flex",
    alignItems: "center !important",
    paddingTop: "1px",
  },
}));
export default styles;
