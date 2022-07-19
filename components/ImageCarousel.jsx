import { motion } from "framer-motion";
import { Box, Stack } from "@chakra-ui/layout";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import images from "../public/images.js";

const ImageCarousel = () => {
  return (
    <Stack direction="row" bgColor="red" position="absolute" zIndex={999} width="100vw" height="47vw" marginTop="91vw">
      {images.map((image) => (
        <Image src={image} maxHeight="47vw" width="100%"  objectFit="contain"/>
      ))}
     
    </Stack>

  );
};

export default ImageCarousel;
