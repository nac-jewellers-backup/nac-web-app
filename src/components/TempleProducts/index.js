import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { TempleData } from "screens/templeWork/templeWorkData";
import ImageWithDescription from "./components/ImageWithDescription";
import MultipleSimilarImages from "./components/MultipleSimilarImages";
import ThreeSplitImage from "./components/ThreeSplitImage";
import TwoGridImages from "./components/TwoGridImages";
import TwoImageSplit from "./components/TwoImageSplit";

const CardUseStyles = makeStyles((theme) => ({
  about: {
    backgroundColor: "#E6E6E6",
    width: "100%",
  },
}));

const TempleProducts = (props) => {
  const classes = CardUseStyles();

  const getComponents = (val) => {
    switch (val.type) {
      case "ImageWithDescription": {
        return (
          <ImageWithDescription
            custom={val.data.length === 5 ? true : false}
            data={val.data}
          />
        );
      }
      case "MultipleSimilarImages": {
        return (
          <MultipleSimilarImages
            data={val.data}
            header={val.header}
            subHeader={val.subHeader}
            invert={val.invert}
          />
        );
      }
      case "TwoGridImages": {
        return <TwoGridImages data={val.data} />;
      }
      case "ThreeSplitImage": {
        return <ThreeSplitImage data={val.data} total={val} />;
      }
      case "TwoImageSplit": {
        return <TwoImageSplit data={val.data} total={val} />;
      }
    }
  };

  return (
    <>
      <Box className={classes.about}>
        {TempleData?.map((val, i) => {
          return getComponents(val);
        })}
      </Box>
    </>
  );
};
export default TempleProducts;
