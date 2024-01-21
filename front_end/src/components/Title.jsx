import { Input } from '@chakra-ui/react'

function Title(props){
    return(
        <>
        <h2 class = {props.class}>
            {props.title}
        </h2>
        </>
    )
}

export default Title