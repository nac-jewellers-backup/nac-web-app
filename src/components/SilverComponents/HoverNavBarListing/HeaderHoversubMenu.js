import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Popper,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useStyles } from "../styles";
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
    {
      title: "Genstone",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+319.svg",
      url1: "/#",
      url2: "#",
      url3: "#",
    },
    {
      title: "Diamond",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+321.svg",
      url1: "/diamond-earrings-jewellery",
      url2: "/diamond-rings-jewellery",
      url3: "/diamond-bangles-jewellery",
    },
    {
      title: "Solitaire",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+325.svg",
      url1: "/#",
      url2: "#",
      url3: "#",
    },
    {
      title: "Platinum",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Ellipse+3.svg",
      url1: "/buy+platinum-earrings-jewellery",
      url2: "/rings-jewellery-rings-platinum",
      url3: "/buy+platinum-bracelets-jewellery",
    },
    {
      title: "Yellow Gold",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
      url1: "/plain+gold-earrings-jewellery",
      url2: "/plain+gold-rings-jewellery",
      url3: "/plain+gold-bangles-jewellery",
    },
    {
      title: "White Gold",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
      url1: "#",
      url2: "#",
      url3: "#",
    },
    {
      title: "Rose Gold",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
      url1: "#",
      url2: "#",
      url3: "#",
    },
    {
      title: "Silver by STYLORI",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Path+423.svg",
      url1: "#",
      url2: "#",
      url3: "#",
    },
  ];
  const data = [
    {
      title: "Below ₹10,000",
      url1: "/earrings-jewellery?startprice=1000&endprice=10000",
      url2: "/rings-jewellery?startprice=1000&endprice=10000",
      url3: "/bangles-jewellery?startprice=1000&endprice=10000",
    },
    {
      title: "₹10,001 - ₹25,000",
      url1: "/earrings-jewellery?startprice=10001&endprice=20000",
      url2: "/rings-jewellery?startprice=10001&endprice=20000",
      url3: "/bangles-jewellery?startprice=10001&endprice=20000",
    },
    {
      title: "₹25,001 - ₹50,000",
      url1: "/earrings-jewellery?startprice=20001&endprice=30000",
      url2: "/rings-jewellery?startprice=20001&endprice=30000",
      url3: "/bangles-jewellery?startprice=20001&endprice=30000",
    },
    {
      title: "Above ₹50,000",
      url1: "/earrings-jewellery?startprice=50001&endprice=200000",
      url2: "/rings-jewellery?startprice=50001&endprice=200000",
      url3: "/bangles-jewellery?startprice=50001&endprice=200000",
    },
  ];
  const gifts3 = [
    {
      title: "Gifts for men",
      url1: "#",
      url2: "/rings-jewellery-rings-mens+collection",
      url3: "/bracelets-jewellery-bracelets-mens+collection",
    },
    {
      title: "Gifts for mom",
      url1: "/earrings-jewellery-for+female",
      url2: "/rings-jewellery-for+female",
      url3: "/bangles-jewellery-for+female",
    },
    {
      title: "Gifts for wife",
      url1: "/earrings-jewellery-for+female",
      url2: "/rings-jewellery-for+female",
      url3: "/bangles-jewellery-for+female",
    },
    {
      title: "Gifts for kids",
      url1: "/earrings-jewellery-for+kids",
      url2: "/rings-jewellery-for+kids",
      url3: "/bangles-jewellery-for+kids",
    },
    {
      title: "Lightweight by STYLORI",
      url1: "/earrings-jewellery-earrings-stylori",
      url2: "/rings-jewellery-rings-stylori",
      url3: "/bangles-jewellery-bangles-stylori",
    },
    {
      title: "Silver by STYLORI",
      url1: "#",
      url2: "#",
      url3: "#",
    },
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
      img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Main+menu+category+images/NAC+Jewellers+Earring.jpg",
    },
  ];

  const imageForBangles = [
    {
      img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Main+menu+category+images/NAC+Jewellers+Bangle.jpg",
    },
  ];
  const imageForNecklesh = [
    {
      img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Main+menu+category+images/NAC+Jewellers+Necklace.jpg",
    },
  ];
  const imageForRings = [
    {
      img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Main+menu+category+images/NAC+Jewellers+Rings.jpg",
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
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+330%402x.png",
      content: "Studs",
      url: "/studs+and+tops-jewellery",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/PRPpoy%402x.png",
      content: "Drops",
      url: "/drops+and+danglers-earrings-jewellery",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/qyLKdg%402x.png",
      content: "Jhumkas",
      url: "/jhumkas-jewellery",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/NDUTnF%402x.png",
      content: "Earcuffs",
      url: "/ear+cuffs-jewellery",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/1SevWE%402x.png",
      content: <>Hoops&nbsp;&Huggies</>,
      url: "/hoops+and+huggies-earrings-jewellery",
    },

    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/nkQJnj%402x.png",
      content: "Kids Earrings",
      url: "/earrings-jewellery-for+kids",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/ZZJVeH%402x.png",
      content: "Pearl earring",
      url: "/#",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/INe8h1%402x.png",
      content: <>LightWeight&nbsp;by&nbsp;Stylori</>,
      url: "/earrings-jewellery-earrings-stylori",
    },
  ];
  const ringsJewel = [
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/hBk9ve%402x.png",
      content: "Casual",
      url: "/casual+rings-jewellery",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/DzDcBv%402x.png",
      content: "Cocktail",
      url: "/cocktail-rings-jewellery",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/Ul3xhG%402x.png",
      content: "Fashion",
      url: "/fusion-jewellery",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/xJu4r9%402x.png",
      content: "Bridal",
      url: "/bridal+set-rings-jewellery",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/C1IQGq%402x.png",
      content: "Platinum rings",
      url: "/buy+platinum-rings-jewellery",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/YE4CnD%402x.png",
      content: "Men's Rings",
      url: "/rings-jewellery-rings-mens+collection",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/JfQ2Pg%402x.png",
      content: <>Light&nbsp;weightby&nbsp;STYLORI</>,
      url: "/rings-jewellery-rings-stylori",
    },
  ];
  const banglesbracelets = [
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/5Zna1n%402x.png",
      content: "Oval bracelts",
      url: "/oval-bracelets-jewellery",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/6afKPj%402x.png",
      content: <>Tennies&nbsp;bracelets</>,
      url: "#",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/GTmGEC%402x.png",
      content: <>LightWeight&nbsp;bangles</>,
      url: "/bracelets-jewellery-bracelets-stylori",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/yGnqN0%402x.png",
      content: <>Platinum&nbsp;Bracelets</>,
      url: "buy+platinum-bracelets-jewellery",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/iYTHDb%402x.png",
      content: "Mens bracelets",
      url: "/bracelets-jewellery-bracelets-mens+collection",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/MN2iaL%402x.png",
      content: "Kids bangles",
      url: "/bangles-jewellery-for+kids",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/2wA3vs%402x.png",
      content: <>Lightweight&nbsp;by&nbsp;stylori</>,
      url: "/bracelets-jewellery-bracelets-stylori",
    },
  ];
  const collectionsData = [
    {
      title: "Traditional Setting",
      url: "#",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/SqY6sJ%402x.png",
    },
    {
      title: "Young Ones",
      url: "/jewellery-young+ones",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/bvtACp%402x.png",
    },
    {
      title: "Mens",
      url: "/jewellery-mens+collection",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/3keZ23%402x.png",
    },
    {
      title: "Mayura",
      url: "/jewellery-mayura",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/XEwpui%402x.png",
    },
    {
      title: "Fabula",
      url: "/jewellery-fabula",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/26P38o%402x.png",
    },
    {
      title: "Muhurtham",
      url: "/jewellery-muhurtham",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/lMysCt%402x.png",
    },
    {
      title: "Uncut",
      url: "/jewellery-uncut",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/z5pju4%402x.png",
    },
    { title: "Jadau", url: "/jadai-jewellery", image: "" },
    {
      title: "Nagas",
      url: "/jewellery-nagas",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/2FXfOD%402x.png",
    },
    {
      title: "Rewind",
      url: "/jewellery-rewind",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/UmsWiC%402x.png",
    },
    {
      title: "Strings",
      url: "#",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/xMJ8PJ%402x.png",
    },
    {
      title: "Forevermark",
      url: "/jewellery-forevermark",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/z6JNI6%402x.png",
    },
  ];

  const otherJewels = [
    {
      title: "NECKLACES",
      content: [
        {
          itm: "Short",
          url: "/short+necklace-necklaces-jewellery",
        },
        {
          itm: "Long",
          url: "/long+haram-necklaces-jewellery",
        },
        {
          itm: "Layered",
          url: "#",
        },
        {
          itm: "Bridal",
          url: "/bridal+necklace-necklaces-jewellery",
        },
      ],
    },
    {
      title: "PENDANTS",
      content: [
        {
          itm: "Casual",
          url: "/casual+rings-pendants-jewellery",
        },
        {
          itm: "Bridal",
          url: "/bridal+necklace-pendants-jewellery",
        },
        {
          itm: "Religious",
          url: "/pendants-jewellery-special+occasion,festive",
        },
      ],
    },
    {
      title: "SHOP BY PRICE",
      content: [
        {
          itm: "Below ₹10,000",
          url: "/jewellery?startprice=1000&endprice=10000",
        },
        {
          itm: "₹10,001 - ₹25,000",
          url: "/jewellery?startprice=10001&endprice=20000",
        },
        {
          itm: "₹25,001 - ₹50,000",
          url: "/jewellery?startprice=20001&endprice=30000",
        },
        {
          itm: "Above ₹50,000",
          url: "/jewellery?startprice=50001&endprice=200000",
        },
      ],
    },
    {
      title: "SHOP MORE",
      content: [
        {
          itm: "Nose Pins",
          url: "/nosepin-jewellery",
        },
        {
          itm: "Chains",
          url: "/chains-jewellery",
        },
        {
          itm: "Platinum Brands",
          url: "/buy+platinum-jewellery",
        },
        {
          itm: "Bridal Accessories",
          url: "/bridal+set-jewellery",
        },
        {
          itm: "Odiyanam",
          url: "/oddiyanam-jewellery",
        },
        {
          itm: "Anklets",
          url: "/anklets-jewellery",
        },
      ],
    },
    {
      title: "STYLORI",
      content: [
        {
          itm: "Gold & Diamond",
          url: "/diamond-jewellery-stylori",
        },
        {
          itm: "Silver",
          url: "#",
        },
      ],
    },
    {
      title: "GOLD COINS",
      content: [
        { itm: "22ct", url: "#" },
        { itm: "24ct", url: "#" },
      ],
    },
    {
      title: <>SHOP&nbsp;ALL&nbsp;JEWELLERY </>,
      content: [
        {
          itm: "For men",
          url: "/jewellery-mens+collection",
        },
        {
          itm: "For women",
          url: "/jewellery-for+female",
        },
        {
          itm: "For kids",
          url: "/jewellery-for+kids",
        },
      ],
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
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
    },
    {
      title: "Plates",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
    },
    {
      title: "Bowls",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
    },
    {
      title: <>Kuthu&nbsp;Vilaku</>,
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
    },
    {
      title: <>Vilaku</>,
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
    },
    {
      title: "Jyothi",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
    },
    {
      title: "Idols",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
    },
    {
      title: "Coins",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
    },
    {
      title: "Tumblers",
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
    },
    {
      title: <>Young&nbsp;Ones</>,
      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
    },
  ];

  const solitaireData2 = [
    {
      title: "Loose Diamonds",
      contents: [
        {
          sub: "Round",
          url: "/round-jewellery",
          img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+319.svg",
        },
        {
          sub: "Princess",
          url: "#",
          img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+321.svg",
        },
        {
          sub: "Oval",
          url: "/oval-jewellery",
          img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+325.svg",
        },
        {
          sub: "Heart",
          url: "#",
          img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Ellipse+3.svg",
        },
        {
          sub: "Cushion",
          url: "#",
          img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
        },
        {
          sub: "Pear",
          url: "",
          img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
        },
        {
          sub: "Emerald",
          url: "/emerald+uncut+dia-jewellery",
          img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
        },
      ],
    },
  ];

  const solitaireData3 = [
    {
      title: "Shop by price",
      contents: [
        {
          itm: "Below ₹10,000",
          url: "#",
        },
        {
          itm: "₹10,001 - ₹25,000",
          url: "#",
        },
        {
          itm: "₹25,001 - ₹50,000",
          url: "#",
        },
        {
          itm: "Above ₹50,000",
          url: "#",
        },
      ],
    },
  ];

  const solitaireData4 = [
    { title: "Solitaire Guide" },
    { title: "Design your own" },
    { title: "Know your size" },
    { title: "Shop all Designs" },
  ];

  const silverItems2 = [
    {
      title: <>CORPORATE&nbsp;GIFTING</>,
      contents: [
        { item: "Below ₹3,000" },
        { item: "₹3,001 - ₹5,001" },
        { item: "Above ₹5,001" },
      ],
    },
    {
      title: "TANGORE",
      contents: [{ item: "Photos" }, { item: "Others" }],
    },
    {
      title: "LEG CHAIN",
      contents: [
        { item: "Anklets" },
        { item: "Metti" },
        { item: "Velli Paavai Set" },
        { item: "Antique" },
        { item: "Others" },
      ],
    },
    {
      title: "FURNITURE",
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
      title: "COLLECTIONS",
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
      url: "/rings-jewellery",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/Ul3xhG%402x.png",
    },
    {
      title: "Earrings",
      url: "/earrings-jewellery",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/Ul3xhG%402x.png",
    },
    {
      title: "Necklaces",
      url: "/necklaces-jewellery",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/OxwFfP%402x.png",
    },
    {
      title: <>Bangles&nbsp;and&nbsp;bracelets</>,
      url: "/bracelets-jewellery",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/MN2iaL%402x.png",
    },
    {
      title: "Pendants",
      url: "/pendants-jewellery",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/1SevWE%402x.png",
    },
    {
      title: "Men's rings",
      url: "/rings-jewellery-rings-mens+collections",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/YE4CnD%402x.png",
    },
  ];

  const valueForData = () => {
    if (props.listitem === "RINGS") {
      return ringsJewel;
    } else if (props.listitem === "EARRINGS") {
      return earRings;
    } else if (props.listitem === "BANGLES & BRACELETS") {
      return banglesbracelets;
    }
  };

  const valueForImage = () => {
    if (props.listitem === "RINGS") {
      return imageForRings;
    } else if (props.listitem === "EARRINGS") {
      return imageForEarRings;
    } else if (props.listitem === "BANGLES & BRACELETS") {
      return imageForBangles;
    } else if (props.listitem === "SAVING SCHEME") {
      return imageForEarRings;
    }
  };

  const ForCollections = () => {
    return (
      <Grid
        container
        style={{
          width: "100%",
          background: "#fff",
          padding: "25px 75px 20px 0px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid
            item
            xs={9}
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
                          style={{ paddingBottom: "5px" }}
                        >
                          {val.title}s
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
                            style={{ paddingBottom: "10px" }}
                            src={val.image}
                            width="40%"
                            height="45%"
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <div style={{ paddingTop: "25px" }}>
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Main+menu+category+images/NAC+Jewellers+collections.jpg"
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
          padding: "25px 75px 20px 0px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid
            item
            xs={9}
            className={classes.gridmultiplesection}
            style={{ padding: "20px 30px 40px 0px" }}
          >
            <Grid container item xs={12}>
              {otherJewels.map((val, index) => {
                return (
                  <Grid item xs={3} style={{ paddingLeft: "50px" }}>
                    <Grid
                      container
                      className={classes.imgcont}
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
                          {val.title}s
                        </Typography>
                      </Grid>
                      {val.content.map((item, i) => (
                        <Grid
                          item
                          xs={12}
                          style={{
                            justifyContent: "center",
                            alignContent: "center",
                            display: "block",
                            paddingTop: "13px",
                          }}
                          onClick={() => {
                            window.location.href = item.url;
                          }}
                        >
                          <Typography className={classes.listedItemsvalue}>
                            {item.itm}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <div style={{ paddingTop: "25px" }}>
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Main+menu+category+images/NAC+Jewellers+Other+Collections.jpg"
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
          padding: "40px 68px 20px 0px",
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
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingRight: "30px",
              }}
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
          padding: "40px 100px 20px 0px",
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
              style={{ display: "flex", justifyContent: "flex-start" }}
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
          padding: "25px 75px 20px 20px",
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
                      style={{ cursor: "pointer", paddingBottom: "17px" }}
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
          <Grid
            item
            xs={6}
            className={classes.gridmultiplesection}
            style={{ padding: "0 20px" }}
          >
            <Grid container item xs={12}>
              <Grid item xs={4} style={{ padding: "0 6px 0 2px" }}>
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
                          if (props.listitem === "EARRINGS") {
                            return (window.location.href = val.url1);
                          } else if (props.listitem === "RINGS") {
                            return (window.location.href = val.url2);
                          } else if (props.listitem === "BANGLES & BRACELETS") {
                            return (window.location.href = val.url3);
                          }
                        }}
                        justify="center"
                        alignContent="center"
                        alignItems="center"
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <img src={val.img} width="17px" height="25px" />
                          <Typography className={classes.listedItemsvalue}>
                            {val.title}
                          </Typography>
                        </div>
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
                          if (props.listitem === "EARRINGS") {
                            return (window.location.href = val.url1);
                          } else if (props.listitem === "RINGS") {
                            return (window.location.href = val.url2);
                          } else if (props.listitem === "BANGLES & BRACELETS") {
                            return (window.location.href = val.url3);
                          }
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
                          if (props.listitem === "EARRINGS") {
                            return (window.location.href = val.url1);
                          } else if (props.listitem === "RINGS") {
                            return (window.location.href = val.url2);
                          } else if (props.listitem === "BANGLES & BRACELETS") {
                            return (window.location.href = val.url3);
                          }
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
          <Grid item xs={3}>
            <div style={{ paddingTop: "25px" }}>
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
          padding: "25px 75px 40px 20px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid item xs={9}>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Grid item xs={4} className={classes.gridmultiplesection}>
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
              <Grid item xs={3} className={classes.gridmultiplesection}>
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
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          {val.contents.map((x, i) => (
                            <div
                              style={{ display: "flex", paddingBottom: "13px" }}
                            >
                              <img src={x.img} width="17px" height="25px" />
                              <Typography
                                style={{ margin: "0px" }}
                                className={classes.listedItemsvalue}
                              >
                                {x.sub}
                              </Typography>
                            </div>
                          ))}
                        </div>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3} className={classes.gridmultiplesection}>
                {solitaireData3.map((val, i) => (
                  <Grid container item xs={12}>
                    <Grid item xs={12}>
                      <Typography
                        className={classes.listedItemstitle}
                        style={{ textAlign: "center" }}
                      >
                        {val.title.toUpperCase()}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: "40px" }}>
                      {val.contents.map((cont, i) => (
                        <Typography
                          className={classes.listedItemsvalue}
                          style={{ paddingBottom: "13px" }}
                        >
                          {cont.itm}
                        </Typography>
                      ))}
                    </Grid>
                  </Grid>
                ))}
                <div
                  style={{
                    borderBottom: "1px solid#2F348B",
                    width: "75%",
                    margin: "auto",
                  }}
                ></div>
                <div style={{ marginTop: "30px" }}>
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
            </Grid>
          </Grid>
          <Grid item xs={3} className={classes.gridmultiplesection}>
            <div style={{ paddingTop: "25px" }}>
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Main+menu+category+images/NAC+Jewellers+Solitaire.jpg"
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
          padding: "25px 75px 30px 0px",
          zIndex: "10000",
        }}
      >
        <Grid container item xs={12}>
          <Grid item xs={9}>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Grid item xs={5} className={classes.gridmultiplesection}>
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
              <Grid item xs={5} className={classes.gridmultiplesection}>
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
                          style={{ textAlign: "center", marginBottom: "12px" }}
                        >
                          {val.title}
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
                          <Typography
                            className={classes.listedItemsvalue}
                            style={{ paddingTop: "12px" }}
                          >
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
                        style={{ textAlign: "center", marginBottom: "12px" }}
                      >
                        {val.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {val.contents.map((itms, i) => (
                        <Typography
                          className={classes.listedItemsvalue}
                          style={{ paddingTop: "12px" }}
                        >
                          {itms.item}
                        </Typography>
                      ))}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <div style={{ paddingTop: "25px" }}>
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Main+menu+category+images/NAC+Jewellers+Silver+Articles.jpg"
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
          style={{ boxShadow: "5px 5px 8px #666161" }}
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
