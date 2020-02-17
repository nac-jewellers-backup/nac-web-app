import React from "react";
import { Grid } from "@material-ui/core";
import Header from "components/SilverComponents/Header";
import CardIndexPage from "components/card/index";
import {
  IndexTemplePage,
  IndexAdvertisingPage,
  IndexNewsRoomPage
} from "mappers/dummydata/savingNac";

export default function Newsroom(props) {
  //   const classes = styles();

  const values = () => {
    if (props.match.path === "/newsroom") {
      return  IndexNewsRoomPage;
    } else if (props.match.path === "/advertising") {
      return IndexAdvertisingPage;
    } else if (props.match.path === "/temple-work") {
      return IndexTemplePage;
    }
  };
  return (
    <Grid container>
      <Grid item>
        <Header />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  >
        <CardIndexPage value={values()} />
      </Grid>
    </Grid>
  );
}
