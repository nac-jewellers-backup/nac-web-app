import { Typography } from "@material-ui/core";
import CustomForm from "components/customForm/customForm";
import React, { useState } from "react";
import CCustomApplicationStyles from "./style";
import styled from "styled-components";

const DescriptionText = styled.div`
  font-size: 14px;
  margin: 20px 40px;
`;

const ShowMoreText = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 30px;
  text-decoration: underline;
`;

const CustomApplication = (props) => {
  const classes = CCustomApplicationStyles();
  const [isShowMore, setIsShowMore] = useState(true);
  const toggleReadMore = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className={classes.mainGroup}>
      <div className={classes.headingGroup}>
        <div className={classes.role}>
          <Typography>{props.location?.state?.job_Role}</Typography>
        </div>
        <div className={classes.location}>
          <Typography>
            {props.location?.state?.location} {props.location?.state?.job_type}
          </Typography>
        </div>
        <DescriptionText className={classes.secondLayer}>
          <Typography>
            {isShowMore
              ? props.location?.state?.description.slice(0, 200)
              : props.location?.state?.description}
            {props.location?.state?.description &&
              props.location?.state?.description.length > 200 && (
                <span className={classes.secondLayer} onClick={toggleReadMore}>
                  {isShowMore ? "Read More..." : ""}
                </span>
              )}
          </Typography>
        </DescriptionText>
        {/* {props.location?.state?.description &&
          props.location?.state?.description.length > 200 && (
            <ShowMoreText
              className={classes.secondLayer}
              onClick={toggleReadMore}
            >
              {isShowMore ? "Read More..." : ""}
            </ShowMoreText>
          )} */}
      </div>

      <div className={classes.customForm}>
        <CustomForm />
      </div>
    </div>
  );
};

export default CustomApplication;