import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
  roots: {
    "& .makeStyles-mainWidths-2": {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
  book: {
    fontSize: "16px",
    color: "gray",
  },
  grid1:
  {

    paddingTop: "3%",
  },
  content1sm: {
    marginTop: "20px",
    backgroundColor: "#F4F4F4",
    padding: "8px",
    boxShadow: "4px 4px 4px #a5a4a5 !important"
  },
  content2sm: {
    marginTop: "20px",
    backgroundColor: "#F4F4F4",
    padding: "8px",
    boxShadow: "4px 4px 4px #a5a4a5 !important"
  },
  content: {
    marginTop: "20px",
    backgroundColor: "#F4F4F4",
    padding: "40px",
    boxShadow: "4px 4px 4px #a5a4a5 !important",
    backgroundImage: "url('/logflower.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "100%"
  },
  content2: {
    backgroundColor: "#F4F4F4",
    padding: "40px",
  },
  contentParent: {
    boxShadow: "4px 4px 4px #a5a4a5 !important"
  },
  grid2:
  {

    width: "100%",
    fontSize: "18px",
    color: "#9c9c9c",
    "& ..MuiFilledInput-input": {
      backgroundColor: "white",

    },
    "& .MuiFilledInput-root": {
      borderRadius: "0px",
      backgroundColor: "white",


    },
    "& .MuiFilledInput-root:before": {
      border: "none",



    },


  },


  grid5: {
    paddingTop: "3% !important",


  },


  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  imageContent: {
    fontFamily: "notoSerif-regular",
    fontSize: "20px",
    lineHeight: " 1.42857",
    color: "#5d5d5d",
  },
  images: {
    paddingTop: "4%"
  },
  grid4: {
    justifyContent: "center",
    textAlign: "center",
  },
  head: {
    fontSize: "49px",
    fontFamily: "notoSerif-regular",
    fontWeight: "500",
    lineHeight: "1.1",
    color: "#B2832C",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    color: "#6E6F72",
    fontSize: "22px"
  },
  contents: {
    paddingTop: "1%",
    fontFamily: "notoSerif-regular",
    fontSize: "20px",
    lineHeight: "1.42857",
    color: "#5d5d5d",
    justifyContent: "center",
    textAlign: "center",
  },
  selects: {
    float: "right",

  },
  grid8: {
    width: "460px",
    marginLeft: "2%",
    fontSize: "18px",
    color: "#5d5d5d",
  },
  grid9: {

    width: "95px",
    color: "#9c9c9c",

  },
  grid10:
  {
    paddingTop: "1%",

    color: "#9c9c9c",
  },
  sub: {
    color: 'gray',
    fontSize: "18px",
    marginBottom: "16px"
  },
  heading: {
    color: "gray",
    fontSize: "30px",
    marginBottom: "8px"
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",

  },
  btn: {
    backgroundColor: "#B2832C",
    color: "white",
    fontWeight: "bold",
    borderRadius: "0px",
    boxShadow: "4px 4px 4px #a5a4a5 !important",
    "&:hover": {
      backgroundColor: "#B2832C",
      color: "white",
      fontWeight: "bold",
    },
    marginTop: "10px"
  },
  grid12:
  {
    marginTop: "2%",
    justifyContent: "center",
    textAlign: "center",
    paddingLeft: "6%",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "22px !important"

  },
  grid11:
  {

  },
  grid13: {
    marginTop: "2%",
  },
  label: {
    fontWeight: "bold",
    color: "gray",
    marginBottom: "16px",
    display: "block"
  },
  grid15:
  {
    justifyContent: "",
  },
  [theme.breakpoints.only('xs')]: {

    head:
    {
      fontSize: "28px",
    },
    contents: {
      marginTop: "2%",
      fontSize: "17px",
      textAlign: "center"
    },
    imageContent: {
      fontSize: "17px",

    },
    grid13:
    {
      marginTop: "6%",

    },
    grid14:
    {
      fontSize: "15px",
      color: "#5d5d5d"
    },
    grid15:
    {
      fontSize: "15px",
      color: "#5d5d5d",
    },
    grid16: {
      fontSize: "15px",
      color: "#5d5d5d",
      paddingLeft: "none",
      marginTop: "4%"
    },
    grid12:
    {
      paddingLeft: "0%",
    },
    grid8:
    {
      width: "190px",
      marginLeft: "2%",
      fontSize: "15px",
      marginTop: "4%",
      color: "#5d5d5d",

    },
    grid9:
    {
      width: "80px",
      color: "#cccfdc",
      fontSize: "15px",

    },


    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 300,
        paddingTop: "3%",
        color: "#9c9c9c",
      }
    },

    [theme.breakpoints.only('md')]: {
      grid16: {
        fontSize: "15px",
        color: "#5d5d5d",
        paddingLeft: "none",
        marginTop: "4%"
      },

    }
  }
}))
export default styles;