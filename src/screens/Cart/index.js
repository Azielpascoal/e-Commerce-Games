import React, { useState, useEffect } from "react";
import {
  Container,
  Top,
  ProductCard,
  ProductImage,
  ProductInfoArea,
  ProductInfoText,
  InfoText,
  ProductArea,
} from "./style";
import { FlatList } from "react-native";
import { useCart } from "../../context/cart";
export default function Home() {
  const { remove, cart, totalvalue, subtotalvalue } = useCart();
  return (
    <Container>
      <Top>
        <InfoText>Produtos adicionados ao carrinho</InfoText>
        <InfoText>Subtotalvalue total :{subtotalvalue}</InfoText>
        <InfoText>Valor total :{totalvalue}</InfoText>
      </Top>
      <ProductArea>
        {
        cart.map((item, index) => {
          return (
            <ProductCard onPress={() => remove(index)} key={index}>
              <ProductImage source={{ uri: item.image }} />
              <ProductInfoArea>
                <ProductInfoText>Nome:{item.name}</ProductInfoText>
                <ProductInfoText>Preço:${item.price}</ProductInfoText>
                <ProductInfoText>Score:{item.score}</ProductInfoText>
              </ProductInfoArea>
            </ProductCard>
          );
        })}
      </ProductArea>
    </Container>
  );
}
