import { Box, Image } from "@chakra-ui/react";
import React from "react";

function LightBoxes() {
  const images = [
    "https://www.w3schools.com/howto/img_nature.jpg",
    "https://www.w3schools.com/howto/img_snow.jpg",
    "https://www.w3schools.com/howto/img_mountains.jpg",
  ];
  const [hoveredImageIndex, setHoveredImageIndex] = React.useState(-1);
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      margin={"auto"}
      marginBottom={"10%"}
      border={"5px solid black"}
    >
      {images.map((image, index) => {
        return (
          <Image
            key={index}
            onMouseOver={() => setHoveredImageIndex(index)}
            onMouseLeave={() => setHoveredImageIndex(-1)}
            opacity={hoveredImageIndex === index ? 0.6 : 1}
            padding="1%"
            src={image}
            alt="image"
            width={"30%"}
            height={"30%"}
          />
        );
      })}
    </Box>
  );
}

export default LightBoxes;
