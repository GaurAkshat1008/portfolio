import { Flex, useColorMode, Progress, Box, color } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
// import CustomCursor from "custom-cursor-react";
// import "custom-cursor-react/dist/index.css";

const Index: React.FC<{}> = ({}) => {
  const { setColorMode } = useColorMode();
  const [isLoading, setIsLoading] = useState(true);
  const [toBeShown, setToBeShown] = useState(true);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  let pageHeight: number;
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  useEffect(() => {
    setColorMode("dark");
    setTimeout(() => {
      pageHeight = document.body.scrollHeight;
    }, 5000);
    window.addEventListener("scroll", () => {
      setScrollPercentage((window.scrollY / pageHeight) * 100 + 20);
    });
  }, []);

  if (!isMobile) {
    return (
      <Flex flexDirection={"row"}>
        <Flex flex={1} flexDirection={"column"} overflowX={"hidden"}>
          {!isMobile && (<Box
            as={motion.div}
            initial={{ width: "0%" }}
            animate={{ width: `${scrollPercentage}%` }}
            className="progress-bar"
            pos={"fixed"}
            top={0}
            left={0}
            height={"4px"}
            bgColor={"#00b4d8"}
            zIndex={"200"}
            transition={"width 0.2s ease-out"}
          ></Box>)}
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
          <>
          {/* // <Parallax pages={8} style={{ top: "0", left: "0" }}> */}
            {/* // <ParallaxLayer offset={0} speed={3}></ParallaxLayer> */}
            {/* // <ParallaxLayer offset={1} speed={1}> */}
              <About />
            {/* // </ParallaxLayer> */}
            {/* // <ParallaxLayer offset={2} speed={3}></ParallaxLayer> */}
            {/* // <ParallaxLayer offset={3} speed={1}> */}
              <Skills />
            {/* // </ParallaxLayer> */}
            {/* // <ParallaxLayer offset={4} speed={3}></ParallaxLayer> */}
            {/* // <ParallaxLayer offset={5} speed={1}> */}
              <Projects />
            {/* // </ParallaxLayer> */}
            {/* // <ParallaxLayer offset={6} speed={3}></ParallaxLayer> */}
            {/* // <ParallaxLayer offset={7} speed={1}> */}
              <Contact />
            {/* // </ParallaxLayer> */}
          {/* // </Parallax> */}
        </>
        )}
      </>
    );
  }
};

export default Index;
