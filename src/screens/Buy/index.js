import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
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
import { AirbnbRating } from "react-native-ratings";
import { useCart } from "../../context/cart";
import CardIcon from "../../assets/card.png";
import { useNavigation } from "@react-navigation/native";
export default function Home() {
  const navigation = useNavigation();
  const { remove, cart, totalvalue, subtotalvalue, setCart } = useCart();
  function confirmPress() {
    if (totalvalue > 250) {
      alert(
        "Compra efectuada ! " +
          "Não será cobrado o frete devido a taxa de pagamento que é :$" +
          subtotalvalue
      );
      navigation.reset({
        routes: [{ name: "Splash" }],
      });
    } else {
      alert(
        "Compra efectuada ! " +
          "O seu pagmento é  :$" +
          totalvalue +
          " com a taxa de frete adicionada."
      );
      navigation.reset({
        routes: [{ name: "Splash" }],
      });
    }
  }
  return (
    <Container>
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
        <TopInfoArea>
          <TopImage source={CardIcon} />
        </TopInfoArea>
      </Top>
      <TopInfoText style={{ fontSize: 18, color: "#934fd6", paddingLeft: 20 }}>
        CONFIRMAR COMPRA
      </TopInfoText>
      <TopInfo style={{ borderRadius: 12, height: 200, ...style.shadow, }}>
        <TopInfoAreaComp>
          <ProductInfoText >
            Compra efectuada no valor de : 
          </ProductInfoText>
          <ProductInfoText > ${subtotalvalue}</ProductInfoText>
        
        </TopInfoAreaComp>
        <TopInfoAreaComp>
        <ProductInfoText>Valor total a pagar : </ProductInfoText>
         
          <ProductInfoText>${totalvalue}</ProductInfoText>
        </TopInfoAreaComp>
      </TopInfo>
      <CartButtom onPress={confirmPress}  style={{...style.shadow}}>
          <TopButtomText>Efectuar compra</TopButtomText>
      </CartButtom>
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
