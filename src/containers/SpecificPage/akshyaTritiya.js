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
import { CDNPAGES } from "queries/cdnPages";
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
        query: CDNPAGES("akshayaTritiya"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //feature product
        console.log("cdnData", JSON.parse(data.data.cdnByPage.data))
        const dataRecieved = JSON.parse(data.data.cdnByPage.data)
        setState(dataRecieved)
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

  const [state, setState] = useState([]);

  const handleComponents = (val) => {
    switch (val.component) {
      case "BannerComponent": {
        console.log("valueRender", val?.props)
        return <BannerComponent
          banners={val?.props?.banners} dataCarousel={val?.props?.banners.length > 1 ? "multiple" : "single"} />;
      }
      case "TitleAndData": {
        return <TitleAndData title={val?.props?.title} description={val?.props?.description} />
      }
      case "SlideImgMediaCard": {
        return <SlideImgMediaCard listProduct={val?.props?.listingProducts} />
      }
      case "QueryForm": {
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
