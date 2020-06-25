import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    paddingBottom: "20px",
    textAlign: "center",
    fontSize: "28px"
  },
  main: {
    padding: "50px 0px 30px 0px"
  },
  content: {
    fontSize: "17px",
    lineHeight: "1.8",
    margin: "auto",
    textAlign: "justify",
    width: "65%",
    color: "#5d5d5d",
    fontFamily: "Libre Baskerville",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "83% !important"
    }

  },
  showLess:{
    'display': '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',  
    overflow: 'hidden',
  },
  sub: {
    width: "1170px",
    margin: "auto",
    padding: "0px 15px"
  },
  anchorMain: {
    paddingTop: "40px",
    textAlign: "center",
    cursor: "pointer",
    padding: "10px",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "1.1"
  },
  anchor: {
    color: "#191919",
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: 1.1,
    fontWeight: "600",
    paddingRight: "10px"
  },
  line: {
    width: "125px",
    height: "1px",
    backgroundColor: "#e9e9e9",
    textAlign: "center",
    margin: "auto",
    marginTop: "25px"
  },
  algins: {
    display: "flex",
    justifyContent: "center"
  },
  DescriptionContent: {
    textAlign: "justify",
    fontSize: "15px",
    lineHeight: "16px",
    color: "#666",
    letterSpacing: "0.02rem",
    fontWeight: "lighter"
  },
  readmorelesstext:{
    fontWeight:'bold',
     float:'right',
     cursor:'pointer',
     width: "65%",
     margin: "auto",
     textAlign: "right",
     fontSize: '0.8rem',
    color: '#808080b3',
     [theme.breakpoints.between("xs", "sm")]: {
      width: "83% !important"
    }
  }
}));

export default function Story(props) {
  const classes = useStyles();
  const [state, setstate] = React.useState({
    showLess: true
  });
  const handleReadMore = () => {
    setstate({ showLess: !state.showLess });
  };

  return (
    <Grid container className={classes.main}>
      <Grid container className={classes.sub}>
        <Grid className={classes.root}>
          <Typography variant="h5" gutterBottom>
            {props.heading}
          </Typography>
        </Grid>
        <Typography id="message" className={`${classes.content} ${state.showLess ? classes.showLess : ''}`}>
          
          {props.para}
          
        </Typography>
        <Typography className={classes.readmorelesstext} onClick={()=>{setstate({showLess:!state.showLess})}}>{state.showLess ?'Read More' : 'Read Less'}</Typography>  
        {props.store && (
          <Grid item xs={12} className={classes.anchorMain}>
            <a className={classes.anchor} href="">
              <Grid className={classes.algins}>
                <Typography className={classes.anchor}>
                  {props.store}
                </Typography>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />
              </Grid>
              <Grid></Grid>
            </a>
          </Grid>
        )}
        <Grid container xs={12}>
          <Grid container className={classes.line}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
