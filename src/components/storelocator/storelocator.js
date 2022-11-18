import { Box, Button, Grid,  Typography } from "@material-ui/core";
import { CommonTitle } from "components/CommonTitle";
import React from "react";
import style from "./style";
import degree from "../../assets/degree360.png";
import getDirections from "../../assets/storeDirection.png";

export default function Storelocator(props) {
  const value = props.value;
  const classes = style();
  
  return (
    <div className={classes.mainWidths}>
      {value.map((val,i) => (
        <>
        <Grid item xs={12}>
          <CommonTitle title={val.city} styleProps />
        </Grid>
      <Grid container spacing={3} justifyContent="center">
        
        {val.stores.map((store, key) => (
          <Grid item xs={12} md={12} lg={6}>
            <Grid container className={classes.shadow} >
              <Grid item sm={12} md={4} lg={4} xs={12}>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={store.img}
                  alt="icon"
                  loading="lazy"
                />
              </Grid>
              <Grid item sm={12} md={1} lg={1} xs={12}></Grid>
              <Grid item xs={12} sm={12} md={7} lg={7}>
                <div className={classes.pads}>
                  <Typography className={classes.title}>
                    {store.title}
                  </Typography>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: store.para }}
                    className={classes.para}
                  ></Typography>
                  <div>
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      target="_blank"
                    >
                      <Button
                        onClick={() => {
                          window.location.pathname = "/loc/" + store.key;
                        }}
                        className={classes.ViewButton}
                      >
                        &nbsp;&nbsp;{store.button}&nbsp;&nbsp;
                      </Button>
                    </a>
                  </div>
                  <Box display="flex" alignItems="center" marginTop="14px" gridGap={"8px"}>
                    <div> 
                      <a href={store.location} target="_blank">
                        <img src={degree} style={{width:"26px"}} />
                      </a>
                    </div>
                    <Box>
                    <div> 
                      <a href={store.location} target="_blank">
                        <img src={getDirections} style={{width:"26px"}} />
                      </a>
                    </div>
                    </Box>
                    <Box>
                      <span className={classes.directions}>&nbsp;&nbsp;Get directions</span>
                    </Box>
                  </Box>
                  <br />
                </div>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      </>
          ))}
    </div>
  );
}
