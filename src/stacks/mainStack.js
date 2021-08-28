import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/home";
import { StackActions } from "@react-navigation/native";

const stack = createStackNavigator();
export default () => {
  return (
    <stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="Home" component={HomePage} />
    </stack.Navigator>
  );
};
