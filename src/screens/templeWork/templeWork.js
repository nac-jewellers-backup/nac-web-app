import { Grid } from "@material-ui/core";
import { CommonTitle } from "components";
import CommonContent from "components/commonContent/commonContent";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import TempleCardComp from "components/templeCardComp";
import TempleCardDetailComp from "components/templeCardDetailComp";
import TempleFooterComp from "components/templeFootComp";
import TempleProducts from "components/TempleProducts";
import TempleWorkBannerComp from "components/TempleWorkBannerComp";
import React from "react";
import TempleWorkStyles from "./style";
import { TempleWorkData } from "./templeWorkData";

const TempleWork = () => {
  const classes = TempleWorkStyles()
  const [templeShowDetail, setTempleShowDetail] = React.useState(false)

  const handleClick = () => {
    setTempleShowDetail(!templeShowDetail)
  }

  const handleComponents = (val) => {
    switch (val.component) {
      case "TempleWorkBannerComponent": {
        console.log("valueRender", val?.props);
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
            data={val?.props?.detailData}
          />;
      }

      default: {
        return <h1></h1>;
      }
    }
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.mainTag}>
          <Header />
        </div>
        {TempleWorkData?.map((val) => {
          return handleComponents(val);
        })}
        <div className={classes.footer}>
          <Footer />
        </div>
      </Grid>
    </Grid>
  );
};

export default TempleWork;


