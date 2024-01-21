import { Select } from '@chakra-ui/react'
import { useState } from 'react'

function SportDropDown(){

    const [selectedSport, setSelectedSport] = useState("option1");

    const  handleDropdownChange = (event) => {
		setSelectedSport(event.target.value);
	};

    return(
        <>
            <h2>
                Enter Sport:
            </h2>
            <Select value={selectedSport} onChange={handleDropdownChange} placeholder='Select sport'>
                <option value='option1'>Basketball</option>
                <option value='option2'>Soccer</option>
                <option value='option3'>Tennis</option>
                <option value='option3'>Volleyball</option>
            </Select>
            <p>Selected option: {selectedSport}</p>
    </>
)}

export default SportDropDown