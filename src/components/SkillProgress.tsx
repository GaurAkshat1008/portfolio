import { HStack, Progress, Text, Kbd } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  percentage: number;
  title: string;
}

export const ProSkills: React.FC<Props> = ({
  children,
  percentage,
  title,
  ...props
}) => {
  const [per, setPer] = useState(0);
  function progressBar(percentage: number) {
    if (per < percentage) {
      setTimeout(() => {
        setPer(per + 0.5);
      }, (100/percentage));
    }
    return per;
  }
  return (
    <HStack
      spacing={4}
      w="100%"
      boxShadow={
        "0.8px 2px 6px #446688ff, 1.2px 1.2px 1px #f0f , -1.4px 1.8px 1px #0ff;"
      }
      p={1}
    >
      <Kbd
        minW={"6rem"}
        maxW={"max-content"}
        ml={"0.5rem"}
        color={"orange.300"}
      >
        {title}
      </Kbd>
      <Progress
        value={progressBar(percentage)}
        {...props}
        colorScheme={"orange"}
        size={"sm"}
        w="70%"
        isAnimated={true}
      />
    </HStack>
  );
};
