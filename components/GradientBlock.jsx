import { Box } from "@chakra-ui/layout";

const GradientBlock = () => {
  return (
    <Box
      marginTop="3vw"
      bg="linear-gradient(#002051, black)"
      width="100vw"
      height="20vw"
      position="absolute"
      zIndex={3}
    />
  );
};

export default GradientBlock;
