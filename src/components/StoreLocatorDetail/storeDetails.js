import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
// import Mapping from './mapping';
import styles from "./style";

var obj_values = {};
function StoreDetails(props) {
  const classes = styles();
  var name =
    obj_values &&
    obj_values.data &&
    obj_values.data.result &&
    obj_values.data.result.name &&
    obj_values.data.result.name.split("-");
  

  const [state, setState] = useState({
    formatted_phone_number: "",
    formatted_address: "",
    reviews: null,
  });
  const ids =
    props && props.match && props.match.params && props.match.params.id;
  const title = () => {
    if (props.match.params.id === "ChIJD2b_DdNnUjoRu9gobrKLB8I") {
      return [
        "https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/Mylapore.jpg",
        "Mylapore",
        "Plot No. 58, North Mada Street, Mylapore,Chennai, Tamil Nadu 600004",
      ];
    } else if (props.match.params.id === "ChIJR-r-zY5dUjoRKhDlVtRh39I") {
      return [
        "https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/velachery.jpg",
        "Velachery",
        "No: 465/5, Velachery Bypass Road, Rajalakshmi Nagar, Velachery,Chennai, Tamil Nadu 600042",
      ];
    } else if (props.match.params.id === "ChIJPyqXbLFlUjoRlijMXUh0R84") {
      return [
        "https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/Perambur.jpg",
        "Perambur",
        "No: 39, 41 Paper Mills Road, Siruvallur, Perambur,Chennai, Tamil Nadu 600011",
      ];
    } else if (props.match.params.id === "ChIJiZb4tVfCUjoRWHb4JCGQyKY") {
      return [
        "https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/KANCHIPURAM%20SHOWROOM.jpg",
        "Kanchipuram",
        "No: 30, Kamarajar Salai, Kanchipuram,Tamil Nadu 631502",
      ];
    } else if (props.match.params.id === "ChIJdUFnBRiQUjoR7wz1VkiWT3w") {
      return [
        "https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/Tiruvallur.jpg",
        "Tiruvallur",
        "Plot no.216/2,216/3, S.no.196/2 part, Kakkalur village, TNHB Road, Ma. Po. Si. Nagar,Tiruvallur, Tamil Nadu 602001",
      ];
    } else if (props.match.params.id === "ChIJq_WsMidkUjoRH7FAOtdaXis") {
      return [
        "https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/Anna%20Nagar.jpg",
        "Anna Nagar",
        "New No 73, AG Block, 4th Avenue, 7th Main Road, Shanthi Colony,River View Colony,Chennai, Tamil Nadu 600040",
      ];
    } else if (props.match.params.id === "ChIJlZ2oZrr6NToRG4kJpSN1uf8") {
      return [
        "https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/Vijayawada.jpg",
        "Vijayawada",
        "41, 40-1-0, Mahatma Gandhi Rd, Near petrol Bunk, Labbipet,Vijayawada, Andhra Pradesh 520010",
      ];
    } else if (props.match.params.id === "ChIJPSl-5WNvUjoRhtsRqpmTVTc") {
      return [
        "https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/OLDWASHERMENPET.jpg",
        "Old Washermanpet",
        "456, Thiruvottiyur High Rd, Korukkupet, Old Washermanpet,Chennai, Tamil Nadu 600021",
      ];
    } else if (props.match.params.id === "ChIJ423xiS1mUjoR_LOZTgQBMMM") {
      return [
        "https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/t.nagar.jpg",
        "T. Nagar",
        "20, North Usman Road, Thiyagaraya Nagar,Chennai, Tamil Nadu 600017",
      ];
    } else if (props.match.params.id === ":id") {
      return [
        "https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/t.nagar.jpg",
        "T. Nagar",
        "20, North Usman Road, Thiyagaraya Nagar,Chennai, Tamil Nadu 600017",
      ];
    }
  };


  useEffect(() => {
   
    fetch(
      `"https://cors-anywhere.herokuapp.com/"+https://maps.googleapis.com/maps/api/place/details/json?place_id=${ids}&key=AIzaSyBHtJJ5uHfhX92hxFzHsciwPCayzYB9yCk`
    )
      .then((res) => res.json())
      .then((fetchValue) => {
        obj_values["data"] = fetchValue;

        setState({
          ...state,
          formatted_phone_number: fetchValue.result.formatted_phone_number,
          rating: fetchValue.result.rating,
          formatted_address: fetchValue.result.formatted_address,
        });

 
      })
      .catch(console.error);
      // eslint-disable-next-line
  }, []);

 
  return (
    <Grid
      container
      className={classes.mapcontainer}
      style={{ overflowX: "hidden" }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          xs={12}
          lg={12}
          style={{ boxShadow: "4px 4px 4px #a5a4a5" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{ backgroundColor: "#E6E7E8" }}
          >
            <div style={{ padding: "30px" }}>
              <Typography className={classes.titles}>{title()[1]}</Typography>
              <Typography className={classes.address}> {title()[2]}</Typography>
              <Typography className={classes.phone}>044 4399 6666</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            {/* <Mapping lat={titlea()[0]} lng={titlea()[0]} /> */}
            {/* old */}
            {props.match.params.id === "ChIJPSl-5WNvUjoRhtsRqpmTVTc" && (
              <>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      width="100%"
                      height="300"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=456,%20Thiruvottiyur%20High%20Rd,%20Korukkupet,%20Old%20Washermanpet,Chennai,%20Tamil%20Nadu%20600021+(My%20Business%20Name)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                    <a href="https://soap2day-to.com"></a>
                  </div>
                </div>
              </>
            )}
            {/* mylopor */}
            {props.match.params.id === "ChIJD2b_DdNnUjoRu9gobrKLB8I" && (
              <>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      width="100%"
                      height="300"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Plot%20No.%2058,%20North%20Mada%20Street,%20Mylapore,%20Chennai,%20Tamil%20Nadu%20600004+(My%20Business%20Name)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      title="..."
                    ></iframe>
                    <a href="https://soap2day-to.com"></a>
                  </div>
                </div>
              </>
            )}
            {/* old */}
            {props.match.params.id === "ChIJPSl- 5WNvUjoRhtsRqpmTVTc" && (
              <>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      width="100%"
                      height="300"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=No:%20465/5,%20Velachery%20Bypass%20Road,%20Rajalakshmi%20Nagar,%20Velachery,%20Chennai,%20Tamil%20Nadu%20600042+(My%20Business%20Name)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      title="..."
                    ></iframe>
                    <a href="https://soap2day-to.com"></a>
                  </div>
                </div>
              </>
            )}
            {/* Perabur */}
            {props.match.params.id === "ChIJPyqXbLFlUjoRlijMXUh0R84" && (
              <>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      width="100%"
                      height="300"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=No:%2039,%2041%20Paper%20Mills%20Road,%20Siruvallur,%20Perambur,Chennai,%20Tamil%20Nadu%20600011+(NAC)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      title="..."
                    ></iframe>
                    <a href="https://soap2day-to.com"></a>
                  </div>
                </div>
              </>
            )}
            {/* Velachery */}
            {props.match.params.id === "ChIJR-r-zY5dUjoRKhDlVtRh39I" && (
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="300"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=No:%20465/5,%20Velachery%20Bypass%20Road,%20Rajalakshmi%20Nagar,%20Velachery,%20Chennai,%20Tamil%20Nadu%20600042+(NAC)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    title="..."
                  ></iframe>
                  <a href="https://soap2day-to.com"></a>
                </div>
              </div>
            )}
            {/* Kanchipuram */}

            {props.match.params.id === "ChIJiZb4tVfCUjoRWHb4JCGQyKY" && (
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="300"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=No:%2030,%20Kamarajar%20Salai,%20Kanchipuram,%20Tamil%20Nadu%20631502+(NAC)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    title="..."
                  ></iframe>
                  <a href="https://soap2day-to.com"></a>
                </div>
              </div>
            )}
            {/*Tiruvalur */}
            {props.match.params.id === "ChIJdUFnBRiQUjoR7wz1VkiWT3w" && (
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="300"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Plot%20no.216/2,216/3,%20S.no.196/2%20part,%20Kakkalur%20village,%20TNHB%20Road,%20Ma.%20Po.%20Si.%20Nagar,Tiruvallur,%20Tamil%20Nadu%20602001+(NAC)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    title="..."
                  ></iframe>
                  <a href="https://soap2day-to.com"></a>
                </div>
              </div>
            )}
            {/*Anna Nager */}
            {props.match.params.id === "ChIJq_WsMidkUjoRH7FAOtdaXis" && (
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="300"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=New%20No%2073,%20AG%20Block,%204th%20Avenue,%207th%20Main%20Road,%20Shanthi%20Colony,River%20View%20Colony,%20Chennai,%20Tamil%20Nadu%20600040+(NAC)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    title="..."
                  ></iframe>
                  <a href="https://soap2day-to.com"></a>
                </div>
              </div>
            )}
            {/*vijayawada */}
            {props.match.params.id === "ChIJlZ2oZrr6NToRG4kJpSN1uf8" && (
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="300"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=40-1-41,%20MG%20Rd,%20Near%20petrol%20Bunk,%20Venkateswara%20Puram,%20Sidhartha%20Nagar,%20Labbipet,%20Vijayawada,%20Andhra%20Pradesh%20520010+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    title="..."
                  ></iframe>
                  <a href="https://soap2day-to.com"></a>
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* <Grid container className={classes.sidePer} sm={12} md={12} xs={12} lg={12}>

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
                          
                        </Grid>
                        <Grid item className={classes.dataStyle} xs={12} >
                            <a href="#">
                                <img style={{ width: "56px", padding: "5px" }} src="data:image/png;base64,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"
                                />
                            </a>
                        </Grid> 
                </Grid>
                    <hr style={{margin:"21px 0px",border:"1px solid #d8d8d8"}} />
                    <Hidden smDown>
                        <Grid container className={classes.sideData} md={3} lg={3}>
                            <Social value={SocialNews} />

                        </Grid>
                    </Hidden>
                    <hr style={{margin:"21px 0px",border:"1px solid #d8d8d8"}} />

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
          
          
            </Grid> */}
    </Grid>
  );
}

export default withRouter(StoreDetails);
