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
  CartButtom,
  CartImage,
} from "./style";
import { AirbnbRating } from "react-native-ratings";
import { useCart } from "../../context/cart";
import CartIcon from "../../assets/remove-from-cart.png";
import ConfirmaIcon from "../../assets/arrow-down-icon.png";
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
        <InfoText>Produtos adicionados ao carrinho</InfoText>
        <ProductInfoText>Valor a pagar: ${subtotalvalue}</ProductInfoText>
        <ProductInfoText>Valor total a pagar : ${totalvalue}</ProductInfoText>
      </Top>
      <ProductArea>
        <CartButtom style={{ width: 160 }} onPress={confirmPress}>
          <CartImage source={ConfirmaIcon} />
          <ProductInfoText>Confirmar compra</ProductInfoText>
        </CartButtom>
        {cart
          .sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
          .map((item, index) => {
            return (
              <ProductCard key={index}>
                <ProductImage source={{ uri: item.image }} />
                <ProductInfoArea>
                  <ProductInfoText>Nome:{item.name}</ProductInfoText>
                  <ProductInfoText>Preço:${item.price}</ProductInfoText>
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
