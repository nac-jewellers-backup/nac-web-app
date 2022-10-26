import { makeStyles } from "@material-ui/core/styles";
const NewAboutUsStyles = makeStyles((theme) => ({
  contentText: {
    padding: "0 130px !important",
    [theme.breakpoints.down("md")]: {
      padding: "0 50px !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px !important",
    },
  },
  abouttext: {
    fontSize: "20px",
    color: "#717171",
    [theme.breakpoints.down("md")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
    "& span": {
      color: "#717171",
      fontWeight: 600,
    },
  },
}));
export default NewAboutUsStyles;
