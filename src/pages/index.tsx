import { Flex, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
const Index: React.FC<{}> = ({}) => {
  const { setColorMode } = useColorMode();
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  useEffect(() => {
    setColorMode("dark");
    if (!isMobile) {
      document.body.style.overflow = "hidden";
    }
  }, []);
  if (!isMobile) {
    return (
      <Flex flexDirection={"row"}>
        <Flex flex={1} flexDirection={"column"} overflowX={"hidden"}>
          <Hero />
          {isLoading ? null : (
            <>
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          )}
        </Flex>
      </Flex>
    );
  } else {
    return (
      <>
        <Hero />
        {isLoading ? null : (
          <>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}
      </>
    );
  }
};

export default Index;
