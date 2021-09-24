import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  pricing: {
    float: "left",
  },
  colorMain: {
    color: theme.palette.darkGray.main,
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.gold.main,
    },
  },
  h6FontSize: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "20px ",
      // fontWeight: 'bold'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.98rem",
      // letterSpacing:"1px"
    },
  },
  h6FontSizeStrike: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px ",
      // fontWeight: 'bold'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.88rem",
      // letterSpacing:"1px"
    },
  },
  spanIcon1: {
    width: "6px",
    height: "6px",
    border: "1px solid gray",
    borderRadius: "50%",
    padding: "2px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "8px",
    marginLeft: "5px",
  },
  off: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "11px",
      // fontWeight: 'bold'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  offerPricePadding: {
    [theme.breakpoints.down("lg")]: {
      // paddingLeft: '15px',
      // marginTop: '7px',
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
      color: "#33346D",
      fontSize: "18px",
      fontWeight: "bold !important",
    },
  },
  deletePrice: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  youSave: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  dis: {
    color: theme.palette.text.secondary,
  },

  resetpadd: {
    paddingLeft: "8px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
    },
  },
  alignval: {
    [theme.breakpoints.only("sm")]: {
      width: "100%",
    },
  },
  boldFont: {
    fontWeight: "bold !important",
  },
}));
export default styles;
