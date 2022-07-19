import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@chakra-ui/react";
import { theme, styled} from "@washingtonpost/wpds-ui-kit";

const StyledDiv = styled("div", {
  fontFamily: theme.fonts.meta, 
  length: "100%"
})

const Bubble = ({ wh, top, left, emoji, fs, text }) => {
  
  
  return (
    <StyledDiv>
      <Tooltip
        hasArrow
        label={text}
        fontSize="md"
        placement="bottom"
        closeDelay={-100000}
      >
        <motion.div
          style={{
            zIndex: "10",
            background: "rgba(255, 255, 255, 0.4)",
            opacity: "100%",
            width: wh,
            height: wh,
            borderRadius: "50%",
            position: "absolute",
            marginTop: top,
            marginLeft: left,
            fontSize: fs,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          {emoji}
        </motion.div>
      </Tooltip>
    </StyledDiv>
  );
};

export default Bubble;
