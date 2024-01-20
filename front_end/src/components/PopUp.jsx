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
            <PopoverBody>
                <div class="popUpHeader">

                </div>
                <div class="popUpFill">
                    <SportDropDown/>
                    <TimeInput/>
                    <CapacityInput/>
                </div>
            </PopoverBody>
            <PopoverFooter>
                <div class = "popUpFooter">
                    <Button colorScheme='blue'>Confirm</Button>
                </div>
            </PopoverFooter>
        </PopoverContent>
        </Popover>
    )
  }

  export default PopUp