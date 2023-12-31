
import { Grid } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import "index.css";
import React from "react";
import { withRouter } from "react-router";
import CollectionItem from "../components/CollectionTemplate/CollectionItem";

class CollectionBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Header />
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CollectionItem />
        </Grid>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

const Components = () => {
  let content = <CollectionBlock />;
  return content;
};

export default withRouter(Components);
