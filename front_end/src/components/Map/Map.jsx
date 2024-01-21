import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import { mapStyle } from './mapTheme.js';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 49.2625556626212,
  lng: -123.24458473892533
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'b7404d74019955c3',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ disableDefaultUI: true, mapTypeId: "terrain", styles: mapStyle }}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
          <Marker position={{ lat: 49.257, lng: -123.251 }} />
        </>
      </GoogleMap>
  ) : <></>
}


export default React.memo(Map)
