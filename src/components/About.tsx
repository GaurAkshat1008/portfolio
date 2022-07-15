import {
  Box,
  chakra,
  Code,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { useRef } from "react";
import { isMobile } from "react-device-detect";
import useOnScreen from "../utils/useOnScreen";
import { DownBtn } from "./DownBtn";
import { Header } from "./Header";

export const About = () => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  if (!isMobile) {
    return (
      <Box w={"100%"} h={"100vh"}>
        <Header children="About Me" />
        <Box ref={ref}></Box>
        {isVisible && (
          <VStack spacing={12}>
            <Flex
              width={"70%"}
              ml="14rem"
              mr="10rem"
              fontSize={"2xl"}
              color="whiteAlpha.800"
              direction={"row"}
            >
              <Flex flex={0.4} justifyContent="left" alignItems={"initial"}>
                {/* <ChakraBox> */}
                <Box
                  as={motion.div}
                  whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                  whileTap={{ scale: 0.7, transition: { duration: 0.5 } }}
                >
                  <Image
                    src="/static/bg.jpg"
                    boxSize={"25rem"}
                    objectFit={"cover"}
                    borderRadius="full"
                    boxShadow={
                      "0 0 5px #fff, -2px 2px 25px #f0f , 2px 2px 25px #0ff;"
                    }
                  />
                </Box>
                {/* </ChakraBox> */}
              </Flex>
              <VStack
                as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                }}
                spacing={4}
                flex={0.6}
              >
                {/* <VStack spacing={8}> */}
                <Text>
                  I'm a undergraduate student at the Indian Institute of
                  Information Technology at Surat and pursuing Electronics and
                  Communication Engineering
                </Text>
                <Text>
                  I'm a full stack developer with a passion for building
                  beautiful, responsive websites. I have a background in
                  business and a passion for learning new technologies.
                </Text>
                <Text>
                  I'm a self-taught developer and I'm currently working on my
                  own projects. The tech stack that I use include a variety of
                  frameworks including{" "}
                  <Code colorScheme={"whatsapp"}>express.js</Code>,{" "}
                  <Code colorScheme={"whatsapp"}>react.js</Code>,{" "}
                  <Code colorScheme={"whatsapp"}>next.js</Code>, and a wide
                  range of APIs and middleware
                </Text>
                {/* </VStack> */}
              </VStack>
            </Flex>
            {/* <DownBtn how="down" /> */}
          </VStack>
        )}
        {isMobile && <></>}
      </Box>
    );
  } else {
    return (
      <>
        <Box ref={ref}>
          <Header children="About Me" />
          {isVisible && (
            <VStack spacing={12}>
              <Flex
                width={"100%"}
                ml="auto"
                mr="auto"
                fontSize={"2xl"}
                color="whiteAlpha.800"
                direction={"column"}
              >
                <Flex flex={1} justifyContent="center">
                  {/* <ChakraBox> */}
                  <Box
                    as={motion.div}
                    whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                    whileTap={{ scale: 0.7, transition: { duration: 0.5 } }}
                  >
                    <Image
                      src="/static/bg.jpg"
                      boxSize={"20rem"}
                      objectFit={"cover"}
                      borderRadius="full"
                      boxShadow={
                        "0 0 5px #fff, -2px 2px 25px #f0f , 2px 2px 25px #0ff;"
                      }
                    />
                  </Box>
                  {/* </ChakraBox> */}
                </Flex>
                <VStack
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    },
                  }}
                  spacing={4}
                  flex={1}
                  p={4}
                >
                  {/* <VStack spacing={8}> */}
                  <Text>
                    I'm a undergraduate student at the Indian Institute of
                    Information Technology at Surat and pursuing Electronics and
                    Communication Engineering
                  </Text>
                  <Text>
                    I'm a full stack developer with a passion for building
                    beautiful, responsive websites. I have a background in
                    business and a passion for learning new technologies.
                  </Text>
                  <Text>
                    I'm a self-taught developer and I'm currently working on my
                    own projects. The tech stack that I use include a variety of
                    frameworks including{" "}
                    <Code colorScheme={"whatsapp"}>express.js</Code>,{" "}
                    <Code colorScheme={"whatsapp"}>react.js</Code>,{" "}
                    <Code colorScheme={"whatsapp"}>next.js</Code>, and a wide
                    range of APIs and middleware
                  </Text>
                  {/* </VStack> */}
                </VStack>
              </Flex>
              {/* <DownBtn how="down" /> */}
            </VStack>
          )}
        </Box>
      </>
    );
  }
};
