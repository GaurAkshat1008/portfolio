// @ts-nocheck
import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Tag,
  TagLabel,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { projects } from "../data/resume";
import { FadeInSection } from "./FadeInSection";

export const ProjectsSection: React.FC = () => {
  return (
    <Box as="section" id="projects" py={24}>
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
              Projects
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
            Featured Work
          </Heading>
        </FadeInSection>

        <VStack spacing={6} align="stretch">
          {projects.map((project, i) => (
            <FadeInSection key={i} delay={0.15 * (i + 1)}>
              <Box
                p={{ base: 6, md: 8 }}
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
                  mb={4}
                  flexWrap="wrap"
                  gap={2}
                >
                  <VStack align="flex-start" spacing={1}>
                    <HStack spacing={3}>
                      <Heading
                        as="h3"
                        fontSize={{ base: "lg", md: "xl" }}
                        fontWeight="600"
                        letterSpacing="-0.01em"
                      >
                        {project.title}
                      </Heading>
                      {project.status && (
                        <Tag
                          size="sm"
                          colorScheme="green"
                          borderRadius="full"
                          variant="subtle"
                        >
                          <TagLabel fontSize="xs">{project.status}</TagLabel>
                        </Tag>
                      )}
                    </HStack>
                  </VStack>
                  {project.github && (
                    <Link
                      href={project.github}
                      isExternal
                      fontSize="sm"
                      color="text.tertiary"
                      _hover={{ color: "brand.400" }}
                      transition="color 0.2s"
                    >
                      <HStack spacing={1}>
                        <Text>GitHub</Text>
                        <ExternalLinkIcon boxSize={3} />
                      </HStack>
                    </Link>
                  )}
                </HStack>

                <Text
                  color="text.secondary"
                  fontSize="sm"
                  lineHeight="1.7"
                  mb={4}
                >
                  {project.description}
                </Text>

                <List spacing={2} mb={5}>
                  {project.highlights.map((point, j) => (
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

                <Wrap spacing={2}>
                  {project.tech.map((t) => (
                    <WrapItem key={t}>
                      <Tag
                        size="sm"
                        variant="outline"
                        colorScheme="gray"
                        borderRadius="full"
                        borderColor="whiteAlpha.200"
                      >
                        <TagLabel
                          fontSize="xs"
                          fontFamily="mono"
                          color="text.tertiary"
                        >
                          {t}
                        </TagLabel>
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </FadeInSection>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
