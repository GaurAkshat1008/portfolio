import { ChevronUpIcon } from "@chakra-ui/icons";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { DownBtn } from "../components/DownBtn";
import { SideBar } from "../components/SideBar";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Akshat Gaur</title>
        <link rel="shortcut icon" href="/static/favicon.png" />
      </Head>
      <Flex
        as={motion.div}
        opacity={"0"}
        whileHover={{ opacity: 1 }}
        position={"fixed"}
        justifyContent="center"
        alignItems={"center"}
        zIndex="100"
        w={"100%"}
        top={"5"}
      >
        {isLoading ? null : <DownBtn how="up" />}
      </Flex>
      <Flex position={"fixed"} width="6%">
        {isLoading ? null : <SideBar />}
      </Flex>
      <Component {...pageProps} />
      <Flex
        as={motion.div}
        opacity={"0"}
        whileHover={{ opacity: 1 }}
        position={"fixed"}
        justifyContent="center"
        alignItems={"center"}
        zIndex="100"
        w={"100%"}
        top={"92vh"}
      >
        {isLoading ? null : <DownBtn how="down" />}
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
