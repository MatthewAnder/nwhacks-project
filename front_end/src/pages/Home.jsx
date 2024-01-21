import { Button } from "@chakra-ui/react"
import Title from "../components/Title"
import Feature from "../components/Feature"
import logo from '../assets/pickup.png';
  

function Home(){

    return(
        <>
            <div>
                <img class="img" src={logo} alt="Logo" />
                <Title title = "Find the best time and place for your sports!" class = "titled"/>
                <div class="gallery">
                    <Feature title="Schedule Events" paragraph="Schedule and host sports games to be able to play anytime and anywhere!" color="grey"/>
                    <Feature title="Find Locations" paragraph="Find the best places to play your favorite sports on campus!" color="lightgrey"/>
                    <Feature title="Play Easier" paragraph="Pickup makes it easier for you to worry less about planning games and focus more on having fun." color="grey"/>
                </div>
                <a href="/map" id="map">
                    <Button size='lg'>Map</Button>
                </a>
            </div>
        </>
    )
}

export default Home