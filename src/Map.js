import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
 
const containerStyle = {
  width: '600px',
  height: '600px'
};
 
const center = {
    lat: 46.450,
    lng: 30.723
  };
 
function MyMap() {
  const [map, setMap] = React.useState(null)
 
//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])
 
//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])
 
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA-ph0SxLcl0iTU2OVPR9sih2QhYTi6LS8"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
 
export default React.memo(MyMap);