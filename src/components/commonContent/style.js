import { makeStyles } from "@material-ui/core/styles";
const CommonContentStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.gold.main + "!important",
    fontSize: "21px !important",
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
    },
    "& svg": {
      fontSize: "50px !important",
      [theme.breakpoints.down("md")]: {
        fontSize: "34px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "24px !important",
      },
    },
  },

  contentText: {
    padding: "0 130px !important",
    boxShadow: "none !important",
    margin: "0px 0px !important",
    "& p": {
      color: "#717171",
      fontSize: "20px",
      "& span": {
        marginTop: "25px",
        marginBottom: "25px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "17px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px !important",
      },
      "& div": {
        fontSize: "20px",
        [theme.breakpoints.down("md")]: {
          fontSize: "17px !important",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "14px !important",
        },
      },
    },
    "& div": {
      fontSize: "20px !important",
      color: "#717171",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    "& span": {
      fontSize: "20px !important",
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
    fontSize: "20px !important",
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
