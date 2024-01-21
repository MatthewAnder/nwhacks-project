import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
} from "@react-google-maps/api";

import { mapStyle } from "./mapTheme.js";
import { mapDatas } from "./mapData.js";




const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 49.2625556626212,
  lng: -123.24458473892533,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "b7404d74019955c3",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        mapTypeId: "terrain",
        styles: mapStyle,
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        {mapDatas.map((mapData) => {
          console.log(mapData.location.lng);
          
          return <Marker position={mapData.location} icon={mapData.imageSrc} />

          //return <Marker position={mapData.location} icon={`${mapData.type}` + Marker} />;
        })}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
