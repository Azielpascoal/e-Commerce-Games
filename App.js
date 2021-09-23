import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/mainStack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import CartProvider from "./src/context/cart";

export default function e_commerceApp() {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <CartProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <MainStack />
        </NavigationContainer>
      </CartProvider>
    );
  }
}
