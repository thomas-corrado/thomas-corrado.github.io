import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HeaderBackground from "../components/HeaderBackground";
import "reset-css";

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
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <HeaderBackground />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
