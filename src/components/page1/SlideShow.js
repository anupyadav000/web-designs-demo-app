import { Box, Image, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function SlideShow() {
  const imageUrls = [
    "https://www.w3schools.com/howto/img_snow_wide.jpg",
    "https://www.w3schools.com/howto/img_mountains_wide.jpg",
    "https://www.w3schools.com/howto/img_lights_wide.jpg",
    "https://www.w3schools.com/howto/img_nature_wide.jpg",
  ];

  const [index, setIndex] = useState(0);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovering) return;
      setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  const handleLeftClick = () => {
    if (index === 0) {
      setIndex(imageUrls.length - 1);
      return;
    }
    setIndex((index - 1) % imageUrls.length);
  };

  const [isHoverOverLeft, setIsHoverOverLeft] = useState(false);
  const [isHoverOverRight, setIsHoverOverRight] = useState(false);

  return (
    <Box width={"100%"} backgroundColor={"red"}>
      <Box
        zIndex={"2"}
        position={"absolute"}
        top={"240px"}
        fontSize={"4xl"}
        backgroundColor={isHoverOverLeft ? "black" : "default"}
        color={isHoverOverLeft ? "white" : "default"}
        onMouseOver={() => setIsHoverOverLeft(true)}
        onMouseLeave={() => setIsHoverOverLeft(false)}
        padding={"1%"}
      >
        <Link onClick={handleLeftClick}>
          <i class="fa fa-solid fa-chevron-left"></i>
        </Link>
      </Box>
      <Box>
        <Image
          src={imageUrls[index]}
          alt="slide-show"
          onMouseOver={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          width={"100%"}
          objectFit={"contain"}
        ></Image>
      </Box>
      <Box
        zIndex={"3"}
        position={"absolute"}
        top="240px"
        right={"0%"}
        fontSize={"4xl"}
        backgroundColor={isHoverOverRight ? "black" : "default"}
        color={isHoverOverRight ? "white" : "default"}
        onMouseOver={() => setIsHoverOverRight(true)}
        onMouseLeave={() => setIsHoverOverRight(false)}
        padding={"1%"}
      >
        <Link onClick={() => setIndex((index + 1) % imageUrls.length)}>
          <i class="fa fa-solid fa-chevron-right"></i>
        </Link>
      </Box>
    </Box>
  );
}

export default SlideShow;
