import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Button, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import React from "react";

type btnVarient = "up" | "down";

interface Props {
  children?: React.ReactNode;
  how: btnVarient;
}
export const DownBtn: React.FC<Props> = (props) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  const scrollUp = () => {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <ChakraBox
      animate={{
        // scale: [1, 1.2, 1, 1.2, 1, 1.2],
        translateY: [-10, 10],
      }}
      // @ts-ignore
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: "Infinity",
        repeatType: "reverse",
      }}
    >
      <Button
        backgroundColor={"transparent"}
        _hover={{
          backgroundColor: "white",
          color: "#fafafa"
        }}
        _active={{
          backgroundColor: "transparent",
          outline: "none",
        }}
        w={'70vw'}
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
        onClick={() => {
          if (props.how === "up") {
            scrollUp();
          } else {
            scrollDown();
          }
        }}
      >
        {props.how === "up" ? (
          <ChevronUpIcon
            color={"#121212"}
            fontSize={"4xl"}
            _hover={{
              color: "#E4005A",
            }}
          />
        ) : (
          <ChevronDownIcon
            color={"#121212"}
            fontSize={"4xl"}
            _hover={{
              color: "#E4005A",
            }}
          />
        )}
      </Button>
    </ChakraBox>
  );
};
