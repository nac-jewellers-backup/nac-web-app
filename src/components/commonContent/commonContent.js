import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CommonContentStyles from "./style";

const CommonContent = (props) => {
  const classes = CommonContentStyles();
  return (
    <div>
      {props?.data.map((e) => {
        return (
          <>
            <Accordion className={classes.contentText}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{e?.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {e?.para?.length && (
                  <div>
                    {e?.para?.map((val) => {
                      return (
                        <div>
                          <Typography>{val}</Typography>
                        </div>
                      );
                    })}
                  </div>
                )}
                {e?.element}
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </div>
  );
};

export default CommonContent;
