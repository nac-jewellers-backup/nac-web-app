import { makeStyles } from "@material-ui/core/styles";
const CommonContentStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.gold.main + "!important",
    fontSize: "23px",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "29px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  contentText: {
    padding: "0 130px !important",
    boxShadow: "none !important",
    "& p": {
      fontSize: "20px",
      color: "grey",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    "& div": {
      fontSize: "20px",
      color: "grey",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    "& svg": {
      color: theme.palette.gold.main,
    },
    "&::before": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 50px !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px !important",
    },
  },
}));
export default CommonContentStyles;
