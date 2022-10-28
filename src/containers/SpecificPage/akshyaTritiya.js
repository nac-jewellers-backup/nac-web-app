import React, { useEffect, useState } from "react";
import Header from "../../components/SilverComponents/Header";
import Slideshow from "../../components/Carousel/carosul";

import {
  Grid,
  Hidden,
  Typography,
  Container,
  FormControl,
  Button,
  TextField,
  Link,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { SolitairesData } from "../../mappers/dummydata/solitairesData";
import axios from "axios";
import { ImgMediaCard } from "../../components/ProductCard/Card";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Footer from "../../components/Footer/Footer";
import { API_URL } from "../../config";
import { AllHOMEQUERY } from "../../queries/home";
import {
  ALLBANNERSCOMPLETE,
  SEND_QUERIES,
  SEND_ENQUIREY,
} from "../../queries/home";
import { TitleAndData } from "components";
import { QueryForm } from "components";
import { sampleDate } from "./dummyDataSpecific";
import { BannerComponent, SlideImgMediaCard } from "components";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AkshyaTritiya(props) {
  const [listProduct, setListProduct] = useState([]);
  console.log("listProducr", listProduct);
  const [banners, setBanners] = useState([]);

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();

  useEffect(() => {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ALLBANNERSCOMPLETE,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let bannerFullData = data.data.allBanners.nodes;
        const specificPageData = bannerFullData.filter(
          (item) => item.urlParam === window.location.pathname
        );
        const listedPageData = bannerFullData.filter(
          (item) => item.urlParam === "listing"
        );
        console.log("listedPageData", listedPageData);
        if (specificPageData.length > 0) {
          setBanners(specificPageData);
        } else {
          setBanners(listedPageData);
        }
      });
  }, []);
  console.log("baners", banners);
  useEffect(() => {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: AllHOMEQUERY,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //feature product
        let featureproductdata = data?.data?.allFeaturedProducts?.nodes;

        let featureproductDetails = featureproductdata.map((val) => ({
          price:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.markupPrice ?? " ",

          offerPrice:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.discountPrice ?? " ",
          title: val?.productListByProductId?.productName ?? " ",
          save:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.discount ?? " ",
          image: {
            placeImage: {
              img:
                val?.productListByProductId?.productImagesByProductId?.nodes[0]
                  ?.imageUrl ?? " ",
            },
            hoverImage: {
              img:
                val?.productListByProductId?.productImagesByProductId?.nodes[0]
                  ?.imageUrl ?? " ",
            },
          },
          productId: val?.productId ?? " ",
          diamondType: "",
          purity: "",
          productType: "",
          skuId:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.skuId ?? " ",
          skuID:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.skuId ?? " ",
          skuUrl:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.skuUrl ?? " ",
          description:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.transSkuDescriptionsBySkuId?.nodes[0]?.skuDescription ?? " ",
        }));

        setListProduct(featureproductDetails ?? []);
      });
  }, []);

  const handleCall = () => {
    const payload = "akshyaTritiya";
    axios
      .post("http://localhost:8000/akshyaTritiya", payload)
      .then((res) => {
        console.log("response", res);
      })
      .catch((error) => {
        console.error(error);
        alert("error");
      });
  };

  const bannerList = [
    {
        "id": 23,
        "mobile": "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori+CSK-banner-mobile-805X430-px.jpg",
        "position": 1,
        "url": "/jewellery/kada/csk_kada?skuId=1000001",
        "web": "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori+CSK-banner-1920-X-656-px.jpg",
        "urlParam": "listing"
    },
    {
        "id": 24,
        "mobile": "https://assets.stylori.com/images/Static+Pages/Home+Page/gemstone-mob",
        "position": 3,
        "url": "/gemstone-jewellery?sort=latest",
        "web": "https://assets.stylori.com/images/Static+Pages/Home+Page/banner1.jpg",
        "urlParam": "listing"
    },
    {
        "id": 25,
        "mobile": "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori-Valentine-banner-mob.jpg",
        "position": 2,
        "url": "/hearts-jewellery?sort=bestseller",
        "web": "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori-Valentine-banner-web.jpg",
        "urlParam": "listing"
    },
    {
        "id": 26,
        "mobile": "https://assets.stylori.com/images/Static+Pages/Home+Page/rings-collection-mob.jpg",
        "position": 4,
        "url": "/rings-jewellery",
        "web": "https://assets.stylori.com/images/Static+Pages/Home+Page/banner3.jpg",
        "urlParam": "listing"
    },
    {
        "id": 27,
        "mobile": "https://assets.stylori.com/images/Static+Pages/Home+Page/Floral-collection-Mob.jpg",
        "position": 5,
        "url": "/floral-jewellery?sort=latest",
        "web": "https://assets.stylori.com/images/Static+Pages/Home+Page/banner4.jpg",
        "urlParam": "listing"
    },
    {
        "id": 28,
        "mobile": "https://assets.stylori.com/images/Static+Pages/Home+Page/halo-collection-mob.jpg",
        "position": 6,
        "url": "/jewellery-from+halo+collection",
        "web": "https://assets.stylori.com/images/Static+Pages/Home+Page/banner5.jpg",
        "urlParam": "listing"
    },
    {
        "id": 29,
        "mobile": "https://assets.stylori.com/images/Static+Pages/Home+Page/harvest-campaign-mob.png",
        "position": 7,
        "url": "/jewellery?sort=bestseller",
        "web": "https://assets.stylori.com/images/Static+Pages/Home+Page/harvest-campaign-web.png",
        "urlParam": "listing"
    }
]

