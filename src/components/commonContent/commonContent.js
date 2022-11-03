import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CommonContentStyles from "./style";
import ExpandMore from "assets/expanMore";

const CommonContent = (props) => {
  const classes = CommonContentStyles();
  return (
    <div>
      {props?.data.map((e) => {
        return (
          <>
            <Accordion className={classes.contentText} defaultExpanded>
              <AccordionSummary
                className={classes.accordionSummary}
                expandIcon={<ExpandMore />}
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
                          <Typography className={classes.accordinText}>
                            {val}
                          </Typography>
                        </div>
                      );
                    })}
                  </div>
                )}
                {e?.element}
                {props?.faq && (
                  <div>
                    {e?.paragraph?.map((element) => {
                      return (
                        <div>
                          <div>
                            <Typography className={classes.question}>
                              {element?.question}
                            </Typography>
                          </div>
                          <div>
                            <Typography className={classes.answer}>
                              {element?.answer}
                            </Typography>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </div>
  );
};

export default CommonContent;
