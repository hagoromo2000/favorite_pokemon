"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import PokemonPost from "./common/components/PokemonPost";
import { Post } from "./type";
const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`
        );
        console.log(response.data.data);
        setPosts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" mb={4} color="blue.500">
        みんなの推しポケ！
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {posts &&
          posts.map((post) => <PokemonPost key={post.id} post={post} />)}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
