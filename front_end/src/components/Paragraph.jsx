import { Input } from '@chakra-ui/react'

function Paragraph(props){
    return(
        <>
        <h2 class = "paragraphed">
            {props.paragraph}
        </h2>
        </>
    )
}

export default Paragraph