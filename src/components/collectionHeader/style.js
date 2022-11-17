import { makeStyles } from "@material-ui/core/styles";
const CollectionHeaderStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
  },

  mainTitle: {
    marginTop: "100px",
    marginBottom: "5px",
    padding: "0 120px",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      marginBottom: "0px",
      padding: "0 70px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
      marginBottom: "0px",
      padding: "0 0px",
    },
  },
  title: {
    color: theme.palette.gold.main,
    fontFamily: "notoSerif-regular !important",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: "50px",
    marginBottom: 15,
    fontWeight: "540",
    whiteSpace: "noWrap",
    padding: 2,
    marginTop: 8,
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      marginBottom: 8,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      marginBottom: 5,
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
  leftArrow: {
    width: "133px",
    marginRight: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "70px",
      marginRight: "5px",
    },
  },
  rightArrow: {
    width: "133px",
    marginLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "70px",
      marginLeft: "5px",
    },
  },
  customStyleHeader: {
    marginTop: "40px",
    marginBottom: "40px",
    padding: "0 120px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: "30px",
      marginBottom: "30px",
      padding: "0 70px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px",
      marginBottom: "0px",
      padding: "0 0px",
    },
  },
  customTitle: {
    color: theme.palette.gold.main,
    fontFamily: "notoSerif-regular !important",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: "40px",
    marginBottom: 8,
    fontWeight: "540",
    whiteSpace: "noWrap",
    padding: 2,
    marginTop: 8,
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      marginBottom: 8,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      marginBottom: 5,
    },
  },

  content: {
    padding: "0 110px !important",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0 110px !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 15px !important",
    },
    "& p": {
      fontSize: "18px",
      color: "#807e7e",
      padding: "0px 250px",
      lineHeight: "1.8",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
        padding: "0px 20px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
        padding: "0px 20px",
      },
    },
  },
}));
export default CollectionHeaderStyles;
