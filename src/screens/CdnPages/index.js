import React, { useEffect, useState } from "react";
import Header from "../../components/SilverComponents/Header";
import { Grid } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Footer from "../../components/Footer/Footer";
import { API_URL } from "../../config";
import { TitleAndData } from "components";
import { QueryForm } from "components";
import { BannerComponent, SlideImgMediaCard } from "components";
import { CDNPAGES } from "queries/cdnPages";


function CdnPages(props) {
  const slider = React.createRef();

  useEffect(() => {
    const url = window.location.pathname.split("-")[1];
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CDNPAGES(url),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //feature product
        console.log("cdnData", JSON.parse(data.data.cdnByPage.data));
        const dataRecieved = JSON.parse(data.data.cdnByPage.data);
        setState(dataRecieved);
      });
  }, []);

  const [state, setState] = useState([]);

  const handleComponents = (val) => {
    switch (val.component) {
      case "BannerComponent": {
        console.log("valueRender", val?.props);
        return (
          <BannerComponent
            banners={val?.props?.banners}
            dataCarousel={
              val?.props?.banners.length > 1 ? "multiple" : "single"
            }
          />
        );
      }
      case "TitleAndData": {
        return (
          <TitleAndData
            title={val?.props?.title}
            description={val?.props?.description}
          />
        );
      }
      case "SlideImgMediaCard": {
        return <SlideImgMediaCard listProduct={val?.props?.listingProducts} />;
      }
      case "QueryForm": {
        return <QueryForm image={val?.props?.image} />;
      }
      default: {
        return <h1>The name of the component does not exsist</h1>;
      }
    }
  };

  return (
    <Grid container>
      <Grid xs={12}>
        <Header />
      </Grid>
      {state.map((val) => {
        return handleComponents(val);
      })}
      <Footer />
    </Grid>
  );
}

export default CdnPages;
