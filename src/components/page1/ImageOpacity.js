import { Box, Image } from "@chakra-ui/react";
import React from "react";

const ImageOpacity = () => {
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  return (
    <Box margin={"auto"} marginBottom={"10%"}>
      <Image
        src="https://www.w3schools.com/howto/img_snow.jpg"
        alt="bright-sky"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        opacity={isMouseOver ? "0.8" : "1"}
      ></Image>
    </Box>
  );
};

export default ImageOpacity;
