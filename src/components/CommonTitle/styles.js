import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  mainTitle: {
    marginTop: "100px",
    marginBottom: "60px",
    padding: "0 130px",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      marginBottom: "30px",
      padding: "0 70px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
      marginBottom: "30px",
      padding: "0 0px",
    },
  },
  title: {
    color: theme.palette.gold.main,
    textAlign: "center",
    fontSize: "50px",
    marginBottom: 15,
    fontWeight: "540",
    whiteSpace: "noWrap",
    padding: 2,
    marginTop: 8,
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
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
}));
export default useStyles;
