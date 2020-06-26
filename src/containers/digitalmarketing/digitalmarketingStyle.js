import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
  titlePage: {
    fontSize: "28px",
    fontFamily: "notoSerif-regular",
    fontWeight: "500 !important",
    lineHeight: "1.1",
    color: "#1c1c1c",
    margin: "21px 0px 10.5px 0px",
    textAlign: "center"
  },
  heading: {
    margin: "auto"
  },
  contentPart: {
    paddingTop: "20px"
  },
  headings: {
    fontSize: "20px",
    color: "#1c1c1c",
    fontFamily: "notoSerif-regular",
    lineHeight: "1.42857",
    padding: "30px 0px 20px 0px"
  },
  content: {
    lineHeight: "30px",
    fontFamily: "notoSerif-regular",
    fontSize: "15px",
    color: "#5d5d5d",
   
  },
  hrTag: {
    border: "0.5px solid #d8d8d8",
    margin: "25px 0px"
  },
  button: {
    backgroundColor: "#009651",
    color: "#fff",
    padding: "15px 30px",
    borderRadius: "0px !important",
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: "#5cb85c !important"
    },

  },
  link : {
      color : '#fff',
      textDecoration : 'none !important',

  }
}));

export default styles;
