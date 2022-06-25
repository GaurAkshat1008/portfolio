import { ChakraProvider, Flex } from "@chakra-ui/react";

import { AppProps } from "next/app";
import Head from "next/head";
import { useState, useEffect } from "react";
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
      <Flex position={"fixed"} width="6%">
        {isLoading ? null : <SideBar />}
      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
