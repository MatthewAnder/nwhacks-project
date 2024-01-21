import { Select } from '@chakra-ui/react'

function SportDropDown(){
return(
    <>
        <h2>
            Enter Sport:
        </h2>
        <Select placeholder='Select sport'>
            <option value='option1'>Basketball</option>
            <option value='option2'>Soccer</option>
            <option value='option3'>Tennis</option>
            <option value='option3'>Volleyball</option>
        </Select>
    </>
)}

export default SportDropDown