import * as React from "react";
import Box from "@mui/material/Box";
import { Divider, Heading, Stack } from "@chakra-ui/react";
import { Container } from "@washingtonpost/wpds-container";
import Wave from "react-wavify";
import Bubble from "./Bubble";

const HeaderBackground = () => {
  return (
    <div style={{ height: "100%" }}>
      {/* BUBBLES */}
      <Container
        css={{
          display: "flex",
          alignContent: "center",
        }}
      >
        <Bubble
          wh="13.5rem"
          top="13rem"
          left="-31rem"
          emoji="🎥"
          fs="6rem"
          text="Films"
        />
        <Bubble
          wh="11rem"
          top="24.5rem"
          left="-21rem"
          emoji="👤"
          fs="5rem"
          text="Contact"
        />
        <Bubble
          wh="17rem"
          top="11rem"
          left="-13rem"
          emoji="👨🏻‍🎓"
          fs="9.5rem"
          text="Experience"
        />
        <Bubble
          wh="15rem"
          top="24rem"
          left="0.25rem"
          emoji="📸"
          fs="6rem"
          text="Photos"
        />
        <Bubble
          wh="13rem"
          top="10rem"
          left="5.25rem"
          emoji="💻"
          fs="6rem"
          text="Code Portfolio"
        />
        <Bubble
          wh="16rem"
          top="19rem"
          left="16rem"
          emoji="🎶"
          fs="8rem"
          text="Music"
        />
      </Container>

      <Box sx={{ alignItems: "center", width: "100%" }}>
        <Container>
          <Divider
            sx={{
              position: "absolute",
              width: "75%",
              zIndex: "2",
              top: "2.5rem",
              color: "white",
            }}
          />
        </Container>
      </Box>

      {/* WAVES */}
      <Box width="100vw" top="calc(87vh - 6rem)" position="absolute" zIndex={5}>
        <Wave
          fill="#017847"
          options={{ height: 40, amplitude: 50, speed: 0.3, points: 7 }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#d4af37" />
              <stop offset="90%" stopColor="#f00" />
            </linearGradient>
          </defs>
        </Wave>
      </Box>

      <Box width="100vw" top="calc(87vh - 4rem)" position="absolute" zIndex={5}>
        <Wave
          fill="#00854E"
          options={{ height: 40, amplitude: 50, speed: 0.3, points: 5 }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#d4af37" />
              <stop offset="90%" stopColor="#f00" />
            </linearGradient>
          </defs>
        </Wave>
      </Box>

      <Box width="100vw" top="calc(87vh - 3rem)" position="absolute" zIndex={5}>
        <Wave
          fill="#039F5F"
          options={{ height: 40, amplitude: 50, speed: 0.3, points: 3 }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#d4af37" />
              <stop offset="90%" stopColor="#f00" />
            </linearGradient>
          </defs>
        </Wave>
      </Box>

      <Box width="100vw" top="87vh" position="absolute" zIndex={5}>
        <Wave
          fill="#04B26B"
          options={{ height: 40, amplitude: 50, speed: 0.3, points: 1 }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#d4af37" />
              <stop offset="90%" stopColor="#f00" />
            </linearGradient>
          </defs>
        </Wave>
      </Box>

      {/* WORDS AND MISC */}
      <Stack sx={{ width: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            zIndex: "1",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#00693e",
          }}
        />
        <Heading
          zIndex="2"
          color="white"
          fontFamily="Staatliches"
          fontSize="8xl"
          top="2rem"
          position="absolute"
          left="13%"
        >
          Tommy Corrado{" "}
        </Heading>
      </Stack>
    </div>
  );
};

export default HeaderBackground;
