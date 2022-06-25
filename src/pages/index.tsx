import {
  Center,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
const Index:React.FC<{}> = ({}) => {
  const { setColorMode } = useColorMode();
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  useEffect(() => {
    setColorMode("dark");
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
    });
  }, []);
  return (
    <Flex flexDirection={"row"}>
      {/* <Flex position={"fixed"} width="6%">
        {isLoading ? null : <SideBar />}
      </Flex> */}
      <Flex
        flex={1}
        // width={'100vw'}
        flexDirection={"column"}
        overflowX={"hidden"}
        // justifyContent={"center"}
      >
        <Hero />
        {isLoading ? null : (
          <>
            <About />
            <Footer>
              <Text>Hi Guys ❤️ you</Text>
            </Footer>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Index;
