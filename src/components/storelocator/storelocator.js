import { Box, Button, Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import { FiCornerUpRight } from "react-icons/fi";
import { Title } from "../../screens/BridalCollection/title";
import style from "./style";
export default function Storelocator(props) {
  const value = props.value;
  const classes = style();
 
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Title title="TAMIL NADU" />
        </Grid>
        {value.data.map((value, key) => (
          <Grid item xs={12} md={12} lg={6}>
            <Grid container className={classes.shadow}>
              <Grid item sm={12} md={4} lg={4} xs={12}>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={value.img}
                  alt="icon"
                  loading="lazy"
                />
              </Grid>
              <Grid item sm={12} md={1} lg={1} xs={12}></Grid>
              <Grid item xs={12} sm={12} md={7} lg={7}>
                <div className={classes.pads}>
                  <Typography className={classes.title}>
                    {value.title}
                  </Typography>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: value.para }}
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
                          window.location.pathname = "/loc/" + value.key;
                        }}
                        className={classes.ViewButton}
                      >
                        &nbsp;&nbsp;{value.button}&nbsp;&nbsp;
                      </Button>
                    </a>
                  </div>
                  <Box display="flex" alignItems="center" marginTop="14px">
                    <Box>&nbsp;</Box>
                    <Box>
                      <a href={value.location} target="_blank">
                        <IconButton
                          size="small"
                          style={{ backgroundColor: "#2F348B", color: "white" }}
                        >
                          <FiCornerUpRight />
                        </IconButton>
                      </a>
                    </Box>
                    <Box>
                      <span>&nbsp;&nbsp;Get directions</span>
                    </Box>
                  </Box>
                  <br />
                </div>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Title title="ANDHRA PRADESH" />
        </Grid>

        {value.data1.map((value, key) => (
          <Grid item xs={12} md={12} lg={6}>
            <Grid container className={classes.shadow}>
              <Grid item xs={4}>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={value.img}
                  alt="icon" loading="lazy"
                />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={12} sm={12} md={7} lg={7}>
                <div className={classes.pads}>
                  <Typography className={classes.title}>
                    {value.title}
                  </Typography>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: value.para }}
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
                          window.location.pathname = "/loc/" + value.key;
                        }}
                        className={classes.ViewButton}
                      >
                        &nbsp;&nbsp;{value.button}&nbsp;&nbsp;
                      </Button>
                    </a>
                  </div>
                  <Box display="flex" alignItems="center" marginTop="14px">
                    <Box>&nbsp;</Box>
                    <Box>
                    <a href={value.location} target="_blank">
                        <IconButton
                          size="small"
                          style={{ backgroundColor: "#2F348B", color: "white" }}
                        >
                          <FiCornerUpRight />
                        </IconButton>
                      </a>
                    </Box>
                    <Box>
                      <span>&nbsp;&nbsp;Get directions</span>
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
  );
}
