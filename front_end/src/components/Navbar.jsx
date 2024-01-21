import { Button, Link } from "@chakra-ui/react"
import PopUp from "./PopUp"
import logo from "../assets/pickup..png"


function Navbar(){
    return(
        <>
            <div className ="navbar">
                <a href="/map" id="mapNav">
                    <Button>Map</Button>
                </a>
                <PopUp id="popUpNav"/>
                <a href="/Profile" id="profileNav">
                    <Button>Profile</Button>
                </a>
            </div>
            <p></p>
        </>
    )
}

export default Navbar