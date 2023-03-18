import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Heading
      mt={["0", "2rem", "2rem","2rem", "2rem"]}
      ml={["0", "10rem", "10rem","10rem", "10rem"]}
      mr={["0", "10rem", "10rem","10rem", "10rem"]}
      fontSize={"6xl"}
      p="1rem"
      borderBottom={"1px solid #ccc"}
      boxShadow={"-10px 10px 1px #736EFE, 8px 15px 1px #5EFCE8;"}
      mb={"2.5rem"}
      bgGradient="linear(to-r, headerGradientStart, headerGradientEnd)"
      bgClip={"text"}
      {...props}
    />
  );
};
