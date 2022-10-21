import { makeStyles } from "@material-ui/core/styles";
const CommonContentStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.gold.main + "!important",
    fontSize: "23px",
    fontWeight: 600,
  },
  contentText: {
    padding: "0 190px !important",
    boxShadow: "none !important",
    "& p": {
      fontSize: "20px",
      color: "grey",
    },
    "& div": {
      fontSize: "20px",
      color: "grey",
    },
    "& svg": {
      color: theme.palette.gold.main,
    },
  },
}));
export default CommonContentStyles;
