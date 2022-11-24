import { makeStyles } from "@material-ui/core/styles";
const CCustomApplicationStyles = makeStyles((theme) => ({
  role: {
    "& p": {
      fontSize: "20px",
      color: "#2a2e6e",
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {
        fontSize: "17px",
      },
    },
  },

  location: {
    "& p": {
      color: "#616161",
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
    },
  },

  secondLayer: {
    marginTop: "17px",
    "& p": {
      color: "#606060",
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
    },
  },

  mainGroup: {
    width: "100%",
  },

  headingGroup: {
    textAlign: "center",
    padding: "30px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 20px",
    },
  },
}));
export default CCustomApplicationStyles;
