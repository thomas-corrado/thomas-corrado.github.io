import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HeaderBackground from "../components/HeaderBackground";
import "reset-css";
import Triangle from "../components/Triangle.jsx";
import OrangeContainer from "../components/OrangeContainer";
import Block from "../components/Block.jsx";
import GradientBlock from "../components/GradientBlock.jsx";
import MovieCarousel from "../components/MovieCarousel.jsx"
import ImageCapture from "../components/ImageCapture.jsx";
import Footer from "../components/Footer.jsx";
import genEveryoneImg from "../public/WebDevPictures/GEN_EVERYONE_OFFICIAL_LOGO_CLEAR.png";


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

      {/* safety black container */}
      <Block
        topVar="29vw"
        bgColorVar="black"
        widthVar="100vw"
        heightVar="54vw"
        positionVar="absolute"
        zIndexVar="-1"
      />

      {/* black-orange triangle  */}
      <Triangle
        topVar="59.3vw"
        borderTopVar="0vw solid transparent"
        borderLeftVar="100vw solid black"
        borderRightVar="0vw"
        borderBottomVar="20vw solid #efd9c5"
        positionVar="absolute"
        zIndexVar="2"
      />

      {/* about me section */}
      <OrangeContainer />

      {/* orange-navy triangle */}
      <Triangle
        topVar="135vw"
        borderTopVar="0vw solid transparent"
        borderLeftVar="0vw"
        borderRightVar="100vw solid #efd9c5"
        borderBottomVar="20vw solid #002051"
        positionVar="absolute"
        zIndexVar="2"
      />

      {/* navy block */}
      <Block
        topVar="154vw"
        bgColorVar="#002051"
        widthVar="100vw"
        heightVar="52vw"
        positionVar="absolute"
        zIndexVar="1"
      />

      <MovieCarousel />

      {/* gradient, blue to black block */}
      <GradientBlock />

      {/* black block */}
      <Block
        topVar="20vw"
        bgColorVar="black"
        widthVar="100vw"
        heightVar="50vw"
        positionVar="absolute"
        zIndexVar="1"
      />

      {/* black-white triangle */}
      <Triangle
        topVar="70vw"
        borderTopVar="0vw solid transparent"
        borderLeftVar="100vw solid black"
        borderRightVar="0vw"
        borderBottomVar="20vw solid white"
        positionVar="absolute"
        zIndexVar="2"
      />

      {/* white block */}
      <Block
        topVar="91vw"
        bgColorVar="whitered"
        widthVar="100vw"
        heightVar="55vw"
        positionVar="absolute"
        zIndexVar="1"
      />

      {/* gen everyone logo */}
      <ImageCapture
        imgSrc={genEveryoneImg}
        topVar="70.5vw"
        leftVar="76vw"
        rightVar="0vw"
        widthVar="23vw"
        heightVar="20vw"
        positionVar="absolute"
        zIndexVar="5"
      />

      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
