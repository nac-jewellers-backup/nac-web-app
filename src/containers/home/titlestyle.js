import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  title: {
    color: theme.palette.gold.main,
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "2.1rem",
    marginBottom: 15,
    fontWeight: "550",
    marginTop: -4,
    whiteSpace: "noWrap",
  },
  img: {
    height: 32,
    width: 32,
  },
}));
export default styles;
