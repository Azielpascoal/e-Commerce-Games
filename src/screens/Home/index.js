import React, { useState, useEffect } from "react";
import {StyleSheet} from "react-native"
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
  TopInfo,
  TopInfoArea,
  TopInfoAreaComp,
  TopInfoText,
  TopButtomText,
  TopButtom,
  TopImage,
} from "./style";
import Products from "../../services/products.json";
import { AirbnbRating } from "react-native-ratings";
import { useCart } from "../../context/cart";
import CartIcon from "../../assets/shopping-cart.png";
import ShopPaper from "../../assets/back3.png";
import Games from "../../assets/console.png";
import TopB from "../../components/Top/headertop";
export default function Home() {
  const { add } = useCart();
  console.log(add, "teste");
  const products = Products.map((product) => {
    return product;
  });

  return (
    <Container>
      <TopB/>
      <Top>
        <TopInfo>
          <TopInfoText
            style={{ fontSize: 22, color: "#934fd6", paddingLeft: 4 }}
          >
            ONSHOP
          </TopInfoText>
          <TopInfoText
            style={{ fontSize: 14, color: "#934fd6", paddingLeft: 4 }}
          >
            NÓS TEMOS O MELHOR PARA SI
          </TopInfoText>
        </TopInfo>
        <TopInfoArea style={{...style.shadow}}>
          <TopInfoAreaComp>
            <TopInfoText style={{ paddingLeft: 32 }}>
              BEM VINDO A SUA LOJA VIRTUAL
            </TopInfoText>
            <TopButtom>
              <TopButtomText>Clique Aqui!</TopButtomText>
            </TopButtom>
          </TopInfoAreaComp>
          <TopInfoAreaComp>
            <TopImage source={ShopPaper} />
          </TopInfoAreaComp>
        </TopInfoArea>
      </Top>
      <TopInfoText style={{ fontSize: 18, color: "#934fd6", paddingLeft: 20 }}>
        CATEGORIAS
      </TopInfoText>
      <TopInfo style={{backgroundColor:'#fafafa',borderRadius:12,...style.shadow}}>
        <CartButtom style={{ width:50,height:45,marginLeft: 10 }} >
          <CartImage source ={Games}/>
        
        </CartButtom>
      </TopInfo>
      <ProductArea>
        <TopInfoText style={{ fontSize: 18, color: "#934fd6", paddingLeft: 4 }}>
          PRODUTOS RECOMENDADOS
        </TopInfoText>
        {products
          .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
          .map((item) => {
            return (
              <ProductCard key={item.id} style={{...style.shadow}}>
                <ProductImage source={{ uri: item.image }} />
                <ProductInfoArea>
                  <ProductInfoText>Nome: {item.name}</ProductInfoText>
                  <ProductInfoText>Preço: AOA{item.price}</ProductInfoText>
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
                    <CartImage source={CartIcon} />
                  </CartButtom>
                </ProductInfoArea>
              </ProductCard>
            );
          })}
      </ProductArea>
    </Container>
  );
}
const style = StyleSheet.create({
  shadow: {
    shadowColor: "#1A2A3A",
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowRadius: 3.5,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  buttom: {
    paddingLeft: 10,
  },
});