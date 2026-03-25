// @ts-nocheck
import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { personalInfo, education } from "../data/resume";
import { FadeInSection } from "./FadeInSection";

export const AboutSection: React.FC = () => {
  return (
    <Box as="section" id="about" py={24}>
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
              About
            </Text>
          </HStack>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="700"
            letterSpacing="-0.02em"
            mb={8}
          >
            Background
          </Heading>
        </FadeInSection>

        <VStack align="flex-start" spacing={6} maxW="720px">
          <FadeInSection delay={0.2}>
            <Text fontSize="lg" color="text.secondary" lineHeight="1.8">
              {personalInfo.bio}
            </Text>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <Box
              p={5}
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
              bg="surface.1"
              w="full"
            >
              <Text
                fontSize="xs"
                fontFamily="mono"
                color="brand.400"
                fontWeight="500"
                letterSpacing="0.1em"
                textTransform="uppercase"
                mb={2}
              >
                Education
              </Text>
              <Text fontWeight="600" color="text.primary" fontSize="md">
                {education.institution}
              </Text>
              <Text color="text.secondary" fontSize="sm" mt={1}>
                {education.degree}
              </Text>
              <HStack mt={2} spacing={4}>
                <Text fontSize="sm" color="text.tertiary">
                  CGPA: {education.cgpa}
                </Text>
                <Text fontSize="sm" color="text.tertiary">
                  {education.year}
                </Text>
                <Text fontSize="sm" color="text.tertiary">
                  {education.location}
                </Text>
              </HStack>
            </Box>
          </FadeInSection>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutSection;
