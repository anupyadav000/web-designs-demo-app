import { Box } from "@chakra-ui/react";
import SlideShow from "./components/page1/SlideShow";
import LoginForm from "./components/page1/LoginForm";
import Accordion from "./components/page1/Accordian";
import HoverDropDown from "./components/page1/HoverDropDown";
import SideNavbar from "./components/page1/SideNavbar";
import Sidebar from "./components/page1/Sidebar";
import ImageOpacity from "./components/page1/ImageOpacity";
import LightBoxes from "./components/page1/LightBoxes";
import ScrollBackground from "./components/page1/ScrollBackground";

function App() {
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <SlideShow></SlideShow>
      <LoginForm></LoginForm>
      <Accordion></Accordion>
      <HoverDropDown></HoverDropDown>
      <SideNavbar></SideNavbar>
      <Sidebar></Sidebar>
      <ImageOpacity></ImageOpacity>
      <LightBoxes></LightBoxes>
      <ScrollBackground></ScrollBackground>
    </Box>
  );
}

export default App;
