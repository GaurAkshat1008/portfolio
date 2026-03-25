// @ts-nocheck - Chakra UI v2 + framer-motion v6 type complexity
import { Box, Heading, HStack, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/resume";

export const Hero: React.FC = () => {
  return (
    <Box
      as="section"
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle gradient orbs */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="600px"
        h="600px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)"
        filter="blur(60px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-10%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)"
        filter="blur(60px)"
        pointerEvents="none"
      />

      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 8 }}
        position="relative"
        zIndex={1}
        w="full"
      >
        <Box display="flex" flexDirection="column" gap={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Text
              fontSize="sm"
              fontFamily="mono"
              color="brand.400"
              fontWeight="500"
              letterSpacing="0.1em"
              textTransform="uppercase"
            >
              Software Engineer
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="800"
              lineHeight="1.05"
              letterSpacing="-0.03em"
            >
              {personalInfo.name}
              <Text as="span" color="brand.400">
                .
              </Text>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ maxWidth: "600px" }}
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="text.secondary"
              lineHeight="1.7"
            >
              {personalInfo.tagline}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HStack spacing={4} pt={4}>
              <Link
                href={personalInfo.github}
                isExternal
                px={6}
                py={3}
                bg="white"
                color="black"
                borderRadius="lg"
                fontWeight="600"
                fontSize="sm"
                _hover={{
                  bg: "whiteAlpha.900",
                  transform: "translateY(-1px)",
                }}
                transition="all 0.2s"
              >
                GitHub
              </Link>
              <Link
                href={personalInfo.linkedin}
                isExternal
                px={6}
                py={3}
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="lg"
                fontWeight="600"
                fontSize="sm"
                color="text.secondary"
                _hover={{
                  borderColor: "whiteAlpha.400",
                  color: "white",
                  transform: "translateY(-1px)",
                }}
                transition="all 0.2s"
              >
                LinkedIn
              </Link>
              <Link
                href={`mailto:${personalInfo.email}`}
                px={6}
                py={3}
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="lg"
                fontWeight="600"
                fontSize="sm"
                color="text.secondary"
                _hover={{
                  borderColor: "whiteAlpha.400",
                  color: "white",
                  transform: "translateY(-1px)",
                }}
                transition="all 0.2s"
              >
                Contact
              </Link>
            </HStack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ paddingTop: "16px" }}
          >
            <Text fontSize="sm" color="text.tertiary">
              {personalInfo.location}
            </Text>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
