"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Image, Spinner } from "@chakra-ui/react";
import { atom, useAtom } from "jotai";
import { pokemonAtom } from "@/app/posts/new/page";

export const pokemonImageAtom = atom({
  imageURL:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
});

const PokemonImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [pokemon, setPokemon] = useAtom(pokemonAtom);
  const [pokemonImage, setPokemonImage] = useAtom(pokemonImageAtom);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
      .then((response) => {
        const url =
          response.data.sprites.other["official-artwork"].front_default;
        setPokemonImage(url);
        setImageUrl(url);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <Box>{imageUrl ? <Image src={imageUrl} alt="pokemon" /> : <Spinner />}</Box>
  );
};

export default PokemonImage;
