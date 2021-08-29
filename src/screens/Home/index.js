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

export default function Home() {
  const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const AllProducts = Products.map((product) => {
//       return product;
//     });
//     setProducts(AllProducts);
//     console.log("Data", AllProducts)
//   }, [products]);

  return (
    <Container>
      <Top>
        <InfoText>Bem vindo ao e-commerce games</InfoText>
      </Top>
      <ProductArea>
        {Products.map((index, key) => {
           
          return (
            <ProductCard key={key} >
              <ProductImage source={{uri:index.image}}/>
              <ProductInfoArea>
                <ProductInfoText>Nome:{index.name}</ProductInfoText>
                <ProductInfoText>Preço:${index.price}</ProductInfoText>
                <ProductInfoText>Score:{index.score}</ProductInfoText>
              </ProductInfoArea>
            </ProductCard>
          );
        })} 
      </ProductArea>
    </Container>
  );
}
