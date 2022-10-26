import { Card, Container, Grid, Hidden, makeStyles } from "@material-ui/core";
import Homenote from "containers/home/Homenote";
import React from "react";
import TimelineEntry from "./timeLineEntry";


const useStyles = makeStyles((theme) => ({
  timelinegrid: {
    margin: "20px 0",
  },
  timelineItemGrid: {
    overflowX: "hidden",
    overflowY: "auto",
    [theme.breakpoints.up("md")]: {
      height: "350px",
    },
    [theme.breakpoints.down("md")]: {
      height: "200px",
    },
  },
  minHeighttimerange: {
    paddingBottom: "0 !important",
    minHeight: "0 !important",
  },
}))



export default function TimelineComp(props) {
  const { setstate, state, timelineData } = props;
  console.log("Parentprops", props)
  const classes = useStyles();

  return (
    <>
      <Container>
        <Grid container className={classes.timelinegrid}>
          <Grid
            item
            xs={3}
            sm={3}
            md={2}
            lg={2}
            xl={2}
            className={`${classes.timelineItemGrid} timelinescroll`}
          >
            <div className="timeline">
              <div className="timeline-body">
                {timelineData?.map((el, i) => {
                  debugger
                  return (
                    < TimelineEntry
                      state={state}
                      setstate={setstate}
                      entry={el}
                      key={i}
                      useBar={i === timelineData?.length - 1 ? false : true}
                    />
                  )
                })}
              </div>
            </div>
          </Grid>
          <Grid item xs={9} sm={9} md={10} lg={10} xl={10}>
            <Card
              data={{
                image: state.timelineImage,
                content: state.content,
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Grid container>
        <Grid item xs={12}>
          <Hidden mdUp>
            <br />
            <Homenote content={state?.content ?? ""} />
          </Hidden>
        </Grid>
      </Grid>
    </>
  );

}
