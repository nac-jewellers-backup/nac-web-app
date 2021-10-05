const styles = (theme) => ({
  cartheader: {
    color: "gray",
    fontSize: "14px",
  },
  title: {
    color: theme.palette.gold.main,
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "2.1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
    marginBottom: 15,
    fontWeight: "540",
    marginTop: -4,
    whiteSpace: "noWrap",
    padding: 2,
  },
  img: {
    height: 32,
    width: 32,
    [theme.breakpoints.down("xs")]: {
      height: 22,
      width: 22,
    },
    marginTop: 2,
  },
  cart: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      overflowX: "auto",
      padding: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      // width: "100%",
      // border: "0.5px solid #ccc",
      //boxShadow: "0px 1px 9px 4px #DEDADA!important",
      // padding: "10px",
      marginBottom: "20px",
      padding: "10px",
      outline: "none !important",
    },
  },
  card: {
    width: "100%",
    margin: "auto",
    display: "flex",
    marginBottom: "15px",
    boxShadow: "rgb(222, 218, 218) 1px 2px 13px 7px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    width: "100%",
    marginLeft: "4px",
  },
  content: {
    flex: "1 0 auto",
    padding: 0,
  },
  cover: {
    width: "30vw",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& button": {
      padding: "2.1px 13.8px",
    },
    [theme.breakpoints.down("sm")]: {
      "& button": {
        padding: "1.1px 1.8px",
      },
    },
  },

  playIcon: {
    height: 38,
    width: 38,
  },
  contents: {
    fontSize: "0.8rem",
  },
  labelPrice: {
    display: "flex",
  },
  labelPriceDel: {
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "center",
  },
  labelPriceOff: {
    fontSize: "1.1rem",
  },
  buttons: {
    background: theme.palette.overallButoon.primary,
    color: theme.palette.overallButoon.contrastText,
  },
  normalfonts: {
    color: "gray",
    float: "right !important",
  },
  backgsecondary: {
    background: theme.palette.secondary.dark,
  },
  normalcolorback: {
    background: theme.palette.text.primary,
  },
  fontwhite: {
    color: theme.palette.overallButoon.contrastText,
  },
});
export default styles;
