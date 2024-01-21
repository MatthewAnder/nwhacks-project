import { Button } from "@chakra-ui/react"
import Title from "../components/Title"
import Paragraph from "../components/Paragraph"
import Feature from "../components/Feature"
import { Input } from '@chakra-ui/react'

  

function Home(){

    return(
        <>
            <div>
                <a href="/map" id="map">
                    <Title title = "Pickup.."/>
                    <Paragraph paragraph = "Find the best time and place for your sports!"/>
                    <div class="gallery">
                        <Feature title="Point1" paragraph="Explanation"/>
                        <Feature title="Point2" paragraph="Explanation"/>
                        <Feature title="Point3" paragraph="Explanation"/>
                    </div>
                    <Button size='lg'>Button</Button>
                </a>
            </div>
        </>
    )
}

export default Home