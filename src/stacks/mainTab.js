import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, View, Text } from "react-native";
import HomePage from "../screens/Home";
import CartPage from "../screens/Cart";
import BuyPage from "../screens/Buy"
import { useCart } from "../context/cart";
import HomeIcon from "../assets/home.png";
import CartIcon from "../assets/shopping-cart.png";
import BuyIcon from "../assets/wallet.png";

const tab = createBottomTabNavigator();
export default () => {
   const { cart } = useCart();
  return (
    <tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 60,
          ...style.shadow,
          alignItems: "center",
          marginRight: 5,
          marginLeft: 5,
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
        options={{ tabBarIcon: iconCart,tabBarBadge:cart.length}}
      />
       <tab.Screen
        name="Compras"
        component={BuyPage}
        options={{ tabBarIcon: buyIcon}}
      />
    </tab.Navigator>
  );
};
export const iconCart = ({focused}) => {
 
  return (
    <View
      style={{
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 15,
        flexDirection:'row',
        backgroundColor:focused ? "#934fd6" : "#fff",
        borderRadius:12
      }}
    >
      <Image
        source={CartIcon}
        style={{ width: 25, height: 25, tintColor: focused ? "#fff" : "#934fd6",alignSelf:'center',marginLeft:12 }}
      />
      <Text style={{backgroundColor:'#f00',borderRadius:18,marginBottom:15,marginRight:14}}></Text>
    </View>
  );
};
export const homeIcon = ({focused}) => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 15,
        backgroundColor:focused ? "#934fd6" : "#fff",
        borderRadius:12
      }}
    >
      <Image
        source={HomeIcon}
        style={{ width: 25, height: 25, tintColor: focused ? "#fff" : "#934fd6" }}
      />
    </View>
  );
};
export const buyIcon = ({focused}) => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 15,
        backgroundColor:focused ? "#934fd6" : "#fff",
        borderRadius:12
      }}
    >
      <Image
        source={BuyIcon}
        style={{ width: 25, height: 25, tintColor:  focused ? "#fff" : "#934fd6" }}
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
