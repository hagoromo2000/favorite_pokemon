import { atom } from "jotai";

export const pokemonAtom = atom({
  name: "ピカチュウ",
  id: 25,
});

export const pokemonImageAtom = atom({
  imageURL:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
});
