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

