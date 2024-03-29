import { Button } from "@chakra-ui/react";
import PopUp from "./PopUpForm/PopUp";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" id="profileNav">
      <Button color="white" bgColor="teal" _hover={{background: "teal.500"}} p={6}>Home</Button>
      </Link>
      <PopUp id="popUpNav" />

      <Link to="/map" id="mapNav">
        <Button color="white" bgColor="teal" _hover={{background: "teal.500"}} p={6}>Map</Button>
      </Link>
    </div>
  );
}

export default Navbar;
