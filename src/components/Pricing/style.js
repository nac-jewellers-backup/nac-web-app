import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  pricing: {
    float: "left",
  },
  spanIcon: {
    width: "6px",
    height: "6px",
    border: "1px solid gray",
    borderRadius: "50%",
    padding: "2px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "7px",
    cursor: "pointer",
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
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.98rem",
    },
  },
  h6FontSizeStrike: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px ",
      fontWeight: "lighter !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.77rem",
      fontWeight: "lighter !important",
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
    position: "absolute",
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
      fontSize: "14px",
    },
  },
  deletePrice: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
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
