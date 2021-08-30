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
import { AirbnbRating } from "react-native-ratings";
import { useCart } from "../../context/cart";
import CartIcon from "../../assets/shopping-cart.png";
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
        {products
          .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
          .map((item) => {
            return (
              <ProductCard key={item.id}>
                <ProductImage source={{ uri: item.image }} />
                <ProductInfoArea>
                  <ProductInfoText>Nome:{item.name}</ProductInfoText>
                  <ProductInfoText>Preço:${item.price}</ProductInfoText>
                  <AirbnbRating
                    ratingBackgroundColor="#c8c7c8"
                    defaultRating={item.score / 50}
                    reviews={[
                      "Terrible",
                      "Bad",
                      "Great",
                      "OK",
                      "Good",
                      "How can?",
                      "Very Good",
                      "Wow",
                      "Amazing",
                      "Unbelievable",
                      "Jesus",
                    ]}
                    reviewSize={10}
                    size={10}
                    count={10}
                  />

                  <CartButtom onPress={() => add(item)}>
                    <CartImage  source={CartIcon} />
                  </CartButtom>
                </ProductInfoArea>
              </ProductCard>
            );
          })}
      </ProductArea>
    </Container>
  );
}
