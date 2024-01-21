import { Select } from '@chakra-ui/react'

function Location(){
    return(
        <>
            <h2>
                Enter Location:
            </h2>
            <Select placeholder='Select location'>
                <option value='option1'>UBC Tennis Centre</option>
                <option value='option2'>Thunderbird Park</option>
                <option value='option3'>Student Recreation Centre</option>
                <option value='option3'>North Outdooer Basketball Court</option>
            </Select>
        </>
    )
}export default Location

