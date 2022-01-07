export const styles = (theme) => ({
  orderSummary: {
    [theme.breakpoints.down("xs")]: {
      paddingRight: "10px",
      paddingLeft: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "40px",
      paddingLeft: "40px",
    },
  },
  hideorder: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "0%",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "5%",
    },
  },
  padding: {
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "60px",
    },
  },
  summaryOrder: {
    background: theme.palette.primary.main,
    color: " #FFF !important",
    borderRadius: "0px !important",
    // border: `1px solid #258056`,
    fontSize: "0.89rem !important",
    minWidth: "100px !important",
    textTransform: " none !important",
    boxShadow: `0px 1px 5px 1px #294638`,
    "&:hover": {
      background: "#1c8454",
    },
  },
  btntext: {
    fontWeight: "590px",
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px;!important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px !important",
    },
  },
  btnicon: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px !important",
    },
  },

  //   input: {
  //     borderBottom: "2px solid gray",
  //     borderRadius: "4px",
  //     paddingLeft: 8,
  //     borderRadius: "0px",
  //   },
  btn: {
    display: "inline-block",
  },
  other: {
    marginTop: "10%",
    borderTop: "1.3px solid #c1c1c1",
    paddingTop: "8%",
  },

  normalfonts: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.1rem !important",
      whiteSpace: "noWrap !important",
    },
    color: "gray !important",
    textTransform: "uppercase",
    borderBottom: "1.5px solid gray",
    paddingBottom: "10px",
  },
  loginheaders: {
    color: "gray !important",
    textTransform: "uppercase",
    borderBottom: "1.5px solid gray",
    paddingBottom: "10px",
    fontSize: "18px !important",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "22px",
      fontSize: "14px !important",
    },
  },
  guestheader: {
    fontSize: "14px",
    borderBottom: "1.5px solid gray",
    color: "gray !important",
    textTransform: "uppercase",
    paddingBottom: "3px",
    textAlign: "center",
    margin: "10px",
  },

  normalfonts3: {
    color: "gray !important",
    margin: "0px !important",
    fontSize: "10px !important",
    textAlign: "center",
    textTransform: "uppercase",
  },
  normalfonts2: {
    color: "gray !important",
    marginTop: "30px",
    fontSize: "14px !important",
    paddingBottom: "14px !important",
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
  cart: {
    [theme.breakpoints.down("xs")]: {
      boxShadow: "none",
      marginTop: "25px",
    },
    [theme.breakpoints.up("lg")]: {
      boxShadow: "none",
    },
  },
  conshoping: {
    fontSize: "0.96rem",
    padding: "20px 0px",
    cursor: "pointer",
    color: theme.palette.primary.main,
  },
  TypoSmall: {
    fontSize: "0.84rem",
  },
  typomedium: {
    fontSize: "0.86rem",
  },
  typomediumr: {
    fontSize: "0.91rem",
    fontWeight: 600,
  },
  containerBunch: {
    padding: "20px 0px ",

    borderBottom: "1px solid #8080806e",
  },
});
export default styles;
