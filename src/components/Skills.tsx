import { Box, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
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
        staggerChildren: 0.2,
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
  return (
    <Box width={"100vw"} h="100vh">
      <Header>Skills</Header>
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
            <Flex
              flex={0.55}
              pr={8}
              pt={12}
              as={motion.div}
              initial={{ opacity: 0, scale: 0.2 }}
              // @ts-ignore
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
            >
              I am a self-taught developer with a passion for learning new
              technologies. I have a strong background in web development and
              have worked with many different languages and frameworks.
            </Flex>
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
    </Box>
  );
};
