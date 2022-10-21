import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const TitleAndData = (props) => {
  const classes = useStyles();
  const { title, description } = props;
  return (
    <Grid xs={12} className={classes.roots}>
      <div style={{ textAlign: "center" }}>
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
        <div style={{ textAlign: "center" }}>
          <Typography className={classes.contentText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default TitleAndData;
