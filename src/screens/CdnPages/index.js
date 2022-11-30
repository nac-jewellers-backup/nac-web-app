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
import AboutCollectionComp from "components/aboutCollection";
import AboutBookAppointment from "components/aboutAppointment";
import SpclTitleDescr from "components/spclTitleDescr";
import { Title } from "../../containers/home/titles";
import CustomBanner from "components/customBanner/customBanner";
import CustomCard from "components/customCard/customCard";
import { CustomApplication } from "screens/customApplication";
import { CollectionHeader } from "components/collectionHeader";
import { CollectionCards } from "components/collectionCards";
import { CustomAdvertisement } from "components/customAdvertisment";
import { CustomNewsRoom } from "components/customNewsRoom";
import { ContactUsForm } from "components/contactUsForm";
import { TitleAndDescription } from "components";

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
  // console.log(url, "url ");

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
      case "titleComp": {
        return <Title title={val?.props?.title} />;
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
      case "CustomNews": {
        return <CustomNewsRoom value={val?.props?.cardContent} />;
      }
      case "SpclTitleDescr": {
        return <SpclTitleDescr data={val?.props?.storeData} />;
      }
      case "TestimonialTwo": {
        return (
          <>
            <AboutCollectionComp
              TestimonialSec={false}
              CollectionData={val?.props?.storeData}
            />
          </>
        );
      }
      case "AboutBookAppointment": {
        return (
          <>
            <AboutBookAppointment data={val?.props} />
          </>
        );
      }

      case "Testimonial": {
        return (
          <AboutCollectionComp
            TestimonialSec
            CollectionData={val?.props?.storeData}
          />
        );
      }

      case "formContent": {
        return <ContactUsForm value={val?.props?.cardContent} />;
      }
      case "CustomAdvertising": {
        return <CustomAdvertisement value={val?.props?.cardContent} />;
      }
      case "TitleAndDescription": {
        return (
          <TitleAndDescription
            title={val?.props?.title}
            description={val?.props?.description}
          />
        );
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
