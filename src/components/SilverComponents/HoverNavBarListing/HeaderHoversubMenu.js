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
  const stones = [
    { title: "Genstone" },
    { title: "Diamond" },
    { title: "Solitaire" },
    { title: "Platinum" },
    { title: "Yellow Gold" },
    { title: "White Gold" },
    { title: "Rose Gold" },
    { title: "Silver by STYLORI" },
  ];
  const data = [
    { title: "Below ₹10,000" },
    { title: "₹10,001 - ₹25,000" },
    { title: "₹25,001 - ₹50,000" },
    { title: "Above ₹50,000" },
  ];
  const gifts3 = [
    { title: "Gifts for men" },
    { title: "Gifts for mom" },
    { title: "Gifts for wife" },
    { title: "Gifts for kids" },
    { title: "Lightweight by STYLORI" },
    { title: "Silver by STYLORI" },
  ];
  const gender = [
    { title: "Woman" },
    { title: "Men" },
    { title: "Unisex" },
    { title: "Kids" },
  ];
  const occassion = [
    { title: "Everyday" },
    { title: "Office" },
    { title: "Party" },
    { title: "Bridal" },
    { title: "Festive" },
  ];
  const productTypes = [
    { title: "Rings" },
    { title: "Pendants" },
    { title: "Earrings" },
    { title: "Bangle" },
    { title: "Bracelet" },
    { title: "Nosepin" },
  ];
  const gifts1 = ["For Her", "For Him", "For Mother", "For Father"].map(
    (val) => {
      return {
        title: val,
      };
    }
  );
  const gifts2 = [
    "Anniversary",
    "Wedding",
    "Valentine",
    "Corporate/Bulk Gifting",
  ].map((val) => {
    return {
      title: val,
    };
  });
  const imageForEarRings = [
    {
      img: "https://imgmediagumlet.lbb.in/media/2019/08/5d4e38a8de22e35fd497babb_1565407400197.jpg?fm=webp&w=750&h=500&dpr=1",
    },
  ];
  const imageForRings = [
    {
      img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-410,/pub/media/catalog/product/d/c/dc-rng-10052_1.jpg?rnd=20200526195200",
    },
  ];
  const _imagewithtextOne = [
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Studs+Earrings+Stylori-01.png",
      content: "Studs",
      url: "/studs-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Drops+Earrings+Stylori-02.png",
      content: "Drops",
      url: "/drops-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Earcuffs+Earrings+Stylori-03.png",
      content: "Earcuffs",
      url: "/ear+cuffs-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Huggies+Earrings+Stylori-04.png",
      content: "Huggies",
      url: "/huggies-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Jhumkas+Earrings+Stylori-05.png",
      content: "Jhumkas",
      url: "/jhumkas+online-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Ear+Jackets+Earrings+Stylori-06.png",
      content: "Ear Jacket",
      url: "/ear+jacket-earrings-jewellery",
    },
  ];
  const earRings = [
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Studs+Earrings+Stylori-01.png",
      content: "Studs",
      url: "/studs-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Drops+Earrings+Stylori-02.png",
      content: "Drops",
      url: "/drops-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Earcuffs+Earrings+Stylori-03.png",
      content: "Earcuffs",
      url: "/ear+cuffs-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Huggies+Earrings+Stylori-04.png",
      content: "Huggies",
      url: "/huggies-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Jhumkas+Earrings+Stylori-05.png",
      content: "Jhumkas",
      url: "/jhumkas+online-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Ear+Jackets+Earrings+Stylori-06.png",
      content: "Ear Jacket",
      url: "/ear+jacket-earrings-jewellery",
    },
  ];
  const ringsJewel = [
    {
      img: "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/rings/135-ac4820.png",
      content: "Casual",
      url: "/studs-earrings-jewellery",
    },
    {
      img: "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/rings/135-cr4210.png",
      content: "Cocktail",
      url: "/drops-earrings-jewellery",
    },
    {
      img: "https://images-eu.ssl-images-amazon.com/images/I/41fA9mWaFEL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
      content: "Fashion",
      url: "/ear+cuffs-earrings-jewellery",
    },
    {
      img: "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/affordable-diamonds/ladies-ring/bh4750.png",
      content: "Bridal",
      url: "/huggies-earrings-jewellery",
    },
    {
      img: "https://img.favpng.com/5/1/8/wedding-ring-platinum-jewellery-diamond-png-favpng-H998EWTVanXK9Er0GfN06r7dw.jpg",
      content: "Platinum rings",
      url: "/jhumkas+online-earrings-jewellery",
    },
    {
      img: "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/close-setting/gents-ring/521682.png",
      content: "Men's Rings",
      url: "/ear+jacket-earrings-jewellery",
    },
    {
      img: "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/affordable-diamonds/ladies-ring/ba1726-f.png",
      content: <>Light&nbsp;weightby&nbsp;STYLORI</>,
      url: "/ear+jacket-earrings-jewellery",
    },
  ];
  const _singleimagewithmultiplecolumns = [
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Studs+Earrings+Stylori-01.png",
      content: "Studs",
      url: "/studs-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Drops+Earrings+Stylori-02.png",
      content: "Drops",
      url: "/drops-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Earcuffs+Earrings+Stylori-03.png",
      content: "Earcuffs",
      url: "/ear+cuffs-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Huggies+Earrings+Stylori-04.png",
      content: "Huggies",
      url: "/huggies-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Jhumkas+Earrings+Stylori-05.png",
      content: "Jhumkas",
      url: "/jhumkas+online-earrings-jewellery",
    },
    {
      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Ear+Jackets+Earrings+Stylori-06.png",
      content: "Ear Jacket",
      url: "/ear+jacket-earrings-jewellery",
    },
  ];
  const collectionsData = [
    {
      title: "Traditional Setting",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/gold/muhurtham/necklace/2-cy7845.png",
    },
    {
      title: "Young Ones",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/collection/youngones/ring/bc3776-f.png",
    },
    {
      title: "Mens",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/close-setting/gents-ring/521682.png",
    },
    {
      title: "Mayura",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/mayura/earring/bl6413-f.png",
    },
    {
      title: "Fabula",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/fabula/earring/bj0928-2.png",
    },
    {
      title: "Muhurtham",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/gold/muhurtham/necklace/2-db3518-f.png",
    },
    {
      title: "Uncut",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/collection/uncut/necklace/9-302468.png",
    },
    { title: "Jadau", image: "" },
    {
      title: "Nagas",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/gold/nagas/earrings/bn6921.png",
    },
    {
      title: "Rewind",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/gold/earrings/888578+888581-royal-ruby-antique-stud-earring.png",
    },
    {
      title: "Strings",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/gold/kundan/necklace/ay8439-2.png",
    },
    {
      title: "Forevermark",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/earrings/134-bw2850.png",
    },
  ];

  const otherJewels = [
    {
      title: "Necklaces",
      content: [
        { itm: "Short" },
        { itm: "Long" },
        { itm: "Layered" },
        { itm: "Bridal" },
      ],
    },
    {
      title: "Pendants",
      content: [{ itm: "Casual" }, { itm: "Bridal" }, { itm: "Religious" }],
    },
    {
      title: "Shop by price",
      content: [
        { itm: "Below ₹10,000" },
        { itm: "₹10,001 - ₹25,000" },
        { itm: "₹25,001 - ₹50,000" },
        { itm: "Above ₹50,000" },
      ],
    },
    {
      title: "Shop more",
      content: [
        { itm: "Nose Pins" },
        { itm: "Chains" },
        { itm: "Platinum Brands" },
        { itm: "Bridal Accessories" },
        { itm: "Odiyanam" },
        { itm: "Anklets" },
      ],
    },
    {
      title: "Stylori",
      content: [{ itm: "Gold & Diamond" }, { itm: "Silver" }],
    },
    { title: "Gold Coins", content: [{ itm: "22ct" }, { itm: "24ct" }] },
    {
      title: "Shop All Jewellery",
      content: [{ itm: "For men" }, { itm: "For women" }, { itm: "For kids" }],
    },
  ];

  const savingScheme = [
    { title: "Pay now" },
    { title: "Join now" },
    { title: "New Quick Gold" },
    { title: "Super think diamond" },
    { title: "Super Quick silver" },
  ];

  const styloridata = [
    { title: "Stylori Gold" },
    { title: "Stylori Silver" },
    { title: "Csk Merchandise" },
  ];

  const silverItems = [
    {
      title: <>Kumkum&nbsp;Bharani</>,
      img: "https://e7.pngegg.com/pngimages/273/928/png-clipart-silver-bowl-silver-glass-metal.png",
    },
    {
      title: "Plates",
      img: "https://e7.pngegg.com/pngimages/273/928/png-clipart-silver-bowl-silver-glass-metal.png",
    },
    {
      title: "Bowls",
      img: "https://e7.pngegg.com/pngimages/273/928/png-clipart-silver-bowl-silver-glass-metal.png",
    },
    {
      title: <>Kuthu&nbsp;Vilaku</>,
      img: "https://e7.pngegg.com/pngimages/273/928/png-clipart-silver-bowl-silver-glass-metal.png",
    },
    {
      title: <>Vilaku</>,
      img: "https://e7.pngegg.com/pngimages/273/928/png-clipart-silver-bowl-silver-glass-metal.png",
    },
    {
      title: "Jyothi",
      img: "https://e7.pngegg.com/pngimages/273/928/png-clipart-silver-bowl-silver-glass-metal.png",
    },
    {
      title: "Idols",
      img: "https://e7.pngegg.com/pngimages/273/928/png-clipart-silver-bowl-silver-glass-metal.png",
    },
    {
      title: "Coins",
      img: "https://e7.pngegg.com/pngimages/273/928/png-clipart-silver-bowl-silver-glass-metal.png",
    },
    {
      title: "Tumblers",
      img: "https://e7.pngegg.com/pngimages/273/928/png-clipart-silver-bowl-silver-glass-metal.png",
    },
    {
      title: <>Young&nbsp;Ones</>,
      img: "https://e7.pngegg.com/pngimages/273/928/png-clipart-silver-bowl-silver-glass-metal.png",
    },
  ];

  const solitaireData2 = [
    {
      title: "Loose Diamonds",
      contents: [
        { sub: "Round" },
        { sub: "Princess" },
        { sub: "Oval" },
        { sub: "Heart" },
        { sub: "Cushion" },
        { sub: "Pear" },
        { sub: "Emerald" },
      ],
    },
  ];

  const solitaireData3 = [
    {
      title: "Shop by price",
      contents: [
        { itm: "Below ₹10,000" },
        { itm: "₹10,001 - ₹25,000" },
        { itm: "₹25,001 - ₹50,000" },
        { itm: "Above ₹50,000" },
      ],
    },
  ];

  const solitaireData4 = [
    { title: "Solitaire Guide" },
    { title: "Design your own" },
    { title: "Know your size" },
    { title: "Shop all Design" },
  ];

  const silverItems2 = [
    {
      title: "Corporate Gifting",
      contents: [
        { item: "Below ₹3,000" },
        { item: "₹3,001 - ₹5,001" },
        { item: "Above ₹5,001" },
      ],
    },
    {
      title: "Tangore",
      contents: [{ item: "Photos" }, { item: "Others" }],
    },
    {
      title: "Leg Chain",
      contents: [
        { item: "Anklets" },
        { item: "Metti" },
        { item: "Velli Paavai Set" },
        { item: "Antique" },
        { item: "Others" },
      ],
    },
    {
      title: "Furniture",
      contents: [
        { item: "Chairs" },
        { item: "Tables" },
        { item: "Centre Tables" },
        { item: "Sofa sets" },
        { item: "Others" },
      ],
    },
  ];

  const silverItems3 = [
    {
      title: "Collections",
      contents: [
        { item: "Dinner" },
        { item: "Wedding" },
        { item: "Grahapravesham" },
        { item: "Reception" },
        { item: "Panchapatram" },
        { item: "New Born" },
        { item: "Pooja" },
        { item: "Vattil" },
        { item: "Tea / Coffee" },
      ],
    },
  ];

  const solitaireData = [
    {
      title: "Rings",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/rings/135-ac4820.png",
    },
    {
      title: "Earrings",
      image:
        "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Studs+Earrings+Stylori-01.png",
    },
    {
      title: "Necklaces",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/gold/muhurtham/necklace/2-cy7845.png",
    },
    {
      title: "Bangles and bracelets",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/gold/5k-to-35k/bangle/3-bs6486.png",
    },
    {
      title: "Pendants",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/close-setting/bangle/bl1017.png",
    },
    {
      title: "Men's rings",
      image:
        "https://storage.googleapis.com/media.nacjewellers.com/resources/dist/jewellery/diamond/close-setting/gents-ring/521682.png",
    },
  ];

  const valueForData = () => {
    if (props.listitem === "RINGS") {
      return ringsJewel;
    } else if (props.listitem === "EARRINGS") {
      return earRings;
    } else if (props.listitem === "BANGLES & BRACELETS") {
      return earRings;
    }
  };

  const valueForImage = () => {
    if (props.listitem === "RINGS") {
      return imageForRings;
    } else if (props.listitem === "EARRINGS") {
      return imageForEarRings;
    } else if (props.listitem === "BANGLES & BRACELETS") {
      return imageForEarRings;
    } else if (props.listitem === "SAVING SCHEME") {
      return imageForEarRings;
    }
  };

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

  const ForCollections = () => {
    return (
      <Grid
        container
        style={{
          width: "100%",
          background: "#fff",
          padding: "20px 60px 20px 0px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid
            item
            xs={8}
            className={classes.gridmultiplesection}
            style={{ paddingTop: "20px" }}
          >
            <Grid container item xs={12}>
              {collectionsData.map((val, index) => {
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
                          // style={{ margin: "auto", color: "#33346d" }}
                          className={classes.imgtitle}
                        >
                          {val.title}
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
                        {val.image && (
                          <img
                            style={{ paddingBottom: "20px" }}
                            src={val.image}
                            width="30%"
                            height="35%"
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Grid>
          <Grid item xs={4} className={classes.gridmultiplesection}>
            <div style={{ paddingTop: "20px" }}>
              <img
                src="https://content3.jdmagicbox.com/comp/vijayawada/b3/0866px866.x866.160420142936.k3b3/catalogue/nac-jewellers-pvt-ltd-labbipet-vijayawada-jewellery-showrooms-4jze9u2.jpg"
                width="100%"
                height="75%"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const OtherJewellery = () => {
    return (
      <Grid
        container
        style={{
          width: "100%",
          background: "#fff",
          padding: "20px 60px 20px 0px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid
            item
            xs={8}
            className={classes.gridmultiplesection}
            style={{ paddingTop: "20px" }}
          >
            <Grid container item xs={12}>
              {otherJewels.map((val, index) => {
                return (
                  <Grid item xs={3} style={{ paddingLeft: "50px" }}>
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
                        xs={12}
                        item
                        style={{ margin: "auto", textAlign: "center" }}
                      >
                        <Typography
                          style={{ margin: "auto", color: "#33346d" }}
                          className={classes.listedItemstitle}
                        >
                          {val.title.toUpperCase()}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                          display: "block",
                        }}
                      >
                        {val.content.map((item, i) => (
                          <Typography className={classes.listedItemsvalue}>
                            {item.itm}
                          </Typography>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Grid>
          <Grid item xs={4} className={classes.gridmultiplesection}>
            <div style={{ paddingTop: "20px" }}>
              <img
                src="https://content3.jdmagicbox.com/comp/vijayawada/b3/0866px866.x866.160420142936.k3b3/catalogue/nac-jewellers-pvt-ltd-labbipet-vijayawada-jewellery-showrooms-4jze9u2.jpg"
                width="100%"
                height="75%"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const SavingSchemee = () => {
    return (
      <Grid
        container
        style={{
          width: "100%",
          background: "#fff",
          padding: "20px 60px 20px 0px",
          zIndex: "10000",
        }}
      >
        <Grid
          item
          container
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
          className={classes.gridmultiplesection}
        >
          {savingScheme.map((val, i) => (
            <Grid
              item
              xs={2}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Typography className={classes.phovertitile}>
                {val.title.toUpperCase()}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  };
  const Stylori = () => {
    return (
      <Grid
        container
        style={{
          width: "100%",
          background: "#fff",
          padding: "20px 60px 20px 0px",
          zIndex: "10000",
        }}
      >
        <Grid
          item
          container
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
          className={classes.gridmultiplesection}
        >
          {styloridata.map((val, i) => (
            <Grid
              item
              xs={2}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Typography className={classes.phovertitile}>
                {val.title.toUpperCase()}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  };

  const ImageWithTextMultipleColumns = () => {
    return (
      <Grid
        container
        style={{
          width: "100%",
          background: "#fff",
          padding: "0px 20px 0px 0px",
          zIndex: "10000",
          color: "#000",
        }}
      >
        <Grid container item xs={12}>
          <Grid item xs={3} className={classes.gridmultiplesection}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography className={classes.shoptitle}>
                SHOP BY STYLE
              </Typography>
            </Grid>
            <Grid container item xs={12} style={{ padding: "0 25px" }}>
              {valueForData().map((val, index) => {
                return (
                  <Grid item xs={6}>
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
                          className={classes.imgtitle}
                        >
                          {val.content}
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
                            style={{
                              width: "50%",
                              margin: "auto",
                            }}
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
              <Grid item xs={4} style={{ padding: "0 6px 0 25px" }}>
                {/* second section */}
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    SHOP BY STONE & METAL
                  </Typography>
                </Grid>
                {stones.map((val, index) => {
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
                        <Typography
                          style={{ margin: "auto", textAlign: "center" }}
                          className={classes.listedItemsvalue}
                        >
                          {val.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
              <Grid item xs={4} style={{ padding: "0 6px 0 30px" }}>
                {/* second section */}
                <Grid item xs={12} style={{ textAlign: "center" }}>
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
                        <Typography
                          style={{ margin: "auto", textAlign: "center" }}
                          className={classes.listedItemsvalue}
                        >
                          {val.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
              <Grid item xs={4} style={{ padding: "0 6px 0 30px" }}>
                {/* second section */}
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Typography
                    className={classes.listedItemstitlemultiplesection}
                  >
                    GIFTING
                  </Typography>
                </Grid>
                {gifts3.map((val, index) => {
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
                        <Typography
                          style={{ margin: "auto", textAlign: "center" }}
                          className={classes.listedItemsvalue}
                        >
                          {val.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} className={classes.gridmultiplesection}>
            <div style={{ paddingTop: "20px" }}>
              {valueForImage().map((val, i) => (
                <img src={val.img} width="100%" height="75%" />
              ))}
            </div>
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
          width: "100%",
          background: "#fff",
          padding: "0px 20px 0px 0px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid item xs={3} className={classes.gridmultiplesection}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography className={classes.listedItemstitle}>
                SHOP BY STYLE
              </Typography>
            </Grid>
            <Grid container item xs={12} style={{ padding: "0 25px" }}>
              {solitaireData.map((val, index) => {
                return (
                  <Grid item xs={6}>
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
                        <Typography className={classes.imgtitle}>
                          {val.title}
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
                        {val.image && (
                          <img
                            style={{
                              width: "50%",
                              margin: "auto",
                              marginBottom: "15px",
                            }}
                            src={val.image}
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2} className={classes.gridmultiplesection}>
            <Grid container item xs={12}>
              {solitaireData2.map((val, i) => (
                <Grid item xs={12}>
                  <Grid
                    item
                    xs={12}
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    <Typography
                      className={classes.listedItemstitle}
                      style={{ textAlign: "center" }}
                    >
                      {val.title.toUpperCase()}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    {val.contents.map((x, i) => (
                      <Typography className={classes.listedItemsvalue}>
                        {x.sub}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2} className={classes.gridmultiplesection}>
            {solitaireData3.map((val, i) => (
              <Grid
                container
                item
                xs={12}
                style={{ borderBottom: "1px solid #33346d" }}
              >
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitle}
                    style={{ textAlign: "center" }}
                  >
                    {val.title.toUpperCase()}
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "50px" }}>
                  {val.contents.map((cont, i) => (
                    <Typography className={classes.listedItemsvalue}>
                      {cont.itm}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            ))}
            <div>
              {solitaireData4.map((val, i) => (
                <Typography
                  className={classes.phovertitile}
                  style={{
                    // borderBottom: "none",
                    marginBottom: "2px",
                    marginTop: "7px",
                    textAlign: "center",
                  }}
                >
                  {val.title.toUpperCase()}
                </Typography>
              ))}
            </div>
          </Grid>
          <Grid item xs={3} className={classes.gridmultiplesection}>
            <div style={{ paddingTop: "20px" }}>
              <img
                src="https://southindiajewels.com/wp/wp-content/uploads/2017/10/diamond-ring-nac-jewellers.jpg"
                width="100%"
                height="75%"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  const Silver = () => {
    return (
      <Grid
        container
        style={{
          width: "100%",
          background: "#fff",
          padding: "20px 60px 20px 0px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid item xs={3} className={classes.gridmultiplesection}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography className={classes.listedItemstitle}>
                SILVER ARTICLES
              </Typography>
            </Grid>
            <Grid container item xs={12} style={{ padding: "0 25px" }}>
              {silverItems.map((val, index) => {
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
                      <Grid item style={{ margin: "auto" }}>
                        <Typography className={classes.imgtitle}>
                          {val.title}
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
                            style={{
                              width: "50%",
                              margin: "auto",
                              marginBottom: "15px",
                            }}
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
          <Grid item xs={4} className={classes.gridmultiplesection}>
            <Grid container item xs={12}>
              {silverItems2.map((val, i) => (
                <Grid item xs={6}>
                  <Grid
                    item
                    xs={12}
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    <Typography
                      className={classes.listedItemstitle}
                      style={{ textAlign: "center" }}
                    >
                      {val.title.toUpperCase()}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    {val.contents.map((x, i) => (
                      <Typography className={classes.listedItemsvalue}>
                        {x.item}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={2} className={classes.gridmultiplesection}>
            {silverItems3.map((val, i) => (
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Typography
                    className={classes.listedItemstitle}
                    style={{ textAlign: "center" }}
                  >
                    {val.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {val.contents.map((itms, i) => (
                    <Typography className={classes.listedItemsvalue}>
                      {itms.item}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={3} className={classes.gridmultiplesection}>
            <div style={{ paddingTop: "20px" }}>
              <img
                src="https://products.jewelegance.com/JG-1910-00295.jpg"
                width="100%"
                height="75%"
              />
            </div>
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
          placement={"bottom"}
          open={opens}
          anchorEl={target}
          transition
          className={
            props.scroll
              ? classes.mouseOverPopoversubscroll
              : classes.mouseOverPopoversub
          }
        >
          <List
            component="nav"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          >
            {/* {props.data && props.data.imageContainer && ( */}
            {props.listitem === "EARRINGS" && <ImageWithTextMultipleColumns />}
            {props.listitem === "NECKLACE" && <OtherJewellery />}
            {props.listitem === "RINGS" && <ImageWithTextMultipleColumns />}
            {props.listitem === "BANGLES & BRACELETS" && (
              <ImageWithTextMultipleColumns />
            )}
            {props.listitem === "SOLITAIRE" && (
              <ImageWithTextMultipleColumnsSOLITAIRE />
            )}
            {props.listitem === "SILVER" && <Silver />}
            {props.listitem === "COLLECTIONS" && <ForCollections />}
            {props.listitem === "OTHER JEWELLERY" && <OtherJewellery />}
            {props.listitem === "SAVING SCHEME" && <SavingSchemee />}
            {props.listitem === "STYLORI" && <Stylori />}
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
