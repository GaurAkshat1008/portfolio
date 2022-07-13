import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Divider, GridItem, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  header: string;
  desc: string;
  link: string;
  onClick?: () => void;
}

export const Project: React.FC<Props> = ({ header, desc, link, onClick }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <GridItem
      as={motion.li}
      className="item"
      variants={item}
      w={"100%"}
      h="200"
      bg={"orange.400"}
      p={4}
      borderRadius={8}
      cursor="pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      <Heading as="h3" size="lg" fontWeight="bold">
        {header}
        <a href={link} target="_blank">
        <ExternalLinkIcon fontSize={'lg'} cursor='pointer'/>
        </a>
      </Heading>
      <Divider colorScheme={"blackAlpha"} />
      <Divider colorScheme={"blackAlpha"} />
      <Divider colorScheme={"blackAlpha"} />
      <Divider colorScheme={"blackAlpha"} />
      <Text>{desc}</Text>
    </GridItem>
  );
};
