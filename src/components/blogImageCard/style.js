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
    padding: "0 40px",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      marginBottom: "30px",
      padding: "0 70px",
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

  main: {
    marginBottom: "40px",
  },

  headingText: {
    "& p": {
      fontSize: "22px",
      fontWeight: 600,
      color: "#393a96",
    },
  },

  dateText: {
    "& p": {
      fontSize: "20px",
      fontWeight: 600,
      color: "gray",
      marginBottom: "20px",
    },
  },

  middleText: {
    "& p": {
      fontSize: "18px",
      fontWeight: 500,
      color: "gray",
      marginBottom: "20px",
    },
  },

  buttonText: {
    "& p": {
      fontSize: "20px",
      fontWeight: 600,
      color: "#393a96",
      marginBottom: "20px",
      textAlign: "right",
    },
  },
}));
export default BlogImageCardStyles;
