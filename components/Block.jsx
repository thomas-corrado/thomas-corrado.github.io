import { Box } from "@chakra-ui/layout";

const Block = ({
  topVar,
  bgColorVar,
  widthVar,
  heightVar,
  positionVar,
  zIndexVar,
}) => {
  return (
    <Box
      marginTop={topVar}
      bgColor={bgColorVar}
      width={widthVar}
      height={heightVar}
      position={positionVar}
      zIndex={zIndexVar}
    />
  );
};

export default Block;
