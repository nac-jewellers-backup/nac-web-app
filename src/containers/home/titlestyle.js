import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  title: {
    color: theme.palette.gold.main,
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "2.1rem",
    marginBottom: 15,
    fontWeight: "530",
  },
  img: {
    height: 35,
    width: 35,
  },
}));
export default styles;
