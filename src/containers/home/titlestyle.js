import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  title: {
    color: theme.palette.gold.main,
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "2.1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
    marginBottom: 15,
    fontWeight: "540",
    marginTop: -4,
    whiteSpace: "noWrap",
    padding: 2,
  },
  img: {
    height: 32,
    width: 32,
    [theme.breakpoints.down("xs")]: {
      height: 22,
      width: 22,
    },
    marginTop: 2,
  },
}));
export default styles;
