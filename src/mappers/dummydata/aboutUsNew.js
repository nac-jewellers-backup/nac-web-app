import React from "react";
import profile1 from "./../../assets/NAC---Desktop-UI---About Us, FAQ, Privacy, T&C-5.jpg";
import profile2 from "./../../assets/NAC---Desktop-UI---About Us, FAQ, Privacy, T&C-6.jpg";
import profile3 from "./../../assets/NAC---Desktop-UI---About Us, FAQ, Privacy, T&C-7.jpg";
import card1 from "./../../assets/NAC---Desktop-UI---About Us, FAQ, Privacy, T&C-8.jpg";
import card2 from "./../../assets/NAC---Desktop-UI---About Us, FAQ, Privacy, T&C-9.jpg";
import card3 from "./../../assets/NAC---Desktop-UI---About Us, FAQ, Privacy, T&C-10.jpg";
import { Box, makeStyles, Typography } from "@material-ui/core";


const ProfileUseStyles = makeStyles((theme) => ({
  para: {
    textAlign: "justify"
  }
}))

// const classes = ProfileUseStyles()



export const aboutUsNew = [
  {
    para: [

      <Box>
        <Box sx={{ textAlign: { xs: 'justify', lg: 'justify' } }}>
          Ours is a journey that began almost hundred years ago in <span>1917</span>, when <span>
            Shri Nathella Narayana Chetty</span> started a small
          jewellery business at home where he fashioned hand-made jewels for a few loyal patrons.His son, <span>Shri Nathella</span>
          <span>Anantham Chetty</span> opened a small store in Parry's Corner in old Madras, which soon became a flourishing business. His son,
          <span>Shri N. Anjaneyulu Chetty,</span> founded <span>NAC Jewellers</span> and nourished its brand along with his son <span>Shri Anantha</span>
          <span>Padmanabhan</span> who transformed the small store into a chain of jewellery houses. Today,<span> Anand Ramanujam,</span>
          <Box sx={{ textAlign: { xs: 'justify', lg: 'center' } }}>the fifth generation of scion of this illustrious family, continues the legacy of his forefathers.</Box>
        </Box>
        <Box
          sx={{ margin: { xs: '20px 0', lg: '40px 0' } }}
          style={{ textAlign: "center" }}>
          We are known for our unique and rare designs, as we are ever mindful
          about the latest trends in jewellery and the expectations of the
          customer. We also export jewellery abroad, we cater to the growing
          market of Indian ethnic jewellery.
        </Box>
      </Box>,
    ],
  },
  {
    imageCard: [
      {
        img: profile1,
        name: "Anantha Padmanabhan",
        role: "Chairman & Managing Director",
      },
      {
        img: profile2,
        name: "Anantha Ramanujam",
        role: "Executive Director",
      },
      {
        img: profile3,
        name: "Arjun Varadaraj",
        role: "Executive Director",
      },
    ],
  },
];
export const aboutusTData = [
  {
    time: "1970s",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1917.webp",
    content:
      "N. Narayana Chetty makes a humble beginning at home: he designs and crafts gold jewellery by hand. What starts as a small group of interested customers, gradually grows into a loyal patronage",
  },
  {
    time: "1980s",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1927.webp",
    content:
      "His son, N. Anantham Chetty takes the first step of opening a small shop at Parry's Corner, Chennai",
  },
  {
    time: "1990s",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1973.webp",
    content:
      "Shri. N. Anjaneyulu Chetty of the third generation who has been working with his father for over 2 decades takes the next big step. The brand NAC jewellers is born",
  },
  {
    time: "2000s",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1979.webp",
    content:
      "Shri N. Anantha Padmanabhan, the fourth generation entrepreneur transforms NAC Jewellers from a single store brand to a multi store brand",
  },
  {
    time: "2010s",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1990.webp",
    content:
      "Mylapore's jewel: NAC'S humble store near the Kapaleeswarar temple opens doors",
  },
  {
    time: "2020",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2007.webp",
    content:
      "As the patronage grows, NAC Jewellers' plush three-floor showroom in Mylapore gradually grows into a preferred jewellery destination",
  },
  {
    time: "2010",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2010.webp",
    content:
      "Silvermine is launched. An exclusive retail outlet for silver articles and gifts",
  },
  {
    time: "2020",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2012.webp",
    content:
      "N. Anandha Ramanujam, the fifth generation entrepreneur and son of Shri Anantha Padmanabhan joins the business and begins his stint with the launch of NAC Young Ones",
  },
  {
    time: "2013",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2013.webp",
    content: "NAC Jewellers makes an iconic landmark at TNagar",
  },
  {
    time: "2015",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2015_01.webp",
    content:
      "NAC Jewellers launches STYLORI, an exclusively online store for everyday jewellery, crafted for the modern Indian woman",
  },
  {
    time: "2015",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2015_02.webp",
    content:
      "NAC Jewellers makes a city-wide impact with the simultaneous launch of three showrooms in Perambur, Velachery and Kanchipuram on 2nd November 2015",
  },
  {
    time: "2015",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2015_03.webp",
    content:
      "NAC Jewellers lightens up the Oscars as Hollywood actress Chloe Grace Moretz wears an exquisite piece from the Fabula Collection",
  },
  {
    time: "2016",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2016.webp",
    content:
      "Launch of the first store outside Tamil Nadu in Vijayawada, Andhra Pradesh",
  },
  {
    time: "2017",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2017.webp",
    content:
      "Knack Studios is Launched. As South India's leading postproduction studio, Knack Studios has worked with leading filmmakers across industries",
  },
  {
    time: "2017",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2017_02.webp",
    content:
      "NAC Jewellers spreads their wings further with the launch of their Anna Nagar showroom",
  },
  {
    time: "2019",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2019.webp",
    content:
      "N. Arjun Varadaraj, son of Managing Director Shri Anantha Padmanabhan, comes aboard as Director at NAC Jewellers",
  },
  {
    time: "2020",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2020.webp",
    content:
      "NAC Jewellers launches Stylori Silver, a curated range of exclusive silver jewellery, featuring classical and contemporary styles",
  },
];

export const aboutusImgCard = [
  {
    image: card1,
    descr: "Diamonds are forever",
    readmore: "Read more",
  },
  {
    image: card2,
    descr: "Young One to Cherish",
    readmore: "Read more",
  },
  {
    image: card3,
    descr: "Antique Lounge",
    readmore: "Read more",
  },
]