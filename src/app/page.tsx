"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import PokemonPost from "./common/components/PokemonPost";
import { Post } from "./type";
import InfiniteScroll from "react-infinite-scroller";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true); //再読み込み判定

  const loadMore = async (page: any) => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`,
          { params: { page: page } } //ページ番号をパラメータに追加
        );

        //データ件数が0件の場合、処理終了
        if (response.data.data.length < 1) {
          setHasMore(false);
          return;
        }

        // 取得データをリストに追加
        setPosts([...posts, ...response.data.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  };

  // 各スクロール要素
  const postsDisplay = posts.map((post) => (
    <PokemonPost key={post.id} post={post} />
  ));

  //ロード中に表示する項目
  const loader = <Spinner />;

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" mb={4} color="blue.500">
        みんなの推しポケ！
      </Heading>

      {posts ? (
        <InfiniteScroll
          loadMore={loadMore} //項目を読み込む際に処理するコールバック関数
          hasMore={hasMore} //読み込みを行うかどうかの判定
          loader={loader}
        >
          {" "}
          {/* 読み込み最中に表示する項目 */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
            {postsDisplay}
          </SimpleGrid>
        </InfiniteScroll>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default Home;
