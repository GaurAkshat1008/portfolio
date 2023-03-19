import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Code, Divider, GridItem, Heading, Kbd, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  header: string;
  desc: string;
  link: string;
  onClick?: () => void;
  skills?: string[];
}

export const Project: React.FC<Props> = ({
  header,
  desc,
  link,
  onClick,
  skills,
}) => {
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
      h="250"
      bg={"linkedin.900"}
      p={4}
      borderRadius={8}
      cursor="pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      <Heading as="h3" size="lg" fontWeight="bold">
        {header}
        <a href={link} target="_blank">
          <ExternalLinkIcon fontSize={"lg"} cursor="pointer" />
        </a>
      </Heading>
      <Divider colorScheme={"blackAlpha"} />
      <Divider colorScheme={"blackAlpha"} />
      <Divider colorScheme={"blackAlpha"} />
      <Divider colorScheme={"blackAlpha"} />
      {skills?.map((skill) => (
        <Code colorScheme={'yellow'} m={1}>{skill}</Code>
      ))}
      <Text>{desc}</Text>
    </GridItem>
  );
};
