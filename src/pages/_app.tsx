import { ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ChakraProvider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Input,
  Progress,
  Tooltip,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { DownBtn } from "../components/DownBtn";
import { SideBar } from "../components/SideBar";
import theme from "../theme";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 100) {
        setPage(0);
      } else if (window.scrollY >= 2900) {
        setPage(4);
      } else {
        setPage(1);
      }
    });
  }, []);
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Akshat Gaur</title>
        <link rel="shortcut icon" href="/static/favicon.png" />
        <meta name="google-site-verification" content="VugWeMPxsBIjSMQ6ZgNMCJUC0S8xXHh-cKaJIt3em30" />
      </Head>
      <>
      <Analytics />
        <MobileView>
          <Flex position={"fixed"} width="100%">
            {isLoading ? null : (
              <>
                <Button
                  ref={btnRef}
                  colorScheme={"twitter"}
                  m={4}
                  zIndex={1000}
                  onClick={onOpen}
                >
                  <HamburgerIcon as={"button"} />
                </Button>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                  size={"xs"}
                  preserveScrollBarGap={true}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                      <Flex
                            flexDirection={"column"}
                            height={"100%"}
                            p={8}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                      <Box m={4}>
                        <a
                          href={
                            "https://www.linkedin.com/in/akshat-gaur-2b1973217/"
                          }
                          target="_blank"
                        >
                          <img src="/static/linkedin.png" alt="" width={100} />
                        </a>
                      </Box>
                      <Box m={4}>
                        <a
                          href={"https://github.com/jueviole-grace/"}
                          target="_blank"
                        >
                          <img src="/static/github.png" alt="" width={100} />
                        </a>
                      </Box>
                      <Box m={4}>
                        <a
                          href={"https://leetcode.com/jueviole-grace/"}
                          target="_blank"
                        >
                          <img
                            src="/static/leetcode.png"
                            alt="image"
                            width={100}
                          />
                        </a>
                      </Box>
                      <Box m={4}>
                        <a
                          href={"https://tinyurl.com/2mkxkmht"}
                          target="_blank"
                        >
                          <img
                            src="/static/resume.png"
                            alt="image"
                            width={100}
                          />
                        </a>
                      </Box>
                      </Flex>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Flex>
        </MobileView>
        <BrowserView>
          {/* <>
          <div ref={cursorDotOutline} id="cursor-dot-outline" />
          <div ref={cursorDot} id="cursor-dot" />
        </> */}
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
      </>
    </ChakraProvider>
  );
}

export default MyApp;
