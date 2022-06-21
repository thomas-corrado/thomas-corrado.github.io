import { Box } from "@chakra-ui/layout";

const BlackTriangle = () => {
  return (
    <Box
      top="66.6vw"
      borderTop="0px solid transparent"
      borderLeft="calc(100vw) solid black"
      borderBottom="20vw solid #efd9c5"
      position="absolute"
      display="flex"
      zIndex={2}
    />
  );
};

export default BlackTriangle;
