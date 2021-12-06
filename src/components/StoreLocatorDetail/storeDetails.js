import { Grid, Hidden, Typography } from '@material-ui/core';
import Social from 'components/nacsocial/social';
import { SocialNews } from 'mappers/dummydata/social';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Mapping from './mapping';
import styles from './style';



var obj_values = {};
function StoreDetails(props) {
    // alert(props.match.params.id)
    // alert(obj_values&&obj_values.data&&obj_values.data.result&&obj_values.data.result.name&&obj_values.data.result.name.split("-"))
    const classes = styles();
    var name = obj_values && obj_values.data && obj_values.data.result && obj_values.data.result.name && obj_values.data.result.name.split("-")
    var titleName = name && name[1]
    var lat = obj_values && obj_values.data && obj_values.data.result && obj_values.data.result.geometry && obj_values.data.result.geometry.location && obj_values.data.result.geometry.location.lat
    var lng = obj_values && obj_values.data && obj_values.data.result && obj_values.data.result.geometry && obj_values.data.result.geometry.location && obj_values.data.result.geometry.location.lng

    //   alert(JSON.stringify(obj_values&&obj_values.data&&obj_values.data.result&&obj_values.data.result.geometry.location.lng))
    const [state, setState] = useState({
        formatted_phone_number: "",
        formatted_address: "",
        reviews: null,
    });
    const ids = props && props.match && props.match.params && props.match.params.id;
    const title = () => {
        if (props.match.params.id === "ChIJD2b_DdNnUjoRu9gobrKLB8I") {
            return ["https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/Mylapore.jpg", "Mylapore"]
        }
        else if (props.match.params.id === "ChIJR-r-zY5dUjoRKhDlVtRh39I") {
            return ["https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/velachery.jpg", "Velachery"]
        }
        else if (props.match.params.id === "ChIJPyqXbLFlUjoRlijMXUh0R84") {
            return ["https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/Perambur.jpg", "Perambur"]
        }
        else if (props.match.params.id === "ChIJiZb4tVfCUjoRWHb4JCGQyKY") {
            return ["https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/KANCHIPURAM%20SHOWROOM.jpg", "Kanchipuram"]
        }
        else if (props.match.params.id === "ChIJdUFnBRiQUjoR7wz1VkiWT3w") {
            return ["https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/Tiruvallur.jpg", "Tiruvallur"]
        }
        else if (props.match.params.id === "ChIJq_WsMidkUjoRH7FAOtdaXis") {
            return ["https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/Anna%20Nagar.jpg", "Anna Nagar"]
        }
        else if (props.match.params.id === "ChIJlZ2oZrr6NToRG4kJpSN1uf8") {
            return ["https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/Vijayawada.jpg", "Vijayawada"]
        }
        else if (props.match.params.id === "ChIJPSl-5WNvUjoRhtsRqpmTVTc") {
            return ["https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/OLDWASHERMENPET.jpg", "Old Washermanpet"]
        }
        else if (props.match.params.id === "ChIJ423xiS1mUjoR_LOZTgQBMMM") {
            return ["https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/t.nagar.jpg", "T. Nagar"]
        }
        else if (props.match.params.id === ":id") {
            return ["https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/t.nagar.jpg", "T. Nagar"]
        }
    }

    // alert(JSON.stringify(Maps_data))

    useEffect(() => {

        // const opts = {
        //             method: "GET",
        //             headers: { "Access-Control-Allow-Origin": "http://localhost:3000","Access-Control-Allow-Credentials": true},
        //           };
        fetch(
            "https://cors-anywhere.herokuapp.com/" + `https://maps.googleapis.com/maps/api/place/details/json?place_id=${ids}&key=AIzaSyBHtJJ5uHfhX92hxFzHsciwPCayzYB9yCk`
        )
            .then(res => res.json())
            .then(fetchValue => {
                obj_values["data"] = fetchValue
                setState({
                    ...state,
                    formatted_phone_number: fetchValue.result.formatted_phone_number,
                    rating: fetchValue.result.rating,
                    formatted_address: fetchValue.result.formatted_address,



                })
                // alert(JSON.stringify(fetchValue.result.opening_hours.weekday_text))
                // alert(JSON.stringify(days))
                // Maps_Data(fetchValue)
                // localStorage.setItem('accessToken',fetchValue.accessToken);
                // localStorage.setItem('user_id', fetchValue.user_profile.id)
                // localStorage.setItem('panel',2);
                // localStorage.setItem('isedit',1);
                // localStorage.setItem('true',false)
                // props.history.push('/')

            })
            .catch(console.error)
    }, []);

    const days = obj_values && obj_values.data && obj_values.data.result && obj_values.data.result.opening_hours && obj_values.data.result.opening_hours.weekday_text && obj_values.data.result.opening_hours.weekday_text
    const len = obj_values && obj_values.data && obj_values.data.result && obj_values.data.result.reviews && obj_values.data.result.reviews.length;
    return (
        <Grid container xs={12} lg={12}>

            <Grid container xs={12} lg={12}>
                <Mapping lat={lat} lng={lng} />
            </Grid>
            <Grid container className={classes.sidePer} sm={12} md={12} xs={12} lg={12}>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid item className={classes.borders} xs={12} sm={12} md={5} lg={4}>
                        <Grid item className={classes.dataStyle} md={12} sm={12} xs={12}>
                            <img className={classes.innerimg} src={title()[0]} />
                        </Grid>
                    </Grid>
                    <Grid item style={{ paddingTop: "5px" }} className={classes.pads} sm={9} md={3} xs={9} lg={4}>
                        <Typography style={{ float: "left", paddingRight: "15px" }} className={classes.title}>{title()[1]}</Typography>
                        <StarRatings
                            style={{ float: "left", width: "100%" }}
                            rating={obj_values && obj_values.data && obj_values.data.result && obj_values.data.result.rating}
                            starRatedColor={"#DAA520"} numberOfStars={5}
                            starDimension={"28px"}
                            name='rating' />

                        <Typography dangerouslySetInnerHTML={{ __html: state.formatted_address }} style={{ float: "left" }} className={classes.para}>
                        </Typography>

                        <Typography style={{ float: "left" }}>{state.formatted_phone_number}</Typography>

                    </Grid>
                    <Grid item style={{ paddingTop: "5px" }} className={classes.dataStyle} sm={3} md={1} xs={3} lg={1}>
                        <Grid item className={classes.dataStyle} xs={12} >
                            <img style={{ width: "56px", padding: "5px" }} src="data:image/png;base64,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"
                            />
                        </Grid>
                        <Grid item className={classes.dataStyle} xs={12} >
                            <a href="#">
                                <img style={{ width: "56px", padding: "5px" }} src="data:image/png;base64,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"
                                />
                            </a>
                        </Grid>
                    </Grid>
                    {/* <hr style={{margin:"21px 0px",border:"1px solid #d8d8d8"}} /> */}
                    <Hidden smDown>
                        <Grid container className={classes.sideData} md={3} lg={3}>
                            <Social value={SocialNews} />

                        </Grid>
                    </Hidden>
                    {/* <hr style={{margin:"21px 0px",border:"1px solid #d8d8d8"}} /> */}

                </Grid>

                <Grid container style={{ padding: "20px 0px" }} xs={12} lg={9}>

                    {obj_values && obj_values.data && obj_values.data.result && obj_values.data.result.reviews.map((val, i) =>
                        <>

                            <Grid container style={{ borderBottom: "1px solid #eee" }} xs={12}>
                                <Grid item style={{ display: "flex", alignItems: "center", padding: "10px 0px 0px 0px", float: "left" }} xs={12} lg={5}>
                                    <Typography style={{ float: "left", paddingRight: "10px", color: "#5d5d5d", fontSize: "19px", fontWeight: "600" }}>{val.author_name}</Typography>
                                    <Typography style={{ float: "left", paddingRight: "10px", color: "#5d5d5d", fontSize: "15px" }}>{val.relative_time_description}</Typography>

                                </Grid>
                                <Grid item xs={9} lg={4} style={{ display: "flex", float: "left", alignItems: "center" }} >
                                    <StarRatings
                                        style={{ float: "left" }}
                                        rating={val.rating}
                                        starRatedColor={"#DAA520"} numberOfStars={5}
                                        starDimension={"28px"}
                                        name='rating' />
                                </Grid>
                                {i === 0 &&
                                    <Grid item style={{ float: "right", display: "flex", alignItems: "center" }} lg={3} xs={12} >
                                        <Typography>See {len} More Reviews</Typography>

                                    </Grid>
                                }
                                <Grid item xs={12}>
                                    <Typography dangerouslySetInnerHTML={{ __html: val.text }} style={{ float: "left", padding: "15px 0px", color: "#5d5d5d", fontSize: "18px" }} className={classes.para}>
                                    </Typography>
                                </Grid>

                            </Grid>
                        </>
                    )}
                </Grid>
                <Grid container style={{ padding: "10px 0px 20px 0px" }} xs={12} lg={10}>
                    <Grid item xs={12}>
                        {obj_values && obj_values.data && obj_values.data.result && obj_values && obj_values.data && obj_values.data.result.opening_hours && obj_values && obj_values.data && obj_values.data.result && obj_values && obj_values.data && obj_values.data.result.opening_hours.weekday_text && obj_values.data.result.opening_hours.weekday_text.map((val, i) => {
                            var split = val.split(":")
                            var one = split[0]
                            var two = split[1] + ":"
                            var three = split[2] + ":"
                            var ppp = split[3]
                            return (
                                <>
                                    <Grid item style={{ float: "left", paddingRight: "15px" }} xs={12}>

                                        <Typography style={{ fontSize: "14px", color: "#5d5d5d" }}>{one}</Typography>
                                        <Typography style={{ fontSize: "13px", color: "#5d5d5d" }}>{two}{three}{ppp}</Typography>
                                    </Grid></>
                            )


                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default withRouter(StoreDetails);