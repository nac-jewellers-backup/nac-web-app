import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  mainTitle: {
    marginTop: "100px",
    marginBottom: "60px",
    padding: "0 120px",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      marginBottom: "30px",
      padding: "0 70px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
      marginBottom: "0px",
      padding: "0 0px",
    },
  },
  title: {
    color: theme.palette.gold.main,
    fontFamily: "notoSerif-regular !important",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: "50px",
    marginBottom: 15,
    fontWeight: "540",
    whiteSpace: "noWrap",
    padding: 2,
    marginTop: 8,
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      marginBottom: 8,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      marginBottom: 5,
    },
  },
  img: {
    height: 40,
    width: 40,
    [theme.breakpoints.down("xs")]: {
      height: 22,
      width: 22,
    },
  },
  leftArrow: {
    width: "133px",
    marginRight: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "70px",
      marginRight: "5px",
    },
  },
  rightArrow: {
    width: "133px",
    marginLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "70px",
      marginLeft: "5px",
    },
  },
}));
export default useStyles;
