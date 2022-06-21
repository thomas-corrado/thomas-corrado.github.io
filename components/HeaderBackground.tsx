import { Box, Stack, Flex } from "@chakra-ui/layout";
import NextLink from "next/link";
import { Heading } from "@chakra-ui/react";
import NextImage from "next/image";
import image1 from "../public/WebDevPictures/Background-Photo.jpg";

const topMenu = [
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Films",
    route: "/films",
  },
  {
    name: "Music",
    route: "/music",
  },
  {
    name: "Photos",
    route: "/photos",
  },
];

const HeaderBackground = () => {
  return (
    <Stack>
      <Box position="absolute" objectFit="contain">
        <NextImage src={image1} alt="Mountains" title="" />
      </Box>
      <Heading top="calc(6vw)" left="8vw" position="absolute" fontSize="7vw">
        Tommy
      </Heading>
      <Heading top="calc(12vw)" left="14vw" position="absolute" fontSize="7vw">
        Corrado
      </Heading>
      <Flex
        position="absolute"
        align="center"
        justify="center"
        right="6.5vw"
        top="10vw"
        gap="3vw"
      >
        {topMenu.map((menu) => (
          <Heading fontSize="3.5vw">
            <NextLink href={menu.route} passHref>
              {menu.name}
            </NextLink>
          </Heading>
        ))}
      </Flex>
    </Stack>
  );
};

export default HeaderBackground;
