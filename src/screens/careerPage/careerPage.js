import CustomBanner from "components/customBanner/customBanner";
import { customBannerData } from "mappers/dummydata/customBannerData";
import React, { useState } from "react";
import CareerPageStyles from "./style";
import Header from "components/SilverComponents/Header";
import Footer from "components/Footer/Footer";
import CustomCard from "components/customCard/customCard";
import { customCardData } from "mappers/dummydata";
import { Button, Hidden, Typography } from "@material-ui/core";

const CareerPage = () => {
  const classes = CareerPageStyles();

  const [count, setCount] = useState(3);

  const handleRequest = () => {
    setCount(count + 3);
  };
  return (
    <div>
      {/* HEADER */}

      <div className={classes.mainTag}>
        <Header />
      </div>

      {/* CUSTOM BANNER */}

      <div className={classes.customBanner}>
        <CustomBanner data={customBannerData} />
      </div>

      {/* TITLE */}

      <div className={classes.title}>
        <Typography>Current Openings</Typography>
      </div>

      {/* CUSTOM CARD */}

      <div className={classes.customCard}>
        <CustomCard
          data={customCardData.filter((value, index) => index < count)}
        />
      </div>

      {/* VIEW MORE */}

      <Hidden xsDown>
        <div className={classes.viewMore}>
          <Button onClick={handleRequest}>View More</Button>
        </div>
      </Hidden>

      {/* VIEW MORE MOBILE */}

      <Hidden smUp>
        <div className={classes.viewMoreMobile}>
          <div onClick={handleRequest} className={classes.viewMoreButton}>
            View More
          </div>
        </div>
      </Hidden>

      {/* FOOTER */}

      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default CareerPage;
