import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, View, Text } from "react-native";
import HomePage from "../screens/Home";
import CartPage from "../screens/Cart";
import { useCart } from "../context/cart";
import HomeIcon from "../assets/home.png";
import CartIcon from "../assets/shopping-cart.png";

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
          marginRight: 15,
          marginLeft: 15,
          bottom: 5,
          alignSelf: "center",
          borderRadius: 18,
          backgroundColor: "#fff",
        },
      }}
    >
      <tab.Screen
        name="Home"
        component={HomePage}
        options={{ tabBarIcon: homeIcon }}
      />
      <tab.Screen
        name="Carrinho"
        component={CartPage}
        options={{ tabBarIcon: iconCart }}
      />
    </tab.Navigator>
  );
};
export const iconCart = ({focused}) => {
  const { cart } = useCart();
  return (
    <View
      style={{
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 15,
        flexDirection:'row',
        backgroundColor:focused ? "#f7d86d" : "#fff",
        borderRadius:12
      }}
    >
      <Image
        source={CartIcon}
        style={{ width: 35, height: 35, tintColor: "#000",alignSelf:'center',marginLeft:12 }}
      />
      <Text style={{backgroundColor:'#f00',borderRadius:18,marginBottom:15,marginRight:14}}>{Object.keys(cart.length)}</Text>
    </View>
  );
};
export const homeIcon = ({focused}) => {
  return (
    <View
      style={{
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 15,
        backgroundColor:focused ? "#f7d86d" : "#fff",
        borderRadius:12
      }}
    >
      <Image
        source={HomeIcon}
        style={{ width: 35, height: 35, tintColor: "#000" }}
      />
    </View>
  );
};
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
// {Object.keys(cart.length)}
