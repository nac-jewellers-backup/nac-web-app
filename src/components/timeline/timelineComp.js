import { Container, Grid, Hidden, makeStyles } from "@material-ui/core";
import Card from "./CardGrid";
import Homenote from "components/timeline/Homenote";
import React from "react";
import TimelineEntry from "./timeLineEntry";



const useStyles = makeStyles((theme) => ({
  timelinegrid: {
    margin: "20px 0",
    padding: "40px 30px ",
    [theme.breakpoints.down("md")]: {
      padding: "30px 30px !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 10px !important",
    },
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
  const { timelineData, initialtimelineImage, initialcontent } = props;
  const classes = useStyles();
  const initialData = {
    timelineImage: initialtimelineImage,
    content: initialcontent
  }
  const [state, setstate] = React.useState(initialData)
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
            className={`${classes.timelineItemGrid} timelinescroll`}>
            <div className="timeline">
              <div className="timeline-body">
                {timelineData?.map((el, i) => (
                  <TimelineEntry
                    state={state}
                    setstate={setstate}
                    entry={el}
                    key={i}
                    useBar={i === timelineData?.length - 1 ? false : true}
                  />
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={9} sm={9} md={10} lg={10} xl={10}>
            <Card
              data={{
                image: state?.timelineImage,
                content: state?.content,
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
