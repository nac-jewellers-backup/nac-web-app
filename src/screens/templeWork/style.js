import { makeStyles } from "@material-ui/core/styles";
const TempleWorkStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "80px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
    },
  },
}));
export default TempleWorkStyles;
