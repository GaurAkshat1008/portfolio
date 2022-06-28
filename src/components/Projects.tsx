import {
  Box, Grid
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import useOnScreen from "../utils/useOnScreen";
import { Header } from "./Header";
import { Project } from "./Project";

export const Projects: React.FC<{}> = ({}) => {
  let projects = require("../utils/projects.json");
  // console.log(projects);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const [selectedId, setSelectedId] = React.useState("");
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Box w={"100vw"} h={"100vh"}>
      <Header>Projects</Header>
      <Box ref={ref}></Box>
      {isVisible && (
        <>
          <Grid
            as={motion.ul}
            variants={container}
            initial="hidden"
            animate="visible"
            ml={"14rem"}
            mr={"10rem"}
            pr={"10rem"}
            gap={6}
            w={"80%"}
            listStyleType="none"
            templateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
          >
            {Object.keys(projects).map((key, i) => (
              <Project
                key={i}
                header={projects[key].name}
                desc={projects[key].description}
                link={projects[key].link}
                onClick={() => {
                  setSelectedId(key);
                  // console.log(selectedId);
                }}
              />
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};
