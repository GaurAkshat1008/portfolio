import {
  Box,
  Flex,
  Heading,
  SlideFade,
  Text,
  useDisclosure,
  VStack,
  useColorMode,
  chakra,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Spinner } from "./Spinner";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { isValidMotionProp, motion } from "framer-motion";

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  setTimeout(() => {
    setIsLoading(false);
    setTimeout(() => {
      onToggle
    }, 1000)
    // console.log("isOpen", isOpen);
  }, 3900);

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <Flex
      justifyContent="center"
      height="100vh"
      bgGradient="linear(to-l, heroGradientStart, heroGradientMid, heroGradientEnd)"
      // bgGradient="linear(to-l, #f0f, #fff, #0ff)"
      bgClip="text"
      flexDirection={"column"}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
            <SlideFade in={!isOpen} offsetY="20px">
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <VStack spacing={"20rem"}>
                  <Flex
                    justifyContent={"center"}
                    alignContent={"center"}
                    flexDirection={"column"}
                    bgClip="text"
                  >
                    <ChakraBox
                      animate={{
                        scale: [1.3, 1.3, 1, 1],
                        translateY: [0, 0, -5, 0],
                        color: ["#fff", "#f0f", "#0ff", "#00000000"],
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        repeat: "none",
                        // repeatDelay: 0.5,
                        // repeatType: "reverse",
                      }}
                    >
                      <Text fontSize={{ lg: "3xl", md: "2xl", sm: "xl" }}>
                        Hi, I am
                      </Text>
                    </ChakraBox>
                    <Heading fontSize={{ lg: "6vw", md: "8vw", sm: "10vw" }}>
                      Akshat Gaur
                    </Heading>
                    <ChakraBox
                      animate={{
                        scale: [1.3, 1.3, 1, 1],
                        translateY: [0, 0, 5, 0],
                        color: ["#fff", "#f0f", "#0ff", "#00000000"],
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        repeat: "none",
                        // repeatDelay: 0.5,
                        // repeatType: "reverse",
                      }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text
                        fontSize={{ lg: "3xl", md: "2xl", sm: "xl" }}
                        ml={"auto"}
                      >
                        A Full Stack Developer
                      </Text>
                    </ChakraBox>
                  </Flex>
                  <ChakraBox
                    animate={{
                      scale: [1, 1.2, 1, 1.2, 1, 1.2],
                      color: ["#fff", "#0ff", "#f0f"],
                    }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      loop: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <Button
                      backgroundColor={"transparent"}
                      _hover={{
                        backgroundColor: "transparent",
                      }}
                      _active={{
                        backgroundColor: "transparent",
                        outline: "none",
                      }}
                      onClick={() => {
                        scrollDown();
                      }}
                    >
                      <ChevronDownIcon
                        color={colorMode === "light" ? "#121212" : "#fafafa"}
                        fontSize={"4xl"}
                        _hover={{
                          color: colorMode === "light" ? "#800091" : "#E4005A",
                        }}
                      />
                    </Button>
                  </ChakraBox>
                </VStack>
              </Box>
            </SlideFade>
        </>
      )}
    </Flex>
  );
};
