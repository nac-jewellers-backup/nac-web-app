import { makeStyles } from "@material-ui/core/styles";
const CustomBannerStyles = makeStyles((theme) => ({
  bannerImage: {
    position: "relative",
    "& img": {
      width: "100%",
    },
  },

  group: {
    position: "absolute",
    top: "370px",
    position: "absolute",
    left: "70px",
    width: "420px",
    [theme.breakpoints.down("md")]: {
      top: "260px",
      left: "45px",
      width: "365px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "130px",
      left: "50px",
      width: "285px",
    },
  },

  title: {
    "& p": {
      fontSize: "22px",
      color: "#FFFFFF",
      marginBottom: "10px",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
  },

  content: {
    "& p": {
      fontSize: "16px",
      color: "#FFFFFF",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
    },
  },

  // MOBILE CSS

  mobileBanner: {
    "& img": {
      width: "100%",
    },
  },

  titleGroup: {
    backgroundColor: "#2f3486",
    marginTop: "-5px",
    textAlign: "center",
    padding: "20px 35px",
  },

  mobileTitle: {
    "& p": {
      fontSize: "18px",
      color: "#FFFFFF",
      fontWeight: 600,
      marginBottom: "8px",
    },
  },

  mobileContent: {
    "& p": {
      fontSize: "13px",
      color: "#FFFFFF",
    },
  },
}));
export default CustomBannerStyles;
