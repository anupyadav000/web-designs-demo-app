import {
  Box,
  Button,
  Checkbox,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

function LoginForm() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <Box>
      <Box marginTop={"5%"} marginLeft={"50%"}>
        <Button onClick={() => setOpenForm(true)}>Login</Button>
      </Box>
      <Box
        display={openForm ? "block" : "none"}
        backdropBrightness={""}
        zIndex={"5"}
      >
        <Box
          position={"absolute"}
          top={"90%"}
          left={"30%"}
          display={"flex"}
          flexDirection={"column"}
          backgroundColor={"#E6FFFA"}
          padding={"5%"}
          backdropBrightness={"0.5"}
        >
          <Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <Image
                src="https://www.w3schools.com/howto/img_avatar2.png"
                alt="profile-icon"
                borderRadius="100%"
                height={"10rem"}
                width={"10rem"}
              ></Image>
            </Box>
            <Box
              position={"absolute"}
              right={"10%"}
              top="10%"
              fontSize={"5xl"}
              fontWeight={"extrabold"}
              onClick={() => setOpenForm(false)}
            >
              <Link textDecoration={"none"}>X</Link>
            </Box>
          </Box>
          <Box>
            <label>Username</label>
            <Input
              type="text"
              placeholder="Enter Name"
              marginBottom={"10px"}
            ></Input>
            <label>Password</label>
            <Input
              type="password"
              placeholder="Enter Password"
              marginBottom={"10px"}
            ></Input>
            <Button
              backgroundColor={"#4CAF4F"}
              color={"white"}
              width={"100%"}
              marginTop={"20px"}
            >
              Login
            </Button>
            <Box display={"flex"} flexDirection={"row"} marginTop={"2%"}>
              <Checkbox></Checkbox>
              <Text marginLeft={"2%"}>Remember me</Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            marginTop={"4%"}
          >
            <Button
              onClick={() => setOpenForm(false)}
              backgroundColor={"white"}
              color="#F44336"
            >
              Cancel
            </Button>
            <Link>Forgot password</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
