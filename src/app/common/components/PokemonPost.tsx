import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { TwitterIntentTweet } from "@/app/utils/TwitterIntentTweet";

const PokemonPost = (props: any) => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={props.post.image_url}
            alt="ポケモンの画像"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" color="blue.600">
              {props.post.name}
            </Heading>
            <Text color="blue.500">{props.post.body}</Text>
            <Text color="blue.600" fontSize="xl">
              {props.post.author_name}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              as={TwitterIntentTweet}
              text={props.post.body}
              url="https://localhost3000"
              hashtags={["あなたの推しポケモン", `${props.post.name}`]}
              colorScheme="twitter"
            >
              記事をシェアする！
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default PokemonPost;
