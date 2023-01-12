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
    cursor: "pointer",
    color: "#606060",
    marginTop: "17px",
    "& span": {
      fontSize: "14px",
      marginLeft: "10px",
      color: "grey",
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

  readMore: {
    display: "flex",
  },
}));
export default CCustomApplicationStyles;
