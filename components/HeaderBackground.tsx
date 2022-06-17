import { Box, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import NextImage from "next/image";
import image1 from "../public/WebDevPictures/Background-Photo.jpg";

const HeaderBackground = ({ children }) => {
  return (
    <Box width="100vw" >
      <LinkBox>
        <LinkOverlay zIndex={5}>Tommy Corrado</LinkOverlay>
        <NextImage src={image1} alt="Mountains" />
      </LinkBox>
      <h1>Tommy Corrado</h1>

      {children}
    </Box>
  );
};

export default HeaderBackground;
