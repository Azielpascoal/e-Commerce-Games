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
import Products from "../../services/products.json";
import { FlatList } from "react-native";
import {useCart} from "../../context/cart"
export default function Home() {
  const {add,cart}=useCart()
 

  return (
    <Container>
      <Top>
        <InfoText>Bem vindo ao e-commerce games</InfoText>
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
        renderItem={({ index }) => {
          return (
            <ProductCard onPress={add(index)} >
              <ProductImage source={{ uri: index.image }} />
              <ProductInfoArea>
                <ProductInfoText>Nome:{index.name}</ProductInfoText>
                <ProductInfoText>Preço:${index.price}</ProductInfoText>
                <ProductInfoText>Score:{index.score}</ProductInfoText>
              </ProductInfoArea>
            </ProductCard>
          );
        }}
        keyExtractor={(index) => index.id}
      ></FlatList>
    </Container>
  );
}
