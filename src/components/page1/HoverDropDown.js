import { Box, Button, Link } from "@chakra-ui/react";
import React, { useState } from "react";

function HoverDropDown() {
  const [isBeingHovered, setIsBeingHovered] = useState(false);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      marginLeft={"50%"}
      marginRight={"50%"}
      marginBottom={"20%"}
    >
      <Box>
        <Button
          backgroundColor={"#F65A2C"}
          onMouseOver={() => setIsBeingHovered(true)}
          onMouseLeave={() => setIsBeingHovered(false)}
        >
          Hover
        </Button>
      </Box>
      {isBeingHovered && (
        <Box
          display={"flex"}
          flexDirection={"column"}
          boxShadow={"1px solid black"}
          position={"absolute"}
          top={"63%"}
          width={"100px"}
          backgroundColor={"#EEEEEE"}
          onMouseOver={() => setIsBeingHovered(true)}
          onMouseLeave={() => setIsBeingHovered(false)}
        >
          <Box padding={"10%"}>
            <Link>Link 1</Link>
          </Box>
          <Box padding={"10%"}>
            <Link>Link 2</Link>
          </Box>
          <Box padding={"10%"}>
            <Link>Link 2</Link>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default HoverDropDown;
