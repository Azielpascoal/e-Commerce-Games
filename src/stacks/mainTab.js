import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomePage from "../screens/Home";
import CartPage from "../screens/Cart";
import { useCart } from "../context/cart";
import { View, Text } from "react-native";
import cartProvider from "../context/cart";

const tab = createBottomTabNavigator();
export default () => {
  return (
    <tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 70,
          ...style.shadow,
          alignItems: "center",
        },
      }}
    >
      <tab.Screen name="Home" component={HomePage} />
      <tab.Screen
        name="Carrinho"
        component={CartPage}
        options={{ tabBarIcon: iconCart }}
      />
    </tab.Navigator>
  );
};
export const iconCart=() =>{
  const { cart } = useCart();
  return (
    <View>
      {/* <Text>{Object.keys(cart.length)}</Text> */}
    </View>
  );
}
const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 0,
    },
    shadowRadius: 30,
    shadowOpacity: 0.12,
    elevation: 12,
  },
});
