import { HStack, Progress, Text, Kbd } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

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
  return (
    <HStack
      spacing={4}
      w="100%"
      boxShadow={
        "0.8px 2px 6px #446688ff, 1.2px 1.2px 1px #f0f , -1.4px 1.8px 1px #0ff;"
      }
      p={1}
      as={motion.div}
      initial={{ y: -1000, scale: 0 }}
      animate={{
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      }}
      // @ts-ignore
    >
      <Kbd  minW={"6rem"} maxW={'max-content'} ml={"0.5rem"}>
        {title}
      </Kbd>
      <Progress
        value={percentage}
        {...props}
        colorScheme={"blue"}
        size={"sm"}
        w="70%"
        isAnimated={false}
      />
    </HStack>
  );
};
