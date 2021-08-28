import React from "react";
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

export default function Home() {
  return (
    <Container>
      <Top>
        <InfoText>Bem vindo ao e-commerce games</InfoText>
      </Top>
      <ProductArea>
        <ProductCard>
            <ProductImage/>
            <ProductInfoArea>
                <ProductInfoText>Nome: </ProductInfoText>
                <ProductInfoText>Preço: </ProductInfoText>
                <ProductInfoText>Score: </ProductInfoText>
            </ProductInfoArea>
        </ProductCard>
      </ProductArea>
    </Container>
  );
}
