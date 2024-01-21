import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

function HomePageCards(){
return(
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
    <Card>
        <CardHeader>
        <Heading size='md'> Schedule Events</Heading>
        </CardHeader>
        <CardBody>
        <Text>Schedule and host sports games to be able to play anytime and anywhere!</Text>
        </CardBody>
    </Card>
    <Card>
        <CardHeader>
        <Heading size='md'> Find Locations</Heading>
        </CardHeader>
        <CardBody>
        <Text>Find the best places to play your favorite sports on campus!</Text>
        </CardBody>
        <CardFooter>
            <a href="/map" id="map">
                <Button size='lg'>View here</Button>
            </a>
        </CardFooter>
    </Card>
    <Card>
        <CardHeader>
        <Heading size='md'> Play Easier</Heading>
        </CardHeader>
        <CardBody>
        <Text>Pickup makes it easier for you to worry less about planning games and focus more on having fun.</Text>
        </CardBody>
    </Card>
    </SimpleGrid>
)
}

export default HomePageCards