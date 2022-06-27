import { Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Heading
      mt={"2rem"}
      ml="10rem"
      mr={"10rem"}
      fontSize={"6xl"}
      p="1rem"
      borderBottom={"1px solid #ccc"}
      boxShadow={"0 0 1px #fff, -10px 10px 1px #f0f , 8px 15px 1px #0ff;"}
      mb={"2.5rem"}
      bgGradient="linear-gradient(to right, #0ff 0%, #fff 20%,  #f0f 30%)"
      bgClip={"text"}
    >
      {props.children}
    </Heading>
  );
};
