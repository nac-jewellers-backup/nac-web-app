import { makeStyles } from "@material-ui/core/styles";
const ProductCareStyles = makeStyles((theme) => ({
  contentText: {
    padding: "0 110px !important",
    boxShadow: "none !important",
    margin: "0px 0px !important",
    [theme.breakpoints.down("md")]: {
      padding: "0 50px !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px !important",
    },
  },

  main: {
    margin: "25px 0",
  },

  cardBox: {
    marginBottom: "35px",
    boxShadow: "11px 10px 14px -10px rgba(0,0,0,0.76)",
    padding: "20px 25px",
    backgroundColor: "#f0f0f0",
    borderRadius: "0px !important",
  },

  image: {
    width: "100%",
    "& img": {
      width: "100%",
    },
  },

  heading: {
    marginBottom: "25px",
    "& p": {
      fontSize: "25px",
      color: "#2a2f70",
      fontFamily: "notoSerif-bold !important",
      fontStyle: "italic",
    },
  },

  content: {
    "& ul": {
      paddingLeft: "22px",
      "& li": {
        "&::marker": {
          color: "#B78231",
          fontSize: "21px",
        },
        "& p": {
          fontSize: "18px",
          color: "#86878a",
          fontFamily: "notoSerif-regular !important",
          fontWeight: 540,
        },
      },
    },
  },
}));
export default ProductCareStyles;
