// @ts-nocheck - Chakra UI v2 type complexity with Container
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      backdropFilter="blur(12px)"
      bg={scrolled ? "rgba(10,10,10,0.85)" : "transparent"}
      borderBottomWidth={scrolled ? "1px" : "0px"}
      borderColor="whiteAlpha.100"
      transition="background 0.3s ease, border-color 0.3s ease"
    >
      <Container maxW="1200px">
        <Flex h="64px" align="center" justify="space-between">
          <Box
            as="a"
            href="#"
            fontWeight="700"
            fontSize="lg"
            letterSpacing="-0.02em"
            cursor="pointer"
            color="white"
          >
            AG
            <Text as="span" color="brand.400">
              .
            </Text>
          </Box>

          {/* Desktop nav */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontSize="sm"
                color="text.secondary"
                fontWeight="500"
                _hover={{ color: "white", textDecoration: "none" }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
          />
        </Flex>
      </Container>

      {/* Mobile drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay bg="blackAlpha.800" />
        <DrawerContent
          bg="surface.1"
          borderLeftWidth="1px"
          borderColor="whiteAlpha.100"
        >
          <DrawerCloseButton color="white" mt={2} />
          <DrawerBody pt={20}>
            <VStack spacing={6} align="flex-start">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  fontSize="lg"
                  color="text.secondary"
                  fontWeight="500"
                  _hover={{ color: "white", textDecoration: "none" }}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
