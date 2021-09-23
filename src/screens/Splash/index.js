import React from "react";
import { Container, Image, Text, Buttom, InfoArea, ButtomArea ,ButtomClick,TextClick,ImageS} from "./style";
import { useNavigation } from "@react-navigation/native";
import SplashImage from "../../assets/splash1.png";
import Logo from "../../assets/icon.png";
import Shop from "../../assets/onshop.gif";


export default function Splash() {
  const navigation = useNavigation();
  const onButtomPress = () => {
    navigation.navigate("Login" );
  };
  const onButtomPress2 = () => {
    navigation.navigate("SignUp" );
  };
  return (
    <Container source={SplashImage}>
      <InfoArea >
        <Image source={Logo} />
        <TextClick>
          ONSHOP
        </TextClick>
        <TextClick>
          Olá! ,seja bem-vindo a sua loja virtual...
        </TextClick>
        <ImageS source={Shop} />
      </InfoArea>
      <ButtomArea>
        <Buttom onPress={onButtomPress}>
          <Text>Login</Text>
        </Buttom>
        <ButtomClick  onPress={onButtomPress2}>
          <Text>Clique para criar conta !</Text>
        </ButtomClick>
      </ButtomArea>
    </Container>
  );
}
