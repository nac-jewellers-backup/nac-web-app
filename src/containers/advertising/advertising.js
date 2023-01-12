import { Grid } from "@material-ui/core";
import CardIndexPage from "components/card/index";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
// import {IndexTemplePage , IndexAdvertisingPage } from 'mappers/dummydata/savingNac';
import {
  IndexAdvertisingPage,
  IndexNewsRoomPage, IndexTemplePage
} from "mappers/dummydata/savingNac";
import React from "react";
import styles from "../savings/savingsstyle";
// import { IndexAdvertisingPage } from 'mappers/dummydata/savingNac';

export default function Advertising(props) {
  const classes = styles();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();

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
        <br />
        <CardIndexPage value={values()} />
        <br />
        <br />
      </Grid>
      <Footer />
    </Grid>
  );
}
