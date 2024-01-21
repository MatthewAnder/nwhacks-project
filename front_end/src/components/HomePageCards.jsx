import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function HomePageCards() {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      padding={5}
    >
      <Card
        boxShadow="lg"
        _hover={{
          boxShadow: "2xl",
          transition: ".2s",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <CardHeader>
          <Heading size="md"> Schedule Events</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Schedule and host sports games to be able to play anytime and
            anywhere!
          </Text>
        </CardBody>
      </Card>

      <Card
        boxShadow="lg"
        _hover={{
          boxShadow: "2xl",
          transition: ".2s",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <CardHeader>
          <Heading size="md"> Find Locations</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Find the best places to play your favorite sports on campus!
          </Text>
        </CardBody>
        <CardFooter>
          <Link to="/map" id="map">
            <Button size="lg" color="teal">
              View here
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card
        boxShadow="lg"
        _hover={{
          boxShadow: "2xl",
          transition: ".2s",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <CardHeader>
          <Heading size="md"> Play Easier</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Pickup makes it easier for you to worry less about planning games
            and focus more on having fun.
          </Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}

export default HomePageCards;
