import { Button, Link } from "@chakra-ui/react"
import PopUp from "./PopUp"


function Navbar(){
    return(
        <>
            <div className ="navbar">
                <a href="/map" id="mapNav">
                    <Button>Map</Button>
                </a>
                <PopUp id="popUpNav"/>
                <a href="/" id="profileNav">
                    <Button>Home</Button>
                </a>
            </div>
            <p></p>
        </>
    )
}

export default Navbar