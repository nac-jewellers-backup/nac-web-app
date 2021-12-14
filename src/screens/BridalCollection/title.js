import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import ArrowLeft from "../../assets/arrowleft";
import ArrowRight from "../../assets/arrowright";
import styles from "./titlestyle";

export const Title = (props) => {
    const classes = styles();
    return (
        <Grid container direction="row">
            <Grid item xs={12}>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box>
                        <ArrowLeft />
                    </Box>
                    <Box>
                        <Typography className={classes.title}>
                            {props.title.toUpperCase()}
                        </Typography>
                    </Box>
                    <Box>
                        <ArrowRight />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
