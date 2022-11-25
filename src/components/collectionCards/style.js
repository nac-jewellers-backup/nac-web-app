import { makeStyles } from "@material-ui/core/styles";
const CollectionCardsStyles = makeStyles((theme) => ({
  mainContainer: {
    marginBottom: "30px",
  },

  main: {
    width: "100%",
    padding: "0 110px",
    marginTop: "50px",
    paddingBottom: "50px",
    [theme.breakpoints.down("md")]: {
      padding: "0 40px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 20px",
    },
  },

  image: {
    "& img": {
      width: "100%",
    },
  }, 

  buttonGroup: {
    "& button": {
      backgroundColor: "#b78231 !important",
      color: "#fff !important",
      borderRadius: "0px !important",
      width: "100%",
      fontSize: "25px !important",
      fontWeight: "600 !important",
      marginBottom: "10px",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px !important",
      },
    },
  },

  rightContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  content: {
    textAlign: "center",
    "& p": {
      fontSize: "17px !important",
      color: "#807e7e",
      padding: "0 30px",
      marginBottom: "10px",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px !important",
        padding: "0 17px",
      },
    },
  },

  odd: {
    order: 2,
    [theme.breakpoints.down("md")]: {
      order: 2,
      paddingBottom: "0px !important",
    },
    [theme.breakpoints.up("sm")]: {
      order: 2,
      paddingBottom: "0px !important",
    },
    [theme.breakpoints.down("sm")]: {
      order: "unset",
      paddingBottom: "0px !important",
    },
    [theme.breakpoints.down("xs")]: {
      order: "unset",
      paddingBottom: "0px !important",
    },
  },

  even: {
    order: "unset",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "0px !important",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "0px !important",
    },
  },
}));
export default CollectionCardsStyles;
