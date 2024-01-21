import React from "react";
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
  Image
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
      zoom={17}
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
        })}

        {/* Window */}
        <Drawer onClose={onClose} isOpen={isOpen} size="lg">
          <DrawerBodyContent />
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
    <Card>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" >
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="teal">
          Buy now
        </Button>
      </CardFooter>
    </Card>
  );
};

const DrawerBodyContent = () => {
  return (
    <>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Events</DrawerHeader>
        <DrawerBody>
          <CardExample />
          <CardExample />
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default React.memo(Map);
