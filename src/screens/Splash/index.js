import React from "react";
import { Container, Image, Text, Buttom } from "./style";
import { useNavigation } from "@react-navigation/native";
import SplashImage from "../../assets/splash.gif";

export default function Splash() {
  const navigation = useNavigation();
  const onButtomPress = () => {
    navigation.reset({
      routes: [{ name: "MainTab" }],
    });
  };
  return (
    <Container>
      <Image source={SplashImage} />
      <Text>
        Olá !seja Bem-Vindo ao seu aplicativo de venda de jogos.Para começar
        clique em loja virtual.
      </Text>
      <Buttom onPress={onButtomPress}>
        <Text>Loja virtual</Text>
      </Buttom>
    </Container>
  );
}
