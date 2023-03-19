import { Box, Flex, Grid, GridItem, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import useOnScreen from "../utils/useOnScreen";
import { Header } from "./Header";
import { ProSkills } from "./SkillProgress";

export const Skills: React.FC<{}> = ({}) => {
  const skills = require("../utils/skills.json");
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const [isLoading, setIsLoading] = useState(true);
  if (isVisible) {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }
  if (!isLoading && !isVisible) {
    setIsLoading(true);
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  if (!isMobile) {
    return (
      <Box w={"100vw"} h={"100vh"}>
        <Header children="Skills" />
        <Box ref={ref} display={"flex"}></Box>
        {isVisible && (
          <>
          <Grid
            as={motion.ul}
            variants={container}
            initial="hidden"
            animate="visible"
            ml={"14rem"}
            mr={"10rem"}
            pr={"10rem"}
            gap={6}
            w={"80%"}
            listStyleType="none"
            templateColumns={"repeat(auto-fit, minmax(150px, 10fr))"}
            >
            {Object.keys(skills).map((key, i) => (
              <ProSkills
                key={i}
                percentage={skills[key].percentage}
                // title={skills[key].title}
                src={skills[key].img}
                width={skills[key].width}
              />
            ))}
          </Grid>
        </>
        )}
      </Box>
    );
  } else {
    return (
      <>
        <Box ref={ref} bgColor="#1a202c">
          <Header children="Skills" />
          {isVisible && (
            <VStack spacing={12}>
              <Flex
                width={"100%"}
                ml="auto"
                mr="auto"
                p={4}
                fontSize={"2xl"}
                color="whiteAlpha.800"
                direction={"column"}
              >
                <Flex
                  mb={4}
                >
                  I am a self-taught developer with a passion for learning new
                  technologies. I have a strong background in web development
                  and have worked with many different languages and frameworks.
                </Flex>
                <Grid
                  gap={4}
                  w={"100%"}
                  listStyleType="none"
                  templateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
                >
                  {Object.keys(skills).map((key, i) => (
                    <GridItem as={motion.li} key={i} variants={item}>
                      <ProSkills
                        percentage={skills[key].percentage}
                        src={skills[key].img}
                        width={skills[key].width}
                      />
                    </GridItem>
                  ))}
                </Grid>
              </Flex>
            </VStack>
          )}
        </Box>
      </>
    );
  }
};


{/* <Box width={"100vw"} h="100vh">
        <Header children="Skills" />
        <Box ref={ref}></Box>
        {isVisible && (
          <VStack spacing={12}>
            <Flex
              width={"80%"}
              ml="14rem"
              mr="10rem"
              fontSize={"2xl"}
              color="whiteAlpha.800"
              direction={"row"}
              pr={"10rem"}
            >
              <Grid
                flex={0.45}
                as={motion.ul}
                variants={container}
                initial="hidden"
                animate="visible"
                gap={6}
                w={"100%"}
                listStyleType="none"
                templateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
              >
                {Object.keys(skills).map((key, i) => (
                  <GridItem as={motion.li} key={i} variants={item}>
                    <ProSkills
                      percentage={skills[key].percentage}
                      title={skills[key].title}
                    />
                  </GridItem>
                ))}
              </Grid>
            </Flex>
          </VStack>
        )}
      </Box> */}