import { makeStyles } from "@material-ui/core/styles";
const ReadMoreStyles = makeStyles((theme) => ({
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
      fontWeight: 600,
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
      },
    },
  },

  text1: {
    marginTop: "15px",
  },

  text2: {
    marginTop: "30px",
  },

  text3: {
    marginTop: "15px",
  },

  jewellImg2: {
    width: "100%",
    marginTop: "60px",
  },

  content2: {
    "& p": {
      fontSize: "17px",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
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
      },
    },
  },
}));
export default ReadMoreStyles;
