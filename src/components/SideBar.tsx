import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export const SideBar = () => {
  return (
    <>
      <HStack>
        <VStack
          padding={"0.6rem"}
          width={"70%"}
          flexDir={"column-reverse"}
          borderRight={"1px solid #ccc"}
          height={"100vh"}
          boxShadow={"0 0 5px #fff, -5px 0 15px #f0f, 5px 0 15px #0ff;"}
        >
          <Flex
            justifyContent={"space-between"}
            flexDirection={"column"}
            mb="100"
          >
            <Box
              mt={8}
              cursor={"pointer"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Tooltip hasArrow  label="Linkedin" bg='rgba(26, 32, 44, 1)' fontSize={"20px"} color='white' placement="right" closeDelay={500}>
                <a
                  href={"https://www.linkedin.com/in/akshat-gaur-2b1973217/"}
                  target="_blank"
                >
                  <img src="/static/linkedin.png" alt="" />
                </a>
              </Tooltip>
            </Box>
            <Box mt={8} cursor="pointer">
            <Tooltip hasArrow  label="Github" bg='rgba(26, 32, 44, 1)' fontSize={"20px"} color='white' placement="right" closeDelay={500}>
              <a href={"https://github.com/jueviole-grace/"} target="_blank">
                <img src="/static/github.png" alt="" />
              </a>
            </Tooltip>
            </Box>
            <Box mt={8} cursor={"pointer"}>
            <Tooltip hasArrow  label="Leetcode" bg='rgba(26, 32, 44, 1)' fontSize={"20px"} color='white' placement="right" closeDelay={500}>
              <a href={"https://leetcode.com/jueviole-grace/"} target="_blank">
                <img src="/static/leetcode.png" alt="image" />
              </a>
            </Tooltip>
            </Box>
            <Box mt={8} cursor={"pointer"}>
            <Tooltip hasArrow  label="Resume" bg='rgba(26, 32, 44, 1)' fontSize={"20px"} color='white' placement="right" closeDelay={500}>
              <a href={"https://tinyurl.com/2mkxkmht"} target="_blank">
                <img src="/static/resume.png" alt="image" />
              </a>
            </Tooltip>
            </Box>
          </Flex>
        </VStack>
      </HStack>
    </>
  );
};
