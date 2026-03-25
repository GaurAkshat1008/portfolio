// @ts-nocheck
import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { personalInfo } from "../data/resume";
import { FadeInSection } from "./FadeInSection";

export const ContactSection: React.FC = () => {
  return (
    <Box as="section" id="contact" py={24}>
      <Container maxW="1200px">
        <FadeInSection>
          <HStack spacing={3} mb={2}>
            <Box w="40px" h="1px" bg="brand.400" />
            <Text
              fontSize="sm"
              fontFamily="mono"
              color="brand.400"
              fontWeight="500"
              letterSpacing="0.1em"
              textTransform="uppercase"
            >
              Contact
            </Text>
          </HStack>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="700"
            letterSpacing="-0.02em"
            mb={4}
          >
            Get In Touch
          </Heading>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <Text
            color="text.secondary"
            fontSize="lg"
            lineHeight="1.8"
            maxW="560px"
            mb={8}
          >
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a conversation about distributed systems
            and backend architecture.
          </Text>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <VStack align="flex-start" spacing={4}>
            <Link
              href={`mailto:${personalInfo.email}`}
              px={8}
              py={4}
              bg="brand.500"
              color="white"
              borderRadius="lg"
              fontWeight="600"
              fontSize="md"
              _hover={{
                bg: "brand.600",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 30px rgba(99,102,241,0.3)",
              }}
              transition="all 0.2s"
            >
              {personalInfo.email}
            </Link>

            <HStack spacing={6} pt={2}>
              <Link
                href={personalInfo.github}
                isExternal
                color="text.tertiary"
                fontSize="sm"
                fontWeight="500"
                _hover={{ color: "white" }}
                transition="color 0.2s"
              >
                <HStack spacing={1}>
                  <Text>GitHub</Text>
                  <ExternalLinkIcon boxSize={3} />
                </HStack>
              </Link>
              <Link
                href={personalInfo.linkedin}
                isExternal
                color="text.tertiary"
                fontSize="sm"
                fontWeight="500"
                _hover={{ color: "white" }}
                transition="color 0.2s"
              >
                <HStack spacing={1}>
                  <Text>LinkedIn</Text>
                  <ExternalLinkIcon boxSize={3} />
                </HStack>
              </Link>
            </HStack>
          </VStack>
        </FadeInSection>
      </Container>
    </Box>
  );
};

export default ContactSection;
