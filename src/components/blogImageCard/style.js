import { makeStyles } from "@material-ui/core/styles";
const BlogImageCardStyles = makeStyles((theme) => ({
  imageCard: {
    width: "100%",
    height: "400px",
    [theme.breakpoints.down("xs")]: {
      height: "250px",
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
  },

  mainTitle: {
    marginTop: "100px",
    marginBottom: "60px",
    padding: "0 130px",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      marginBottom: "30px",
      padding: "0 50px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
      marginBottom: "30px",
      padding: "0 0px",
    },
  },

  contentText: {
    padding: "40px 20px",
  },

  headingText: {
    "& p": {
      fontSize: "22px",
      fontWeight: 600,
      color: "#393a96",
      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
  },

  dateText: {
    "& p": {
      fontSize: "20px",
      fontWeight: 600,
      color: "gray",
      marginBottom: "20px",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
  },

  middleText: {
    "& p": {
      fontSize: "18px",
      fontWeight: 500,
      color: "gray",
      marginBottom: "20px",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
  },

  buttonText: {
    "& p": {
      fontSize: "20px",
      fontWeight: 600,
      color: "#393a96",
      marginBottom: "20px",
      textAlign: "right",
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "15px",
      },
    },
  },

  viewMore: {
    textAlign: "center",
    marginBottom: "20px",
    "& button": {
      backgroundColor: "#393a96",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#393a96",
        color: "#ffffff",
      },
    },
  },

  // Route Style
  backBtn: {
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "100px",
    "& button": {
      backgroundColor: "#393a96",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#393a96",
        color: "#ffffff",
      },
    },
  },

  jewellImg: {
    width: "100%",
  },

  heading: {
    textAlign: "center",
  },

  title: {
    "& p": {
      fontSize: "22px",
      color: "#cf9e4f",
      fontWeight: 600,
      marginTop: "15px",
      marginBottom: "5px",
      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "15px",
      },
    },
  },

  dot: {
    width: "10px !important",
    height: "10px !important",
    marginLeft: "10px",
    marginRight: "6px",
  },

  subText: {
    "& p": {
      fontSize: "19px",
      "& span": {
        color: "#333edb",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },

  content: {
    marginTop: "20px",
    "& p": {
      fontSize: "17px",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
        padding: "0px 20px",
      },
    },
  },

  jewellImg2: {
    width: "100%",
    marginTop: "60px",
  },

  content2: {
    marginTop: "15px",
    "& p": {
      fontSize: "17px",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
        padding: "0px 20px",
      },
    },
  },

  rightContent: {
    "& p": {
      fontSize: "17px",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
        padding: "0px 20px",
      },
    },
  },

  textContent1: {
    "& p": {
      marginBottom: "30px",
    },
  },

  bottomText: {
    "& p": {
      fontSize: "17px",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
        padding: "0px 20px",
      },
    },
  },

  leftImage: {
    "& img": {
      width: "100%",
      height: "500px",
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("xs")]: {
        height: "300px",
      },
    },
  },
}));
export default BlogImageCardStyles;
