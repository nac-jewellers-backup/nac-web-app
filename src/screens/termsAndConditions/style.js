import { makeStyles } from "@material-ui/core/styles";
const TermsAndConditionsStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "80px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
    },
  },
}));
export default TermsAndConditionsStyles;
