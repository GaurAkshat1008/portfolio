import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Button, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import React, { ButtonHTMLAttributes } from "react";

type btnVarient = "up" | "down";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  how: btnVarient;
}
export const DownBtn: React.FC<Props> = ({how, ...props}) => {
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
  document.addEventListener('keydown', (e) => {
    // console.log(e.key);
    if (e.key === 'ArrowDown') {
      // console.log('down');
      scrollDown();
    } else if (e.key === 'ArrowUp') {
      // console.log('up');
      scrollUp();
    } else if (e.key === 'Enter' && !e.shiftKey) {
      // console.log('enter');
      scrollDown();
    } else if(e.key === ' ' && !e.shiftKey) {
      // console.log('space');
      scrollDown();
    } else if (e.key === 'Enter' && e.shiftKey) {
      // console.log('shift enter');
      scrollUp();
    } else if (e.key === ' ' && e.shiftKey) {
      // console.log('shift space');
      scrollUp();
    } else if (e.key === 'Home') {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (e.key === 'End') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  })
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
          props.onClick;
          if (how === "up") {
            scrollUp();
          } else {
            scrollDown();
          }
        }}
      >
        {how === "up" ? (
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
