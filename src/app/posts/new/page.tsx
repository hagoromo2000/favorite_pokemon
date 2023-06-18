"use client";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import Select from "react-select";
import Pokemons from "../../json/allPokemons.json";

const all_pokemons = Pokemons.map((data) => {
  return { value: data, label: data.name };
});

export default function SelectPokemon() {
  return (
    <>
      <Flex direction="column" align="center" justify="center" height="100vh">
        <Text mb={4} fontSize="2xl" fontWeight="bold" color="blue.500">
          推したいポケモンを選択！
        </Text>
        <Box width={["100%", "75%", "50%", "25%"]}>
          <Select options={all_pokemons} />
        </Box>
        <Button colorScheme="blue" alignSelf="center" mt={4}>
          キミにきめた！
        </Button>
      </Flex>
    </>
  );
}
