import { Select } from "@chakra-ui/react";
import { useCallback, useState } from "react";

function SportDropDown({ value }) {
  const [selectedSport, setSelectedSport] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedSport(event.target.value);
  };

  

  return (
    <>
      <h2>Enter Sport:</h2>
      <Select
        value={selectedSport}
        onChange={handleDropdownChange}
        placeholder="Select sport"
      >
        <option value="basketball">Basketball</option>
        <option value="soccer">Soccer</option>
        <option value="tennis">Tennis</option>
        <option value="volley">Volleyball</option>
      </Select>
      <p>Selected option: {selectedSport}</p>
    </>
  );
}

export default SportDropDown;
