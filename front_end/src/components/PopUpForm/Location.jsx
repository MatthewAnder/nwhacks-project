import { Select } from "@chakra-ui/react";
import { useState } from "react";

function Location() {
    const [location, setLocation] = useState();

  return (
    <>
      <h2>Enter Location:</h2>
      <Select value='' placeholder="Select location">
        <option value="Tennis Centre">UBC Tennis Centre</option>
        <option value="tb_park">Thunderbird Park</option>
        <option value="student_rec_centre">Student Recreation Centre</option>
        <option value="out_basketball_court" >
          North Outdooer Basketball Court
        </option>
      </Select>
    </>
  );
}
export default Location;
