import { Box, Button, Link } from "@chakra-ui/react";
import React from "react";

function SideNavbar() {
  const [openSideNav, setOpenSideNav] = React.useState(false);

  const [toggleNavbarText, setToggleNavbarText] = React.useState("Open");

  React.useEffect(() => {
    if (openSideNav) {
      setToggleNavbarText("Close");
    } else {
      setToggleNavbarText("Open");
    }
  }, [openSideNav]);

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      marginTop={"20%"}
      minHeight={"900px"}
    >
      <Box
        width={openSideNav ? "400px" : "0px"}
        transitionDuration={"1s"}
        transitionProperty={"width"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          color={"#818181"}
          padding={"20%"}
          backgroundColor={"#111111"}
          minHeight={"900px"}
          textDecoration={"none"}
        >
          <Link
            margin={"5%"}
            fontSize={"4xl"}
            display={openSideNav ? "block" : "none"}
          >
            About
          </Link>
          <Link
            margin={"5%"}
            fontSize={"4xl"}
            display={openSideNav ? "block" : "none"}
          >
            Services
          </Link>
          <Link
            margin={"5%"}
            fontSize={"4xl"}
            display={openSideNav ? "block" : "none"}
          >
            Clients
          </Link>
          <Link
            margin={"5%"}
            fontSize={"4xl"}
            display={openSideNav ? "block" : "none"}
          >
            Contact
          </Link>
        </Box>
      </Box>
      <Box position={"absolute"} right={"20%"} top={"77%"}>
        <Button onClick={() => setOpenSideNav(!openSideNav)}>
          {" "}
          {toggleNavbarText} Sidenav
        </Button>
      </Box>
    </Box>
  );
}

export default SideNavbar;
