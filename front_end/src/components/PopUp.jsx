import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button
  } from '@chakra-ui/react'

  import SportDropDown from './SportDropDown'
  import TimeInput from './TimeInput'
  import CapacityInput from './CapacityInput'
  import Location from './Location'


  function PopUp(){
    return(
        <Popover>
        <PopoverTrigger>
            <Button>Create Event</Button>
        </PopoverTrigger>
        <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Sport Creation Menu</PopoverHeader>
            <PopoverBody padding={4}>
                <div className="popUpFill">
                    <SportDropDown/>
                    <TimeInput/>
                    <CapacityInput/>
                    <Location/>
                </div>
            </PopoverBody>
            <PopoverFooter>
                <div className = "popUpFooter">
                    <Button colorScheme='blue'>Confirm</Button>
                </div>
            </PopoverFooter>
        </PopoverContent>
        </Popover>
    )
  }

  export default PopUp