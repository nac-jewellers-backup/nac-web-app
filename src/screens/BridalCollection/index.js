import {  
  Grid 
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BannerComponent } from "components";
import { SlideImgMediaCard } from "components";
import AboutBookAppointment from "components/aboutAppointment";
import AboutCollectionComp from "components/aboutCollection";
import Header from "components/SilverComponents/Header";
import SpclTitleDescr from "components/spclTitleDescr";
import React from "react";
import Footer from "../../components/Footer/Footer";
import { BridalData } from "./bridalData";


const useStyles = makeStyles((theme) => ({
  body1: {
    fontSize: "25px",
    textAlign: "center",
    color: "#2F348B",
  },
  bodys1: {
    fontSize: "17px",
    textAlign: "center",
    color: "gray",
  },
  body2: {
    fontSize: "35px",
    textAlign: "center",
    color: "#2F348B",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  collectionSection: {
    fill: `${theme.palette.secondary.main} !important`,
  },
  title: {
    color: "gray",
    fontSize: "23px",
    textAlign: "center",
  },
  sub: {
    color: "gray",
    fontSize: "18px",
    textAlign: "center",
  },
  about: {
    boxShadow: "4px 4px 4px #a5a4a5 !important",
    maxHeight: "40%",
  },
  content2: {
    backgroundColor: "#F9E3C0",
    padding: "30px",
  },
  btn: {
    backgroundColor: "#b78231",
    color: "#fff",
    borderRadius: "0px",
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  },
  aboutcolimg: {
    objectFit: "contain",
    width: "100%",
  },

  sub2: {
    textAlign: "center",
    color: "gray",
    fontSize: "15.92px",
    marginTop: "10px",
  },
  type: {
    display: "flex",
    alignItems: "center",
    color: "gray",
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginTop: "10px",
  },
  name: {
    textAlign: "center",
    fontSize: "20px",
    color: "#2F348B",
  },
  address: {
    textAlign: "center",
    fontSize: "15.92px",
    color: "#B2832C",
  },
}));



function BridalCollection(props) {

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
      case "SpclTitleDescr": {
        return (
          <SpclTitleDescr
            data={val?.props?.storeData}
          />
        );
      }

      case "ImgMediaCard": {

        return (
          <>
            <SlideImgMediaCard listProduct={val?.props?.listingProducts}
              cardSize="auto" hoverText={true} />

          </>
        )
      }

      case "TestimonialTwo": {
        return (
          <>

            <AboutCollectionComp TestimonialSec={false} CollectionData={val?.props?.storeData} />
          </>

        )
      }

      case "AboutBookAppointment": {
        return (
          <>
            <AboutBookAppointment
              data={val?.props}
            />
          </>
        )
      }

      case "Testimonial": {
        return (
          <AboutCollectionComp TestimonialSec CollectionData={val?.props?.storeData} />
        )
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
      {BridalData?.map((val) => {
        return handleComponents(val);
      })}
      <Footer />
    </Grid>
  );
}
export default BridalCollection;