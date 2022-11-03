import { makeStyles } from "@material-ui/core/styles";
const CommonContentStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.gold.main + "!important",
    fontSize: "23px !important",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },

  accordionSummary: {
    "& .MuiAccordionSummary-content": {
      margin: "0 0 0 0 !important",
      height: "64px !important",
      alignItems: "center"
    },
    "& svg": {
      [theme.breakpoints.down("md")]: {
        transform: "scale(1.0)",
      },
      [theme.breakpoints.down("xs")]: {
        transform: "scale(0.7)",
      },
    },
  },

  contentText: {
    padding: "0 110px !important",
    boxShadow: "none !important",
    margin: "0px 0px !important",
    "& p": {
      color: "#717171",
      fontSize: "17px",
      lineHeight: 2,
      "& span": {
        marginTop: "25px",
        marginBottom: "25px",
        fontSize: "17px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "17px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px !important",
      },
      "& div": {
        fontSize: "17px",
        [theme.breakpoints.down("md")]: {
          fontSize: "17px !important",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "14px !important",
        },
      },
    },
    "& div": {
      fontSize: "17px !important",
      color: "#717171",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    "& span": {
      fontSize: "17px !important",
      color: "#717171",
      lineHeight: "33px",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px !important",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px !important",
        lineHeight: "24px",
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

  question: {
    fontSize: "17px !important",
    fontWeight: 600,
    color: "#717171",
    margin: "27px 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
}));
export default CommonContentStyles;
