export const styles = (theme) => ({
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
  cart: {
    [theme.breakpoints.down("xs")]: {
      boxShadow: "none",
      marginTop: "25px",
    },
    [theme.breakpoints.up("lg")]: {
      boxShadow: "none",
    },
  },
  root: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: "70px",
    },
  },
});
export default styles;
