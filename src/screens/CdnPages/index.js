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
import { StoreLocationDetails } from "components";
import ExperienceBanner from "components/experienceBanner/experienceBanner";
import ExperienceCardComp from "components/experienceCard/experienceCard";
import { ExperienceCards } from "components/experienceCardComponent";
import { BlogImageCard } from "components/blogImageCard";
import { SiteMapNew } from "components/siteMapNew";
import TempleWorkBannerComp from "components/TempleWorkBannerComp";
import TempleCardComp from "components/templeCardComp";
import TempleProducts from "components/TempleProducts";
import TempleFooterComp from "components/templeFootComp";
import TempleCardDetailComp from "components/templeCardDetailComp";
import { useLocation } from "react-router-dom";

function CdnPages(props) {
  // view more button click state  
  const [count, setCount] = useState(3);

  // card and form hide, show state
  const [enable, setEnable] = useState(false);

  // Title comp show and hide
  const [showCard, setShowCard] = useState(false);

  const [templeShowDetail, setTempleShowDetail] = React.useState(false)

  const handleClick = () => {
    setTempleShowDetail(!templeShowDetail)
  }

  // Career page view more button click function

  const careerViewMoreClick = () => {
    setCount(count + 3);
  };

  // Career page card apply now button click function


  const showTitle = () => {
    setShowCard(!showCard);
  };

  // Career page form submit click function

  const location = useLocation();


  useEffect(() => {
    const url = window.location.pathname.split("/")[1];
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
        const dataRecieved = JSON.parse(data.data.cdnByPage.data);
        if (data.data.cdnByPage.isActive) {
          setState(dataRecieved);
        }
      });
  }, [location]);

  const [state, setState] = useState([]);
  const handleComponents = (val) => {        
    switch (val.component) {
      case "BannerComponent": {
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
        return !showCard && <Title title={val?.props?.title} />;
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
        return (
          <CustomCard
            value={val?.props?.cardContent.filter(
              (value, index) => index < count
            )}
            handleRequest={careerViewMoreClick}
            {...props}
            />
        )
      }
      case "ResumeComp": {
        return <CustomApplication location={location} />;
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
      case "StoreDetailsComponent": {
        return (
          <StoreLocationDetails data={val?.props} />
        )
      }

      case "experienceBanner": {
        return <ExperienceBanner value={val?.props?.banners} />;
      }

      case "experienceCard": {
        return <ExperienceCardComp value={val?.props?.cardContent} />;
      }

      case "ExperienceCard": {
        return <ExperienceCards value={val?.props} />;
      }

      case "blogPageCard": {
        return (
          <BlogImageCard
            value={val?.props?.cardContent}
            handleShow={showTitle}
          />
        );
      }

      case "siteMap":{
        return (
          <SiteMapNew value={val?.props}/>
        )
      }

      case "TempleWorkBannerComponent": {
        return (
          <TempleWorkBannerComp
            banners={val?.props?.banners}
            dataCarousel={
              val?.props?.banners.length > 1 ? "multiple" : "single"
            }
          />
        );
      }
      case "TempleCardComponent": {
        return templeShowDetail === false &&
          <TempleCardComp
            data={val?.props?.CardData}
            handleClick={handleClick}
          />
      }

      case "TempleProducts": {
        return templeShowDetail === false &&
          <TempleProducts
            data={val?.props?.listingItems}
          />
      }


      case "FooterComponent": {
        return templeShowDetail === false &&
          <TempleFooterComp
            data={val?.props?.content}
          />
      }

      case "TempleCardDetailsComponent": {
        return templeShowDetail === true &&
          <TempleCardDetailComp
            data={[val?.props?.detailData]}
          />;
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
