// @ts-nocheck
import {
  Box,
  Container,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { experience } from "../data/resume";
import { FadeInSection } from "./FadeInSection";

export const ExperienceSection: React.FC = () => {
  return (
    <Box as="section" id="experience" py={24}>
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
              Experience
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
            Where I&apos;ve Worked
          </Heading>
        </FadeInSection>

        <VStack spacing={0} align="stretch" position="relative">
          {/* Timeline line */}
          <Box
            position="absolute"
            left={{ base: "11px", md: "11px" }}
            top="24px"
            bottom="24px"
            w="1px"
            bg="whiteAlpha.100"
          />

          {experience.map((exp, i) => (
            <FadeInSection key={i} delay={0.15 * (i + 1)}>
              <HStack align="flex-start" spacing={{ base: 4, md: 6 }} py={6}>
                {/* Timeline dot */}
                <Box position="relative" flexShrink={0}>
                  <Box
                    w="24px"
                    h="24px"
                    borderRadius="full"
                    border="2px solid"
                    borderColor={i === 0 ? "brand.400" : "whiteAlpha.200"}
                    bg={i === 0 ? "rgba(99,102,241,0.1)" : "surface.0"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      w="8px"
                      h="8px"
                      borderRadius="full"
                      bg={i === 0 ? "brand.400" : "whiteAlpha.300"}
                    />
                  </Box>
                </Box>

                {/* Content */}
                <Box
                  flex={1}
                  p={6}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  bg="surface.1"
                  _hover={{
                    borderColor: "whiteAlpha.200",
                    bg: "surface.2",
                  }}
                  transition="all 0.2s"
                >
                  <HStack
                    justify="space-between"
                    align="flex-start"
                    flexWrap="wrap"
                    gap={2}
                  >
                    <Box>
                      <Text fontWeight="600" fontSize="lg" color="text.primary">
                        {exp.role}
                      </Text>
                      <Text color="brand.400" fontWeight="500" fontSize="md">
                        {exp.company}
                      </Text>
                    </Box>
                    <Text
                      fontSize="sm"
                      fontFamily="mono"
                      color="text.tertiary"
                      whiteSpace="nowrap"
                    >
                      {exp.period}
                    </Text>
                  </HStack>

                  <Text fontSize="sm" color="text.tertiary" mt={1} mb={4}>
                    {exp.description}
                  </Text>

                  <List spacing={3}>
                    {exp.highlights.map((point, j) => (
                      <ListItem
                        key={j}
                        fontSize="sm"
                        color="text.secondary"
                        lineHeight="1.7"
                        display="flex"
                        alignItems="flex-start"
                      >
                        <ListIcon
                          as={ChevronRightIcon}
                          color="brand.400"
                          mt="5px"
                          flexShrink={0}
                        />
                        {point}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </HStack>
            </FadeInSection>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
