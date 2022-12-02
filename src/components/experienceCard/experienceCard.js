import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import ExperienceCardStyles from "./style";

const ExperienceCardComp = (props) => {
  const classes = ExperienceCardStyles();

  const values = (val) => {
    window.open(`${val}`)
  };
  return (
    <div>
      <Box className={classes.mainCard}>
        <Grid xs={12} sm={12} md={12} lg={7} xl={7} item container spacing={2}>
          {props?.value.map((val) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Card
                  className={classes.Card}
                  onClick={() => values(val?.url)}
                >
                  <img
                    className={classes.imageTag}
                    src={val?.image}
                    alt="jewellery"
                  />
                  <CardContent className={classes.content}>
                    <Typography className={classes.title}>
                      {val.title}
                    </Typography>
                    <Typography className={classes.desc}>
                      {val.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default ExperienceCardComp;
