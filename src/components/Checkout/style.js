const styles = (theme) => ({
  padding: {
    padding: "20px !important",
    height: "100vh",
  },
  padding1: {
    padding: "40px !important",
  },
  paddingCart: {
    paddingRight: "40px",
    paddingLeft: "40px",
    paddingBottom: "40px",
  },
  paddingsm: {
    paddingRight: "10px",
    paddingLeft: "10px",
  },
  padding1acc: {
    padding: "10px",
  },
  paddingCart1: {
    paddingRight: "40px",
    paddingLeft: "40px",
    paddingTop: "40px",
  },
  cardimg: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
  cardimgcheck: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
      height: "80%",
    },
  },
  cardtitle: {
    color: "gray",
    [theme.breakpoints.down("md")]: {
      fontSize: "13px ",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px",
    },
  },
  cartheader: {
    color: "gray",

    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px",
    },
  },
  cardpad: {
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "20px",
      paddingBottom: "20px",
    },
  },
  title: {
    color: theme.palette.gold.main,

    fontStyle: "italic",
    fontSize: "22px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },

    fontWeight: "540",

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
      outline: "none !important",
    },
  },
  card: {
    width: "100%",
    margin: "auto",
    display: "flex",
    marginBottom: "15px",
    borderBottom: "1px solid #C1C1C1",
    outline: "none !important",
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
    fontSize: "20px",
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
    fontWeight: "bold",
  },
  totalcost: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15px !important",
    },
  },
  normalfonts: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px !important",
    },
    color: "gray",
    float: "right !important",
  },
  normalfonts1: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px !important",
    },
    color: "gray",
    float: "right !important",
  },
  normalfonts2: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px !important",
    },
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
