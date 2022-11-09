import React from "react";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
const ArrowLeft = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowLeftIcon
      className={`${className}`}
      onClick={onClick}
      style={{ ...style, left: 0, zIndex: 2, fontSize: "3rem" }}
    />
  );
};
const ArrowRight = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowRightIcon
      className={`${className}`}
      onClick={onClick}
      style={{ ...style, right: 0, zIndex: 2, fontSize: "3rem" }}
    />
  );
};
export const homeNac = {
  carouselTop: {
    setting: {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 7000,
      fade: false,
      arrows: true,
      arrowsImg: false,
      dotsClass: "slickdev",
      accessibility: true,
      centerMode: false,
      focusOnSelect: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      pauseOnFocus: true,
      swipe: false,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />,
    },
    data: [
      {
        img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_page/Group+105.png",
        mobileImg:
          "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori+CSK-banner-mobile-805X430-px.jpg",
        navigateUrl: "/jewellery/kada/csk_kada?skuId=1000001",
      },
      {
        img: "https://assets.stylori.com/images/Static+Pages/Home+Page/banner1.jpg",
        mobileImg:
          "https://assets.stylori.com/images/Static+Pages/Home+Page/gemstone-mob",
        navigateUrl: "/gemstone-jewellery?sort=latest",
      },
      {
        img: "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori-Valentine-banner-web.jpg",
        mobileImg:
          "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori-Valentine-banner-mob.jpg",
        navigateUrl: "/hearts-jewellery?sort=bestseller",
      },
    ],
  },
};

export const storyData = {
  data: {
    heading: "The NAC Story",
    para: "In 1973, Shri N. Anjaneyalu Chetty started a jewellery shop in Mylapore hoping to find loyal patrons. What began as a small store was soon a flourishing business and NAC became a household name in Mylapore! NAC’s penchant for heritage jewels helped to carve a niche in a city, where culture, heritage and history are cherished, even to this day. Today, NAC has expanded its arms and has found many place in and around Chennai and an exclusive showroom at Vijaywada.  From a humble beginning to seven plush three-storey showrooms, the journey has been eventful with many accolades and commendations for our commitment to the ancient art of jewellery making.",
    store: "Locate a store",
  },
};

export const HomeCardData = {
  data: [
    {
      img: "https://storage.googleapis.com/media.nacjewellers.com/resources/collection_files/rewind/All%20Collection%20Mobile%2001.jpg",
      heading: "Young One",
      para: "Adorn your kids with trendy and fashionable jewellery with exhaustive themes and options. Gift your child all the glitter and sparkle in the world and match it up with their adorable smiles. Specially designed with trends that appeal to children, our",
      anchor: "view collection",
    },
    {
      img: " https://storage.googleapis.com/media.nacjewellers.com/resources/collection_files/breezee/All%20Collection%20Mobile%2002.jpg",
      heading: "Young One",
      para: "Adorn your kids with trendy and fashionable jewellery with exhaustive themes and options. Gift your child all the glitter and sparkle in the world and match it up with their adorable smiles. Specially designed with trends that appeal to children, our",
      anchor: "view collection",
    },
    {
      img: "https://storage.googleapis.com/media.nacjewellers.com/resources/collection_files/rewind/All%20Collection%20Mobile%2001.jpg",
      heading: "Young One",
      para: "Adorn your kids with trendy and fashionable jewellery with exhaustive themes and options. Gift your child all the glitter and sparkle in the world and match it up with their adorable smiles. Specially designed with trends that appeal to children, our",
      anchor: "view collection",
    },
  ],
};

export const StaticImage = {
  setting: {
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 1000,
    fade: false,
    arrows: false,
    arrowsImg: true,
    dotsClass: "slickdev",
    accessibility: true,
    centerMode: false,
    focusOnSelect: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: true,
    swipe: false,
  },

  data: [
    {
      img: "https://storage.googleapis.com/media.nacjewellers.com/resources/user_media/2020%20Banners/Bridal%20Clllection_NAC%20Jewellers.jpg",
    },
  ],
};

export const Testimonial = {
  setting: {
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 1000,
    fade: false,
    arrows: false,
    arrowsImg: false,
    dotsClass: "slickdevtestimonial",
    accessibility: true,
    centerMode: false,
    focusOnSelect: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: true,
    swipe: false,
  },

  data: [
    {
      img: "https://storage.googleapis.com/media.nacjewellers.com/resources/collection_files/rewind/All%20Collection%20Mobile%2001.jpg",
      heading: "Young One",
      para: "I thought that simple and subtle suited my personality until I entered NAC Jewellers to shop for my wedding. Every jewel that I picked up had made intricate details and delicate craftsmanship that is hard to find in any other store. The sheer variety...",
      anchor: "view collection",
      country: "India",
    },
    {
      img: " https://styloriimages.s3.ap-south-1.amazonaws.com/images/Static+Pages/Home+Page/banner5.jpg",
      heading: "Yofhfbgfgbfg",
      para: "I thought that simple and subtle suited my personality until I entered NAC Jewellers to shop for my wedding. Every jewel that I picked up had made intricate details and delicate craftsmanship that is hard to find in any other store. The sheer variety...",
      anchor: "view lijikjlkjkljlklkl;kl;k",
      country: "India",
    },
    {
      img: "https://storage.googleapis.com/media.nacjewellers.com/resources/user_profile/Pratyusha-Garlapati-Testimonial.jpg",

      heading: "Young One",
      para: "I thought that simple and subtle suited my personality until I entered NAC Jewellers to shop for my wedding. Every jewel that I picked up had made intricate details and delicate craftsmanship that is hard to find in any other store. The sheer variety...",
      anchor: "view collection",
      country: "India",
    },
    {
      img: " https://styloriimages.s3.ap-south-1.amazonaws.com/images/Static+Pages/Home+Page/banner5.jpg",
      heading: "Young One",
      para: "I thought that simple and subtle suited my personality until I entered NAC Jewellers to shop for my wedding. Every jewel that I picked up had made intricate details and delicate craftsmanship that is hard to find in any other store. The sheer variety...",
      anchor: "view collection",
      country: "India",
    },
    {
      img: " https://styloriimages.s3.ap-south-1.amazonaws.com/images/Static+Pages/Home+Page/banner5.jpg",
      heading: "Young One",
      para: "I thought that simple and subtle suited my personality until I entered NAC Jewellers to shop for my wedding. Every jewel that I picked up had made intricate details and delicate craftsmanship that is hard to find in any other store. The sheer variety...",
      anchor: "view collection",
      country: "India",
    },
    {
      img: "https://storage.googleapis.com/media.nacjewellers.com/resources/user_profile/Kani-Prabha-Testimonial.jpg",
      heading: "Young One",
      para: "I thought that simple and subtle suited my personality until I entered NAC Jewellers to shop for my wedding. Every jewel that I picked up had made intricate details and delicate craftsmanship that is hard to find in any other store. The sheer variety...",
      anchor: "view collection",
      country: "India",
    },
  ],
};
// export const Testimonial1 = {}
// export const Testimonial2 = {}
