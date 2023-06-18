import { Box, Flex, Heading, Button } from "./common/components";
import NextLink from "next/link";

export default function Header() {
  return (
    <Box as="header">
      <Flex
        bg="white"
        color="gray.600"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
      >
        <Flex flex={1} justify="space-between" maxW="5xl" mx="auto">
          <Heading as="h1" size="lg">
            <NextLink href="/" passHref>
              <Box as="a" color="blue.500">
                推しポケ！
              </Box>
            </NextLink>
          </Heading>
          <Button
            as={NextLink}
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="green.400"
            href="/posts/new"
            _hover={{
              bg: "green.300",
            }}
          >
            推しポケモンを投稿する！
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
