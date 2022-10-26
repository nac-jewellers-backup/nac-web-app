import { CommonTitle } from "components";
import AboutUsContent from "components/aboutUsContent/aboutUsContent";
import ImageRow from "components/imageRow/imageRow";
import Header from "components/SilverComponents/Header";
import { aboutUsNew } from "mappers/dummydata";
import React from "react";

const AboutUsPageNew = (props) => {
  return (
    <div>
      {/* header Tag */}
      <Header />

      {/* title */}
      <CommonTitle title="ABOUT US" />

      {/* Content */}
      <AboutUsContent data={aboutUsNew} />

      <ImageRow />
    </div>
  );
};

export default AboutUsPageNew;
