import { Box, Flex, Stack } from "@chakra-ui/layout";
import NextImage from "next/image";
import { PageHeading } from "./PageHeading";
import image1 from "../public/WebDevPictures/mountains-me.JPG";

const OrangeContainer = () => {
  return (
    <Stack>
      <Box
        background="#efd9c5"
        width="100vw"
        height="45vw"
        position="absolute"
        top="86.6vw"
      />
      <Box zIndex={7} position="absolute" top="88vw" left="10vw">
        <PageHeading color="black">Hi, I am Tommy</PageHeading>
      </Box>
      <Flex
        top="82.5vw"
        position="absolute"
        align="center"
        justifyContent="center"
        right="10vw"
        width="30vw"
        height="45vw"
        zIndex={4}
      >
        <NextImage src={image1} />
      </Flex>
    </Stack>
  );
};

export default OrangeContainer;
