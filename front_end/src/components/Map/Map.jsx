import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

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

  // sets the google map
  const [map, setMap] = React.useState(null);

  // sets the marker
  const [selectedMarker, setSelectedMarker] = useState(null);

  // open and close the drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    onOpen();
  };

  const { values } = useContext(valueContext);
  console.log(values);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        styles: mapStyle,
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        {mapDatas.map((mapData, index) => {
          return (
            <>
              <Marker
                key={index}
                position={mapData.location}
                icon={mapData.imageSrc}
                onClick={() => handleMarkerClick(mapData)}
                animation={google.maps.Animation.DROP}
              />

              {/* {(mapData.location == values.location) ?
              mapData.listOfEvents.push(values) :
              "hi"} */}
            </>
          );
        })}
        {/* Drawer */}
        <Drawer onClose={onClose} isOpen={isOpen} size="lg">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Events</DrawerHeader>
            <DrawerBody>
              <CardExample />
              <CardExample />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

const CardExample = () => {
  return (
    // for each loop here; card example should receive props the data
    <Card margin={5}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">Pickup Playhouse</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="teal.400">
            Time: 12 : 00
            <br></br>
            Location: UBC Rec Centre
            <br></br>
            Capacity: 0 / 20
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="teal">
          Join now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default React.memo(Map);
