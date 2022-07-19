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
    body: `"Franklin", "serif"`,
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <div style={{ height: "100%", }} >
      <ChakraProvider theme={theme}>
        <HeaderBackground />
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
};

export default MyApp;
