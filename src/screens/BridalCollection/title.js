import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
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
                        <img
                            className={classes.img}
                            src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+160.svg"
                            alt="title images"
                        />
                    </Box>
                    <Box>
                        <Typography className={classes.title}>
                            {props.title.toUpperCase()}
                        </Typography>
                    </Box>
                    <Box>
                        <img
                            className={classes.img}
                            src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+159.svg"
                            alt="title images"
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
