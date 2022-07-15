import { Flex, useColorMode } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
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
  const [toBeShown, setToBeShown] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  useEffect(() => {
    setColorMode("dark");
    if (!isMobile) {
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY <= 700) {
        setToBeShown(true);
      } else {
        setToBeShown(false);
      }
    });
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
        {toBeShown && <Hero />}
        {isLoading ? null : (
          <Parallax pages={8} style={{ top: "0", left: "0" }}>
            <ParallaxLayer offset={0} speed={3}></ParallaxLayer>
            <ParallaxLayer offset={1} speed={1}>
              <About />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={3}></ParallaxLayer>
            <ParallaxLayer offset={3} speed={1}>
              <Skills />
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={3}></ParallaxLayer>
            <ParallaxLayer offset={5} speed={1}>
              <Projects />
            </ParallaxLayer>
            <ParallaxLayer offset={6} speed={3}></ParallaxLayer>
            <ParallaxLayer offset={7} speed={1}>
              <Contact />
            </ParallaxLayer>
          </Parallax>
        )}
      </>
    );
  }
};

export default Index;
