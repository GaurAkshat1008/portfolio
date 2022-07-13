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
  Image,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { isValidMotionProp, motion } from "framer-motion";
import React from "react";
import { DownBtn } from "./DownBtn";
import { isMobile } from "react-device-detect";

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onToggle } = useDisclosure();
  const [hasSeen, setHasSeen] = useState(false);
  const { colorMode } = useColorMode();
  setTimeout(() => {
    setIsLoading(false);
    setTimeout(() => {
      onToggle;
    }, 1000);
    // console.log("isOpen", isOpen);
  }, 3900);

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });
  const toast = useToast()
  const toastIdRef = React.useRef() as React.MutableRefObject<string | number>;
  function addToast() {
    toastIdRef.current = toast({
      title: "Navigation Info",
      description: "You can use 'Up' and 'Down' keys given at the top and bottom of the screen to Navigate",
      status: "warning",
      duration: 6000,
      isClosable: true,
      position: "bottom",
      variant: "top-accent",
      containerStyle:{
        width: "100vw",
        fontSize: "1rem",
      }
    })
  }
  useEffect(() => {
    if(!isLoading && !hasSeen) {
      if(!isMobile){
        addToast()
      }
      setHasSeen(true);
      // console.log("hasSeen", hasSeen);
    }
  }, [isLoading])
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
              <VStack spacing={!isMobile ? "20rem" : '1rem'}>
                <Flex
                  justifyContent={"center"}
                  alignContent={"center"}
                  flexDirection={"column"}
                >
                  <ChakraBox
                    animate={{
                      scale: [1.3, 1.3, 1, 1],
                      translateY: [0, 0, -5, 0],
                      color: ["#fff", "#f0f", "#0ff", "#00000000"],
                    }}
                    // @ts-ignore
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      repeat: "none",
                      // repeatDelay: 0.5,
                      // repeatType: "reverse",
                    }}
                  >
                    <Text fontSize={"3xl"}>
                      Hi, I am
                    </Text>
                  </ChakraBox>
                  <Heading 
                  fontSize={['3rem', '10vw', '10vw', '10vw', '6vw']}>
                  {/* fontSize={{ lg: "6vw", md: "12rem", sm: "12rem", xs: "12rem" }}> */}
                    Akshat Gaur
                  </Heading>
                  <ChakraBox
                    animate={{
                      scale: [1.3, 1.3, 1, 1],
                      translateY: [0, 0, 5, 0],
                      color: ["#fff", "#f0f", "#0ff", "#00000000"],
                    }}
                    // @ts-ignore
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
                      fontSize={"3xl"}
                      ml={"auto"}
                    >
                      A Full Stack Developer
                    </Text>
                  </ChakraBox>
                </Flex>
              </VStack>
            </Box>
          </SlideFade>
        </>
      )}
    </Flex>
  );
};
