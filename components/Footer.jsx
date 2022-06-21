import { Box, GridItem, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

const iconMenu = [
  {
    icon: "/../public/WebDevPictures/twitter-logo.png",
    route: "/twitter",
  },
  {
    icon: "/../public/WebDevPictures/LI-In-Bug.png",
    route: "/linkedin",
  },
  {
    icon: "/../public/WebDevPictures/GitHub-Mark.png",
    route: "/github",
  },
];

const Footer = () => {
  return (
    <Box textAlign="center">
      <Box
        display="flex"
        flexWrap="wrap"
        marginTop="140vw"
        marginBottom="6vw"
        justifyContent="center"
        gap="4vw"
      >
        {iconMenu.map((menu) => (
          <Box width="6vw" height="6vw">
            <NextImage src={menu.icon} width="100%" height="89%" />
          </Box>
        ))}
      </Box>
      <Text
        zIndex={6}
        fontSize="2.5vw"
        marginTop="-5vw"
        marginBottom="1vw"
        justifySelf="center"
      >
        Want to learn more?
      </Text>
    </Box>
  );
};

export default Footer;
