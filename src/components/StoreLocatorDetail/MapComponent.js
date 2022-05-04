import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap ,Marker} from "react-google-maps";

const MapComponent = ({currentMapLocation, currentStreetViewURL,isStreetView}) => {
  const isUrl = currentStreetViewURL.length > 0 ? true : false;
  const iframeHTML = '<iframe sandbox="allow-scripts allow-forms" src="' + currentStreetViewURL + '" width="100%" height="540" frameborder="0" style="border:0" allowfullscreen></iframe>';
  const styles = require('../StoreLocator/StoreLocator.scss');
  const pinImage = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={18}
      defaultCenter={currentMapLocation}
    >
      <Marker
        position={currentMapLocation}
        icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png" 
      />
    </GoogleMap>
  ));
  <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>

  return(
      <div>
        {isStreetView && isUrl ? (
          <div dangerouslySetInnerHTML={{__html: iframeHTML}}></div>
           ):( 
          <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYwNYsv4j6w1jDRcbzRMmdhb8CBXCV6Lk&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
          />)}
      </div>
    )
}

export default MapComponent;
