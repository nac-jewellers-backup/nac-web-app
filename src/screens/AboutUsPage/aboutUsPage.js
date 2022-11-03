import { CommonTitle } from "components";
import AboutUsContent from "components/aboutUsContent/aboutUsContent";
import ImageCardRow from "components/imageCardRow/ImageCardRow";
import ImageRow from "components/imageRow/imageRow";
import Header from "components/SilverComponents/Header";
import TimelineComp from "components/timeline/timelineComp";
import { aboutusImgCard, aboutUsNew, aboutusTData } from "mappers/dummydata";
import React from "react";

const AboutUsPageNew = (props) => {
  const [state, setstate] = React.useState({
    timelineImage:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1917.webp",
    content:
      "N. Narayana Chetty makes a humble beginning at home: he designs and crafts gold jewellery by hand. What starts as a small group of interested customers, gradually grows into a loyal patronage",
  })
  return (
    <div>
      {/* header Tag */}
      <Header />

      {/* title */}
      <CommonTitle title="ABOUT US" />

      {/* Content */}
      <AboutUsContent data={aboutUsNew} />
      <ImageRow data={aboutUsNew} />
      <TimelineComp
        initialtimelineImage={state.timelineImage}
        initialcontent={state.content}
        timelineData={aboutusTData}
      />

      <ImageCardRow data={aboutusImgCard} />

    </div>
  );
};

export default AboutUsPageNew;
