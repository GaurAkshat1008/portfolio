// @ts-nocheck
import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { skills } from "../data/resume";
import { FadeInSection } from "./FadeInSection";

const categoryConfig: Record<string, { icon: string; color: string }> = {
  Languages: { icon: "01", color: "purple" },
  "Frameworks & Libraries": { icon: "02", color: "teal" },
  "Databases & Caching": { icon: "03", color: "orange" },
  "Cloud & DevOps": { icon: "04", color: "blue" },
  "Security & Auth": { icon: "05", color: "red" },
  "Architectural Design": { icon: "06", color: "green" },
  "Developer Tools": { icon: "07", color: "cyan" },
};

export const SkillsSection: React.FC = () => {
  return (
    <Box as="section" id="skills" py={24}>
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
              Skills
            </Text>
          </HStack>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="700"
            letterSpacing="-0.02em"
            mb={12}
          >
            Technical Toolkit
          </Heading>
        </FadeInSection>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={5}
        >
          {Object.entries(skills).map(([category, items], i) => {
            const config = categoryConfig[category] || {
              icon: "00",
              color: "gray",
            };
            return (
              <FadeInSection key={category} delay={0.08 * (i + 1)}>
                <Box
                  p={6}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  bg="surface.1"
                  h="full"
                  _hover={{
                    borderColor: "whiteAlpha.200",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s"
                >
                  <HStack mb={4} spacing={3}>
                    <Text
                      fontFamily="mono"
                      fontSize="xs"
                      color="brand.400"
                      fontWeight="600"
                    >
                      {config.icon}
                    </Text>
                    <Text
                      fontSize="sm"
                      fontWeight="600"
                      color="text.primary"
                      letterSpacing="-0.01em"
                    >
                      {category}
                    </Text>
                  </HStack>

                  <Wrap spacing={2}>
                    {items.map((skill) => (
                      <WrapItem key={skill}>
                        <Tag
                          size="md"
                          variant="subtle"
                          colorScheme={config.color}
                          borderRadius="full"
                          px={3}
                          py={1}
                        >
                          <TagLabel fontSize="xs" fontWeight="500">
                            {skill}
                          </TagLabel>
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>
              </FadeInSection>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
