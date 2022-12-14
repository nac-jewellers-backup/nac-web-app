import { Box, Grid, Typography } from "@material-ui/core";
import WhiteArrowLeft from "assets/Icons/whiteArrowleft";
import WhiteArrowRight from "assets/Icons/whiteArrowRight";

import React from "react";
import ArrowLeft from "../../assets/arrowleft";
import styles from "./titlestyle";

export const TempleTitle = (props) => {
    const classes = styles();
    return (
        <Grid container direction="row" className={classes.titleParent}>
            <Grid item xs={12}>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box className={classes.arrowDiv}>
                        <WhiteArrowRight />
                    </Box>
                    <Box>
                        <Typography className={classes.title}>
                            &nbsp;{props.title.toUpperCase()}&nbsp;
                        </Typography>
                    </Box>
                    <Box className={classes.arrowDiv}>
                        <WhiteArrowLeft />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
