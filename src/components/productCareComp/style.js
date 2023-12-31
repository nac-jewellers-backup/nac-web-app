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
    marginBottom: "55px",
    boxShadow: "11px 10px 14px -10px rgba(0,0,0,0.76)",
    padding: "25px 30px",
    backgroundColor: "#f0f0f0",
    borderRadius: "0px !important",
    [theme.breakpoints.down("md")]: {
      marginBottom: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "15px 18px",
      marginBottom: "35px",
    },
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
      fontSize: "28px",
      color: "#2a2f70",
      fontFamily: "notoSerif-italic !important",
      fontWeight: 600,
      [theme.breakpoints.down("md")]: {
        fontSize: "24px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
      },
    },
  },

  content: {
    "& ul": {
      listStyle: "none",
      paddingLeft: "22px",
      "& li": {
        position: "relative",
        "& p": {
          fontSize: "17px",
          color: "#62656d",
          fontFamily: "notoSerif-regular !important",
          fontWeight: 540,
          [theme.breakpoints.down("md")]: {
            fontSize: "15px",
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "12px",
          },
        },
      },
      "& li::before": {
        position: "absolute",
        fontSize: "21px",
        content: `" "`,
        height: ".4em",
        width: ".4em",
        background: "#B78231",
        display: "block",
        transform: "rotate(45deg)",
        top: "10px",
        left: "-18px",
        [theme.breakpoints.down("md")]: {
          top: "7px",
          fontSize: "18px",
        },

        [theme.breakpoints.down("xs")]: {
          top: "7px",
          fontSize: "15px",
        },
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
export default ProductCareStyles;
