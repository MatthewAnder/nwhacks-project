import { Button } from "@chakra-ui/react";
import PopUp from "./PopUpForm/PopUp";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" id="profileNav">
        <Button color="teal" p={6}>Home</Button>
      </a>
      <PopUp id="popUpNav" />

      <a href="/map" id="mapNav">
        <Button color="teal" p={6}>Map</Button>
      </a>
    </div>
  );
}

export default Navbar;
