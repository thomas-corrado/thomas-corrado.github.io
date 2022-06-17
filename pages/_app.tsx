import { ChakraProvider, extendTheme } from "@chakra-ui/react"; 
import HeaderBackground from "../components/HeaderBackground";
import HeaderName from "../components/HeaderName";
import "reset-css"; 
import "@fontsource/source-serif-4";

const theme = extendTheme({
  colors: {
    black: "#000000", 
    white: "#FFFFFF",
    peach: "#efd9c5", 
    blue: "#002051"
  }, 
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none", 
            boxShadow: "none"
          }
        }
      }
    }
  },
  fonts: {
    heading: `'Source Serif 4', serif`,
  }
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <HeaderBackground>
        <Component {...pageProps} />
        <HeaderName/>
      </HeaderBackground>
    </ChakraProvider>
  );
};

export default MyApp;
