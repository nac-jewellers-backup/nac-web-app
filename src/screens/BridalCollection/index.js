import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { TitleAndData } from "components";
import { BannerComponent } from "components";
import { SlideImgMediaCard } from "components";
import { QueryForm } from "components";
import AboutBookAppointment from "components/aboutAppointment";
import AboutCollectionComp from "components/aboutCollection";
import Slideshow from "components/Carousel/carosul";
import { ImgMediaCard } from "components/ProductCard/Card";
import Header from "components/SilverComponents/Header";
import SpclTitleDescr from "components/spclTitleDescr";
import Storelocator from "components/storelocator/storelocator";
import { Title } from "containers/home/titles";
import { storeLocatorData } from "mappers/dummydata/storeLocator";
import { CDNPAGES } from "queries/cdnPages";
import React, { useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import ArrowLeftBlue from "../../assets/arrowblueleft";
import ArrowRightBlue from "../../assets/arrowrightblue";
import Footer from "../../components/Footer/Footer";
import { API_URL } from "../../config";
import { AllHOMEQUERY } from "../../queries/home";
import { BridalData } from "./bridalData";


const useStyles = makeStyles((theme) => ({
  body1: {
    fontSize: "25px",
    textAlign: "center",
    color: "#2F348B",
  },
  bodys1: {
    fontSize: "17px",
    textAlign: "center",
    color: "gray",
  },
  body2: {
    fontSize: "35px",
    textAlign: "center",
    color: "#2F348B",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  collectionSection: {
    fill: `${theme.palette.secondary.main} !important`,
  },
  title: {
    color: "gray",
    fontSize: "23px",
    textAlign: "center",
  },
  sub: {
    color: "gray",
    fontSize: "18px",
    textAlign: "center",
  },
  about: {
    boxShadow: "4px 4px 4px #a5a4a5 !important",
    maxHeight: "40%",
  },
  content2: {
    backgroundColor: "#F9E3C0",
    padding: "30px",
  },
  btn: {
    backgroundColor: "#b78231",
    color: "#fff",
    borderRadius: "0px",
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  },
  aboutcolimg: {
    objectFit: "contain",
    width: "100%",
  },

  sub2: {
    textAlign: "center",
    color: "gray",
    fontSize: "15.92px",
    marginTop: "10px",
  },
  type: {
    display: "flex",
    alignItems: "center",
    color: "gray",
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginTop: "10px",
  },
  name: {
    textAlign: "center",
    fontSize: "20px",
    color: "#2F348B",
  },
  address: {
    textAlign: "center",
    fontSize: "15.92px",
    color: "#B2832C",
  },
}));
// function BridalCollection() {
//   const [featured, setFeatured] = React.useState([]);
//   const [reviews, setReviews] = React.useState([]);
//   const classes = useStyles();
//   const ArrowLeft = (props) => {
//     const { className, style } = props;
//     return (
//       <ArrowLeftIcon
//         className={`${className} ${classes.collectionSection}`}
//         style={{ ...style, fontSize: "3em" }}
//       />
//     );
//   };
//   const ArrowRight = (props) => {
//     const { className, style } = props;
//     return (
//       <ArrowRightIcon
//         className={`${className} ${classes.collectionSection}`}
//         style={{ ...style, fontSize: "3em" }}
//       />
//     );
//   };

//   const dataCarouselcollections = {
//     arrows: true,
//     dots: false,
//     autoplay: false,
//     infinite: false,
//     accessibility: true,
//     speed: 2500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     prevArrow: <ArrowLeftIcon color="secondary" />,
//     nextArrow: <ArrowRightIcon color="secondary" />,
//   };
//   const dataCarouselcollectionsSm = {
//     arrows: true,
//     dots: false,
//     autoplay: true,
//     infinite: true,
//     accessibility: true,
//     speed: 2500,
//     // fade: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <ArrowLeft />,
//     nextArrow: <ArrowRight />,
//   };
//   const data1 = [
//     {
//       title: "MUHURTHAM",
//       img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/bridalcollection/muhurtham_commercial.png",
//       sub: "COMMERCIAL ADVERTISMENT",
//       sub2: "Watch The NAC Jewellers Muhurtham Collection commercial advertisment!",
//       type: "Video",
//     },
//     {
//       title: "MUHURTHAM DIAMOND AND",
//       img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/bridalcollection/glodcollection.png",
//       sub: "COLD COLLECTION",
//       sub2: "Take a look at our fascinating Diamond and Gold jewllery collection and pick your favourite once for your special moments",
//       type: "Picture",
//     },
//     {
//       title: "AWARDED MASTER PIECE",
//       img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/bridalcollection/award.png",
//       sub: "COLD COLLECTION",
//       sub2: "Take a look at our fascinating Diamond and Gold jewllery collection",
//       type: "Picture",
//     },
//   ];
//   const tesnimonialdata = [
//     {
//       id: 1,
//       img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/bridalcollection/testimonial1.png",
//       name: "Lorem ipsum",
//       address: "Anna Nager",
//       feed: "I love my long hair and had always wanted an elaborate traditional hair do for my wedding,  was entranced by Trisha s bridal look, especially the dainty hairpieces that accentuated the length of her hair. When it was my turn to become & bride I walk",
//     },
//     {
//       id: 2,
//       img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/bridalcollection/testimonial2.png",
//       name: "Lorem ipsum",
//       address: "velachary",
//       feed: "Every girl has a dream. To look perfect on her wedding day I did too. Right from the | ‘Thalaisaaman to the oddiyanam, every single piece of jewellery that I bought from NAC worked its charm. My bridegroom was amazed by the fact that I transformed",
//     },
//     {
//       id: 3,
//       img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/bridalcollection/testimonial3.png",
//       name: "Lorem ipsum",
//       address: "Perabur",
//       feed: "I thought that simple and subtle suited my personality until  entered NAC Jewellers to shop for my wedding. Every jewel that  picked up had made intricate details and delicate craftsmanship that is hard to find in any other store. The sheer variety...",
//     },
//   ];
//   const appointmentData = [{
//     title: "BOOK AN APPOINTMENT",
//     content: "Our bridal session is a premium service offered to clients who can book in advance.Select your bridal ﬁnery at peace and enjoy our personal shopping experience to your fullest satisfaction.Call + 914443996666 to book a session today!"
//   }];


//   const spclTitleDescrData = {
//     title: "The MUHURTHAM Collection",
//     content: "We take pride i the fact that we have adorned scores of bridesiand have been a part of their journey through love and life. Our exclusive bridal collection i &s extravagant as it is lovely and will make the bride feel special and unique just as she really is. Our range of Digmond, Gold and Platinum jewels have special bridal collections for the young bride to choose from. We also have a special section of Azva jewels designed specifically for the."
//   };

//   useEffect(() => {
//     fetch(`${API_URL}/graphql`, {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         query: AllHOMEQUERY,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         //feature product
//         let featureproductdata = data?.data?.allFeaturedProducts?.nodes;
//         let featureproductDetails = featureproductdata.map((val) => ({
//           price:
//             val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
//               ?.markupPrice ?? " ",

//           offerPrice:
//             val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
//               ?.discountPrice ?? " ",
//           title: val?.productListByProductId?.productName ?? " ",
//           save:
//             val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
//               ?.discount ?? " ",
//           image: {
//             placeImage: {
//               img:
//                 val?.productListByProductId?.productImagesByProductId?.nodes[0]
//                   ?.imageUrl ?? " ",
//             },
//             hoverImage: {
//               img:
//                 val?.productListByProductId?.productImagesByProductId?.nodes[0]
//                   ?.imageUrl ?? " ",
//             },
//           },
//           productId: val?.productId ?? " ",
//           diamondType: "",
//           purity: "",
//           productType: "",
//           skuId:
//             val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
//               ?.skuId ?? " ",
//           skuID:
//             val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
//               ?.skuId ?? " ",
//           skuUrl:
//             val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
//               ?.skuUrl ?? " ",
//           description:
//             val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
//               ?.transSkuDescriptionsBySkuId?.nodes[0]?.skuDescription ?? " ",
//         }));

//         setFeatured(featureproductDetails);
//         let reviewresponse = data?.data?.allCustomerReviews.nodes;
//         setReviews(reviewresponse);
//       });
//   }, []);
//   console.log(featured, "featured");
//   return (
//     <Grid container justifyContent="center">
//       <Grid item xs={12}>
//         <Header />
//         <Slideshow dataCarousel={storeLocatorData.carouselTop.setting}>
//           {storeLocatorData.carouselTop.data.map((val, index) => (
//             <Grid container key={index}>
//               <img alt="img" loading="lazy" src={val.img} style={{ width: "100%", height: "100%" }} />
//             </Grid>
//           ))}
//         </Slideshow>
//       </Grid>

//       <SpclTitleDescr data={spclTitleDescrData} />

//       {/* <Title title="FEATURED" /> */}

//       <Container maxWidth="lg">
//         <Grid item xs={12}>
//           <Hidden smDown>
//             <Slideshow
//               class="subslider-carousel"
//               dataCarousel={dataCarouselcollections}>
//               {featured.map((val) => {
//                 return (
//                   <ImgMediaCard data={val} cardSize="auto" hoverText={true} />
//                 );
//               })}
//             </Slideshow>
//           </Hidden>
//           <Hidden mdUp>
//             <Slideshow
//               class="subslider-carousel"
//               dataCarousel={dataCarouselcollectionsSm}
//             >
//               {featured.map((val) => {
//                 return (
//                   <ImgMediaCard data={val} cardSize="auto" hoverText={true} />
//                 );
//               })}
//             </Slideshow>
//           </Hidden>
//           <br />
//           {/* <Title title="ABOUT THE COLLECTION" /> */}
//           <AboutCollectionComp TestimonialSec={false} CollectionData={data1} />
//           <br />
//         </Grid>
//         <br />
//         <br />
//         <AboutBookAppointment
//           image="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/bridalcollection/bannercard.png"
//           alt="about"
//           data={appointmentData} />
//         <br />
//         {/* <Title title="TESTIMONIALS" /> */}
//         <br />
//         <AboutCollectionComp TestimonialSec CollectionData={tesnimonialdata} />

//         <br />
//         <br />
//       </Container>

//       <Footer />
//     </Grid>
//   );
// }

// export default BridalCollection;


function BridalCollection(props) {

  const handleComponents = (val) => {
    switch (val.component) {
      case "BannerComponent": {
        console.log("valueRender", val?.props);
        return (
          <BannerComponent
            banners={val?.props?.banners}
            dataCarousel={
              val?.props?.banners.length > 1 ? "multiple" : "single"
            }
          />
        );
      }
      case "SpclTitleDescr": {

        return (
          <SpclTitleDescr
            data={val?.props?.storeData}
          />
        );
      }
      
      case "ImgMediaCard": {

        return (
          <>
            <SlideImgMediaCard listProduct={val?.props?.listingProducts}
              cardSize="auto" hoverText={true} />

          </>
        )
      }

      case "TestimonialTwo": {
        return (
          <>

            <AboutCollectionComp TestimonialSec={false} CollectionData={val?.props?.storeData} />
          </>

        )
      }

      case "AboutBookAppointment": {
        return (
          <>
            <AboutBookAppointment
              data={val?.props}
            />
          </>
        )
      }

      case "Testimonial": {
        return (
          <AboutCollectionComp TestimonialSec CollectionData={val?.props?.storeData} />
        )
      }
      default: {
        return <h1></h1>;
      }
    }
  };

  return (
    <Grid container>
      <Grid xs={12}>
        <Header />
      </Grid>
      {BridalData?.map((val) => {
        return handleComponents(val);
      })}
      <Footer />
    </Grid>
  );
}
console.log(BridalData, "BridalData");
export default BridalCollection;