"use client";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Select from "react-select";
import Pokemons from "../../json/allPokemons.json";
import { useAtom } from "jotai";
import Link from "next/link";
import { pokemonAtom } from "@/app/jotai/atoms";

const all_pokemons = Pokemons.map((data) => {
  return { value: data, label: data.name };
});

export default function SelectPokemon() {
  const [pokemon, setPokemon] = useAtom(pokemonAtom);

  const handlePokemon = (event: any) => {
    setPokemon(event.value);
    console.log(pokemon);
  };

  return (
    <>
      <Flex direction="column" align="center" justify="center" height="100vh">
        <Text mb={4} fontSize="2xl" fontWeight="bold" color="blue.500">
          推したいポケモンを選ぼう！
        </Text>
        <Box width={["100%", "75%", "50%", "25%"]}>
          <Select
            options={all_pokemons}
            placeholder="ポケモンを選ぶ！"
            isSearchable={true}
            onChange={handlePokemon}
          />
        </Box>
        <Link href="/posts/submit" passHref legacyBehavior>
          <Button colorScheme="blue" alignSelf="center" mt={4} as="a">
            キミにきめた！
          </Button>
        </Link>
      </Flex>
    </>
  );
}
