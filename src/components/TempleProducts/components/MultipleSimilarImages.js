import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { CardUseStyles } from "./styles";
import line from "./../../../assets/Icons/line.svg";

const MultipleSimilarImages = (props) => {
  const classes = CardUseStyles();

  return (
    <div>
      {!props.invert && 
            <>
                <Typography className={classes.weighTxt}>{props.subHeader}</Typography>
                <Typography className={classes.TempleName}>
                    {props.header}
                </Typography>
            </>
        }
      <Grid container className={classes.aboutChild}>
        {props?.data.map((val) => (
          <Grid item xs={4} className={classes.customGridMultipleSimilar}>
            <div style={{ textAlign: "center" }}>
              <img className={classes.multipleSimilarDiv} src={val?.img} />
            </div>
          </Grid>
        ))}
        {props.invert && 
            <div style={{display:"block",width:"100%",marginTop:"20px"}}>
                <Typography style={{width:"35%",margin:"auto"}} className={classes.TempleName}>
                    {props.header}
                </Typography>
            </div>
        }
        <div style={{ width: "100%" }}>
          <img src={line} style={{ width: "100%" }}></img>
        </div>
      </Grid>
      
    </div>
  );
};

export default MultipleSimilarImages;
