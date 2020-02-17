import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    paddingBottom: "40px",
    textAlign: "center",
    fontSize: "28px"
  },
  main: {
    padding: "50px 0px"
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
          <Typography variant="h4" gutterBottom>
            {props.heading}
          </Typography>
        </Grid>
        <Typography id="message" className={classes.content}>
          {/* <Hidden xs={12} lgDown> */}
          {window.innerWidth < 832 ? (
            <>
              {state.showLess === true ? (
                <>
                  {props.para.slice(0, 350)}
                  <span id="moreDots" style={{ display: "inline" }}>
                    ...
                  </span>
                  <Typography
                    onClick={handleReadMore}
                    className={`know-txt ${classes.colorLight}`}
                    id="readMore"
                  >
                    <span>
                      <i className="fa faMore">&#xf0da;</i>
                    </span>{" "}
                    READ MORE
                  </Typography>
                </>
              ) : (
                <>
                  {props.para}
                  <Typography
                    onClick={handleReadMore}
                    className={`know-txt ${classes.colorLight}`}
                    id="readLess"
                  >
                    <span>
                      <i className="fa faMore">&#xf0d8;</i>
                    </span>{" "}
                    CLOSE
                  </Typography>
                  <br />
                </>
              )}{" "}
            </>
          ) : (
            props.para
          )}
          {/* </Hidden> */}

          {/* <Hidden xs={12} lgUp>
            <a href="/message">     
                <b>Read More</b>
            </a>
        </Hidden> */}
        </Typography>
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
