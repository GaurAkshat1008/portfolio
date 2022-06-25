import { Header } from "./Header";

const {
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Divider,
} = require("@chakra-ui/react");

export const About = () => {
  return (
    <Box w={"100%"} h={'100vh'}>
      <Header>
        About Me
      </Header>
      <Flex width={"70%"} ml="14rem" mr="10rem" fontSize={'2xl'} color="whiteAlpha.800">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          commodi cum doloremque reiciendis non dignissimos perferendis, error
          praesentium repellat eius enim in! Maiores harum magnam officia illo
          deserunt quasi soluta.
        </Text>
      </Flex>
    </Box>
  );
};
