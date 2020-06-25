import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
const styles = makeStyles(theme => ({
  grid1:
  {
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "3%",
  },
  grid2:
  {
    paddingTop: "2%",
    width: "600px",
    fontSize: "18px",
    lineHeight: "1.42857",
    color: "#9c9c9c",

  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 600,
      paddingTop: "3%",
      color: "#9c9c9c",
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
    fontSize: "40px",
    fontFamily: "notoSerif-regular",
    fontWeight: "500",
    lineHeight: "1.1",
    color: "#1c1c1c",
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
    justifyContent: "center",
    textAlign: "center",
    
    color:"#9c9c9c",
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
    grid2: {
      width: "278px",
      fontSize: "15px",
      marginTop:"2%"
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
          paddingLeft:"none",
          marginTop: "4%"
        },
        
      }
  }
}))
export default styles;