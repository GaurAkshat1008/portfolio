import { Box, Button, Center, Divider, Flex, VStack } from "@chakra-ui/react";
import Link from "next/link";

export const SideBar = () => {
  return (
    <>
      <VStack
        padding={"1rem"}
        width={"70%"}
        flexDir={"column-reverse"}
        borderRight={"1px solid #ccc"}
        height={"100vh"}
        boxShadow={"0 0 15px #fff, -10px 0 90px #f0f, 10px 0 40px #0ff;"}
      >
        <Flex
          justifyContent={"space-between"}
          flexDirection={"column-reverse"}
          mb="100"
        >
          <Box mt={8} cursor={"pointer"} justifyContent='center' alignItems={'center'}>
            <Divider orientation="vertical"/>
            <a href={"https://www.linkedin.com/in/akshat-gaur-2b1973217/"} target="_blank">
              <img src="/static/linkedin.png" alt="" />
            </a>
            <Divider orientation="vertical"/>
            <Divider orientation="vertical"/>
            <Divider orientation="vertical"/>
            <Divider orientation="vertical"/>
            <Divider orientation="vertical"/>
          </Box>
          <Box mt={8} cursor="pointer">
          <Divider orientation="vertical"/>
            <a href={"https://github.com/jueviole-grace/"} target="_blank">
              <img src="/static/github.png" alt="" />
            </a>
            <Divider orientation="vertical"/>
          </Box>
          <Box mt={8} cursor={"pointer"}>
          <Divider orientation="vertical"/>
            <a href={"https://leetcode.com/jueviole-grace/"} target="_blank">
              <img src="/static/leetcode.png" alt="image" />
            </a>
            <Divider orientation="vertical"/>
          </Box>
        </Flex>
      </VStack>
    </>
  );
};
