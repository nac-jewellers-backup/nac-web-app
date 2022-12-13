import { Grid, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useStyles from "./styles";

const StoreLocationDetails = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const [state, setState] = useState({
    title: "",
    address: "",
    contactNo: "",
    url: "",
    key: "",
  });


  useEffect(() => {
    debugger;
    const key = localStorage.getItem("storeKey")
    if(key){
      const filterStore = props.data.filter((val) => val.key === key);
      if(filterStore.length > 0){
        setState(filterStore[0]);

      }
    }
  }, []);
  return (
    <Grid
      container
      className={classes.mapcontainer}
      style={{ overflowX: "hidden" }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          xs={12}
          lg={12}
          style={{ boxShadow: "4px 4px 4px #a5a4a5" }}
        >
          <Grid item xs={12} md={6} lg={6}>
            <div style={{ padding: "30px" }}>
              <Typography className={classes.titles}>{state?.title}</Typography>
              <Typography className={classes.address}>
                {state?.address}
              </Typography>
              <Typography className={classes.phone}>
                {state?.contactNo}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            {state.url.length > 0 && (
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="300"
                    id="gmap_canvas"
                    src={state.url}
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    title="..."
                  ></iframe>
                  <a href="https://soap2day-to.com"></a>
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default StoreLocationDetails;
