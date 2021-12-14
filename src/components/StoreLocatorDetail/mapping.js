import { Grid } from '@material-ui/core';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React from 'react';



const style = {
    width: '100%',
    height: '400px'
}
class Mappping extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {


        return (
            <Grid container xs={12} >

                <Map google={this.props.google}
                    style={{ width: 500, position: 'relative' }}
                    initialCenter={{
                        lat: [this.props.lat],
                        lng: [this.props.lng]

                    }}

                    onClick={this.onMapClicked} zoom={19}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    {/* <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow> */}
                </Map>

            </Grid >
        )
    }

}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyBHtJJ5uHfhX92hxFzHsciwPCayzYB9yCk")
})(Mappping)

// import React from "react";
// import {
//     GoogleMap, withGoogleMap,
//     withScriptjs
// } from "react-google-maps";

// export const Map = (props) => {
//     console.log(props)
//     return (
//         <GoogleMap
//             defaultZoom={12}
//             defaultCenter={{ lat: 13.1118032, lng: 80.2462474 }}
//         >
//         </GoogleMap>
//     );
// }

// const MapComponent = withScriptjs(withGoogleMap(Map));

// export default (props) => (
//     <MapComponent
//         {...props}
//         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{
//             height: `400px`
//         }} />}
//         mapElement={< div style={{ height: `100%` }} />}
//     />
// );
