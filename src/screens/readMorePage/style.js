import { makeStyles } from "@material-ui/core/styles";
const ReadMoreStyles = makeStyles((theme) => ({
  mainTitle: {
    marginTop: "100px",
    marginBottom: "60px",
    padding: "0 130px",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      marginBottom: "30px",
      padding: "0 50px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
      marginBottom: "30px",
      padding: "0 20px",
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

  leftImg: {
    [theme.breakpoints.down("md")]: {
      height: "550px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "285px",
    },
  },

  tag: {
    backgroundColor: "#2f348b",
    fontSize: "18px",
    color: "#FFFFFF",
    textAlign: "center",
    padding: "7px 0px",
    cursor: "pointer",
  },

  tags: {
    textAlign: "center",
    padding: "7px 0px",
    cursor: "pointer",
  },

  tagName: {
    display: "flex",
    justifyContent: "center",
  },

  comment: {
    marginBottom: "8px",
    "& p": {
      fontSize: "17px",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },

  post: {
    "& p": {
      fontSize: "17px",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },

  fullTextField: {
    marginTop: "15px",
    "& textarea": {
      height: "140px !important",
    },
    "& .MuiInputBase-fullWidth": {
      borderRadius: "0px !important",
    },
  },

  smallTextField: {
    "& input": {
      height: "55px !important",
      padding: "0 17px !important",
    },
    "& fieldset": {
      borderRadius: "0 !important",
    },
  },

  checkGroup: {
    display: "flex",
    "& .MuiCheckbox-colorSecondary": {
      padding: "0px !important",
    },
  },

  checkBox: {
    marginRight: "30px",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("xs")]: {
      marginRight: "10px",
    },
  },

  checkText: {
    "& p": {
      fontSize: "16px",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },

  submitBtn: {
    textAlign: "center",
    "& button": {
      textTransform: "capitalize !important",
      fontSize: "18px",
      backgroundColor: "#2f348b",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#2f348b",
        color: "#ffffff",
      },
    },
  },

  leftImageBox: {
    width: "100%",
    height: "85px",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("xs")]: {
      height: "115px",
    },
  },

  bottomBox: {
    backgroundColor: "#6e6f72",
    padding: "20px 70px 40px 70px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 35px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 15px",
    },
  },

  latest: {
    "& p": {
      fontSize: "21px",
      color: "#FFFFFF",
      [theme.breakpoints.down("md")]: {
        fontSize: "19px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "17px",
      },
    },
  },

  about: {
    "& p": {
      fontSize: "21px",
      color: "#FFFFFF",
      [theme.breakpoints.down("md")]: {
        fontSize: "19px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "17px",
        marginBottom: "5px",
      },
    },
  },

  rightText: {
    "& p": {
      fontSize: "17px",
      color: "#FFFFFF",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
  },

  leftBox: {
    [theme.breakpoints.down("md")]: {
      paddingRight: "8px !important",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "32px !important",
      paddingBottom: "0px !important",
    },
  },

  rightBox: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: "8px !important",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "32px !important",
    },
  },
}));
export default ReadMoreStyles;
