import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
} from "@react-google-maps/api";

import { InfoWindow } from "@react-google-maps/api";
import { useState, useContext } from "react";
import { mapStyle } from "./mapTheme.js";
import { mapDatas } from "./mapData.js";
import { valueContext } from "../context.js";

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
  const [selectedMarker, setSelectedMarker] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const {values} = useContext(valueContext)
  console.log(values)

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
        {mapDatas.map((mapData, index) => {
          console.log(mapData.location.lng);

          return (
            <Marker
              key={index}
              position={mapData.location}
              icon={mapData.imageSrc}
              onClick={() => handleMarkerClick(mapData)}
              animation={google.maps.Animation.DROP}
            />
          );

          //return <Marker position={mapData.location} icon={`${mapData.type}` + Marker} />;
        })}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.location}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h2>{selectedMarker.name}</h2>
              <p>{selectedMarker.description}</p>
            </div>
          </InfoWindow>
        )}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
