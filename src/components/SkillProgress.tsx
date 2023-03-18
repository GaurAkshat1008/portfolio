import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Divider, GridItem, Heading, HStack, Progress, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import { isMobile } from "react-device-detect";

interface Props {
  children?: ReactNode;
  percentage: number;
  // title: string;
  src: string;
  width?: string;
}

export const ProSkills: React.FC<Props> = ({
  children,
  percentage,
  // title,
  src,
  width,
  ...props
}) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  //   const [per, setPer] = useState(0);
  // function progressBar(percentage: number) {
  //   if (per < percentage) {
  //     setTimeout(() => {
  //       setPer(per + 0.5);
  //     }, 800/percentage);
  //   }
  //   return per;
  // }
  return (
    <GridItem
      as={motion.li}
      className="item"
      variants={item}
      bg={"linkedin.900"}
      p={4}
      h="150"
      borderRadius={8}
      cursor="pointer"
      whileHover={{ scale: 1.05 }}
      display="flex"
    >
      <Heading size="lg" display={'flex'} alignItems={"center"} justifyContent={"center"}>
        <img src={src} alt="/" width={width}/>
      </Heading>
    </GridItem>
  );
};

