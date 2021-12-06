import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
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



    useEffect(() => {

        fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${ids}&key=AIzaSyBHtJJ5uHfhX92hxFzHsciwPCayzYB9yCk`
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


            })
            .catch(console.error)
    }, []);
    const days = obj_values && obj_values.data && obj_values.data.result && obj_values.data.result.opening_hours && obj_values.data.result.opening_hours.weekday_text && obj_values.data.result.opening_hours.weekday_text
    const len = obj_values && obj_values.data && obj_values.data.result && obj_values.data.result.reviews && obj_values.data.result.reviews.length;
    return (
        <>
            <Grid container>
                <Grid item xs={4}>
                    <img className={classes.innerimg} src={title()[0]} />
                </Grid>
                <Grid item xs={8} >
                    sssssssssssssss
                    {/* <Mapping lat={lat} lng={lng} /> */}
                </Grid>
            </Grid>
        </>
    )
}

export default withRouter(StoreDetails);