const listingProducts = [
  {
      "price": 41303,
      "offerPrice": 44231.29,
      "title": "charming golden boho bracelet",
      "save": 0,
      "image": {
          "placeImage": {
              "img": "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/dist/jewellery/gold/breezee/bracelets/8-bi9222-2.png"
          },
          "hoverImage": {
              "img": "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/dist/jewellery/gold/breezee/bracelets/8-bi9222-2.png"
          }
      },
      "productId": "1111",
      "diamondType": "",
      "purity": "",
      "productType": "",
      "skuId": "8BI9222",
      "skuID": "8BI9222",
      "skuUrl": "jewellery/bracelets/gold/charming-golden-boho-bracelet?skuid=8BI9222",
      "description": "charming and dainty, this lovely gold bracelet was designed to delight a woman. strung with round beads, pyramids and intricate rectangle beads, this bracelet exudes a boho charm that makes it irresistible to a discerning woman!"
  },
  {
      "price": 29438,
      "offerPrice": 34319.59,
      "title": "chic diamond paisley earrings",
      "save": 0,
      "image": {
          "placeImage": {
              "img": "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/dist/jewellery/diamond/affordable-diamonds/earring/bq2457-2.png"
          },
          "hoverImage": {
              "img": "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/dist/jewellery/diamond/affordable-diamonds/earring/bq2457-2.png"
          }
      },
      "productId": "1123",
      "diamondType": "",
      "purity": "",
      "productType": "",
      "skuId": "134BQ2457",
      "skuID": "134BQ2457",
      "skuUrl": "jewellery/earrings/diamond/chic-diamond-paisley-earrings?skuid=134BQ2457",
      "description": "this spectacular pair of diamond earrings is a perfect accessory to be worn for ethnic celebrations and chic parties. the stud earrings are forged in gold and fashioned in a paisley design studded with minuscule round diamonds with shimmering brilliance."
  },
  {
      "price": 194124,
      "offerPrice": 214125.69,
      "title": "beautiful enamel heart bangles",
      "save": 0,
      "image": {
          "placeImage": {
              "img": "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/dist/jewellery/gold/5k-to-35k/bangle/3-bs1747-2.png"
          },
          "hoverImage": {
              "img": "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/dist/jewellery/gold/5k-to-35k/bangle/3-bs1747-2.png"
          }
      },
      "productId": "1222",
      "diamondType": "",
      "purity": "",
      "productType": "",
      "skuId": "3BS1747",
      "skuID": "3BS1747",
      "skuUrl": "jewellery/bangles/gold/beautiful-enamel-heart-bangles?skuid=3BS1747",
      "description": "elegance and beauty form a striking combination in this gorgeous gold bangle. the bangle features a dual broad shank pattern with beautiful designs etched inside. the enameled cupid in maroon and green highlights the beauty of this bangle and makes for a precious anniversary gift to your better half."
  },
  {
      "price": 82264,
      "offerPrice": 90740.9,
      "title": "classic gold elegant chain",
      "save": 0,
      "image": {
          "placeImage": {
              "img": "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/dist/jewellery/gold/5k-to-35k/gold-chain/1-bu2436-2.png"
          },
          "hoverImage": {
              "img": "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/dist/jewellery/gold/5k-to-35k/gold-chain/1-bu2436-2.png"
          }
      },
      "productId": "1323",
      "diamondType": "",
      "purity": "",
      "productType": "",
      "skuId": "1BU2436",
      "skuID": "1BU2436",
      "skuUrl": "jewellery/chains/gold/classic-gold-elegant-chain?skuid=1BU2436",
      "description": "simple yet classic, this elegant gold chain is solidly fashioned and makes a great ornament to be worn every day. a glamorous pendant can be added to this simple chain to further alleviate its beauty. the s-shaped hook makes it easy to wear and makes an excellent daily wear accessory."
  },
  {
      "price": 314163,
      "offerPrice": 336826.27,
      "title": "stunning multi-layer diamond necklace",
      "save": 0,
      "image": {
          "placeImage": {
              "img": "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/dist/jewellery/diamond/necklace/128-dr4417-2.png"
          },
          "hoverImage": {
              "img": "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/dist/jewellery/diamond/necklace/128-dr4417-2.png"
          }
      },
      "productId": "3293",
      "diamondType": "",
      "purity": "",
      "productType": "",
      "skuId": "128DR4417",
      "skuID": "128DR4417",
      "skuUrl": "jewellery/necklaces/diamond/stunning-multi-layer-diamond-necklace?skuid=128DR4417",
      "description": "designed for the modern-day bride, this sparkling diamond necklace is as stunning as it is beautiful. multi-layered with floral accents the necklace is studded entirely with round-cut, brilliant diamonds, with a delicate diamond-studded teardrop pendant at the bottom. "
  }
]

  const [state, setState] = useState([
    {
      component: "BannerComponent",
      props: {
        banners : bannerList
      }
    },
    {
      component: "TitleAndData",
      props:{
        title: sampleDate?.title,
        description: sampleDate?.description
      },
    },
    {
      component: "SlideImgMediaCard",
      props: {
        listingProducts: listingProducts
      },
    },
    {
      component: "QueryForm",
      props: {
        image:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/akshaya+page/Group+63%402x.png"
      },
    },
  ]);

  const handleComponents = (val) => {
    switch (val.component) {
      case "BannerComponent":{
        console.log("valueRender",val?.props)
        return <BannerComponent banners={val?.props?.banners} dataCarousel={val?.props?.banners.length > 1 ? "multiple" : "single"} />;
      }
      case "TitleAndData": {
        return <TitleAndData title={val?.props?.title} description={val?.props?.description} />
      }
      case "SlideImgMediaCard":{
        return <SlideImgMediaCard listProduct={val?.props?.listingProducts} />
      }
      case "QueryForm":{
        return <QueryForm image={val?.props?.image} />
      }
      default: {
        return (<h1>The name of the component does not exsist</h1>);
      }
    }
  };

  return (
    <Grid container>
      <Grid xs={12}>
        <Header />
      </Grid>
      {state.map((val) => {
        return handleComponents(val);
      })}
      <Footer />
    </Grid>
  );
}

export default AkshyaTritiya;
