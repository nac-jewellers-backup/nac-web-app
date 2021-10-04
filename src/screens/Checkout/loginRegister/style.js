export const styles = (theme) => ({
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
    borderTop: "1.3px solid gray",
    paddingTop: "8%",
  },
  root: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 20,
    },
  },
  normalfonts: {
    color: "gray !important",
    textTransform: "uppercase",
    borderBottom: "1.5px solid gray",
    paddingBottom: "10px",
  },
  normalfonts2: {
    color: "gray !important",
    marginTop: "20px",
    fontSize: "1.2rem",
    paddingBottom: "24px",
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
