import { Input } from '@chakra-ui/react'
import Title from "../components/Title"
import Paragraph from "../components/Paragraph"

function Feature(props){
    return(
        <>
            <div class="titleParaPair">
                <Title title = {props.title}/>
                <Paragraph paragraph = {props.paragraph}/>
            </div>
        </>
    )
}

export default Feature