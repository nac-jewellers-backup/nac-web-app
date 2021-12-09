import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Slideshow from "components/Carousel/carosul";
import { ImgMediaCard } from "components/ProductCard/Card";
import Header from "components/SilverComponents/Header";
import { storeLocatorData } from "mappers/dummydata/storeLocator";
import React, { useEffect } from "react";
import Testimonial from "../../components/testimonial/testimonial";
import { API_URL } from "../../config";
import { AllHOMEQUERY } from "../../queries/home";
import { Title } from "./title";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    collectionSection: {
        // "& svg":{
        fill: `${theme.palette.secondary.main} !important`,
        // }
    },
    title: {
        color: "gray",
        fontSize: "23px",
        textAlign: "center"
    },
    sub: {
        color: "gray",
        fontSize: "18px",
        textAlign: "center"
    },
    about: {

        boxShadow: "4px 4px 4px #a5a4a5 !important;"
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
        justifyContent: "center"
    }
}));
function BridalCollection() {

    const [featured, setFeatured] = React.useState([])
    const [reviews, setReviews] = React.useState([])
    const classes = useStyles();
    const ArrowLeft = (props) => {
        const { className, style, onClick } = props;
        return (
            <ArrowLeftIcon
                className={`${className} ${classes.collectionSection}`}

                style={{ ...style, fontSize: "3em" }}
            />
        );
    };
    const ArrowRight = (props) => {
        const { className, style, onClick } = props;
        return (
            <ArrowRightIcon
                className={`${className} ${classes.collectionSection}`}

                style={{ ...style, fontSize: "3em" }}
            />
        );
    };

    const dataCarouselcollections = {
        arrows: true,
        dots: false,
        autoplay: false,
        infinite: false,
        accessibility: true,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <ArrowLeftIcon color="secondary" />,
        nextArrow: <ArrowRightIcon color="secondary" />,
    };
    const data1 = [
        {
            title: "MUHURTHAM",
            sub: "COMMERCIAL ADVERTISMENT",
            sub2: "Watch The NAC Jewellers Muhurtham Collection commercial advertisment!",

        },
        {
            title: "MUHURTHAM DIAMOND AND",
            sub: "COLD COLLECTION",
            sub2: "Take a look at our fascinating Diamond and Gold jewllery collection and pick your favourite once for your special moments",

        },
        {
            title: "AWARDED MASTER PIECE",
            sub: "COLD COLLECTION",
            sub2: "Take a look at our fascinating Diamond and Gold jewllery collection",

        }
    ]
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

                setFeatured(featureproductDetails)
                let reviewresponse = data?.data?.allCustomerReviews.nodes;
                setReviews(reviewresponse)

            });

    })
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header />
                <Slideshow dataCarousel={storeLocatorData.carouselTop.setting}>
                    {storeLocatorData.carouselTop.data.map((val, index) => (
                        <Grid container key={index}>
                            <img src={val.img} style={{ width: "100%", height: "100%" }} />
                        </Grid>
                    ))}
                </Slideshow>
                <br />
                <Title title="FEATURED" />


            </Grid>
            <Container maxWidth="lg">
                <Grid item xs={12}>
                    <Slideshow
                        class="subslider-carousel"
                        dataCarousel={dataCarouselcollections}
                    >
                        {featured.map((val) => {
                            return (
                                <ImgMediaCard
                                    data={val}
                                    cardSize="auto"
                                    hoverText={true}
                                />
                            );
                        })}
                    </Slideshow>
                    <br />
                    <Title title="ABOUT THE COLLECTION" />
                    <Grid container className={classes.about}>
                        <Grid item xs={5}>
                        </Grid>
                        <Grid item xs={7} className={classes.content2}>
                            <br />
                            <br />
                            <Typography className={classes.title}>BOOK AN APPOINTMENT</Typography>

                            <br />
                            <Typography className={classes.sub}>
                                Our bridal session is a premium service offered to<br />
                                clients who can book in advance. Select your bridal<br />
                                ﬁnery at peace and enjoy our personal shopping<br />
                                experience to your fullest satisfaction. Call<br />
                                +914443996666 to book a session today!<br />
                            </Typography>
                            <br />
                            <center>
                                <Button variant="contained" className={classes.btn}>
                                    &nbsp;&nbsp;BOOK NOW&nbsp;&nbsp;
                            </Button>
                            </center>
                            <br />
                            <br />
                            <br />
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <br />
                <Title title="TESTIMONIALS" />
                <Testimonial customerreview={reviews} bridal={true} />
            </Container>

        </Grid>
    );
}

export default BridalCollection;
