import { Button } from "@chakra-ui/react"
import Title from "../components/Title"
import Feature from "../components/Feature"
import logo from '../assets/pickup.png';
import Navbar from "../components/Navbar";
import HomePageCards from "../components/HomePageCards";
  

function Home(){

    return(
        <>
            <div>
                <Navbar/>
            </div>
            <div>
                <img class="img" src={logo} alt="Logo" />
                <Title title = "Find the best time and place for your sports!" class = "titled"/>
                <div class="gallery">
                    
                </div>
            </div>
            <div>
                <HomePageCards/>
            </div>
        </>
    )
}

export default Home