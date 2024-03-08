import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function Accordion(props) {
  const content = [
    {
      title: "Section 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Section 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Section 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const [openSection, setOpenSection] = useState(null);

  const handleSetOpenSection = (index) => {
    if (openSection === index) {
      setOpenSection(null);
      return;
    }
    setOpenSection(index);
  };

  return (
    <Box
      marginTop={"5%"}
      marginBottom={"5%"}
      marginLeft={"10%"}
      marginRight={"10%"}
    >
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        Accordion
      </Text>
      <Box>
        {content.map((item, index) => {
          return (
            <Box key={index}>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                onClick={() => handleSetOpenSection(index)}
                backgroundColor={openSection === index ? "#CCCCCC" : "#EEEEEE"}
              >
                <Text padding={"1%"}>{item.title}</Text>
                <Box paddingRight={"2%"}>
                  {openSection === index ? (
                    <i class="fa fa-solid fa-chevron-down"></i>
                  ) : (
                    <i class="fa fa-solid fa-chevron-up"></i>
                  )}
                </Box>
              </Box>
              <Text
                display={openSection === index ? "block" : "none"}
                padding={"1%"}
                boxShadow={"0px 0px 5px 5px #EEEEEE"}
              >
                {item.description}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Accordion;
