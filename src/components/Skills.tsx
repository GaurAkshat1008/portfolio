import { Box, Flex, Progress, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../utils/useOnScreen";
import { DownBtn } from "./DownBtn";
import { Header } from "./Header";
import { ProSkills } from "./SkillProgress";

export const Skills: React.FC<{}> = ({}) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const [isLoading, setIsLoading] = useState(true);
  if (isVisible) {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }
  if(!isLoading && !isVisible){
    setIsLoading(true);
  }
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
            <Flex flex={0.4}>lakncasncl</Flex>
            <VStack spacing={4} flex={0.6}>
              <ProSkills percentage={isLoading ? 0 : 100} title={"HTML"} />
              <ProSkills percentage={isLoading ? 0 : 100} title={"CSS"} />
              <ProSkills percentage={isLoading ? 0 : 90} title={"React"} />
              <ProSkills percentage={isLoading ? 0 : 90} title={"Express"} />
              <ProSkills percentage={isLoading ? 0 : 90} title={"Node"} />
              <ProSkills percentage={isLoading ? 0 : 90} title={"Next"} />
              <ProSkills
                percentage={isLoading ? 0 : 80}
                title={"PostGresSQL"}
              />
              <ProSkills percentage={isLoading ? 0 : 70} title={"Firebase"} />
            </VStack>
          </Flex>
          {/* <DownBtn how="down"/> */}
        </VStack>
      )}
    </Box>
  );
};
