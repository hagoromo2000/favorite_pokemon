"use client";
import React, { useState } from "react";
import axios from "axios";
import PokemonImage from "@/app/common/components/PokemonImage";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { pokemonAtom, pokemonImageAtom } from "@/app/jotai/atoms";

const SubmitPage = () => {
  const router = useRouter();

  // jotai
  const [pokemon, setPokemon] = useAtom(pokemonAtom);
  const [pokemonImage, setPokemonImage] = useAtom(pokemonImageAtom);

  // state
  const [body, setBody] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // button
  const isDisabled = !body || !authorName;

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    if (!body || !authorName) {
      toast.error("推しポイントと名前を入力してください！");
      return;
    }

    console.log(pokemon.name, body, authorName, pokemonImage);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`,
        {
          post: {
            name: pokemon.name,
            body: body,
            author_name: authorName,
            image_url: pokemonImage, // ここでimageのURLを設定します
          },
        }
      );

      router.push("/");
      toast.success("投稿しました！");
    } catch (e) {
      // エラーメッセージを表示するなど、リクエストが失敗した場合の処理を書くことができます。
      if (axios.isAxiosError(e) && e.response && e.response.status === 400) {
        console.log("400 Error!!");
        console.log(e.message); //Axiosの例外オブジェクトとして扱える
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Text mb={4} fontSize="2xl" fontWeight="bold" color="blue.500">
        {pokemon.name}
      </Text>
      <Box>
        <PokemonImage />
      </Box>
      <FormControl id="fav-points" isRequired mb={4}>
        <FormLabel color="blue.600" fontWeight="bold">
          推しポイントを教えて！
        </FormLabel>
        <Textarea
          placeholder="推しポイント"
          size="lg"
          height="100px"
          onChange={(e) => setBody(e.target.value)}
        />
      </FormControl>
      <FormControl id="name" isRequired mb={4}>
        <FormLabel color="blue.600" fontWeight="bold">
          キミの名前を教えて！
        </FormLabel>
        <Input
          placeholder="名前"
          size="md"
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        onClick={handleSubmit}
        isDisabled={isDisabled}
        isLoading={isLoading}
      >
        投稿する！
      </Button>
    </Flex>
  );
};

export default SubmitPage;
