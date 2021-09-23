import React from "react";
import {
  Container,
  Image,
  Text,
  Buttom,
  InfoArea,
  ButtomArea,
  ButtomClick,
  TextClick,
  ImageS,
  InputArea,
  ImageLogin,
} from "./style";
import { useNavigation } from "@react-navigation/native";
import SplashImage from "../../assets/splash1.png";
import Logo from "../../assets/icon.png";
import Login from "../../assets/get.png";
import Email from "../../assets/em.png";
import Nome from "../../assets/nif.png";
import Password from "../../assets/password.png";
import SignInput from "../../components/SignInput/SignInput"

export default function Splash() {
  const navigation = useNavigation();
  const onButtomPress = () => {
    navigation.reset({
      routes: [{ name: "MainTab" }],
    });
  };
  return (
    <Container source={SplashImage}>
      <InfoArea>
        <TextClick>BEM-VINDO AO ONSHOP</TextClick>
        <TextClick>FAÇA SEU CADASTRO</TextClick>
        <InputArea>
        <SignInput placeholder="DIGITE SEU NOME COMPLETO" type="email-address" source={Nome}/>
        <SignInput placeholder="DIGITE SEU EMAIL" type="email-address" source={Email}/>
          <SignInput placeholder="DIGITE SUA SENHA" type="password" password source={Password}/>
        </InputArea>
      </InfoArea>
      <ButtomArea>
        <Buttom onPress={onButtomPress}>
          <ImageLogin source={Login} />
        </Buttom>
        <ButtomClick>
          <Image source={Logo} />
          <Text>ONSHOP SUA LOJA VIRTUAL</Text>
        </ButtomClick>
      </ButtomArea>
    </Container>
  );
}
