import React, { useState, useEffect } from "react";
import {StyleSheet} from 'react-native';
import {
  Container,
  Top,
  ProductCard,
  ProductImage,
  ProductInfoArea,
  ProductInfoText,
  InfoText,
  ProductArea,
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
import { AirbnbRating } from "react-native-ratings";
import { useCart } from "../../context/cart";
import CartIcon from "../../assets/remove-from-cart.png";
import ConfirmaIcon from "../../assets/shopping-cart.png";
import { useNavigation } from "@react-navigation/native";
import TopB from "../../components/Top/headertop";
export default function Home() {
  const navigation = useNavigation();
  const { remove, cart, totalvalue, subtotalvalue, setCart } = useCart();
  function confirmPress({index}) {
    navigation.navigate("Compras");
    remove(index);
  }
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
            style={{ fontSize: 16, color: "#934fd6", paddingLeft: 4 }}
          >
            A SUA LOJA VIRTUAL
          </TopInfoText>
        </TopInfo>
      </Top>
      <ProductArea>
        <CartButtom style={{ width: 220 }} onPress={confirmPress}>
          <CartImage source={ConfirmaIcon} />
          <ProductInfoText style={{ color: "#fff", padding: 4 }}>
            Fazer Compra dos produtos
          </ProductInfoText>
        </CartButtom>
        {cart
          .sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
          .map((item, index) => {
            return (
              <ProductCard key={index} style={{...style.shadow}}>
                <ProductImage source={{ uri: item.image }} />
                <ProductInfoArea>
                  <ProductInfoText>Nome:{item.name}</ProductInfoText>
                  <ProductInfoText>Preço:AOA{item.price}</ProductInfoText>
                  <ProductInfoText>
                    {" "}
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
                  </ProductInfoText>
                  <CartButtom onPress={() => remove(index)}>
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