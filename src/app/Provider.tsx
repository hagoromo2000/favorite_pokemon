"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "jotai";

// Chakra UIとJotaiのProviderをまとめて提供する

export default function UseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider>
      <Provider>{children} </Provider>
    </ChakraProvider>
  );
}
