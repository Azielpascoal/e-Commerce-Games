import React, { useState, useEffect } from "react";
import {
  Container,
  Top,
  ProductCard,
  ProductImage,
  ProductInfoArea,
  ProductInfoText,
  InfoText,
} from "./style";
import { FlatList } from "react-native";
import { useCart } from "../../context/cart";
export default function Home() {
  const { remove, cart, totalvalue } = useCart();
  return (
    <Container>
      <Top>
        <InfoText>Produtos adicionados ao carrinho</InfoText>
        <InfoText>Valor total :{totalvalue}</InfoText>
      </Top>
      <FlatList
        data={cart}
        contentContainerStyle={{
          width: "100%",
          flex: 1,
          borderTopRightRadius: 35,
          marginTop: -60,
          backgroundColor: "#fff",
          padding: "4%",
        }}
        renderItem={({ item, index }) => {
          return (
            <ProductCard onPress={remove(index)}>
              <ProductImage source={{ uri: item.image }} />
              <ProductInfoArea>
                <ProductInfoText>Nome:{item.name}</ProductInfoText>
                <ProductInfoText>Preço:${item.price}</ProductInfoText>
                <ProductInfoText>Score:{item.score}</ProductInfoText>
              </ProductInfoArea>
            </ProductCard>
          );
        }}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </Container>
  );
}
