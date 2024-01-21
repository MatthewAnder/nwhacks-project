import { Button } from "@chakra-ui/react";
import Title from "../components/Title";
import logo from "../assets/pickup.png";
import Navbar from "../components/Navbar";
import HomePageCards from "../components/HomePageCards";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeBackground">
      <div>
        <Navbar />
      </div>
      
      <div>
        <img className="img" src={logo} alt="Logo" />
        <Title
          title="Find the best court and time for your sports!"
          className="titled"
        />
        <div className="gallery"></div>
      </div>
      <div>
        <HomePageCards />
      </div>
    </div>
  );
}

export default Home;
