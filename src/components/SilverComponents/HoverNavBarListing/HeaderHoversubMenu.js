import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  Popper,
  ListItem,
  ListItemText,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { useStyles } from "../styles";
import PropTypes from "prop-types";

import "./../header.css";
// import Checkbox from "components/InputComponents/CheckBox";

function HeaderHoverMenuItem(props) {
  
  const [opens, setOpens] = React.useState(props.opened);
  const [target, setTarget] = React.useState(props.subMenuTarget);
  const { onMouseLeave, onMouseOver } = props;
  const classes = useStyles();
  useEffect(() => {
    setOpens(props.opened);
    setTarget(props.targetopened);
  });
  const data = [
    { title: "Under 10k" },
    { title: "10k - 20k" },
    { title: "20k-30k" },
    { title: "Above 30k" },
  ];
  const gender = [{title:'Woman'}, {title:'Men'}, {title:'Unisex'}, {title:'Kids'}]
  const occassion = [{title:'Everyday'}, {title:'Office'}, {title:'Party'},{title:'Bridal'}, {title:'Festive'}]
  const productTypes = [{title:'Rings'}, {title:'Pendants'}, {title:'Earrings'}, {title:'Bangle'}, {title:'Bracelet'}, {title:'Nosepin'}]
  const gifts1 =['For Her','For Him', 'For Mother', 'For Father'].map(val=>{
    return {
      title:val
    }
  })
  const gifts2 =['Anniversary', 'Wedding', 'Valentine', 'Corporate/Bulk Gifting'].map(val=>{
    return {
      title:val
    }
  })
  const _imagewithtextOne = [
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Studs+Earrings+Stylori-01.png",
      "content": "Studs",
      "url": "/studs-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Drops+Earrings+Stylori-02.png",
      "content": "Drops",
      "url": "/drops-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Earcuffs+Earrings+Stylori-03.png",
      "content": "Earcuffs",
      "url": "/ear+cuffs-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Huggies+Earrings+Stylori-04.png",
      "content": "Huggies",
      "url": "/huggies-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Jhumkas+Earrings+Stylori-05.png",
      "content": "Jhumkas",
      "url": "/jhumkas+online-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Ear+Jackets+Earrings+Stylori-06.png",
      "content": "Ear Jacket",
      "url": "/ear+jacket-earrings-jewellery"
    }
  ]

  const _imagewithtextmultiplecolumns = [
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Studs+Earrings+Stylori-01.png",
      "content": "Studs",
      "url": "/studs-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Drops+Earrings+Stylori-02.png",
      "content": "Drops",
      "url": "/drops-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Earcuffs+Earrings+Stylori-03.png",
      "content": "Earcuffs",
      "url": "/ear+cuffs-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Huggies+Earrings+Stylori-04.png",
      "content": "Huggies",
      "url": "/huggies-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Jhumkas+Earrings+Stylori-05.png",
      "content": "Jhumkas",
      "url": "/jhumkas+online-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Ear+Jackets+Earrings+Stylori-06.png",
      "content": "Ear Jacket",
      "url": "/ear+jacket-earrings-jewellery"
    }
  ]
  const _singleimagewithmultiplecolumns = [
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Studs+Earrings+Stylori-01.png",
      "content": "Studs",
      "url": "/studs-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Drops+Earrings+Stylori-02.png",
      "content": "Drops",
      "url": "/drops-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Earcuffs+Earrings+Stylori-03.png",
      "content": "Earcuffs",
      "url": "/ear+cuffs-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Huggies+Earrings+Stylori-04.png",
      "content": "Huggies",
      "url": "/huggies-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Jhumkas+Earrings+Stylori-05.png",
      "content": "Jhumkas",
      "url": "/jhumkas+online-earrings-jewellery"
    },
    {
      "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Ear+Jackets+Earrings+Stylori-06.png",
      "content": "Ear Jacket",
      "url": "/ear+jacket-earrings-jewellery"
    }
  ]
  const ImageWithText = () => {
    
    return (
      <Grid
        container
        style={{
          width: 600,
          background: "#fff",
          padding: "10px 10px 20px 10px",
          zIndex: "10000",
        }}
      >
        <Grid item xs={12}>
          <Typography className={classes.listedItemstitle}>
            SHOP BY STYLE
          </Typography>
        </Grid>
        {_imagewithtextOne.slice(0, 4).map((val, index) => {
          return (
            <Grid item xs={3}>
              <Grid
                container
                className={classes.imgcont}
                onClick={() => {
                  window.location.href = val.url;
                }}
                justify="center"
                alignContent="center"
                alignItems="center"
                style={{ cursor: "pointer" }}
              >
                <Grid item style={{ margin: "auto" }}>
                  <Typography
                    style={{ margin: "auto", textAlign: "center" }}
                    className={classes.listedItemsvalue}
                  >
                    {val.content.toUpperCase()}
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    display: "flex",
                  }}
                >
                  {val.img && (
                    <img
                      style={{ width: "65%", margin: "auto" }}
                      src={val.img}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          );
        })}{" "}
        {/* second section */}
        <Grid item xs={12}>
          <Typography className={classes.listedItemstitle}>
            SHOP BY PRICE
          </Typography>
        </Grid>
        {data.map((val, index) => {
          return (
            <Grid item xs={3} className={classes.secondSection}>
              <Grid
                container
                className={classes.imgcont}
                onClick={() => {
                  window.location.href = val.url;
                }}
                justify="center"
                alignContent="center"
                alignItems="center"
                style={{ cursor: "pointer" }}
              >
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                        className={classes.checkbox}
                      />
                    }
                    label={val.title}
                  />
                </FormGroup>
              </Grid>
            </Grid>
          );
        })}{" "}
      </Grid>
    );
  };
  const ImageWithTextMultipleColumns = () => {
   
    return (
      <Grid
        container
        style={{
          width: 1000,
          background: "#fff",
          padding: "10px 10px 20px 10px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid item xs={6} className={classes.gridmultiplesection}>
            <Grid item xs={12}>
              <Typography className={classes.listedItemstitle}>
                SHOP BY STYLE
              </Typography>
            </Grid>
            <Grid container item xs={12}>
              {_imagewithtextmultiplecolumns.map((val, index) => {
                return (
                  <Grid item xs={3}>
                    <Grid
                      container
                      className={classes.imgcont}
                      onClick={() => {
                        window.location.href = val.url;
                      }}
                      justify="center"
                      alignContent="center"
                      alignItems="center"
                      style={{ cursor: "pointer" }}
                    >
                      <Grid item style={{ margin: "auto" }}>
                        <Typography
                          style={{ margin: "auto", textAlign: "center" }}
                          className={classes.listedItemsvalue}
                        >
                          {val.content.toUpperCase()}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        {val.img && (
                          <img
                            style={{ width: "65%", margin: "auto" }}
                            src={val.img}
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.gridmultiplesection}>
            <Grid container item xs={12}>
              <Grid item xs={4} style={{ padding: "0 6px 0 0px" }}>
                {/* second section */}
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    SHOP BY PRICE
                  </Typography>
                </Grid>
                {data.map((val, index) => {
                  return (
                    <Grid item xs={12} className={classes.secondSection}>
                      <Grid
                        container
                        className={classes.imgcont}
                        onClick={() => {
                          window.location.href = val.url;
                        }}
                        // justify="center"
                        alignContent="center"
                        alignItems="center"
                        style={{ cursor: "pointer" }}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={false}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                className={classes.checkbox}
                              />
                            }
                            label={val.title}
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
              <Grid item xs={4} style={{ padding: "0 6px 0 0px" }}>
                {/* second section */}
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    SHOP BY GENDER
                  </Typography>
                </Grid>
                {gender.map((val, index) => {
                  return (
                    <Grid item xs={12} className={classes.secondSection}>
                      <Grid
                        container
                        className={classes.imgcont}
                        onClick={() => {
                          window.location.href = val.url;
                        }}
                        // justify="center"
                        alignContent="center"
                        alignItems="center"
                        style={{ cursor: "pointer" }}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={false}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                className={classes.checkbox}
                              />
                            }
                            label={val.title}
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
              <Grid item xs={4} style={{ padding: "0 6px 0 0px" }}>
                {/* second section */}
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    SHOP BY OCCASSION
                  </Typography>
                </Grid>
                {occassion.map((val, index) => {
                  return (
                    <Grid item xs={12} className={classes.secondSection}>
                      <Grid
                        container
                        className={classes.imgcont}
                        onClick={() => {
                          window.location.href = val.url;
                        }}
                        // justify="center"
                        alignContent="center"
                        alignItems="center"
                        style={{ cursor: "pointer" }}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={false}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                className={classes.checkbox}
                              />
                            }
                            label={val.title}
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  const ImageWithTextMultipleColumnsSOLITAIRE = () => {
    
     return (
       <Grid
         container
         style={{
           width: 1000,
           background: "#fff",
           padding: "10px 10px 20px 10px",
           zIndex: "10000",
         }}
       >
         <Grid container item xs={12}>
           <Grid item xs={6} className={classes.gridmultiplesection}>
             <Grid item xs={12}>
               <Typography className={classes.listedItemstitle}>
                 BUY LOOSE DIAMONDS
               </Typography>
             </Grid>
             <Grid container item xs={12}>
               {_imagewithtextmultiplecolumns.map((val, index) => {
                 return (
                   <Grid item xs={4}>
                     <Grid
                       container
                       className={classes.imgcont}
                       onClick={() => {
                         window.location.href = val.url;
                       }}
                       justify="center"
                       alignContent="center"
                       alignItems="center"
                       style={{ cursor: "pointer" }}
                     >
                       {/* <Grid item style={{ margin: "auto" }}>
                         <Typography
                           style={{ margin: "auto", textAlign: "center" }}
                           className={classes.listedItemsvalue}
                         >
                           {val.content.toUpperCase()}
                         </Typography>
                       </Grid> */}
                       <Grid
                         item
                         style={{
                           justifyContent: "center",
                           alignContent: "center",
                           display: "flex",
                         }}
                       >
                         {val.img && (
                           <img
                             style={{ width: "65%", margin: "auto" }}
                             src={val.img}
                           />
                         )}
                       </Grid>
                     </Grid>
                   </Grid>
                 );
               })}{" "}
             </Grid>
           </Grid>
           <Grid item xs={6} className={classes.gridmultiplesection}>
             <Grid container item xs={12}>
               <Grid item xs={12} style={{ padding: "0 6px 0 0px" }}>
                 {/* second section */}
                 <Grid item xs={12}>
                   <Typography
                     className={classes.listedItemstitlemultiplesection}
                   >
                     SHOP BY STYLE
                   </Typography>
                 </Grid>
              <Grid container>
              {productTypes.map((val, index) => {
                   return (
                     <Grid item xs={4} className={classes.secondSection}>
                       <Grid
                         container
                         className={classes.imgcont}
                         onClick={() => {
                           window.location.href = val.url;
                         }}
                         // justify="center"
                         alignContent="center"
                         alignItems="center"
                         style={{ cursor: "pointer" }}
                       >
                         <FormGroup row>
                           <FormControlLabel
                             control={
                               <Checkbox
                                 checked={false}
                                 // onChange={handleChange}
                                 name="checkedB"
                                 color="primary"
                                 className={classes.checkbox}
                               />
                             }
                             label={val.title}
                           />
                         </FormGroup>
                       </Grid>
                     </Grid>
                   );
                 })}{" "}
              </Grid>
               </Grid>
               <Grid item xs={12} style={{ padding: "0 6px 0 0px" }}>
                 {/* second section */}
                 <Grid item xs={12}>
                   <Typography
                     className={classes.listedItemstitlemultiplesection}
                   >
                     SHOP BY PRICE
                   </Typography>
                 </Grid>
                 <Grid container >
                 {data.map((val, index) => {
                   return (
                     <Grid item xs={4} className={classes.secondSection}>
                       <Grid
                         container
                         className={classes.imgcont}
                         onClick={() => {
                           window.location.href = val.url;
                         }}
                         // justify="center"
                         alignContent="center"
                         alignItems="center"
                         style={{ cursor: "pointer" }}
                       >
                         <FormGroup row>
                           <FormControlLabel
                             control={
                               <Checkbox
                                 checked={false}
                                 // onChange={handleChange}
                                 name="checkedB"
                                 color="primary"
                                 className={classes.checkbox}
                               />
                             }
                             label={val.title}
                           />
                         </FormGroup>
                       </Grid>
                     </Grid>
                   );
                 })}{" "}
                 </Grid>
               </Grid>
             </Grid>
           </Grid>
         </Grid>
       </Grid>
     );
   };
  const SingleImageWithMultipleColumns = () => {
    
    return (
      <Grid
        container
        style={{
          width: 600,
          background: "#fff",
          padding: "10px 10px 20px 10px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid item xs={3} className={classes.gridmultiplesection} style={{margin:'auto'}}>
            <Grid container item xs={12}>
              {_singleimagewithmultiplecolumns.slice(0,1).map((val, index) => {
                return (
                  <Grid item xs={12}>
                    <Grid
                      container
                      className={classes.imgcont}
                      onClick={() => {
                        window.location.href = val.url;
                      }}
                      justify="center"
                      alignContent="center"
                      alignItems="center"
                      style={{ cursor: "pointer" }}
                    >
                      <Grid
                        item
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        {val.img && (
                          <img
                            style={{ width: "65%", margin: "auto" }}
                            src={val.img}
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Grid>
          <Grid item xs={9} className={classes.gridmultiplesection}>
            <Grid container item xs={12}>
              <Grid item xs={6} style={{ padding: "0 6px 0 0px" }}>
                {/* second section */}
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    FOR SPECIAL ONE
                  </Typography>
                </Grid>
                {gifts1.map((val, index) => {
                  return (
                    <Grid item xs={12} className={classes.secondSection}>
                      <Grid
                        container
                        className={classes.imgcont}
                        onClick={() => {
                          window.location.href = val.url;
                        }}
                        // justify="center"
                        alignContent="center"
                        alignItems="center"
                        style={{ cursor: "pointer" }}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={false}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                className={classes.checkbox}
                              />
                            }
                            label={val.title}
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
              <Grid item xs={6} style={{ padding: "0 6px 0 0px" }}>
                {/* second section */}
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    GIFTS BY OCCASSION
                  </Typography>
                </Grid>
                {gifts2.map((val, index) => {
                  return (
                    <Grid item xs={12} className={classes.secondSection}>
                      <Grid
                        container
                        className={classes.imgcont}
                        onClick={() => {
                          window.location.href = val.url;
                        }}
                        // justify="center"
                        alignContent="center"
                        alignItems="center"
                        style={{ cursor: "pointer" }}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={false}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                className={classes.checkbox}
                              />
                            }
                            label={val.title}
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid container className={classes.rootsub}>
      <Grid container item xs={12} className={classes.paperdivsub}>
        <Popper
          style={{ border: "1px solid #ccc" }}
          placement={"bottom-start"}
          open={opens}
          anchorEl={target}
          transition
          className={classes.mouseOverPopoversub}
        >
          <List
            component="nav"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          >
            {/* {props.data && props.data.imageContainer && ( */}
              {props.listitem === 'PLATINUM' && <ImageWithText {...props} />}
              {props.listitem === 'GIFTS' &&<SingleImageWithMultipleColumns />}
              {props.listitem === 'GOLD' && <ImageWithTextMultipleColumns/>}
              {props.listitem === 'SOLITAIRE' && <ImageWithTextMultipleColumnsSOLITAIRE/>}
            {/* )} */}
            {props.data &&
              props.data.onlyText &&
              props.data.onlyText.map((val, index) => (
                <>
                  <ListItem
                    className={classes.listedItemsub}
                    component="li"
                    onClick={() => {
                      window.location.href = val.url;
                    }}
                  >
                    <ListItemText variant>
                      <Typography className={classes.listedItemsvalue2}>
                        {val.content.toUpperCase()}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </>
              ))}
          </List>
        </Popper>
      </Grid>
    </Grid>
  );
}

export default HeaderHoverMenuItem;

HeaderHoverMenuItem.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  listHoverItem: PropTypes.object.isRequired,
  tabdata: PropTypes.object.isRequired,
};
