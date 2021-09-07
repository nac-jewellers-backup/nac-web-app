import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  title: {
    color: theme.palette.gold.main,
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "2rem",
    marginBottom: 15,
  },
  img: {
    height: 35,
    width: 35,
  },
}));
export default styles;
