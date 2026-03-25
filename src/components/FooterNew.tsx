import { Box, Container, HStack, Link, Text } from "@chakra-ui/react";

export const FooterNew: React.FC = () => {
  return (
    <Box as="footer" py={8} borderTop="1px solid" borderColor="whiteAlpha.50">
      <Container maxW="1200px">
        <HStack justify="space-between" flexWrap="wrap" gap={4}>
          <Text fontSize="sm" color="text.tertiary">
            Built with Next.js & Chakra UI
          </Text>
          <Text fontSize="sm" color="text.tertiary">
            Akshat Gaur &copy; {new Date().getFullYear()}
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default FooterNew;
