import { makeStyles } from "@material-ui/core/styles";
const NewAboutUsStyles = makeStyles((theme) => ({
  contentText: {
    padding: "0 100px !important",
    [theme.breakpoints.down("md")]: {
      padding: "0 50px !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 20px !important",
    },
  },
  abouttext: {
    fontSize: "17px",
    color: "#717171",
    lineHeight: "2.0",
    [theme.breakpoints.down("md")]: {
      fontSize: "17px",
      lineHeight: "2.0",

    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      lineHeight: "2.0",

    },
    "& span": {
      color: "#717171",
      fontWeight: 600,
    },
  },
}));
export default NewAboutUsStyles;
