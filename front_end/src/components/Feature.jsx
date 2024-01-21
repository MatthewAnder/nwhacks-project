import { Input } from "@chakra-ui/react";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import { Box } from "@chakra-ui/react";

function Feature(props) {
  return (
    <Box bg={props.color}>
      <div className="titleParaPair">
        <Title title={props.title} className="titled" />
        <Paragraph paragraph={props.paragraph} />
      </div>
    </Box>
  );
}

export default Feature;
