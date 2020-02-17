import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import styles from './style';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



const style = {
    width: '100%',
    height: '400px'
  }
class Mappping extends React.Component {
    constructor(props){
        super(props);
    }
    render() {


        return (
            <Grid container xs={12} style={{height:"400px",width:"100%"}}>
                
                <Map  google={this.props.google}
         style={style}
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

            </Grid>
        )
    }

}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyBHtJJ5uHfhX92hxFzHsciwPCayzYB9yCk")
})(Mappping)
