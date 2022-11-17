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
import Storelocator from "components/storelocator/storelocator";
import CustomBanner from "components/customBanner/customBanner";
import CustomCard from "components/customCard/customCard";
import { CustomApplication } from "screens/customApplication";
import { CollectionHeader } from "components/collectionHeader";
import { CollectionCards } from "components/collectionCards";

function CdnPages(props) {
  const slider = React.createRef();

  // view more button click state
  const [count, setCount] = useState(3);

  // card content send to form apllication state
  const [content, setContent] = useState("");

  // card and form hide, show state
  const [enable, setEnable] = useState(false);

  // Career page view more button click function

  const careerViewMoreClick = () => {
    setCount(count + 3);
  };

  // Career page card apply now button click function

  const careerCardApplyNow = (value) => {
    setContent(value);
    setEnable(!enable);
  };

  // Career page form submit click function

  const formSubmitClick = () => {
    setEnable(!enable);
  };

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
            richEditor={val?.props?.richEditor}
          />
        );
      }
      case "SlideImgMediaCard": {
        return <SlideImgMediaCard listProduct={val?.props?.listingProducts} />;
      }
      case "QueryForm": {
        return <QueryForm image={val?.props?.image} />;
      }
      case "Storelocator": {
        return <Storelocator value={val?.props?.storeData} />;
      }
      case "CustomBanner": {
        return <CustomBanner value={val?.props?.banners} />;
      }
      case "CareerCard": {
        return !enable ? (
          <CustomCard
            value={val?.props?.cardContent.filter(
              (value, index) => index < count
            )}
            handleRequest={careerViewMoreClick}
            enable={enable}
            buttonClick={careerCardApplyNow}
          />
        ) : (
          <CustomApplication data={content} handleClick={formSubmitClick} />
        );
      }
      case "CollectionHeader": {
        return <CollectionHeader value={val?.props?.header} />;
      }
      case "CollectionCards": {
        return <CollectionCards value={val?.props?.cardContent} />;
      }
      default: {
        return <h1></h1>;
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
