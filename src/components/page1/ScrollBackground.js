import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function ScrollBackground() {
  const images = [
    "https://www.w3schools.com/howto/img_nature.jpg",
    "https://www.w3schools.com/howto/img_snow.jpg",
    "https://www.w3schools.com/howto/img_mountains.jpg",
    "https://www.w3schools.com/howto/img_nature.jpg",
    "https://www.w3schools.com/howto/img_snow.jpg",
    "https://www.w3schools.com/howto/img_mountains.jpg",
  ];
  return (
    <Box height={"600px"} overflowY={"scroll"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginBottom={"5%"}
        marginLeft={"20%"}
        marginRight={"20%"}
      >
        {images.map((image) => {
          return <Image src={image} width={"100%"} maxHeight={"300px"}></Image>;
        })}
        <Box
          position={"absolute"}
          left={"43%"}
          top={"90%"}
          color={"white"}
          border={"8px solid white"}
          padding={"1%"}
        >
          <Text fontSize={"7xl"} fontWeight={"extrabold"}>
            TEXT
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default ScrollBackground;
