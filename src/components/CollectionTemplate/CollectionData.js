import { CDN_URL } from "config";
import CurrencyConversion from "utils/CurrencyConversion";
export const primaryImage = [
  "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Static+Pages/Collection+Page/Alpha-Page-tile-01+(1).jpg",
  "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Static+Pages/Collection+Page/Alpha-Page-tile-05+(1).jpg",
  "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Static+Pages/Collection+Page/Alpha-Page-tile-02+(1).jpg",
  "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Static+Pages/Collection+Page/Alpha-Page-tile-04+(1).jpg",
  "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Static+Pages/Collection+Page/Alpha-Page-tile-03+(1).jpg",
];
const primaryNavigateUrl = [
  "/gemstone-jewellery?sort=latest",
  "/jewellery-from+the+renaissance+collection",
  "/jewellery-from+monsoon+collection",
  "/jewellery-butterfly?sort=latest",
  "/jewellery-from+the+summer+collection",
];
const Product_name = [
  "Gemstone Collection",
  "The Renaissance collection",
  "Monsoon Collection",
  "Butterfly collections",
  "The Summer Chic Collection",
];
let containerImage = [
  {
    img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Static+Pages/Collection+Page/Blush-collection+(1).png",
    navigateUrl: "/jewellery-blush",
  },
  {
    img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Static+Pages/Collection+Page/Molecute-colletion+(1).png",
    navigateUrl: "/jewellery-molecute+collection",
  },
  {
    img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Static+Pages/Collection+Page/oneday-shipping+(1).png",
    navigateUrl: "/jewellery-shipping+in+1+day?sort=latest",
  },
];
const ImageUrl = (image) => {
  const width = window.innerWidth;
  var vvv = image && image[0] && image[0].imageUrl;
  var browser_type = JSON.parse(localStorage.getItem("browserDetails"));
  var resolution = 500;
  var _resolutions =
    width < 960
      ? `${resolution * 2}X${resolution * 2}`
      : `${resolution}X${resolution}`;
  var url_split = vvv.split("/");
  var extension_split = url_split && url_split[url_split.length - 1];
  var browser_type_append =
    extension_split &&
    extension_split
      .split(".")[0]
      .concat(`${browser_type && browser_type.browser_type}`);
  url_split[url_split && url_split.length - 1] = browser_type_append;
  url_split.splice(2, 0, _resolutions);
   // eslint-disable-next-line
  var url_construct = url_split.join().replace(/\,/g, "/");
  return `${CDN_URL}${url_construct}`;
};
const Product_price = (price) => {
  return CurrencyConversion(Math.round(price.markupPrice));
  //  new Intl.NumberFormat("en-IN", {
  //   style: "currency",
  //   currency: "INR",
  //   minimumFractionDigits: 0,
  // }).format(Math.round(price.markupPrice));
};
const Product_url = (url) => {
  return url && url && url.skuUrl;
};

