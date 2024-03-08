import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Sidebar() {
  return (
    <Box
      overflowY={"scroll"}
      width={"400px"}
      height={"300px"}
      margin={"auto"}
      marginBottom={"20%"}
      backgroundColor={"#EDF2F6"}
    >
      <Box display={"flex"} flexDirection={"column"} padding={"10%"}>
        <Text fontSize={"4xl"} fontWeight={"extrabold"} paddingBottom={"10%"}>
          Full Sidebar
        </Text>
        <Text>
          This sidebar is of full height (100%) and always shown. <br></br>{" "}
          <br></br> Scroll this window to see the "fixed" effect. Some text to
          enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no
          quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui
          causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
          repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
          voluptatibus.<br></br> <br></br> Some text to enable scrolling.. Lorem
          ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
          ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec
          et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </Text>
      </Box>
    </Box>
  );
}

export default Sidebar;
