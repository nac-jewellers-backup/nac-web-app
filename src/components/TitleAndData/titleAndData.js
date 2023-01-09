import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import parse from "html-react-parser";

const TitleAndData = (props) => {
  const classes = useStyles();
  const { title, description, richEditor } = props;
  return (
    <Grid xs={12} className={classes.roots}>
      <div>
        <div className={classes.headerAlign}>
          <img
            alt="images"
            loading="lazy"
            className={classes.logoEdits}
            src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/collection+page/urn_aaid_sc_US_4f2880c9-1910-41e4-b332-90c4513a4ca7+(1).png"
          />
          <Typography className={classes.headings}>{title}</Typography>
          <img
            alt="images"
            loading="lazy"
            className={classes.logoEdits}
            src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/collection+page/urn_aaid_sc_US_4f2880c9-1910-41e4-b332-90c4513a4ca7+(2).png"
          />
        </div>
        <div className={classes.richTextEditAlign}>{parse(richEditor)}</div>
      </div>
    </Grid>
  );
};

export default TitleAndData;
