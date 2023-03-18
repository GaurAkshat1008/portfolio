import { Box, Container, keyframes, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 4s ease-in-out`;

export const Spinner = () => {
  const { colorMode } = useColorMode();
  return (
    <Container
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems={"center"}
    >
      <Box
        as={motion.div}
        animation={animation}
        padding="2"
        width="12"
        height="12"
        display="flex"
        boxShadow={ "inset 0 0 50px #FFF, inset 20px 0 80px #6284FF, inset -20px 0 80px #FF00FF, inset 20px 0 300px #6284FF, inset -20px 0 300px #FF0000, 0 0 50px #fff, -10px 0 80px #6284FF, 10px 0 80px #FF0000;"
        }
      />
    </Container>
  );
};
