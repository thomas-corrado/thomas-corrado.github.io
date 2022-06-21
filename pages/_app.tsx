import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HeaderBackground from "../components/HeaderBackground";
import "reset-css";
import BlackTriangle from "../components/BlackTriangle";
import OrangeContainer from "../components/OrangeContainer";

const theme = extendTheme({
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    peach: "#efd9c5",
    blue: "#002051",
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
  fonts: {
    heading: `serif`,
    body: `"Franklin", "serif"`,
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <HeaderBackground />
      <Component {...pageProps} />
      <BlackTriangle />
      <OrangeContainer />
    </ChakraProvider>
  );
};

export default MyApp;