export default function (data) {
  var CollectionPage = [];
  var CollectionPageStylori;
  let mapperdata = data && data.length > 0 ? data : "";
  mapperdata =
    mapperdata &&
    mapperdata.map((data, index_) => {
      containerImage.map((contain_img, index) => {
        if (index_ === index) {
          data.containerImageData = [contain_img];
        }
        return contain_img;
      });
      return data;
    });

  mapperdata =
    mapperdata &&
    mapperdata.map((data, index_) => {
      Product_name.map((contain_img, index) => {
        if (2 * index_ === index) {
          data.Product_name = contain_img;
        }
        return Product_name;
      });
      return data;
    });
  mapperdata =
    mapperdata &&
    mapperdata.map((data, index_) => {
      Product_name.map((contain_img, index) => {
        if (2 * index_ + 1 === index) {
          data.Product_name1 = contain_img;
        }
        return Product_name;
      });
      return data;
    });

  mapperdata =
    mapperdata &&
    mapperdata.map((data, index_) => {
      primaryNavigateUrl.map((contain_img, index) => {
        if (2 * index_ === index) {
          data.primaryNavigateUrl = contain_img;
        }
        return primaryNavigateUrl;
      });
      return data;
    });

  mapperdata =
    mapperdata &&
    mapperdata.map((data, index_) => {
      primaryNavigateUrl.map((contain_img, index) => {
        if (2 * index_ + 1 === index) {
          data.primaryNavigateUrl_sec = contain_img;
        }
        return primaryNavigateUrl;
      });
      return data;
    });

  mapperdata =
    mapperdata &&
    mapperdata.map((data, index_) => {
      primaryImage.map((contain_img, index) => {
        if (2 * index_ === index) {
          data.primaryImage = contain_img;
        }
        return primaryImage;
      });
      return data;
    });
  mapperdata =
    mapperdata &&
    mapperdata.map((data, index_) => {
      primaryImage.map((contain_img, index) => {
        if (2 * index_ + 1 === index) {
          data.secondaryImage = contain_img;
        }
        return primaryImage;
      });
      return data;
    });

  CollectionPageStylori = {
    carouselTop: {
      setting: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: false,
        autoplaySpeed: 6000,
        arrows: false,
        accessibility: true,
        centerMode: false,
        focusOnSelect: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        pauseOnFocus: true,
        swipe: true,
      },
    },
    Testimony: {
      carousel: {
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          fade: false,
          autoplaySpeed: 6000,
          arrows: false,
          accessibility: true,
          centerMode: false,
          focusOnSelect: false,
          pauseOnHover: false,
          pauseOnDotsHover: false,
          pauseOnFocus: true,
          swipe: true,
        },
      },
    },
  };
  mapperdata =
    mapperdata &&
    mapperdata.map((data, index_) => {
      var CarouselData_primary = [];
      mapperdata &&
        mapperdata.map((second_data, index__) => {
          if (index_ * 2 === index__) {
            second_data.allProductLists.map((val) => {
              CarouselData_primary.push({
                imageTitle: val.productName,
                img: ImageUrl(val.productImagesByProductId),
                navigateUrl: Product_url(val.trans_sku_lists[0]),
                price: Product_price(val.trans_sku_lists[0]),
                buttonName: "Shop Now",
              });
              return 0;
            });
            data.allProductLists__primary = CarouselData_primary;
          }
          return second_data;
        });
      return data;
    });

  mapperdata =
    mapperdata &&
    mapperdata.map((data, index_) => {
      var CarouselData_secondary_ = [];
      mapperdata &&
        mapperdata.map((second_data, index__) => {
          if (index_ * 2 + 1 === index__) {
            second_data.allProductLists.map((val) => {
              CarouselData_secondary_.push({
                imageTitle: val.productName,
                img: ImageUrl(val.productImagesByProductId),
                navigateUrl: Product_url(val.trans_sku_lists[0]),
                price: Product_price(val.trans_sku_lists[0]),
                buttonName: "Shop Now",
              });
              return val;
            });
            data.allProductLists__secondary = CarouselData_secondary_;
          }
          return second_data;
        });
      return data;
    });

  mapperdata &&
    mapperdata.map((_collo_) => {
      CollectionPage.push({
        containerImage: _collo_.containerImageData,
        primaryImage: _collo_.primaryImage,
        primaryNavigateUrl: _collo_.primaryNavigateUrl,
        primaryContantName: _collo_.Product_name,
        primaryButtonName: "Explore",
        primaryCarouselDetails: _collo_.allProductLists__primary,

        secondaryImage: _collo_.secondaryImage,
        secondaryNavigateUrl: _collo_.primaryNavigateUrl_sec,
        secondaryContantName: _collo_.Product_name1,
        secondaryButtonName: "Explore",
        secondaryCarouselDetails: _collo_.allProductLists__secondary,
      });
      return 0;
    });
  CollectionPageStylori.Testimony.carousel.data = CollectionPage;
  return { CollectionPageStylori, primaryNavigateUrl };
}
