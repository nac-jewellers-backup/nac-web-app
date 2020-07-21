import React from "react";
import { Grid } from "@material-ui/core";
import Header from "components/SilverComponents/Header";
import CardIndexPage from "components/card/index";
// import {IndexTemplePage , IndexAdvertisingPage } from 'mappers/dummydata/savingNac';
import {
  IndexTemplePage,
  IndexAdvertisingPage,
  IndexNewsRoomPage,
} from "mappers/dummydata/savingNac";
import Footer from "components/Footer/Footer";
// import { IndexAdvertisingPage } from 'mappers/dummydata/savingNac';

export default function Advertising(props) {
  //   const classes = styles();

  const values = () => {
    if (props.match.path === "/temple-work") {
      return IndexTemplePage;
    } else if (props.match.path === "/advertising") {
      return IndexAdvertisingPage;
    } else if (props.match.path === "/news-room") {
      return IndexNewsRoomPage;
    }
  };

  return (
    <Grid container style={{ display: "block" }}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <CardIndexPage value={values()} />
      </Grid>
      <Footer />
    </Grid>
  );
}
