import React, { useState, useEffect } from "react";
import {
  Container,
  Top,
  ProductArea,
  ProductCard,
  ProductImage,
  ProductInfoArea,
  ProductInfoText,
  InfoText,
  CartButtom,
  CartImage,
} from "./style";
import Products from "../../services/products.json";
import { Rating } from "react-native-ratings";
import { useCart } from "../../context/cart";
export default function Home() {
  const { add } = useCart();
  console.log(add, "teste");
  const products = Products.map((product) => {
    return product;
  });

  return (
    <Container>
      <Top>
        <InfoText>Bem vindo ao e-commerce games</InfoText>
      </Top>
      <ProductArea>
        {products.map((item) => {
          return (
            <ProductCard onPress={() => add(item)} key={item.id}>
              <ProductImage source={{ uri: item.image }} />
              <ProductInfoArea>
                <ProductInfoText>Nome:{item.name}</ProductInfoText>
                <ProductInfoText>Preço:${item.price}</ProductInfoText>
                <ProductInfoText> <Rating
                ratingColor="#3498db"
                ratingBackgroundColor="#c8c7c8"
                ratingCount={5}
                imageSize={10}
              />{item.score}</ProductInfoText>
              </ProductInfoArea>
            </ProductCard>
          );
        })}
      </ProductArea>
    </Container>
  );
}
