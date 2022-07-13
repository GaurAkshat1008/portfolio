import { ChevronUpIcon } from "@chakra-ui/icons";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BrowserView } from "react-device-detect";
import { DownBtn } from "../components/DownBtn";
import { SideBar } from "../components/SideBar";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      if (window.scrollY <= 100) {
        setPage(0);
      } else if (window.scrollY >= 2900) {
        setPage(4);
      } else {
        setPage(1);
      }
    });
    // console.log("page: ", page);
  }, []);
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Akshat Gaur</title>
        <link rel="shortcut icon" href="/static/favicon.png" />
      </Head>
      <BrowserView>
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
          {isLoading ? null : page === 0 ? null : <DownBtn how="up" />}
        </Flex>
      </BrowserView>
      <BrowserView>
        <Flex position={"fixed"} width="6%">
          {isLoading ? null : <SideBar />}
        </Flex>
      </BrowserView>
      <Component {...pageProps} />
      <BrowserView>
      <Flex
        as={motion.div}
        opacity={"0"}
        whileHover={{ opacity: 1 }}
        position={"fixed"}
        justifyContent="center"
        alignItems={"center"}
        // zIndex="100"
        w={"100%"}
        top={"92vh"}
        >
        {isLoading ? null : page === 4 ? null : <DownBtn how="down" />}
      </Flex>
        </BrowserView>
    </ChakraProvider>
  );
}

export default MyApp;
